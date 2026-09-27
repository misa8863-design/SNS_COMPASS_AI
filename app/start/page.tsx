import type { Metadata } from "next";
import { Check, CircleDot } from "lucide-react";
import { CharacterAvatar } from "@/components/ui/CharacterAvatar";
import { CharacterBubble } from "@/components/ui/CharacterBubble";
import { CTAButton } from "@/components/ui/CTAButton";
import { CompassMark } from "@/components/ui/CompassMark";
import { CrewSection } from "@/components/home/CrewSection";
import { months } from "@/data/course";

export const metadata: Metadata = { title: "START はじめに" };

const howTo = [
  { title: "HOMEで現在地を確かめる", body: "開いたらまずHOME。いまどの月にいて、次に何をやればいいかが表示されます。" },
  { title: "今月の航路を上から進める", body: "各MONTHのページには、動画・ワーク・課題が順番に並んでいます。上から進めればOK。" },
  { title: "ワークと課題を提出する", body: "書いたワークや課題を提出すると、みぃーからフィードバックが届きます。" },
];

const rules = [
  "自分のペースで大丈夫。1日10分でも、進んだらそれは前進です。",
  "わからないことは、ためこまずに質問フォームへ。",
  "ほかの受講生の発信には、あたたかい言葉を。",
  "教材・テンプレートは受講生本人のみ利用できます。共有・転載はしないでください。",
];

const prepare = [
  { name: "Instagram または Threads のアカウント", note: "まだなら作らなくてOK。MONTH 03で一緒に整えます" },
  { name: "Googleアカウント", note: "ワークシートと課題の提出に使います" },
  { name: "Notion（無料プラン）", note: "テンプレートを複製して使います" },
  { name: "ChatGPTなどのAIツール", note: "SNS COMPASS AI と合わせて使います" },
  { name: "気づきを書き留めるノート", note: "スマホのメモでも大丈夫" },
];

export default function StartPage() {
  return (
    <div className="mx-auto max-w-content px-5 pt-8 sm:px-8 lg:pt-12">
      {/* ようこそ */}
      <header className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="flex items-center gap-2 text-sm font-bold text-compass-700">
            <CompassMark className="h-5 w-5 text-compass-700" />
            START　はじめに
          </p>
          <h1 className="mt-4 text-[2.3rem] font-bold leading-tight sm:text-[3rem]">
            SNS COMPASSへ
            <br />
            ようこそ
          </h1>
          <p className="mt-4 max-w-md leading-relaxed text-guide/85">
            ここは、あなたらしい発信の方向を見つけるための6か月の旅の出発地です。最初にこのページを読んで、旅の準備を整えましょう。
          </p>
        </div>

        <figure className="relative rounded-panel border border-ivory-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-4">
            <CharacterAvatar id="mii" size="lg" float priority />
            <figcaption>
              <span className="block text-xs font-bold text-compass-700">WELCOME MESSAGE</span>
              <span className="font-maru text-xl font-bold">みぃーより</span>
            </figcaption>
          </div>
          <blockquote className="mt-5 space-y-3 leading-[1.95] text-guide">
            <p>はじめまして、みぃーです。参加してくれて、本当にありがとう。</p>
            <p>
              SNS COMPASSは、答えを覚える講座ではありません。「何を発信したいのか」「誰に届けたいのか」を、あなた自身が見つけていく旅です。
            </p>
            <p>迷ったときは、いつでもCOMPASS CREWが隣にいます。一緒に進んでいこうね。</p>
          </blockquote>
        </figure>
      </header>

      {/* 使い方 */}
      <section aria-labelledby="howto-title" className="mt-20">
        <h2 id="howto-title" className="text-[1.6rem] font-bold sm:text-[1.9rem]">SNS COMPASSの使い方</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {howTo.map((s, i) => (
            <li key={s.title} className="card relative p-6">
              <span className="font-maru text-[2.2rem] font-bold leading-none text-compass">{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-guide/85">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 6か月の進み方 */}
      <section aria-labelledby="route-title" className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 id="route-title" className="text-[1.6rem] font-bold sm:text-[1.9rem]">6か月の進み方</h2>
          <p className="mt-2 leading-relaxed text-guide/85">1か月にひとつずつ、目的地をめざします。前の月が終わっていなくても、次へ進んで大丈夫。</p>
          <CharacterBubble className="mt-6" character="ao" size="md" message="全体の流れを知っておくと、迷いにくくなるよ。" />
        </div>
        <ol className="relative space-y-3 before:absolute before:bottom-6 before:left-[22px] before:top-6 before:border-l-2 before:border-dashed before:border-compass-200">
          {months.map((m) => (
            <li key={m.slug} className="relative flex items-center gap-4 rounded-card bg-ivory-50 py-3 pl-2 pr-4 ring-1 ring-ivory-200">
              <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white font-maru text-sm font-bold text-compass-700 ring-2 ring-compass-200">
                {m.number}
              </span>
              <span className="w-28 shrink-0 font-maru text-lg font-bold sm:w-36">{m.verb}</span>
              <span className="text-[0.88rem] leading-snug text-guide/85">{m.goal}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* COMPASS CREW */}
      <div className="mt-20">
        <CrewSection title="COMPASS CREWの紹介" lead="それぞれ得意分野があります。困ったら、担当のクルーのページへ。" />
      </div>

      {/* ルール & 準備 */}
      <div className="mt-20 grid gap-5 lg:grid-cols-2">
        <section id="mind" aria-labelledby="rules-title" className="card scroll-mt-24 p-6 sm:p-8">
          <h2 id="rules-title" className="text-[1.4rem] font-bold">受講ルール</h2>
          <ul className="mt-5 space-y-3">
            {rules.map((r) => (
              <li key={r} className="flex gap-3 leading-relaxed">
                <CircleDot aria-hidden className="mt-1 h-4 w-4 shrink-0 text-support" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <CharacterBubble className="mt-7" character="hana" size="md" message="手が止まった日があっても大丈夫。また戻ってきてね。" />
        </section>

        <section aria-labelledby="prep-title" className="card p-6 sm:p-8">
          <h2 id="prep-title" className="text-[1.4rem] font-bold">最初に準備するもの</h2>
          <ul className="mt-5 space-y-3">
            {prepare.map((p) => (
              <li key={p.name} className="flex gap-3 rounded-2xl bg-white p-3.5 ring-1 ring-ivory-200">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-trend-50 text-trend-700">
                  <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span>
                  <span className="block font-bold leading-snug">{p.name}</span>
                  <span className="text-[0.85rem] text-guide-400">{p.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* 出発 */}
      <section aria-labelledby="depart-title" className="mt-20 flex flex-col items-center rounded-panel bg-compass-50 px-6 py-12 text-center ring-1 ring-compass-100">
        <CharacterAvatar id="mii" size="lg" float />
        <h2 id="depart-title" className="mt-5 text-[1.6rem] font-bold sm:text-[2rem]">準備ができたら、出発しよう。</h2>
        <p className="mt-2 text-guide/85">最初の目的地は MONTH 01「知る」です。</p>
        <CTAButton href="/month-01" size="lg" className="mt-7">最初の目的地へ</CTAButton>
      </section>
    </div>
  );
}
