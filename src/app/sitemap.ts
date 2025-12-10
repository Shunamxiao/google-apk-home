import { MetadataRoute } from 'next';
import { getAppData } from '@/lib/data';

const URL = 'https://apks.cc';

export default function sitemap(): MetadataRoute.Sitemap {
  const appData = getAppData();

  if (!appData) {
    return [];
  }

  const articles = appData.articles.map((article) => ({
    url: `${URL}/articles/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticPages = [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

  return [...staticPages, ...articles];
}
