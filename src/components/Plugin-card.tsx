import type { Plugin } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { iconMap } from '@/lib/data';

interface PluginCardProps {
  plugin: Plugin;
}

export function PluginCard({ plugin }: PluginCardProps) {
  const { name, version, description, iconName, downloadUrl } = plugin;
  
  const isUrl = iconName.startsWith('http');
  const Icon = !isUrl ? iconMap[iconName as keyof typeof iconMap] : null;

  return (
    <Card className="flex flex-row md:flex-col h-full bg-card/80 hover:bg-card transition-all duration-300 transform md:hover:-translate-y-1 hover:shadow-xl rounded-lg">
      <div className="flex-shrink-0 p-6 flex flex-col items-center justify-center md:flex-row md:items-start md:gap-4 md:p-4">
        <div className="bg-accent/20 p-3 rounded-lg flex items-center justify-center h-14 w-14 flex-shrink-0">
          {isUrl ? (
            <Image src={iconName} alt={`${name} icon`} width={32} height={32} className="object-contain" />
          ) : (
            Icon && <Icon className="h-8 w-8 text-accent" />
          )}
        </div>
        <div className="hidden md:block">
            <CardTitle className="font-headline text-xl">{name}</CardTitle>
            <CardDescription>版本: {version}</CardDescription>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow px-6 pb-6 pt-0 md:pt-0 md:px-6">
        <div className="md:hidden mb-2">
            <CardTitle className="font-headline text-xl">{name}</CardTitle>
            <CardDescription>版本: {version}</CardDescription>
        </div>
        <CardContent className="flex-grow p-0">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="p-0 mt-4">
          <Button asChild className="w-full">
            <Link href={downloadUrl}>
              <Download className="mr-2 h-4 w-4" />
              下载
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
