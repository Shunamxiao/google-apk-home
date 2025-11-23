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
    const shareData = {
      title: siteConfig.siteName,
      text: title,
      url: window.location.href,
    };

    try {
      // navigator.share is only available in secure contexts (HTTPS)
      // and needs a user gesture.
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support navigator.share
        throw new Error('Share API not supported');
      }
    } catch (error) {
      // This catch block handles both rejections from navigator.share()
      // and the error thrown above. We'll attempt to copy to clipboard
      // as a fallback in either case.
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
    <Button onClick={handleShare} variant="outline" className="hidden sm:flex">
      <Share2 className="mr-2 h-4 w-4" />
      <span>分享</span>
    </Button>
  );
}
