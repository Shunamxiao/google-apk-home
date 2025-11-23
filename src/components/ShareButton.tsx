'use client';

import { Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { siteConfig } from '@/lib/data';

interface ShareButtonProps {
  title: string;
}

export function ShareButton({ title }: ShareButtonProps) {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      const shareData = {
        title: siteConfig.siteName,
        text: title,
        url: window.location.href,
      };

      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: '链接已复制',
          description: '链接已复制到您的剪贴板。',
        });
      }
    } catch (error) {
      console.error('Sharing failed', error);
      // Fallback to clipboard for browsers that support navigator.share but fail (e.g. desktop Chrome)
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

  return (
    <Button onClick={handleShare} variant="outline" className="sm:w-auto">
      <Share2 className="mr-2 h-4 w-4" />
      <span className="hidden sm:inline">分享</span>
    </Button>
  );
}
