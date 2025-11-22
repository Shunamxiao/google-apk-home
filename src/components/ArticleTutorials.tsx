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

const articles = [
  {
    title: '如何解锁 Bootloader 并刷入第三方 ROM',
    description: '本教程将引导您完成解锁安卓设备 Bootloader 的全过程，并成功刷入自定义 ROM，开启您的玩机之旅。',
    link: '#',
  },
  {
    title: 'Magisk 指南：获取 Root 权限与模块化定制',
    description: '深入了解 Magisk，学习如何安全地获取 Root 权限，并通过安装模块来扩展您设备的功能，实现深度定制。',
    link: '#',
  },
  {
    title: '谷歌相机（GCam）安装与配置教程',
    description: '释放您安卓手机的拍照潜力。本指南教您如何为您的机型找到并安装最佳版本的谷歌相机，并进行优化配置。',
    link: '#',
  },
];

export function ArticleTutorials() {
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
