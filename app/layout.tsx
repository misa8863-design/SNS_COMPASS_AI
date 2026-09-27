import type { Metadata, Viewport } from "next";
import "./globals.css";
import { maru, noto } from "@/lib/fonts";
import { siteConfig } from "@/data/siteConfig";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getCurrentMonth, getMonthStatus } from "@/lib/progress";
import { months } from "@/data/course";

export const metadata: Metadata = {
  title: { default: `${siteConfig.name} 受講生サイト`, template: `%s｜${siteConfig.name}` },
  description: siteConfig.description,
  robots: { index: false, follow: false }, // 会員サイトのため検索エンジンに載せない
};

export const viewport: Viewport = {
  themeColor: "#F9F4EC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const monthStatuses = Object.fromEntries(months.map((m) => [m.number, getMonthStatus(m.number)]));
  const current = getCurrentMonth();
  return (
    <html lang="ja" className={`${maru.variable} ${noto.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="focus-ring sr-only z-[60] rounded-full bg-white px-4 py-2 font-bold text-guide focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          本文へスキップ
        </a>
        <Sidebar monthStatuses={monthStatuses} />
        <Header monthStatuses={monthStatuses} currentLabel={`MONTH 0${current.number}`} />
        <div className="lg:pl-[272px]">
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
