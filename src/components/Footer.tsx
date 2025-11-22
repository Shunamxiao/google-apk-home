export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-border/40">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} DroidSetup. All rights reserved.</p>
        <p className="mt-1">
          Providing easy access to Google environment tools for Android
          enthusiasts.
        </p>
      </div>
    </footer>
  );
}
