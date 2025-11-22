import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { androidVersions } from '@/lib/data';
import { AndroidVersionTabs } from '@/components/AndroidVersionTabs';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">
            Google Your Android
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get the essential Google packages for your Android version. Simple,
            fast, and reliable downloads.
          </p>
        </section>
        <AndroidVersionTabs versions={androidVersions} />
      </main>
      <Footer />
    </div>
  );
}
