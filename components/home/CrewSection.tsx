import Link from "next/link";
import { characters, crewOrder } from "@/data/characters";
import { CharacterAvatar } from "@/components/ui/CharacterAvatar";
import { cn, toneClasses } from "@/lib/tone";

/** COMPASS CREW：迷ったときの相談先として紹介する */
export function CrewSection({ title = "COMPASS CREW", lead = "迷ったら、担当のクルーに会いに行こう。" }: { title?: string; lead?: string }) {
  return (
    <section aria-labelledby="crew-title">
      <h2 id="crew-title" className="text-[1.6rem] font-bold sm:text-[1.9rem]">{title}</h2>
      <p className="mt-1 text-[0.95rem] text-guide-400">{lead}</p>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-5">
        {crewOrder.map((id) => {
          const c = characters[id];
          const t = toneClasses[c.tone];
          return (
            <li key={id} className={cn(id === "mii" && "col-span-2 md:col-span-1")}>
              <Link
                href={c.href}
                className="focus-ring group flex h-full flex-col items-start gap-3 rounded-card border border-ivory-200 bg-ivory-50 p-4 transition hover:-translate-y-0.5 hover:shadow-soft sm:p-5"
              >
                <CharacterAvatar id={id} size="md" />
                <span>
                  <span className="block font-maru text-lg font-bold">{c.name}</span>
                  <span className={cn("block text-xs font-bold", t.text)}>{c.role}</span>
                </span>
                <span className="text-[0.85rem] leading-relaxed text-guide/90">{c.intro}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
