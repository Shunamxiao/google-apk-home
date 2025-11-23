import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FloatingFeedbackButton } from '@/components/FloatingFeedbackButton';
import { siteConfig } from '@/lib/data';
import { Inter } from 'next/font/google';
import { ShareButton } from '@/components/ShareButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {siteConfig.baiduAnalyticsId && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  var _hmt = _hmt || [];
                  (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?${siteConfig.baiduAnalyticsId}";
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
           <ShareButton title={siteConfig.title} isFab />
        </div>
        <FloatingFeedbackButton />
        <Toaster />
      </body>
    </html>
  );
}
