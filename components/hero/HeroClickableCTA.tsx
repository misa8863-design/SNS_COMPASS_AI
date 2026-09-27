import Link from "next/link";
import type { HitArea } from "@/data/siteConfig";

/**
 * 動画内に描かれた「今日の学習をはじめる →」ボタンに重ねる透明なクリック領域。
 *
 * - 位置は動画に対する % で指定（コンテナは動画実寸比なのでズレない）
 * - 見た目の領域は動画内ボタンと正確に一致させ、
 *   スマホでは ::before で上下にだけタップ領域を広げて最低44pxを確保
 * - 通常時は完全に透明。hover / focus 時だけ控えめに反応
 */
export function HeroClickableCTA({
  href,
  label,
  area,
  areaMd,
  areaLg,
}: {
  href: string;
  label: string;
  area: HitArea;
  areaMd?: HitArea;
  areaLg?: HitArea;
}) {
  const md = areaMd ?? area;
  const lg = areaLg ?? md;
  const vars = {
    "--cta-l": `${area.left}%`,
    "--cta-t": `${area.top}%`,
    "--cta-w": `${area.width}%`,
    "--cta-h": `${area.height}%`,
    "--cta-l-md": `${md.left}%`,
    "--cta-t-md": `${md.top}%`,
    "--cta-w-md": `${md.width}%`,
    "--cta-h-md": `${md.height}%`,
    "--cta-l-lg": `${lg.left}%`,
    "--cta-t-lg": `${lg.top}%`,
    "--cta-w-lg": `${lg.width}%`,
    "--cta-h-lg": `${lg.height}%`,
  } as React.CSSProperties;

  return (
    <Link href={href} aria-label={label} className="hero-cta" style={vars}>
      <span className="sr-only">{label}</span>
    </Link>
  );
}
