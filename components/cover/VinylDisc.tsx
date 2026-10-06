export function VinylDisc() {
  return (
    <div
      data-vinyl
      className="relative mx-auto aspect-square w-44 shrink-0 drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)] sm:w-52 md:w-56"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,#333,#0a0a0a_55%,#1a1a1a)] shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-[18%] rounded-full border border-white/10" />
        <div className="absolute inset-[32%] rounded-full border border-white/5" />
        <div className="absolute inset-[44%] rounded-full border border-white/5" />
        <div className="absolute left-1/2 top-1/2 flex h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#f4e4bc] via-[#d4af37] to-[#9a7b1a] text-center shadow-inner">
          <span className="font-[family-name:var(--font-display)] text-[0.45rem] font-bold leading-tight text-[#2a0509] sm:text-[0.5rem]">
            Myriam
          </span>
          <span className="font-[family-name:var(--font-display)] text-lg font-black leading-none text-[#2a0509]">
            60
          </span>
          <span className="font-[family-name:var(--font-display)] text-[0.35rem] font-semibold uppercase tracking-wide text-[#2a0509] sm:text-[0.4rem]">
            Grandes Éxitos
          </span>
        </div>
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2a0509]" />
      </div>
    </div>
  );
}
