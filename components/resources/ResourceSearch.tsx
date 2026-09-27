"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { ResourceCard } from "./ResourceCard";
import { resourceCategories, type Resource, type ResourceCategory } from "@/lib/resources";
import { CharacterBubble } from "@/components/ui/CharacterBubble";
import { cn } from "@/lib/tone";

export function ResourceSearch({ resources }: { resources: Resource[] }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<ResourceCategory | "all">("all");

  const results = useMemo(() => {
    const words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return resources.filter((r) => {
      if (cat !== "all" && r.category !== cat) return false;
      const hay = `${r.title} ${r.description} ${r.place}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [q, cat, resources]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: resources.length };
    resources.forEach((r) => (c[r.category] = (c[r.category] ?? 0) + 1));
    return c;
  }, [resources]);

  const chips: { id: ResourceCategory | "all"; label: string }[] = [{ id: "all", label: "すべて" }, ...resourceCategories];

  return (
    <div>
      <div className="sticky top-16 z-20 -mx-5 bg-ivory/95 px-5 pb-4 pt-2 backdrop-blur sm:-mx-8 sm:px-8 lg:top-0 lg:pt-4">
        <label htmlFor="resource-q" className="sr-only">教材を検索</label>
        <div className="relative">
          <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-guide-400" />
          <input
            id="resource-q"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="キーワードで探す（例：プロフィール、分析）"
            className="h-14 w-full rounded-full border border-ivory-300 bg-white pl-12 pr-12 text-base text-guide shadow-soft outline-none placeholder:text-guide-400 focus-visible:border-compass focus-visible:ring-4 focus-visible:ring-compass-100"
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              className="focus-ring absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full text-guide-400 hover:bg-ivory"
              aria-label="検索語を消す"
            >
              <X aria-hidden className="h-4 w-4" />
            </button>
          )}
        </div>
        <div role="group" aria-label="カテゴリーで絞り込む" className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {chips.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              aria-pressed={cat === c.id}
              className={cn(
                "focus-ring min-h-[40px] shrink-0 rounded-full px-4 text-sm font-bold transition",
                cat === c.id ? "bg-compass text-white" : "bg-white text-guide ring-1 ring-ivory-300 hover:ring-compass",
              )}
            >
              {c.label}
              <span className={cn("ml-1.5 text-xs", cat === c.id ? "text-white/85" : "text-guide-400")}>{counts[c.id] ?? 0}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-2 text-sm text-guide-400" aria-live="polite">{results.length}件の教材</p>

      {results.length ? (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((r) => (
            <li key={r.id}>
              <ResourceCard r={r} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 rounded-card border border-dashed border-ivory-300 p-8">
          <CharacterBubble
            character="luku"
            message={<>「{q}」に合う教材は見つからなかったよ。言葉を短くするか、カテゴリーを「すべて」にしてみてね。</>}
          />
        </div>
      )}
    </div>
  );
}
