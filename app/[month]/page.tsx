import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MonthHero } from "@/components/month/MonthHero";
import { LessonCard } from "@/components/month/LessonCard";
import { getLessonsByMonth, getMonthBySlug, months } from "@/data/course";
import { getLessonStatus, getMonthProgress, getMonthStatus } from "@/lib/progress";

export const dynamicParams = false;

export function generateStaticParams() {
  return months.map((m) => ({ month: m.slug }));
}

type Params = Promise<{ month: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const m = getMonthBySlug((await params).month);
  return m ? { title: `MONTH 0${m.number} ${m.verb}` } : {};
}

export default async function MonthPage({ params }: { params: Params }) {
  const month = getMonthBySlug((await params).month);
  if (!month) notFound();

  const list = getLessonsByMonth(month.number);
  const prev = months[month.number - 2];
  const next = months[month.number];

  return (
    <div className="mx-auto max-w-content px-5 pt-6 sm:px-8 lg:pt-10">
      <MonthHero month={month} status={getMonthStatus(month.number)} progress={getMonthProgress(month.number)} />

      <section aria-labelledby="lessons-title" className="mt-14">
        <h2 id="lessons-title" className="text-[1.5rem] font-bold sm:text-[1.75rem]">今月の航路</h2>
        <p className="mt-1 text-[0.95rem] text-guide-400">上から順に進めると、今月のGOALにたどり着きます。</p>
        <ol className="mt-6 space-y-4">
          {list.map((l) => (
            <li key={l.id}>
              <LessonCard lesson={l} status={getLessonStatus(l)} />
            </li>
          ))}
        </ol>
      </section>

      <nav aria-label="前後の月" className="mt-14 grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link href={`/${prev.slug}`} className="focus-ring group flex items-center gap-3 rounded-card border border-ivory-200 bg-ivory-50 p-5 transition hover:shadow-soft">
            <ArrowLeft aria-hidden className="h-5 w-5 text-guide-400 transition group-hover:-translate-x-0.5" />
            <span>
              <span className="block text-xs text-guide-400">前の寄港地　MONTH 0{prev.number}</span>
              <span className="font-maru text-lg font-bold">{prev.verb}</span>
            </span>
          </Link>
        ) : (
          <Link href="/start" className="focus-ring group flex items-center gap-3 rounded-card border border-ivory-200 bg-ivory-50 p-5 transition hover:shadow-soft">
            <ArrowLeft aria-hidden className="h-5 w-5 text-guide-400" />
            <span>
              <span className="block text-xs text-guide-400">出発地</span>
              <span className="font-maru text-lg font-bold">はじめに</span>
            </span>
          </Link>
        )}
        {next ? (
          <Link href={`/${next.slug}`} className="focus-ring group flex items-center justify-end gap-3 rounded-card border border-ivory-200 bg-ivory-50 p-5 text-right transition hover:shadow-soft">
            <span>
              <span className="block text-xs text-guide-400">次の寄港地　MONTH 0{next.number}</span>
              <span className="font-maru text-lg font-bold">{next.verb}</span>
            </span>
            <ArrowRight aria-hidden className="h-5 w-5 text-guide-400 transition group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <Link href="/bonus" className="focus-ring group flex items-center justify-end gap-3 rounded-card border border-ivory-200 bg-ivory-50 p-5 text-right transition hover:shadow-soft">
            <span>
              <span className="block text-xs text-guide-400">最後の目的地のあとは</span>
              <span className="font-maru text-lg font-bold">特典の宝箱へ</span>
            </span>
            <ArrowRight aria-hidden className="h-5 w-5 text-guide-400" />
          </Link>
        )}
      </nav>
    </div>
  );
}
