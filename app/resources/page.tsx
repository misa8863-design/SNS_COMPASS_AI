import type { Metadata } from "next";
import { ResourceSearch } from "@/components/resources/ResourceSearch";
import { CharacterBubble } from "@/components/ui/CharacterBubble";
import { getAllResources } from "@/lib/resources";

export const metadata: Metadata = { title: "RESOURCES 教材・テンプレート一覧" };

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-content px-5 pt-8 sm:px-8 lg:pt-12">
      <header className="mb-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm font-bold text-trend-700">RESOURCES</p>
          <h1 className="mt-2 text-[2.1rem] font-bold leading-tight sm:text-[2.6rem]">教材・テンプレート一覧</h1>
          <p className="mt-3 text-guide/85">講義・ワーク・テンプレート・AI・特典を、まとめて探せます。</p>
        </div>
        <CharacterBubble character="luku" size="md" message="探しものは、ルクにおまかせ！" />
      </header>
      <ResourceSearch resources={getAllResources()} />
    </div>
  );
}
