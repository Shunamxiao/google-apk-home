import { SiteConfig } from '@/lib/data';

export function Footer({ siteConfig }: { siteConfig: SiteConfig }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-border/40">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} {siteConfig.siteName}. {siteConfig.footerText}</p>
        <p className="mt-1">
          {siteConfig.footerSubText}
        </p>
      </div>
    </footer>
  );
}
