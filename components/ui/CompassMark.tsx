import { cn } from "@/lib/tone";

/** ブランドのコンパス。ロゴの「O」やマーカーに使う */
export function CompassMark({ className, needle = "#F28B82" }: { className?: string; needle?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={cn("inline-block", className)}>
      <circle cx="20" cy="21" r="15.5" fill="#FFFDF9" stroke="currentColor" strokeWidth="3.2" />
      <rect x="17.5" y="1.5" width="5" height="4.5" rx="1.5" fill="currentColor" />
      <path d="M20 21 L27 10 L22.2 22.6 Z" fill={needle} />
      <path d="M20 21 L13 32 L17.8 19.4 Z" fill="currentColor" opacity=".35" />
      <circle cx="20" cy="21" r="2" fill="currentColor" />
    </svg>
  );
}

export function PaperPlane({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("inline-block", className)} style={style} fill="none">
      <path d="M3 14.5 29 4l-6.5 23-7-7.2L3 14.5Z" fill="#FFFDF9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M29 4 15.5 19.8V27l3.4-4.6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
