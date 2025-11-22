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
            <script dangerouslySetInnerHTML={{ __html: `
                (function() {
                  var metaContainer = document.createElement('div');
                  metaContainer.innerHTML = \`${siteConfig.metaHtml.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\${/g, "\\${")}\`;
                  var head = document.head;
                  Array.from(metaContainer.childNodes).forEach(function(node) {
                    if (node.nodeType === 1 /* ELEMENT_NODE */) {
                        if (node.tagName.toLowerCase() === 'script') {
                            var script = document.createElement('script');
                            // Copy attributes
                            for (var i = 0; i < node.attributes.length; i++) {
                                var attr = node.attributes[i];
                                script.setAttribute(attr.name, attr.value);
                            }
                            script.innerHTML = node.innerHTML;
                            head.appendChild(script);
                        } else {
                           head.appendChild(node.cloneNode(true));
                        }
                    } else {
                        head.appendChild(node.cloneNode(true));
                    }
                  });
                })();
              `}} />
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
