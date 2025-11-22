import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FloatingFeedbackButton } from '@/components/FloatingFeedbackButton';
import { siteConfig } from '@/lib/data';
import { Inter } from 'next/font/google';

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
        {siteConfig.metaHtml && (
          <script
            id="meta-html-injector"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var metaHtml = ${JSON.stringify(siteConfig.metaHtml)};
                  var metaContainer = document.createElement('div');
                  metaContainer.innerHTML = metaHtml;
                  var head = document.head;
                  Array.from(metaContainer.childNodes).forEach(function(node) {
                      var newNode = node.cloneNode(true);
                      if (newNode.tagName === 'SCRIPT') {
                          var script = document.createElement('script');
                          Array.from(newNode.attributes).forEach(function(attr) {
                              script.setAttribute(attr.name, attr.value);
                          });
                          script.text = newNode.text;
                          head.appendChild(script);
                      } else {
                          head.appendChild(newNode);
                      }
                  });
                })();
              `,
            }}
          />
        )}
      </head>
      <body className="font-body antialiased">
        {children}
        <FloatingFeedbackButton />
        <Toaster />
      </body>
    </html>
  );
}
