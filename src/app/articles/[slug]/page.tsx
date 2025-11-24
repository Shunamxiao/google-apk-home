import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticleBySlug, fetchAppData, SiteConfig } from '@/lib/data';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ShareButton } from '@/components/ShareButton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const appData = await fetchAppData();
  if (!appData) return {};
  
  const article = getArticleBySlug(appData.articles, params.slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | ${appData.siteConfig.siteName}`,
    description: article.description,
    keywords: article.keywords,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const appData = await fetchAppData();
  
  if (!appData) {
    notFound();
  }

  const article = getArticleBySlug(appData.articles, params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header siteConfig={appData.siteConfig} />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {article.description}
            </p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-md">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>
          
          <footer className="mt-8 flex justify-center items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回首页
              </Link>
            </Button>
            <ShareButton title={article.title} siteName={appData.siteConfig.siteName} />
          </footer>
        </article>
      </main>
      <Footer siteConfig={appData.siteConfig} />
    </div>
  );
}
