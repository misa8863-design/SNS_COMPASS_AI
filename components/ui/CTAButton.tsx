import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn, isExternal } from "@/lib/tone";

type Variant = "primary" | "soft" | "quiet";

const variants: Record<Variant, string> = {
  primary:
    "bg-compass text-white shadow-cta hover:bg-compass-600 [text-shadow:0_1px_0_rgba(47,134,204,.35)]",
  soft: "bg-white text-guide ring-1 ring-inset ring-ivory-300 hover:ring-compass hover:text-compass-700",
  quiet: "text-compass-700 hover:bg-compass-50",
};

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  size?: "md" | "lg";
  ariaLabel?: string;
}

/** 内部リンクは next/link、外部URLは新しいタブで開く */
export function CTAButton({ href, children, variant = "primary", arrow = true, className, size = "md", ariaLabel }: Props) {
  const disabled = href === "#";
  const cls = cn(
    "focus-ring group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full font-bold transition duration-200 ease-out",
    size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-[0.9rem]",
    variants[variant],
    !disabled && "active:scale-[0.98]",
    disabled && "cursor-not-allowed opacity-60",
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );

  if (disabled) {
    return (
      <span className={cls} aria-disabled="true" title="準備中です" aria-label={ariaLabel}>
        <span>{children}</span>
        <span className="text-xs font-medium opacity-80">（準備中）</span>
      </span>
    );
  }
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
        {inner}
        <span className="sr-only">（新しいタブで開きます）</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}
