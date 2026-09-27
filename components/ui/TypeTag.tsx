import { Clapperboard, Download, Gift, NotebookPen, Flag, Sparkles } from "lucide-react";
import type { LessonType } from "@/lib/types";
import { cn, lessonTypeMeta, toneClasses } from "@/lib/tone";

const icons = { video: Clapperboard, work: NotebookPen, task: Flag, download: Download, ai: Sparkles, bonus: Gift };

export function TypeTag({ type, className }: { type: LessonType; className?: string }) {
  const m = lessonTypeMeta[type];
  const Icon = icons[type];
  const t = toneClasses[m.tone];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-bold tracking-wide", t.soft, t.text, className)}>
      <Icon aria-hidden className="h-3.5 w-3.5" />
      {m.label}
      <span className="sr-only">（{m.name}）</span>
    </span>
  );
}

export { icons as typeIcons };
