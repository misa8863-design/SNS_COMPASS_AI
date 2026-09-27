import type { LessonType, Tone } from "@/lib/types";

/** Tailwind の JIT が拾えるよう、クラス名は完全な文字列で持つ */
export const toneClasses: Record<Tone, { bg: string; soft: string; text: string; border: string; ring: string; dot: string }> = {
  compass: { bg: "bg-compass", soft: "bg-compass-50", text: "text-compass-700", border: "border-compass-200", ring: "ring-compass/40", dot: "bg-compass" },
  support: { bg: "bg-support", soft: "bg-support-50", text: "text-support-700", border: "border-support-100", ring: "ring-support/50", dot: "bg-support" },
  spark: { bg: "bg-spark", soft: "bg-spark-50", text: "text-spark-700", border: "border-spark-100", ring: "ring-spark/50", dot: "bg-spark" },
  trend: { bg: "bg-trend", soft: "bg-trend-50", text: "text-trend-700", border: "border-trend-100", ring: "ring-trend/50", dot: "bg-trend" },
};

export const lessonTypeMeta: Record<LessonType, { label: string; name: string; tone: Tone; cta: string }> = {
  video: { label: "VIDEO", name: "動画講義", tone: "compass", cta: "講義を見る" },
  work: { label: "WORK", name: "ワーク", tone: "spark", cta: "ワークを開く" },
  task: { label: "TASK", name: "課題", tone: "support", cta: "課題を提出する" },
  download: { label: "DOWNLOAD", name: "資料", tone: "trend", cta: "資料を開く" },
  ai: { label: "AI", name: "AI", tone: "compass", cta: "AIで進める" },
  bonus: { label: "BONUS", name: "特典", tone: "spark", cta: "特典を開く" },
};

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}
