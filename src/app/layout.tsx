import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FloatingFeedbackButton } from '@/components/FloatingFeedbackButton';
import { fetchAppData } from '@/lib/data';
import { Inter } from 'next/font/google';
import { ShareButton } from '@/components/ShareButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
  const appData = await fetchAppData();
  if (!appData) {
    return {
      title: 'App',
      description: 'An app',
    };
  }
  return {
    title: appData.siteConfig.title,
    description: appData.siteConfig.description,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {appData?.siteConfig.baiduAnalyticsId && (
            <script
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
