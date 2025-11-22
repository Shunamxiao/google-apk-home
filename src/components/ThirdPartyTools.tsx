import { Wrench } from 'lucide-react';
import type { ThirdPartyTool } from '@/lib/data';
import { PluginCard } from './PluginCard';

interface ThirdPartyToolsProps {
  tools: ThirdPartyTool[];
}

export function ThirdPartyTools({ tools }: ThirdPartyToolsProps) {
  return (
    <section className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold font-headline tracking-tight">
          <Wrench className="inline-block h-8 w-8 mr-2 text-primary" />
          第三方工具推荐
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          一些强大的第三方工具，可以帮助您更好地管理和使用您的安卓设备。
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <PluginCard key={tool.id} plugin={tool} />
        ))}
      </div>
    </section>
  );
}
