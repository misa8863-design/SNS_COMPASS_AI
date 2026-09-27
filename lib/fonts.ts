import { Noto_Sans_JP, Zen_Maru_Gothic } from "next/font/google";

/** 見出し：丸みのある Zen Maru Gothic / 本文：読みやすさ優先の Noto Sans JP */
export const maru = Zen_Maru_Gothic({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-maru",
});

export const noto = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto",
});
