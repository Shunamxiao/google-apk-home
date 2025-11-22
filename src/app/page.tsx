import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { androidVersions, articles } from '@/lib/data';
import { AndroidVersionTabs } from '@/components/AndroidVersionTabs';
import { ArticleTutorials } from '@/components/ArticleTutorials';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
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
        <ArticleTutorials articles={articles} />
      </main>
      <Footer />
    </div>
  );
}
