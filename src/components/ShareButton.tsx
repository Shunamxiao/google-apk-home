'use client';

import { Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { siteConfig } from '@/lib/data';

interface ShareButtonProps {
  title: string;
  isFab?: boolean;
}

export function ShareButton({ title, isFab = false }: ShareButtonProps) {
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: siteConfig.siteName,
      text: title,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        throw new Error('Share API not supported');
      }
    } catch (error) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: '链接已复制',
          description: '链接已复制到您的剪贴板。',
        });
      } catch (copyError) {
        toast({
          variant: 'destructive',
          title: '分享失败',
          description: '无法分享或复制链接。',
        });
      }
    }
  };
  
  if (isFab) {
    return (
      <Button
        size="icon"
        className="fixed bottom-[5.5rem] right-6 h-14 w-14 rounded-full shadow-lg z-50"
        onClick={handleShare}
      >
        <Share2 className="h-6 w-6" />
        <span className="sr-only">分享</span>
      </Button>
    )
  }

  return (
    <Button onClick={handleShare} variant="outline">
      <Share2 className="mr-2 h-4 w-4" />
      <span>分享</span>
    </Button>
  );
}
