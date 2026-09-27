import { Check, Clock } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { CharacterAvatar } from "@/components/ui/CharacterAvatar";
import { TypeTag } from "@/components/ui/TypeTag";
import type { Lesson, Status } from "@/lib/types";
import { cn, lessonTypeMeta } from "@/lib/tone";

/** 講義カード。チャプター番号は実際の順番を表す */
export function LessonCard({ lesson, status }: { lesson: Lesson; status: Status }) {
  const meta = lessonTypeMeta[lesson.type];
  return (
    <article
      id={lesson.id}
      className={cn(
        "relative flex scroll-mt-24 flex-col gap-4 rounded-card border bg-white p-5 transition sm:flex-row sm:items-center sm:gap-6 sm:p-6",
        status === "current" ? "border-compass shadow-lift ring-4 ring-compass-100" : "border-ivory-200 shadow-soft",
        status === "done" && "bg-white/70",
      )}
    >
      <div className="flex items-center gap-4 sm:w-16 sm:flex-col sm:gap-1">
        <span
          className={cn(
            "font-maru text-[2rem] font-bold leading-none",
            status === "current" ? "text-compass" : status === "done" ? "text-trend" : "text-ivory-300",
          )}
        >
          {String(lesson.chapter).padStart(2, "0")}
        </span>
        {status === "done" && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-trend-700">
            <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />
            完了
          </span>
        )}
        {status === "current" && <span className="text-xs font-bold text-compass-700">いまここ</span>}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <TypeTag type={lesson.type} />
          {lesson.duration && (
            <span className="inline-flex items-center gap-1 text-xs text-guide-400">
              <Clock aria-hidden className="h-3.5 w-3.5" />
              {lesson.duration}
            </span>
          )}
        </div>
        <h3 className="mt-2 text-lg font-bold leading-snug sm:text-xl">{lesson.title}</h3>
        <p className="mt-1 text-[0.9rem] leading-relaxed text-guide/85">{lesson.description}</p>
      </div>

      <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
        {lesson.character && <CharacterAvatar id={lesson.character} size="sm" className="sm:hidden" />}
        <CTAButton href={lesson.url} variant={status === "current" ? "primary" : "soft"} arrow={false}>
          {lesson.cta ?? (status === "done" ? "もう一度見る" : meta.cta)}
        </CTAButton>
      </div>
    </article>
  );
}
