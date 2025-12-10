import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getAppData } from '@/lib/data';
import { AndroidVersionTabs } from '@/components/AndroidVersionTabs';
import { ArticleTutorials } from '@/components/ArticleTutorials';
import { ThirdPartyTools } from '@/components/ThirdPartyTools';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  const appData = getAppData();
  const { siteConfig } = appData;

  return {
    title: `${siteConfig.siteName} - 谷歌框架安装与谷歌服务下载`,
    description: `一站式解决安卓谷歌环境安装问题。提供适用于安卓16、15、14等所有版本的谷歌服务框架、Google Play服务和Play商店的官方纯净版下载。${siteConfig.description}`,
    keywords: ['谷歌环境安装', '谷歌插件下载', '谷歌服务框架', 'Google Play服务', '谷歌安装器', '安卓谷歌套件'],
  };
}


export default function Home() {
  const appData = getAppData();

  if (!appData) {
    notFound();
  }

  const { siteConfig, androidVersions, articles, thirdPartyTools } = appData;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header siteConfig={siteConfig} />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">
            谷歌化你的安卓
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            为您的安卓版本获取必要的谷歌软件包。简单、快速、可靠的下载。
          </p>
        </section>
        <AndroidVersionTabs versions={androidVersions} />
        <ThirdPartyTools tools={thirdPartyTools} />
        <ArticleTutorials articles={articles} />
      </main>
      <Footer siteConfig={siteConfig} />
    </div>
  );
}
