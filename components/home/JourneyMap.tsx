import { JourneyCard, type JourneyStop } from "./JourneyCard";

/**
 * YOUR JOURNEY ロードマップ
 * スマホ：縦 / タブレット：横スクロール / 大画面：7地点を一列
 */
export function JourneyMap({ stops }: { stops: JourneyStop[] }) {
  return (
    <section aria-labelledby="journey-title">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="journey-title" className="text-[1.6rem] font-bold sm:text-[1.9rem]">
            YOUR JOURNEY
          </h2>
          <p className="mt-1 text-[0.95rem] text-guide-400">6か月の航路と、あなたの現在地。</p>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-guide-400" aria-label="凡例">
          <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-trend" />完了</li>
          <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-compass" />現在地</li>
          <li className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full border border-ivory-300 bg-ivory" />これから</li>
        </ul>
      </div>
      <ol
        className="flex flex-col gap-4 md:-mx-2 md:snap-x md:snap-mandatory md:flex-row md:gap-8 md:overflow-x-auto md:px-2 md:pb-4 md:pt-1 xl:mx-0 xl:grid xl:grid-cols-7 xl:gap-4 xl:overflow-visible xl:px-0"
      >
        {stops.map((s, i) => (
          <JourneyCard key={s.key} stop={s} isLast={i === stops.length - 1} />
        ))}
      </ol>
    </section>
  );
}
