import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { bonusItems } from "@/data/bonus";
import { CTAButton } from "@/components/ui/CTAButton";
import { CharacterBubble } from "@/components/ui/CharacterBubble";
import { TreasureChest } from "@/components/ui/TreasureChest";
import { getProgress } from "@/lib/progress";
import { cn } from "@/lib/tone";

export const metadata: Metadata = { title: "BONUS 特典" };

export default function BonusPage() {
  const { currentMonth } = getProgress();
  const opened = bonusItems.filter((b) => !b.unlockMonth || b.unlockMonth <= currentMonth).length;

  return (
    <div className="mx-auto max-w-content px-5 pt-8 sm:px-8 lg:pt-12">
      <header className="group grid gap-8 rounded-panel bg-spark-50 p-6 ring-1 ring-spark-100 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <TreasureChest className="h-24 w-28 sm:h-28 sm:w-32" />
        <div>
          <p className="text-sm font-bold text-spark-700">BONUS　特典</p>
          <h1 className="mt-2 text-[2.1rem] font-bold leading-tight sm:text-[2.6rem]">特典の宝箱</h1>
          <p className="mt-3 max-w-lg leading-relaxed text-guide/85">
            旅を進めるほど、宝物が増えていきます。いま開けられるのは {bonusItems.length}個中 {opened}個。
          </p>
        </div>
        <CharacterBubble character="moko" size="md" message="テンプレートは自由にアレンジして使ってね！" className="lg:max-w-[260px]" />
      </header>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bonusItems.map((b) => {
          const locked = !!b.unlockMonth && b.unlockMonth > currentMonth;
          return (
            <li
              key={b.id}
              className={cn(
                "relative flex flex-col rounded-card border p-6 transition",
                locked ? "border-dashed border-ivory-300 bg-ivory" : "border-ivory-200 bg-white shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
              )}
            >
              {/* 宝物のリボン */}
              {!locked && <span aria-hidden className="absolute left-6 top-0 h-6 w-3 rounded-b-sm bg-spark" />}
              <p className="mt-2 text-xs font-bold text-guide-400">{b.format}</p>
              <h2 className={cn("mt-1 text-xl font-bold", locked && "text-guide/60")}>{b.title}</h2>
              <p className={cn("mt-2 flex-1 text-[0.9rem] leading-relaxed", locked ? "text-guide-400" : "text-guide/85")}>{b.description}</p>
              <div className="mt-5">
                {locked ? (
                  <span className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-guide-400">
                    <Lock aria-hidden className="h-4 w-4" />
                    MONTH 0{b.unlockMonth}で開きます
                  </span>
                ) : (
                  <CTAButton href={b.url} variant="soft" arrow={false}>特典を開く</CTAButton>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
