import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, BookOpen } from 'lucide-react';
import type { Article } from '@/lib/data';

interface ArticleTutorialsProps {
  articles: Article[];
}

export function ArticleTutorials({ articles }: ArticleTutorialsProps) {
  return (
    <section className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold font-headline tracking-tight">
          <BookOpen className="inline-block h-8 w-8 mr-2 text-primary" />
          文章教程专区
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          从入门到精通，这里有您需要的所有安卓玩机知识。
        </p>
      </div>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <Card key={index} className="flex flex-col md:flex-row items-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex-shrink-0">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Newspaper className="h-10 w-10 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="pt-6 md:pt-0 md:pl-0 flex-grow">
              <CardTitle className="font-headline text-xl mb-2">{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardContent>
            <CardFooter className="pt-6 md:pt-0">
              <Button asChild variant="outline">
                <Link href={article.link}>阅读更多</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
