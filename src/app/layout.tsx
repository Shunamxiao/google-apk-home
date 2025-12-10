import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FloatingFeedbackButton } from '@/components/FloatingFeedbackButton';
import { getAppData } from '@/lib/data';
import { Inter } from 'next/font/google';
import { ShareButton } from '@/components/ShareButton';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export function generateMetadata(): Metadata {
  const appData = getAppData();
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appData = getAppData();

  return (
    <html lang="zh" className={`${inter.variable}`}>
      <head>
        {process.env.BAIDU_SITE_VERIFICATION && (
          <meta name="baidu-site-verification" content={process.env.BAIDU_SITE_VERIFICATION} />
        )}
        {process.env.GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
        )}
        {process.env.S360_SITE_VERIFICATION && (
          <meta name="360-site-verification" content={process.env.S360_SITE_VERIFICATION} />
        )}
        {process.env.SOGOU_SITE_VERIFICATION && (
          <meta name="sogou_site_verification" content={process.env.SOGOU_SITE_VERIFICATION} />
        )}
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
