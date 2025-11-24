
'use client';

import type { Plugin } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { iconMap } from '@/lib/data';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState, useCallback } from 'react';

interface PluginCardProps {
  plugin: Plugin;
}

export function PluginCard({ plugin }: PluginCardProps) {
  const { name, version, description, iconName, downloadUrl } = plugin;
  
  const isUrl = iconName.startsWith('http');
  const Icon = !isUrl ? iconMap[iconName as keyof typeof iconMap] : null;

  const isMobile = useIsMobile();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(downloadUrl)}`;

  const handleMouseEnter = useCallback(() => {
    if (!isMobile) {
      setIsPopoverOpen(true);
    }
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setIsPopoverOpen(false);
    }
  }, [isMobile]);

  return (
    <Card className="flex flex-col h-full bg-card/80 hover:bg-card transition-all duration-300 transform md:hover:-translate-y-1 hover:shadow-xl rounded-lg p-4">
      <div 
        className="flex items-center"
      >
        <div className="bg-accent/20 p-3 rounded-lg flex items-center justify-center h-14 w-14 flex-shrink-0">
          {isUrl ? (
            <Image src={iconName} alt={`${name} icon`} width={32} height={32} className="object-contain" />
          ) : (
            Icon && <Icon className="h-8 w-8 text-accent" />
          )}
        </div>

        <div className="flex flex-col ml-4 flex-grow">
          <CardTitle className="font-headline text-xl">{name}</CardTitle>
          <CardDescription>版本: {version}</CardDescription>
        </div>

        <div className="ml-auto flex-shrink-0 md:hidden">
          <Button asChild size="sm">
            <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              下载
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-col flex-grow">
        <CardContent className="flex-grow p-0">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>

        <CardFooter className="p-0 mt-4 hidden md:flex">
           <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-full">
              <Button asChild className="w-full">
                <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  下载
                </Link>
              </Button>
            </PopoverTrigger>
            {!isMobile && (
              <PopoverContent className="w-auto p-2">
                <div className="flex flex-col items-center">
                  <Image src={qrCodeUrl} alt={`${name} QR Code`} width={150} height={150} />
                  <p className="text-sm text-muted-foreground mt-2">手机扫码下载</p>
                </div>
              </PopoverContent>
            )}
          </Popover>
        </CardFooter>
      </div>
    </Card>
  );
}
