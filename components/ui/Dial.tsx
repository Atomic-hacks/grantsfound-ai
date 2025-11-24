"use client";

type DialProps = {
  label: string;
  value: number;
  size?: number;
};

/**
 * Simple conic gradient dial used for KPI placeholders until charts land.
 */
export function Dial({ label, value, size = 80 }: DialProps) {
  const clamped = Math.min(Math.max(value, 0), 100);
  const gradient = `conic-gradient(#C8A045 ${
    clamped * 3.6
  }deg, rgba(255, 255, 255, 0.1) 0deg)`;

  return (
    <div
      role="img"
      aria-label={`${label} at ${clamped}%`}
      className="flex flex-col items-center text-center text-cloud"
    >
      <div
        className="flex items-center justify-center rounded-full border border-slate/40 bg-slate/80 font-display text-xl"
        style={{
          width: size,
          height: size,
          backgroundImage: gradient,
        }}
      >
        <span className="sr-only">{label}</span>
        <span className="text-gold font-semibold">{clamped}%</span>
      </div>
      <p className="mt-2 text-sm text-cloud/70">{label}</p>
    </div>
  );
}

export default Dial;
