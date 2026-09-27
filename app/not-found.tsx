import { CharacterBubble } from "@/components/ui/CharacterBubble";
import { CTAButton } from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start gap-8 px-5 py-24">
      <h1 className="text-3xl font-bold">このページは地図にありません</h1>
      <CharacterBubble character="mii" message="URLが変わったのかも。HOMEの現在地から、もう一度進もう。" />
      <CTAButton href="/">HOMEへ戻る</CTAButton>
    </div>
  );
}
