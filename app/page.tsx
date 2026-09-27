import Link from "next/link";
import { Gift, Search } from "lucide-react";
import { HeroVideo } from "@/components/hero/HeroVideo";
import { RouteFromHero } from "@/components/home/RouteFromHero";
import { CharacterGuide } from "@/components/home/CharacterGuide";
import { NextAction } from "@/components/home/NextAction";
import { JourneyMap } from "@/components/home/JourneyMap";
import type { JourneyStop } from "@/components/home/JourneyCard";
import { CrewSection } from "@/components/home/CrewSection";
import { CharacterBubble } from "@/components/ui/CharacterBubble";
import { months } from "@/data/course";
import {
  getCurrentMonth,
  getHeroCta,
  getMonthProgress,
  getMonthStatus,
  getNextLesson,
  getOverallProgress,
  getProgress,
} from "@/lib/progress";

export default function HomePage() {
  const progress = getProgress();
  const current = getCurrentMonth(progress);
  const next = getNextLesson(progress);
  const heroCta = getHeroCta(progress);

  const stops: JourneyStop[] = [
    {
      key: "start",
      href: "/start",
      kicker: "START",
      title: "はじめに",
      theme: "旅の準備をしよう",
      status: progress.startDone ? "done" : "current",
    },
    ...months.map((m) => ({
      key: m.slug,
      href: `/${m.slug}`,
      kicker: `MONTH 0${m.number}`,
      title: m.verb,
      theme: m.theme,
      status: getMonthStatus(m.number, progress),
      progress: getMonthProgress(m.number, progress),
    })),
  ];

  return (
    <>
      {/* FV：提供動画をそのまま。Web側からは文字もキャラクターも重ねない */}
      <div className="mx-auto max-w-content lg:px-8 lg:pt-8">
        <HeroVideo ctaHref={heroCta.href} ctaLabel={heroCta.label} />
        <RouteFromHero label={`現在地　MONTH 0${current.number}「${current.verb}」`} />
      </div>

      <div className="mx-auto max-w-content space-y-20 px-5 pt-12 sm:px-8 sm:pt-14">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
          <CharacterGuide current={current} overall={getOverallProgress(progress)} />
          {next && <NextAction lesson={next} month={current} />}
        </div>

        <JourneyMap stops={stops} />

        <CrewSection />

        {/* 寄り道：学びを助ける場所 */}
        <section aria-labelledby="side-title">
          <h2 id="side-title" className="text-[1.6rem] font-bold sm:text-[1.9rem]">寄り道スポット</h2>
          <p className="mt-1 text-[0.95rem] text-guide-400">航路の途中で立ち寄れる場所。</p>
          <div className="mt-6 grid gap-4 md:grid-cols-[1.4fr_1fr]">
            <Link
              href="/ai"
              className="focus-ring group relative flex flex-col justify-between gap-6 overflow-hidden rounded-panel bg-white p-6 ring-1 ring-compass-100 transition hover:shadow-lift sm:p-8 md:row-span-2"
            >
              <div>
                <p className="text-sm font-bold text-compass-700">SNS COMPASS AI</p>
                <h3 className="mt-2 text-2xl font-bold leading-snug">ひとりで悩んだら、AIクルーに相談しよう。</h3>
              </div>
              <CharacterBubble character="ao" size="lg" message="投稿アイデアも、プロフィールも、一緒に考えるよ！" />
            </Link>
            <Link
              href="/bonus"
              className="focus-ring group flex items-center gap-4 rounded-panel bg-spark-50 p-6 ring-1 ring-spark-100 transition hover:shadow-soft"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-spark text-white transition group-hover:-rotate-6">
                <Gift aria-hidden className="h-7 w-7" />
              </span>
              <span>
                <span className="block font-maru text-lg font-bold">BONUS 特典の宝箱</span>
                <span className="text-sm text-guide-400">テンプレートやシートをまとめて受け取れます</span>
              </span>
            </Link>
            <Link
              href="/resources"
              className="focus-ring group flex items-center gap-4 rounded-panel bg-trend-50 p-6 ring-1 ring-trend-100 transition hover:shadow-soft"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-trend text-white">
                <Search aria-hidden className="h-7 w-7" />
              </span>
              <span>
                <span className="block font-maru text-lg font-bold">RESOURCES 教材を探す</span>
                <span className="text-sm text-guide-400">講義・ワーク・テンプレートを検索できます</span>
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
