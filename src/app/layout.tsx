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
            <>{
              <script dangerouslySetInnerHTML={{ __html: `
                (function() {
                  var metaContainer = document.createElement('div');
                  metaContainer.innerHTML = \`${siteConfig.metaHtml.replace(/`/g, '\\`')}\`;
                  var head = document.head;
                  Array.from(metaContainer.childNodes).forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'script') {
                      var script = document.createElement('script');
                      if (node.src) {
                        script.src = node.src;
                      }
                      script.innerHTML = node.innerHTML;
                      head.appendChild(script);
                    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'meta') {
                      var meta = document.createElement('meta');
                      for(var i = 0; i < node.attributes.length; i++) {
                        var attr = node.attributes[i];
                        meta.setAttribute(attr.name, attr.value);
                      }
                      head.appendChild(meta);
                    }
                  });
                })();
              `}} />
            }</>
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
