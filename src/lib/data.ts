import type { LucideIcon } from 'lucide-react';
import { Package, Store, Cog, Shell, Zap, Replace } from 'lucide-react';
import appData from './app-data.json';

export type IconName = 'Cog' | 'Package' | 'Store' | 'Shell' | 'Zap' | 'Replace';

export const iconMap: Record<IconName, LucideIcon> = {
  Cog,
  Package,
  Store,
  Shell,
  Zap,
  Replace,
};

export interface Plugin {
  id: string;
  name: string;
  description: string;
  version: string;
  downloadUrl: string;
  iconName: IconName | string; // Allow string for image URLs
}

export interface AndroidVersion {
  id: string;
  name:string;
  releaseName: string;
  plugins: Plugin[];
}

export interface ThirdPartyTool extends Plugin {}

export interface Article {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  content: string;
}

export const androidVersions: AndroidVersion[] = appData.androidVersions;
export const thirdPartyTools: ThirdPartyTool[] = appData.thirdPartyTools;
export const articles: Article[] = appData.articles;

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
