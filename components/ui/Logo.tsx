import Link from "next/link";
import { CompassMark } from "./CompassMark";
import { cn } from "@/lib/tone";

export function Logo({ className, href = "/" }: { className?: string; href?: string }) {
  return (
    <Link
      href={href}
      aria-label="SNS COMPASS ホームへ"
      className={cn("focus-ring inline-flex items-center font-maru font-bold tracking-tight text-guide", className)}
    >
      <span aria-hidden="true" className="flex items-center gap-[0.28em] text-[1.35rem] leading-none">
        <span>SNS</span>
        <span className="flex items-center">
          C<CompassMark className="mx-[0.02em] h-[1.02em] w-[1.02em] -translate-y-[0.04em] text-guide" />MPASS
        </span>
      </span>
    </Link>
  );
}
