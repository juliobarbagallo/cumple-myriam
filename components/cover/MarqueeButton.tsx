"use client";

import Link from "next/link";

const BULB_COUNT = 16;

export function MarqueeButton() {
  return (
    <Link
      href="/invitacion"
      data-marquee-btn
      className="group relative z-20 mx-auto block max-w-lg rounded-full px-2 py-3 text-center opacity-100 outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--velvet-deep)]"
    >
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-between px-1"
        aria-hidden
      >
        {Array.from({ length: BULB_COUNT }).map((_, i) => (
          <span
            key={i}
            data-bulb
            className="h-2 w-2 rounded-full bg-[var(--gold)] shadow-[0_0_8px_rgba(212,175,55,0.9)]"
          />
        ))}
      </span>
      <span className="relative block rounded-full border-2 border-[var(--gold)] bg-black/90 px-6 py-4 shadow-[0_0_40px_rgba(212,175,55,0.25)] group-hover:bg-black group-hover:shadow-[0_0_56px_rgba(212,175,55,0.4)]">
        <span className="block font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-widest text-[var(--gold-light)] sm:text-xl">
          Abrir invitación
        </span>
        <span className="mt-1 block text-xs leading-snug tracking-wide text-white/85 sm:text-sm">
          Lugar, horario y alias para el regalo →
        </span>
      </span>
    </Link>
  );
}
