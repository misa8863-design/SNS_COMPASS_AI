"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NavList } from "./NavList";
import type { Status } from "@/lib/types";
import { cn } from "@/lib/tone";

/** スマホ・タブレット用ドロワー。Escで閉じる / 背景スクロール固定 / フォーカス移動 */
export function MobileNavigation({
  open,
  onClose,
  monthStatuses,
}: {
  open: boolean;
  onClose: () => void;
  monthStatuses: Record<number, Status>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a[href],button:not([disabled])");
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div className={cn("fixed inset-0 z-50 transition-[visibility] duration-300 lg:hidden", open ? "visible" : "invisible")} aria-hidden={!open}>
      <div
        className={cn("absolute inset-0 bg-guide/25 transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="メニュー"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(86vw,340px)] flex-col rounded-l-panel bg-ivory px-4 pb-6 pt-5 shadow-lift transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-5 flex items-center justify-between px-2">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-white text-guide shadow-soft"
            aria-label="メニューを閉じる"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          <NavList monthStatuses={monthStatuses} onNavigate={onClose} />
        </div>
      </div>
    </div>
  );
}
