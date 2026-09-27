import { PaperPlane } from "./CompassMark";

/** 航路型のプログレスバー。点線の航路の上を紙飛行機が進む */
export function ProgressBar({
  value,
  label,
  className,
  showPlane = true,
}: {
  value: number; // 0–1
  label: string;
  className?: string;
  showPlane?: boolean;
}) {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100);
  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline justify-between gap-3 text-sm">
        <span className="font-medium text-guide">{label}</span>
        <span className="font-maru text-lg font-bold text-compass-700">
          {pct}
          <span className="ml-0.5 text-xs">%</span>
        </span>
      </div>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label={label}
        className="relative h-2.5 rounded-full bg-[repeating-linear-gradient(90deg,#E7DAC6_0_6px,transparent_6px_11px)]"
      >
        <div className="absolute inset-y-0 left-0 rounded-full bg-compass" style={{ width: `${pct}%` }} />
        {showPlane && (
          <PaperPlane
            className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-compass-700"
            style={{ left: `${Math.max(3, Math.min(97, pct))}%` }}
          />
        )}
      </div>
    </div>
  );
}
