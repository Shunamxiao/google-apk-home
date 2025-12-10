import type { LucideIcon } from 'lucide-react';
import { Package, Store, Cog, Shell, Zap, Replace, Smartphone } from 'lucide-react';

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

export interface AppData {
  siteConfig: SiteConfig;
  androidVersions: AndroidVersion[];
  thirdPartyTools: ThirdPartyTool[];
  articles: Article[];
}

const defaultAppData: AppData = {
  siteConfig: {
    siteName: '安卓谷歌安装器',
    logoIcon: 'Smartphone',
    title: '安卓谷歌安装器 - 一站式谷歌服务解决方案',
    description: '提供安卓设备所需的谷歌服务框架和谷歌插件下载。',
    footerText: '版权所有',
    footerSubText: '一个帮助您轻松安装谷歌服务的网站',
    baiduAnalyticsId: '',
  },
  androidVersions: [],
  thirdPartyTools: [],
  articles: [],
};


export async function fetchAppData(): Promise<AppData> {
  try {
    const response = await fetch('https://api.us.apks.cc/game/gp-apk');
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData.data;
  } catch (error) {
    console.error('Failed to fetch app data, returning default data:', error);
    return defaultAppData;
  }
}

export function getArticleBySlug(articles: Article[], slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
