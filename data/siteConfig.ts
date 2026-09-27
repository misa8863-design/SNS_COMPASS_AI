/**
 * サイト全体の設定。
 * 動画・CTAリンク・外部URLなどはここだけを変更すれば反映されます。
 */

export interface HitArea {
  /** すべて動画に対する % （0–100）。動画コンテナは動画実寸の比率に固定されているため、全ブレークポイントで一致します */
  left: number;
  top: number;
  width: number;
  height: number;
}

export const siteConfig = {
  name: "SNS COMPASS",
  description: "SNS COMPASS 受講生専用サイト。COMPASS CREWと一緒に、6か月のSNSの旅へ。",
  hero: {
    video: "/videos/sns-compass-hero.mp4",
    poster: "/images/sns-compass-hero-poster.webp",
    /** 提供動画の実寸（736×400）。16:9ではないため必ず実寸比を使う */
    width: 736,
    height: 400,
    cta: {
      label: "今日の学習をはじめる",
      href: "/start",
      /**
       * 動画内「今日の学習をはじめる →」ボタンの位置。
       * 提供動画の全フレーム（6fpsで36枚）を解析し、ボタン外形が
       * x:22–257px / y:287–328px（736×400中）で固定であることを確認して算出。
       * 動画を差し替えたらここを再計測してください。
       */
      hitArea: { left: 2.99, top: 71.75, width: 32.07, height: 10.5 } satisfies HitArea,
      /** ブレークポイント別に微調整したい場合のみ指定（未指定なら hitArea を使用） */
      hitAreaMd: undefined as HitArea | undefined,
      hitAreaLg: undefined as HitArea | undefined,
    },
  },
  /** 受講生向けの外部リンク（サポート窓口など） */
  links: {
    question: "#",
    community: "#",
  },
  course: {
    durationLabel: "6か月",
  },
} as const;
