import { Logo } from "@/components/ui/Logo";
import { NavList } from "./NavList";
import type { Status } from "@/lib/types";

/** PC用 左サイドバー（lg以上） */
export function Sidebar({ monthStatuses }: { monthStatuses: Record<number, Status> }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[272px] flex-col border-r border-ivory-200 bg-ivory/95 px-4 pb-5 pt-6 backdrop-blur lg:flex">
      <div className="mb-7 px-3">
        <Logo />
        <p className="mt-1.5 text-[0.7rem] text-guide-400">受講生専用サイト</p>
      </div>
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto pr-1">
        <NavList monthStatuses={monthStatuses} />
      </div>
    </aside>
  );
}
