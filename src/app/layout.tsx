import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FeedbackDialog } from '@/components/FeedbackDialog';
import { FloatingFeedbackButton } from '@/components/FloatingFeedbackButton';

export const metadata: Metadata = {
  title: '安卓助手 | 轻松设置安卓谷歌环境',
  description:
    '查找并下载在您的安卓设备上安装谷歌服务所需的文件。我们为各种安卓版本提供软件包，使过程简单明了。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <FloatingFeedbackButton />
        <Toaster />
      </body>
    </html>
  );
}
