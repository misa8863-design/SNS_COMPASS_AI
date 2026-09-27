import { Clock } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { CharacterAvatar } from "@/components/ui/CharacterAvatar";
import { TypeTag } from "@/components/ui/TypeTag";
import type { Lesson, Month } from "@/lib/types";

/** 次にやること。HOMEで一番押してほしい場所 */
export function NextAction({ lesson, month }: { lesson: Lesson; month: Month }) {
  return (
    <section
      aria-labelledby="next-title"
      className="relative flex flex-col overflow-hidden rounded-panel bg-compass-50 p-6 ring-1 ring-compass-100 sm:p-8"
    >
      {/* 方位線：現在地から次の目的地へ */}
      <svg aria-hidden viewBox="0 0 200 200" className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-compass-200">
        <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeDasharray="2 8" strokeWidth="2" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M100 20v160M20 100h160" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-compass-700">次にやること</p>
          <p className="mt-1 text-xs font-bold tracking-wider text-guide-400">
            MONTH 0{month.number}　{month.verb}
          </p>
        </div>
        {lesson.character && <CharacterAvatar id={lesson.character} size="md" float />}
      </div>

      <h2 id="next-title" className="relative mt-4 text-[1.75rem] font-bold leading-tight sm:text-[2rem]">
        {lesson.title}
      </h2>
      <p className="relative mt-3 text-base leading-relaxed">「{lesson.description}」</p>

      <div className="relative mt-5 flex flex-wrap items-center gap-3 text-sm text-guide-400">
        <TypeTag type={lesson.type} />
        {lesson.duration && (
          <span className="inline-flex items-center gap-1.5">
            <Clock aria-hidden className="h-4 w-4" />
            所要時間 {lesson.duration}
          </span>
        )}
      </div>

      <div className="relative mt-auto pt-7">
        <CTAButton href={`/${month.slug}#${lesson.id}`} size="lg" className="w-full sm:w-auto">
          続きを見る
        </CTAButton>
      </div>
    </section>
  );
}
