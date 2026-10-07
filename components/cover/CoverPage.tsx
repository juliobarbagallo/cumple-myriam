"use client";

import { useCoverAnimations } from "@/components/animations/useCoverAnimations";
import { MarqueeButton } from "@/components/cover/MarqueeButton";
import { RsvpButton } from "@/components/RsvpButton";
import { PortraitSpotlight } from "@/components/cover/PortraitSpotlight";
import { TrackList } from "@/components/cover/TrackList";
import { VinylDisc } from "@/components/cover/VinylDisc";

export function CoverPage() {
  const rootRef = useCoverAnimations();

  return (
    <main
      ref={rootRef}
      className="album-cover-page relative min-h-dvh overflow-x-hidden pb-10"
    >
      <div className="album-cover-stage pointer-events-none absolute inset-0" aria-hidden />
      <div className="album-cover-bokeh pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-4 sm:px-6 sm:pt-6">
        {/* Encabezado tipo boceto: MYRIAM protagonista arriba */}
        <header data-reveal className="relative mb-6 text-center lg:mb-8">
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.32em] text-white/80 sm:absolute sm:right-0 sm:top-1 sm:mb-0 sm:text-xs">
            La vida le queda increíble ♡
          </p>
          <h1 className="gold-text relative inline-block whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(2.75rem,10vw,5rem)] font-black tracking-[0.04em]">
            <span
              className="pointer-events-none absolute -top-6 left-[52%] -translate-x-1/2 text-xl leading-none sm:text-2xl"
              aria-hidden
            >
              👑
            </span>
            MYRIAM
          </h1>
        </header>

        {/* Móvil: foto primero, bien visible */}
        <div className="mb-6 lg:hidden">
          <PortraitSpotlight />
        </div>

        {/* Tres columnas como el boceto */}
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,400px)_minmax(210px,250px)] lg:gap-8">
          <section className="flex flex-col gap-5 lg:pt-2">
            <div data-reveal className="text-center lg:text-left">
              <p className="font-[family-name:var(--font-script)] text-[clamp(2rem,5vw,3rem)] leading-none text-[var(--gold-light)]">
                Grandes Éxitos
              </p>
              <p className="gold-text mt-1 font-[family-name:var(--font-display)] text-[clamp(1.65rem,4vw,2.5rem)] font-bold leading-none">
                Vol. 60
              </p>
              <p className="mx-auto mt-3 max-w-xs font-[family-name:var(--font-script)] text-lg text-white/92 sm:text-xl lg:mx-0">
                Una vida llena de canciones… ¡y lo mejor aún está por venir! ♡
              </p>
            </div>
            <div data-reveal className="flex justify-center lg:justify-start">
              <VinylDisc />
            </div>
          </section>

          <section className="relative z-10 hidden lg:block">
            <PortraitSpotlight />
          </section>

          <section className="relative z-20 lg:pt-6">
            <TrackList />
          </section>
        </div>

        <section className="album-cover-carpet relative z-30 mx-auto mt-8 flex max-w-2xl flex-col items-center gap-5 px-2 pt-8">
          <MarqueeButton />
          <div data-reveal className="relative z-20 flex w-full justify-center">
            <RsvpButton />
          </div>
          <div
            data-reveal
            className="gold-border w-full max-w-lg rounded-sm bg-black/80 px-4 py-2.5 text-center text-xs uppercase tracking-wider text-[var(--gold-light)] sm:text-sm"
          >
            🎤 Invitado especial ★ Saul del Rio ★ ⭐
          </div>
        </section>

        <footer
          data-reveal
          className="relative z-20 mx-auto mt-10 max-w-3xl space-y-3 text-center text-sm leading-relaxed text-white/90 sm:text-base"
        >
          <p>
            Porque no se cumplen 60 años todos los días… se celebran una vida
            llena de amor, alegría, familia, amistad y grandes momentos. ¡Te
            espero! ♡
          </p>
          <div data-reveal className="flex flex-col items-center gap-4 pt-1">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold-light)] sm:text-sm">
              Traé ganas de divertirte | ¡Te espero! ♡
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
