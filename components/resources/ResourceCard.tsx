import { Clock } from "lucide-react";
import { TypeTag } from "@/components/ui/TypeTag";
import { CTAButton } from "@/components/ui/CTAButton";
import type { Resource } from "@/lib/resources";

export function ResourceCard({ r }: { r: Resource }) {
  return (
    <article className="flex h-full flex-col rounded-card border border-ivory-200 bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-center gap-2">
        <TypeTag type={r.type} />
        <span className="text-xs text-guide-400">{r.place}</span>
      </div>
      <h3 className="mt-3 text-[1.05rem] font-bold leading-snug">{r.title}</h3>
      <p className="mt-1.5 flex-1 text-[0.86rem] leading-relaxed text-guide/85">{r.description}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        {r.duration ? (
          <span className="inline-flex items-center gap-1 text-xs text-guide-400">
            <Clock aria-hidden className="h-3.5 w-3.5" />
            {r.duration}
          </span>
        ) : (
          <span />
        )}
        <CTAButton href={r.href} variant="quiet" arrow>開く</CTAButton>
      </div>
    </article>
  );
}
