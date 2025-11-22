export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-border/40">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} 安卓助手. 版权所有.</p>
        <p className="mt-1">
          为安卓爱好者提供方便的谷歌环境工具。
        </p>
      </div>
    </footer>
  );
}
