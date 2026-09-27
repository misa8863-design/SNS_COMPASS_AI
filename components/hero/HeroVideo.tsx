"use client";

import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";
import { Pause, Play } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { HeroClickableCTA } from "./HeroClickableCTA";

/**
 * FV。提供されたGrok動画をそのまま使い、Web側から文字やキャラクターは重ねない。
 * - コンテナは動画実寸（736:400）の aspect-ratio → CLSゼロ・CTA位置がどの幅でも一致
 * - poster を preload して LCP を確保
 * - prefers-reduced-motion の場合は自動再生しない
 */
export function HeroVideo({ ctaHref, ctaLabel }: { ctaHref: string; ctaLabel: string }) {
  const { video, poster, width, height, cta } = siteConfig.hero;
  preload(poster, { as: "image", fetchPriority: "high" });

  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      el.pause();
      setPaused(true);
      return;
    }
    el.play().catch(() => setPaused(true));
  }, []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play().then(() => setPaused(false)).catch(() => {});
    } else {
      el.pause();
      setPaused(true);
    }
  };

  return (
    <section aria-label="SNS COMPASS ようこそ" className="relative">
      <div
        className="relative w-full overflow-hidden bg-ivory lg:rounded-panel lg:shadow-lift"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          width={width}
          height={height}
          aria-label="COMPASS CREWが旅立つ様子のアニメーション。あなたらしい発信の方向を、ここから見つけよう。"
        >
          <source src={video} type="video/mp4" />
        </video>

        <HeroClickableCTA
          href={ctaHref}
          label={ctaLabel}
          area={cta.hitArea}
          areaMd={cta.hitAreaMd}
          areaLg={cta.hitAreaLg}
        />

        {/* 動きを止めたい人のための一時停止（WCAG 2.2.2）。動画の邪魔をしない右下の小さなボタン */}
        <button
          type="button"
          onClick={toggle}
          className="focus-ring absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-white/70 text-guide/70 backdrop-blur transition hover:bg-white hover:text-guide sm:bottom-3 sm:right-3"
          aria-label={paused ? "動画を再生する" : "動画を一時停止する"}
        >
          {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
        </button>
      </div>
    </section>
  );
}
