import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { CompassMark } from "@/components/ui/CompassMark";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-dashed border-ivory-300">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-5 py-8 text-sm text-guide-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="flex items-center gap-2">
          <CompassMark className="h-5 w-5 text-guide-400" />
          迷ったら、いつでも HOME の現在地に戻ってきてね。
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link className="focus-ring rounded hover:text-guide" href="/resources">教材を探す</Link>
          <a className="focus-ring rounded hover:text-guide" href={siteConfig.links.question}>質問する</a>
          <span>© {siteConfig.name}</span>
        </div>
      </div>
    </footer>
  );
}
