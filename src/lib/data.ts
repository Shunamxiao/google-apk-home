import type { LucideIcon } from 'lucide-react';
import { Package, Store, Cog, Shell, Zap, Replace, Smartphone } from 'lucide-react';
import appData from './app-data.json';

export type IconName = 'Cog' | 'Package' | 'Store' | 'Shell' | 'Zap' | 'Replace' | 'Smartphone';

export const iconMap: Record<IconName, LucideIcon> = {
  Cog,
  Package,
  Store,
  Shell,
  Zap,
  Replace,
  Smartphone,
};

export interface SiteConfig {
  siteName: string;
  logoIcon: IconName;
  title: string;
  description: string;
  footerText: string;
  footerSubText: string;
  baiduAnalyticsId: string;
}

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

export const siteConfig: SiteConfig = appData.siteConfig;
export const androidVersions: AndroidVersion[] = appData.androidVersions;
export const thirdPartyTools: ThirdPartyTool[] = appData.thirdPartyTools;
export const articles: Article[] = appData.articles;

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
