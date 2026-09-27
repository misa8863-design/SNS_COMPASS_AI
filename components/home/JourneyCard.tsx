import Link from "next/link";
import { Check, MapPin } from "lucide-react";
import type { Status } from "@/lib/types";
import { cn } from "@/lib/tone";

export interface JourneyStop {
  key: string;
  href: string;
  kicker: string;
  title: string;
  theme: string;
  status: Status;
  progress?: { done: number; total: number };
}

/** 旅の目的地カード（航路上の寄港地） */
export function JourneyCard({ stop, isLast }: { stop: JourneyStop; isLast: boolean }) {
  const { status } = stop;
  return (
    <li
      className={cn(
        "relative grid grid-cols-[28px_1fr] gap-3 md:flex md:w-[188px] md:shrink-0 md:snap-start md:flex-col md:gap-4 xl:w-auto",
        // 次の寄港地への航路（スマホ：縦 / md以上：横）
        !isLast &&
          "before:absolute before:left-[13px] before:top-[34px] before:h-[calc(100%-18px)] before:border-l-2 before:border-dashed md:before:left-[28px] md:before:top-[13px] md:before:h-0 md:before:w-[calc(100%+4px)] md:before:border-l-0 md:before:border-t-2",
        !isLast && (status === "done" ? "before:border-trend" : "before:border-ivory-300"),
      )}
    >
      <span
        aria-hidden
        className={cn(
          "relative z-10 mt-4 grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 md:mt-0",
          status === "done" && "border-trend bg-trend text-white",
          status === "current" && "animate-pulse-ring border-compass bg-compass text-white",
          status === "todo" && "border-ivory-300 bg-ivory",
        )}
      >
        {status === "done" && <Check className="h-4 w-4" strokeWidth={3} />}
        {status === "current" && <MapPin className="h-4 w-4" />}
      </span>

      <Link
        href={stop.href}
        aria-current={status === "current" ? "step" : undefined}
        className={cn(
          "focus-ring group relative flex h-full min-h-[132px] flex-col rounded-card border p-4 transition duration-200 hover:-translate-y-0.5",
          status === "current" && "border-compass bg-white shadow-lift ring-4 ring-compass-100",
          status === "done" && "border-ivory-200 bg-white/80 hover:shadow-soft",
          status === "todo" && "border-ivory-200 bg-ivory hover:bg-ivory-50 hover:shadow-soft",
        )}
      >
        <span className={cn("text-[0.7rem] font-bold tracking-wider", status === "current" ? "text-compass-700" : "text-guide-400")}>
          {stop.kicker}
        </span>
        <span className={cn("mt-1 font-maru text-[1.35rem] font-bold leading-tight", status === "todo" && "text-guide/75")}>
          {stop.title}
        </span>
        <span className="mt-1.5 text-[0.8rem] leading-snug text-guide-400">{stop.theme}</span>

        <span className="mt-auto pt-3">
          {status === "current" && (
            <span className="inline-flex items-center gap-1 rounded-full bg-compass px-2.5 py-1 text-[0.72rem] font-bold text-white">
              現在地{stop.progress && `　${stop.progress.done}/${stop.progress.total}`}
            </span>
          )}
          {status === "todo" && <span className="text-[0.72rem] text-guide-400">これから</span>}
        </span>

        {/* 完了した寄港地には旅券風のスタンプ */}
        {status === "done" && (
          <span
            aria-hidden
            className="absolute bottom-3 right-3 grid h-14 w-14 rotate-[-12deg] place-items-center rounded-full border-2 border-dashed border-trend/70 font-maru text-[0.62rem] font-bold leading-tight text-trend-700"
          >
            <span className="text-center">
              航海
              <br />
              完了
            </span>
          </span>
        )}
        <span className="sr-only">
          {status === "done" ? "（完了）" : status === "current" ? "（現在地）" : "（未着手）"}
        </span>
      </Link>
    </li>
  );
}
