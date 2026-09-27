import type { AiTool } from "@/lib/types";

/** SNS COMPASS AI の各機能。現段階は外部AIページへ遷移します。 */
export const aiTools: AiTool[] = [
  { id: "ai-idea", title: "投稿アイデアを考える", description: "テーマを伝えると、投稿ネタを一緒に出してくれます", example: "「30代の転職」をテーマに、投稿ネタを10個ください", url: "#" },
  { id: "ai-profile", title: "プロフィールを考える", description: "あなたの強みから、伝わる自己紹介文を提案します", example: "看護師歴8年、今は在宅ワーク。プロフィール文を考えて", url: "#" },
  { id: "ai-target", title: "ターゲットを整理する", description: "届けたい人の悩みや、よく見ている情報を洗い出します", example: "子育て中で副業を始めたい人の悩みを整理して", url: "#" },
  { id: "ai-write", title: "投稿文章を作る", description: "メモや箇条書きから、読みやすい投稿文に整えます", example: "このメモをThreads向けの投稿にして", url: "#" },
  { id: "ai-review", title: "投稿を添削する", description: "書いた投稿を、伝わりやすさの観点で見直します", example: "この投稿、最初の1行をもっと読みたくなる形にして", url: "#" },
  { id: "ai-analyze", title: "分析を手伝う", description: "インサイトの数字から、次に試すことを提案します", example: "先週の数字です。伸びた理由と次の一手を教えて", url: "#" },
];
