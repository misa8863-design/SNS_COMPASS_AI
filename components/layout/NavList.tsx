"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Gift, Home, LibraryBig, Sparkles, Flag } from "lucide-react";
import { footerNav, mainNav, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/tone";
import type { Status } from "@/lib/types";

const kindIcon = { home: Home, start: Flag, bonus: Gift, ai: Sparkles, resources: LibraryBig } as const;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

/** 月のメニューは縦の航路として描く（完了=チェック / 現在地=ブルー / 未着手=アイボリー） */
function MonthRouteItem({ item, active, status, onNavigate }: { item: NavItem; active: boolean; status: Status; onNavigate?: () => void }) {
  return (
    <li className="relative">
      <Link
        href={item.href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={cn(
          "focus-ring group relative flex min-h-[44px] items-center gap-3 rounded-2xl py-1.5 pl-2 pr-3 transition",
          active ? "bg-compass-50" : "hover:bg-white",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 text-[10px] font-bold",
            status === "done" && "border-trend bg-trend text-white",
            status === "current" && "border-compass bg-compass text-white animate-pulse-ring",
            status === "todo" && "border-ivory-300 bg-ivory text-guide-400",
          )}
        >
          {status === "done" ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : item.monthNumber}
        </span>
        <span className="flex min-w-0 flex-1 items-baseline justify-between gap-2">
          <span className={cn("text-[0.72rem] font-bold tracking-wider", active ? "text-compass-700" : "text-guide-400")}>{item.label}</span>
          <span className={cn("truncate font-maru text-[0.95rem] font-bold", active ? "text-guide" : "text-guide/90")}>{item.sub}</span>
        </span>
        {status === "current" && <span className="sr-only">（現在地）</span>}
        {status === "done" && <span className="sr-only">（完了）</span>}
      </Link>
    </li>
  );
}

function PlainItem({ item, active, onNavigate }: { item: NavItem; active: boolean; onNavigate?: () => void }) {
  const Icon = kindIcon[item.kind as keyof typeof kindIcon];
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "focus-ring flex min-h-[44px] items-center gap-3 rounded-2xl px-3 py-2 transition",
        active ? "bg-compass text-white shadow-cta" : "text-guide hover:bg-white",
      )}
    >
      {Icon && <Icon aria-hidden className={cn("h-[18px] w-[18px]", active ? "text-white" : "text-guide-400")} />}
      <span className="flex flex-1 items-baseline justify-between gap-2">
        <span className="text-[0.8rem] font-bold tracking-wider">{item.label}</span>
        {item.sub && <span className={cn("text-xs", active ? "text-white/90" : "text-guide-400")}>{item.sub}</span>}
      </span>
    </Link>
  );
}

export function NavList({ monthStatuses, onNavigate }: { monthStatuses: Record<number, Status>; onNavigate?: () => void }) {
  const pathname = usePathname() ?? "/";
  const top = mainNav.filter((n) => n.kind === "home" || n.kind === "start");
  const monthsNav = mainNav.filter((n) => n.kind === "month");
  const extras = mainNav.filter((n) => n.kind === "bonus" || n.kind === "ai");

  return (
    <nav aria-label="メインメニュー" className="flex h-full flex-col">
      <ul className="space-y-1">
        {top.map((i) => (
          <li key={i.href}>
            <PlainItem item={i} active={isActive(pathname, i.href)} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>

      <p className="mb-2 mt-6 px-3 text-xs font-bold text-guide-400">6か月の航路</p>
      <ol className="relative space-y-0.5 before:absolute before:bottom-5 before:left-[19px] before:top-5 before:border-l-2 before:border-dashed before:border-ivory-300">
        {monthsNav.map((i) => (
          <MonthRouteItem
            key={i.href}
            item={i}
            active={isActive(pathname, i.href)}
            status={monthStatuses[i.monthNumber ?? 0] ?? "todo"}
            onNavigate={onNavigate}
          />
        ))}
      </ol>

      <ul className="mt-6 space-y-1">
        {extras.map((i) => (
          <li key={i.href}>
            <PlainItem item={i} active={isActive(pathname, i.href)} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-dashed border-ivory-300 pt-4">
        <PlainItem item={footerNav} active={isActive(pathname, footerNav.href)} onNavigate={onNavigate} />
      </div>
    </nav>
  );
}
