import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FloatingFeedbackButton } from '@/components/FloatingFeedbackButton';
import { fetchAppData } from '@/lib/data';
import { Inter } from 'next/font/google';
import { ShareButton } from '@/components/ShareButton';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
  const appData = await fetchAppData();
  const siteName = appData?.siteConfig.siteName || '安卓谷歌框架安装';
  const description = appData?.siteConfig.description || '提供安卓设备所需的谷歌服务框架和谷歌插件下载。';

  return {
    title: {
      template: `%s | ${siteName}`,
      default: siteName,
    },
    description: description,
    keywords: ['谷歌环境安装', '谷歌插件下载', '谷歌服务框架', '谷歌安装器'],
  };
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appData = await fetchAppData();

  return (
    <html lang="zh" className={`${inter.variable}`}>
      <head>
        {appData?.siteConfig.baiduAnalyticsId && (
            <Script
              id="baidu-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  var _hmt = _hmt || [];
                  (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?${appData.siteConfig.baiduAnalyticsId}";
                    var s = document.getElementsByTagName("script")[0]; 
                    s.parentNode.insertBefore(hm, s);
                  })();
                `,
              }}
            />
        )}
      </head>
      <body className="font-body antialiased">
        {children}
        <div className="sm:hidden">
           <ShareButton title={appData?.siteConfig.title || ''} siteName={appData?.siteConfig.siteName || ''} isFab />
        </div>
        <FloatingFeedbackButton />
        <Toaster />
      </body>
    </html>
  );
}
