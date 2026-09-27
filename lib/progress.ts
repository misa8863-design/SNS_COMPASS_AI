import { getLesson, getLessonsByMonth, getMonth, months, monthSlug } from "@/data/course";
import { siteConfig } from "@/data/siteConfig";
import type { Lesson, MonthNumber, Status } from "@/lib/types";

/**
 * 受講生の進捗。
 * MVPではモニター受講生向けのデモ値を返します。
 * 将来は Supabase 等のユーザーDBから取得する実装に差し替えてください
 * （呼び出し側は getProgress() 経由なので変更不要）。
 */
export interface Progress {
  startDone: boolean;
  currentMonth: MonthNumber;
  completedLessonIds: string[];
  /** 次にやる講義。未指定なら現在月の最初の未完了 */
  nextLessonId?: string;
  /** 2回目以降の訪問か（FV CTA の出し分けに使用） */
  returning: boolean;
}

const demoProgress: Progress = {
  startDone: true,
  currentMonth: 2,
  completedLessonIds: ["m1-01", "m1-02", "m1-03", "m1-04", "m1-05", "m2-01"],
  nextLessonId: "m2-02",
  returning: false,
};

export function getProgress(): Progress {
  return demoProgress;
}

export function getLessonStatus(lesson: Lesson, p: Progress = getProgress()): Status {
  if (p.completedLessonIds.includes(lesson.id)) return "done";
  if (lesson.id === getNextLesson(p)?.id) return "current";
  return "todo";
}

export function getMonthStatus(n: MonthNumber, p: Progress = getProgress()): Status {
  if (n < p.currentMonth) return "done";
  if (n === p.currentMonth) return "current";
  return "todo";
}

export function getNextLesson(p: Progress = getProgress()): Lesson | undefined {
  if (p.nextLessonId) return getLesson(p.nextLessonId);
  return getLessonsByMonth(p.currentMonth).find((l) => !p.completedLessonIds.includes(l.id));
}

export function getMonthProgress(n: MonthNumber, p: Progress = getProgress()) {
  const list = getLessonsByMonth(n);
  const done = list.filter((l) => p.completedLessonIds.includes(l.id)).length;
  return { done, total: list.length, ratio: list.length ? done / list.length : 0 };
}

/** 6か月全体の進捗（0–1） */
export function getOverallProgress(p: Progress = getProgress()) {
  const total = months.reduce((s, m) => s + getLessonsByMonth(m.number).length, 0);
  return total ? p.completedLessonIds.length / total : 0;
}

/**
 * FV CTA の遷移先。
 * 初回は /start、2回目以降は現在地へ（将来拡張用。MVPでは returning=false 固定）。
 */
export function getHeroCta(p: Progress = getProgress()) {
  const { cta } = siteConfig.hero;
  if (!p.returning) return { href: cta.href, label: cta.label };
  return { href: `/${monthSlug(p.currentMonth)}`, label: "前回の続きから" };
}

export function getCurrentMonth(p: Progress = getProgress()) {
  return getMonth(p.currentMonth);
}
