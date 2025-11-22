import type { ComponentType } from 'react';
import { Package, Store, Cog } from 'lucide-react';

export type IconName = 'Cog' | 'Package' | 'Store';

export const iconMap: Record<IconName, ComponentType<{ className?: string }>> = {
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

export const androidVersions: AndroidVersion[] = [
  {
    id: 'android-14',
    name: '安卓 14',
    releaseName: '翻转蛋糕',
    plugins: [
      {
        id: 'a14-gfs',
        name: '谷歌服务框架',
        description: '为谷歌应用在您的设备上无缝工作提供核心功能。',
        version: '14.1.2',
        downloadUrl: '#',
        iconName: 'Cog',
      },
      {
        id: 'a14-gps',
        name: '谷歌 Play 服务',
        description: '更新谷歌应用和来自谷歌 Play 的应用所必需。启用关键功能。',
        version: '24.05.15',
        downloadUrl: '#',
        iconName: 'Package',
      },
      {
        id: 'a14-playstore',
        name: '谷歌 Play 商店',
        description: '安卓官方应用商店，允许您浏览和下载应用、游戏等。',
        version: '39.8.16',
        downloadUrl: '#',
        iconName: 'Store',
      },
    ],
  },
  {
    id: 'android-13',
    name: '安卓 13',
    releaseName: '提拉米苏',
    plugins: [
      {
        id: 'a13-gfs',
        name: '谷歌服务框架',
        description: '为谷歌应用在您的设备上无缝工作提供核心功能。',
        version: '13.0.5',
        downloadUrl: '#',
        iconName: 'Cog',
      },
      {
        id: 'a13-gps',
        name: '谷歌 Play 服务',
        description: '更新谷歌应用和来自谷歌 Play 的应用所必需。启用关键功能。',
        version: '23.49.14',
        downloadUrl: '#',
        iconName: 'Package',
      },
      {
        id: 'a13-playstore',
        name: '谷歌 Play 商店',
        description: '安卓官方应用商店，允许您浏览和下载应用、游戏等。',
        version: '38.9.19',
        downloadUrl: '#',
        iconName: 'Store',
      },
    ],
  },
  {
    id: 'android-12',
    name: '安卓 12',
    releaseName: '雪糕筒',
    plugins: [
      {
        id: 'a12-gfs',
        name: '谷歌服务框架',
        description: '为谷歌应用在您的设备上无缝工作提供核心功能。',
        version: '12.1.0',
        downloadUrl: '#',
        iconName: 'Cog',
      },
      {
        id: 'a12-gps',
        name: '谷歌 Play 服务',
        description: '更新谷歌应用和来自谷歌 Play 的应用所必需。启用关键功能。',
        version: '22.45.16',
        downloadUrl: '#',
        iconName: 'Package',
      },
      {
        id: 'a12-playstore',
        name: '谷歌 Play 商店',
        description: '安卓官方应用商店，允许您浏览和下载应用、游戏等。',
        version: '37.2.22',
        downloadUrl: '#',
        iconName: 'Store',
      },
    ],
  },
];
