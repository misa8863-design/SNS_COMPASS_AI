import type { Character, CharacterId } from "@/lib/types";

export const characters: Record<CharacterId, Character> = {
  mii: {
    id: "mii",
    name: "みぃー",
    role: "COMPASS CREW リーダー",
    areas: ["講座ナビゲート", "伴走"],
    intro: "6か月の旅の案内役。迷ったら、いつでも声をかけてね。",
    image: "/characters/mii.webp",
    tone: "compass",
    href: "/start",
  },
  hana: {
    id: "hana",
    name: "ハナ",
    role: "マインド・継続",
    areas: ["自己理解", "応援", "続けるコツ"],
    intro: "手が止まりそうな日に、そっと背中を押してくれる。",
    image: "/characters/hana.webp",
    tone: "support",
    href: "/start#mind",
  },
  ao: {
    id: "ao",
    name: "アオ",
    role: "AI・戦略",
    areas: ["AI活用", "戦略設計", "効率化"],
    intro: "考えを整理したいときは、アオとAIに相談しよう。",
    image: "/characters/ao.webp",
    tone: "compass",
    href: "/ai",
  },
  luku: {
    id: "luku",
    name: "ルク",
    role: "リサーチ・分析",
    areas: ["情報収集", "トレンド", "数字を読む"],
    intro: "新しいヒントや、うまくいっている発信を見つけてくる。",
    image: "/characters/luku.webp",
    tone: "trend",
    href: "/month-05",
  },
  moko: {
    id: "moko",
    name: "モコ",
    role: "クリエイティブ",
    areas: ["投稿制作", "写真・動画", "世界観"],
    intro: "投稿づくりと、あなたらしい見せ方の担当。",
    image: "/characters/moko.webp",
    tone: "spark",
    href: "/month-04",
  },
};

export const crewOrder: CharacterId[] = ["mii", "hana", "ao", "luku", "moko"];
