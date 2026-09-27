import type { BonusItem } from "@/lib/types";

export const bonusItems: BonusItem[] = [
  { id: "b-01", title: "投稿テンプレート", description: "Canvaでそのまま使える、やさしいトーンの投稿デザイン20種", format: "Canva", url: "#" },
  { id: "b-02", title: "初期設計シート", description: "目的・ターゲット・発信テーマを1枚に整理できるシート", format: "Notion", url: "#" },
  { id: "b-03", title: "プロフィール設計シート", description: "名前・肩書き・自己紹介文を順番に埋めるだけ", format: "Google ドキュメント", url: "#" },
  { id: "b-04", title: "AIプロンプト集", description: "コピーして使える、SNS発信のためのAIへの頼み方40選", format: "Notion", url: "#" },
  { id: "b-05", title: "リサーチシート", description: "お手本アカウントの研究を記録する、ルク監修のシート", format: "Google スプレッドシート", url: "#" },
  { id: "b-06", title: "投稿ネタ100", description: "ネタに困った日に開く、ジャンル別の投稿アイデア集", format: "PDF", url: "#", unlockMonth: 4 },
  { id: "b-07", title: "分析シート", description: "毎週の数字を入れると、変化がグラフでわかるシート", format: "Google スプレッドシート", url: "#", unlockMonth: 5 },
];
