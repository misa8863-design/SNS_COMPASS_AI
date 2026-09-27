import { PaperPlane } from "@/components/ui/CompassMark";
import { siteConfig } from "@/data/siteConfig";

/**
 * FVのCTAボタンの真下から点線の航路が伸び、現在地へつながる演出。
 * 開始位置はCTAの中心（siteConfigの値から算出）なので、動画とズレない。
 */
export function RouteFromHero({ label }: { label: string }) {
  const { left, width } = siteConfig.hero.cta.hitArea;
  const startX = (left + width / 2) * 10; // viewBox 0–1000
  return (
    <div className="relative h-16 sm:h-24" aria-hidden="true">
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full text-compass">
        <path
          d={`M${startX},0 C${startX},62 ${startX + 190},30 ${startX + 290},92`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="animate-route"
        />
      </svg>
      <span
        className="absolute bottom-0 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-bold text-compass-700 shadow-soft ring-1 ring-compass-100 sm:text-sm"
        style={{ left: `${(startX + 290) / 10}%`, transform: "translate(-50%, 50%)" }}
      >
        <PaperPlane className="h-4 w-4" />
        {label}
      </span>
    </div>
  );
}
