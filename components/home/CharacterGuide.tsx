import { CharacterBubble } from "@/components/ui/CharacterBubble";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { Month } from "@/lib/types";

/** みぃーからのWELCOME MESSAGE ＋ 全体の航海状況 */
export function CharacterGuide({ current, overall }: { current: Month; overall: number }) {
  return (
    <section aria-labelledby="welcome-title" className="card flex flex-col justify-between gap-7 p-6 sm:p-8">
      <div>
        <h2 id="welcome-title" className="text-[1.6rem] font-bold leading-snug sm:text-[1.85rem]">
          <span className="inline-block">今日も</span>
          <span className="inline-block">SNS COMPASSへ</span>
          <span className="inline-block">ようこそ！</span>
        </h2>
        <p className="mt-2 text-[0.95rem] text-guide-400">
          いまは MONTH 0{current.number}「{current.verb}」の航路を進んでいます。
        </p>
      </div>

      <CharacterBubble
        character="mii"
        size="lg"
        float
        message={
          <>
            焦らなくて大丈夫。
            <br />
            あなたのペースで、一歩ずつ進んでいこう。
          </>
        }
      />

      <ProgressBar value={overall} label="6か月の航海" />
    </section>
  );
}
