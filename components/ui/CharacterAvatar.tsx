import Image from "next/image";
import { characters } from "@/data/characters";
import type { CharacterId } from "@/lib/types";
import { cn, toneClasses } from "@/lib/tone";

const sizes = { sm: 44, md: 64, lg: 96, xl: 132 } as const;

export function CharacterAvatar({
  id,
  size = "md",
  className,
  float = false,
  priority = false,
}: {
  id: CharacterId;
  size?: keyof typeof sizes;
  className?: string;
  float?: boolean;
  priority?: boolean;
}) {
  const c = characters[id];
  const px = sizes[size];
  return (
    <span
      className={cn(
        "relative inline-block shrink-0 rounded-full bg-ivory-50 p-[3px] ring-2",
        toneClasses[c.tone].ring,
        float && "animate-float",
        className,
      )}
      style={{ width: px, height: px }}
    >
      <Image src={c.image} alt={c.name} width={px * 2} height={px * 2} priority={priority} className="h-full w-full rounded-full object-cover" />
    </span>
  );
}
