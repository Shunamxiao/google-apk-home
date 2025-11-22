'use client';

import { Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  title: string;
}

export function ShareButton({ title }: ShareButtonProps) {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: `我正在阅读一篇很棒的文章：${title}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: '链接已复制',
          description: '文章链接已复制到您的剪贴板。',
        });
      }
    } catch (error) {
      console.error('Sharing failed', error);
      toast({
        variant: 'destructive',
        title: '分享失败',
        description: '无法分享此文章。',
      });
    }
  };

  return (
    <Button onClick={handleShare} variant="outline">
      <Share2 className="mr-2 h-4 w-4" />
      分享文章
    </Button>
  );
}
