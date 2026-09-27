/** 宝箱。ふたは hover（親の .group）で少しだけ開く */
export function TreasureChest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" aria-hidden="true" className={className}>
      <ellipse cx="60" cy="92" rx="46" ry="5" fill="#F2E9DB" />
      <rect x="16" y="46" width="88" height="42" rx="8" fill="#F6C64E" />
      <rect x="16" y="46" width="88" height="10" fill="#E9B43A" />
      <rect x="52" y="46" width="16" height="42" fill="#FFF9E9" opacity=".7" />
      <g className="origin-[60px_46px] transition-transform duration-300 ease-out group-hover:-rotate-[10deg]">
        <path d="M16 46V36c0-12 10-20 22-20h44c12 0 22 8 22 20v10Z" fill="#F7A8C6" />
        <rect x="52" y="16" width="16" height="30" fill="#FFF9E9" opacity=".7" />
      </g>
      <rect x="54" y="50" width="12" height="14" rx="3" fill="#6B4C3B" />
      <circle cx="60" cy="56" r="2" fill="#F6C64E" />
      <path d="M92 18l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="#67D7CF" />
      <path d="M24 12l1.5 3.5 3.5 1.5-3.5 1.5L24 22l-1.5-3.5L19 17l3.5-1.5Z" fill="#5CB8FF" />
    </svg>
  );
}
