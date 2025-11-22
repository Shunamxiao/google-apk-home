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
    name: 'Android 14',
    releaseName: 'Upside Down Cake',
    plugins: [
      {
        id: 'a14-gfs',
        name: 'Google Services Framework',
        description: 'Provides core functionalities for Google apps to work seamlessly on your device.',
        version: '14.1.2',
        downloadUrl: '#',
        iconName: 'Cog',
      },
      {
        id: 'a14-gps',
        name: 'Google Play Services',
        description: 'Essential for updating Google apps and apps from Google Play. Enables key features.',
        version: '24.05.15',
        downloadUrl: '#',
        iconName: 'Package',
      },
      {
        id: 'a14-playstore',
        name: 'Google Play Store',
        description: 'The official app store for Android, allowing you to browse and download apps, games, and more.',
        version: '39.8.16',
        downloadUrl: '#',
        iconName: 'Store',
      },
    ],
  },
  {
    id: 'android-13',
    name: 'Android 13',
    releaseName: 'Tiramisu',
    plugins: [
      {
        id: 'a13-gfs',
        name: 'Google Services Framework',
        description: 'Provides core functionalities for Google apps to work seamlessly on your device.',
        version: '13.0.5',
        downloadUrl: '#',
        iconName: 'Cog',
      },
      {
        id: 'a13-gps',
        name: 'Google Play Services',
        description: 'Essential for updating Google apps and apps from Google Play. Enables key features.',
        version: '23.49.14',
        downloadUrl: '#',
        iconName: 'Package',
      },
      {
        id: 'a13-playstore',
        name: 'Google Play Store',
        description: 'The official app store for Android, allowing you to browse and download apps, games, and more.',
        version: '38.9.19',
        downloadUrl: '#',
        iconName: 'Store',
      },
    ],
  },
  {
    id: 'android-12',
    name: 'Android 12',
    releaseName: 'Snow Cone',
    plugins: [
      {
        id: 'a12-gfs',
        name: 'Google Services Framework',
        description: 'Provides core functionalities for Google apps to work seamlessly on your device.',
        version: '12.1.0',
        downloadUrl: '#',
        iconName: 'Cog',
      },
      {
        id: 'a12-gps',
        name: 'Google Play Services',
        description: 'Essential for updating Google apps and apps from Google Play. Enables key features.',
        version: '22.45.16',
        downloadUrl: '#',
        iconName: 'Package',
      },
      {
        id: 'a12-playstore',
        name: 'Google Play Store',
        description: 'The official app store for Android, allowing you to browse and download apps, games, and more.',
        version: '37.2.22',
        downloadUrl: '#',
        iconName: 'Store',
      },
    ],
  },
];
