'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import type { AndroidVersion } from '@/lib/data';
import { PluginCard } from './PluginCard';

interface AndroidVersionTabsProps {
  versions: AndroidVersion[];
}

export function AndroidVersionTabs({ versions }: AndroidVersionTabsProps) {
  return (
    <Tabs defaultValue={versions[0]?.id} className="w-full">
      <TabsList className="flex flex-wrap h-auto justify-start md:justify-center mb-8">
        {versions.map((version) => (
          <TabsTrigger
            key={version.id}
            value={version.id}
            className="text-base py-2"
          >
            {version.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {versions.map((version) => (
        <TabsContent
          key={version.id}
          value={version.id}
          className="motion-safe:animate-fadeIn"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-headline">
              {version.name}
            </h2>
            <p className="text-muted-foreground text-lg">
              {version.releaseName}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {version.plugins.map((plugin) => (
              <PluginCard key={plugin.id} plugin={plugin} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
