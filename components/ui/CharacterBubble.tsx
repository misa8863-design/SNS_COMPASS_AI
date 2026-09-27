import { characters } from "@/data/characters";
import type { CharacterId } from "@/lib/types";
import { cn, toneClasses } from "@/lib/tone";
import { CharacterAvatar } from "./CharacterAvatar";

/**
 * キャラクター＋吹き出し。セリフは短く（2行以内目安）。
 */
export function CharacterBubble({
  character,
  message,
  size = "md",
  align = "left",
  className,
  float = false,
}: {
  character: CharacterId;
  message: React.ReactNode;
  size?: "sm" | "md" | "lg";
  align?: "left" | "right";
  className?: string;
  float?: boolean;
}) {
  const c = characters[character];
  const t = toneClasses[c.tone];
  return (
    <figure className={cn("flex items-end gap-3", align === "right" && "flex-row-reverse", className)}>
      <CharacterAvatar id={character} size={size} float={float} />
      <div className="min-w-0">
        <figcaption className={cn("mb-1 px-1 text-xs font-bold", t.text, align === "right" && "text-right")}>{c.name}</figcaption>
        <blockquote
          className={cn(
            "relative rounded-[20px] border bg-white px-4 py-3 text-[0.95rem] leading-relaxed text-guide shadow-soft",
            t.border,
            align === "left" ? "rounded-bl-md" : "rounded-br-md",
          )}
        >
          {message}
        </blockquote>
      </div>
    </figure>
  );
}
