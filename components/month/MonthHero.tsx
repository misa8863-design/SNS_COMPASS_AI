import { Flag } from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { CharacterBubble } from "@/components/ui/CharacterBubble";
import type { Month, Status } from "@/lib/types";
import { cn, toneClasses } from "@/lib/tone";

/** MONTHページ上部：寄港地の看板 */
export function MonthHero({
  month,
  status,
  progress,
}: {
  month: Month;
  status: Status;
  progress: { done: number; total: number; ratio: number };
}) {
  const t = toneClasses[month.tone];
  return (
    <header className="relative overflow-hidden rounded-panel border border-ivory-200 bg-ivory-50 px-6 pb-8 pt-7 shadow-soft sm:px-10 sm:pb-10 sm:pt-9">
      {/* 大きな月番号を地図の座標のように置く */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-3 -top-8 select-none font-maru text-[9rem] font-bold leading-none text-ivory-200 sm:text-[12rem]"
      >
        0{month.number}
      </span>

      <div className="relative grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-end">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn("rounded-full px-3 py-1 text-xs font-bold tracking-wider", t.soft, t.text)}>MONTH 0{month.number}</span>
            {status === "current" && <span className="rounded-full bg-compass px-3 py-1 text-xs font-bold text-white">現在地</span>}
            {status === "done" && <span className="rounded-full bg-trend-50 px-3 py-1 text-xs font-bold text-trend-700">航海完了</span>}
          </div>
          <h1 className="mt-4 text-[3rem] font-bold leading-none tracking-tight sm:text-[4.2rem]">{month.verb}</h1>
          <p className="mt-4 font-maru text-xl font-bold sm:text-2xl">{month.catch}</p>
          <p className="mt-1 text-sm text-guide-400">テーマ：{month.theme}</p>

          <div className={cn("mt-6 flex items-start gap-3 rounded-2xl border border-dashed p-4", t.border)}>
            <Flag aria-hidden className={cn("mt-0.5 h-5 w-5 shrink-0", t.text)} />
            <p>
              <span className="block text-xs font-bold text-guide-400">今月のGOAL</span>
              <span className="font-bold leading-relaxed">{month.goal}</span>
            </p>
          </div>

          <ProgressBar className="mt-6 max-w-md" value={progress.ratio} label={`今月の進み具合　${progress.done}/${progress.total}`} />
        </div>

        <div className="space-y-4">
          {month.guides.slice(0, 2).map((g, i) => (
            <CharacterBubble key={g.character} character={g.character} message={g.message} align={i % 2 ? "right" : "left"} />
          ))}
        </div>
      </div>
    </header>
  );
}
