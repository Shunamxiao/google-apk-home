import type { LucideIcon } from 'lucide-react';
import { Package, Store, Cog } from 'lucide-react';
import appData from './app-data.json';

export type IconName = 'Cog' | 'Package' | 'Store';

export const iconMap: Record<IconName, LucideIcon> = {
  Cog,
  Package,
  Store,
};

export interface Plugin {
  id: string;
  name: string;
  description: string;
  version: string;
  downloadUrl: string;
  iconName: IconName;
}

export interface AndroidVersion {
  id: string;
  name: string;
  releaseName: string;
  plugins: Plugin[];
}

export interface Article {
  title: string;
  description: string;
  link: string;
}

export const androidVersions: AndroidVersion[] = appData.androidVersions;
export const articles: Article[] = appData.articles;
