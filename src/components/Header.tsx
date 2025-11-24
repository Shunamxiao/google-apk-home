import { User, Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import { FeedbackDialog } from './FeedbackDialog';
import { Button } from './ui/button';
import { iconMap, SiteConfig } from '@/lib/data';
import type { IconName } from '@/lib/data';
import { ShareButton } from './ShareButton';

export function Header({ siteConfig }: { siteConfig: SiteConfig }) {
  const LogoIcon = iconMap[siteConfig.logoIcon as IconName];
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {LogoIcon && <LogoIcon className="h-7 w-7 text-primary" />}
          <h1 className="text-2xl font-bold font-headline text-foreground hidden sm:block">
            {siteConfig.siteName}
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex">
             <ShareButton title={siteConfig.title} siteName={siteConfig.siteName}/>
          </div>
          <Button variant="outline" asChild>
            <Link href="https://apks.cc" target="_blank">
              <User className="mr-2 h-4 w-4" />
              谷歌账号购买
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://apks.cc" target="_blank">
              <Gamepad2 className="mr-2 h-4 w-4" />
              游戏下载
            </Link>
          </Button>
          <div className="hidden sm:flex">
            <FeedbackDialog />
          </div>
        </div>
      </div>
    </header>
  );
}
