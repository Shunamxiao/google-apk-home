import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <span className="text-xl font-semibold text-muted-foreground">
          加载中...
        </span>
      </div>
    </div>
  );
}
