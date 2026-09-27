"use client";

import { useCallback, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MobileNavigation } from "./MobileNavigation";
import type { Status } from "@/lib/types";

/** スマホ・タブレット用ヘッダー（lg未満） */
export function Header({ monthStatuses, currentLabel }: { monthStatuses: Record<number, Status>; currentLabel: string }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ivory-200 bg-ivory/90 backdrop-blur lg:hidden">
        <div className="flex h-16 items-center justify-between gap-3 px-4">
          <Logo className="text-[0.95rem]" />
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full bg-compass-50 px-3 py-1 text-xs font-bold text-compass-700 min-[400px]:inline">
              現在地 {currentLabel}
            </span>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-white text-guide shadow-soft"
              aria-label="メニューを開く"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation open={open} onClose={close} monthStatuses={monthStatuses} />
    </>
  );
}
