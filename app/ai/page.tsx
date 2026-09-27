import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { aiTools } from "@/data/aiTools";
import { CharacterAvatar } from "@/components/ui/CharacterAvatar";
import { CharacterBubble } from "@/components/ui/CharacterBubble";
import { CopyButton } from "@/components/ui/CopyButton";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = { title: "SNS COMPASS AI" };

export default function AiPage() {
  return (
    <div className="mx-auto max-w-content px-5 pt-8 sm:px-8 lg:pt-12">
      <header className="relative grid gap-8 overflow-hidden rounded-panel bg-white p-6 ring-1 ring-compass-100 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="flex items-center gap-2 text-sm font-bold text-compass-700">
            <Sparkles aria-hidden className="h-4 w-4" />
            SNS COMPASS AI
          </p>
          <h1 className="mt-3 text-[2.1rem] font-bold leading-tight sm:text-[2.6rem]">
            ひとりで悩んだら、
            <br />
            AIクルーに相談しよう。
          </h1>
          <p className="mt-4 max-w-md leading-relaxed text-guide/85">
            やりたいことを選ぶと、AIの相談ページが開きます。頼み方の例をコピーして使うと、すぐに始められます。
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 lg:items-start">
          <CharacterAvatar id="ao" size="xl" float priority />
          <CharacterBubble character="ao" size="sm" message="AIの答えは下書き。最後はあなたの言葉で仕上げよう！" />
        </div>
      </header>

      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {aiTools.map((t, i) => (
          <li key={t.id} className="flex flex-col rounded-card border border-ivory-200 bg-ivory-50 p-6 shadow-soft">
            <span aria-hidden className="grid h-10 w-10 place-items-center rounded-2xl bg-compass-50 font-maru font-bold text-compass-700">
              {i + 1}
            </span>
            <h2 className="mt-4 text-xl font-bold">{t.title}</h2>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-guide/85">{t.description}</p>
            <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-ivory-200">
              <p className="text-xs font-bold text-guide-400">頼み方の例</p>
              <p className="mt-1 text-[0.9rem] leading-relaxed">{t.example}</p>
              <div className="mt-2 -mb-1 -ml-2">
                <CopyButton text={t.example} label="例をコピー" />
              </div>
            </div>
            <div className="mt-auto pt-5">
              <CTAButton href={t.url} className="w-full">AIに相談する</CTAButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
