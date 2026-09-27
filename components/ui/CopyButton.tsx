"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ text, label = "コピー" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } catch {
          /* クリップボード非対応環境では何もしない */
        }
      }}
      className="focus-ring inline-flex min-h-[36px] items-center gap-1.5 rounded-full px-3 text-xs font-bold text-compass-700 transition hover:bg-compass-50"
    >
      {done ? <Check aria-hidden className="h-3.5 w-3.5" /> : <Copy aria-hidden className="h-3.5 w-3.5" />}
      <span aria-live="polite">{done ? "コピーしました" : label}</span>
    </button>
  );
}
