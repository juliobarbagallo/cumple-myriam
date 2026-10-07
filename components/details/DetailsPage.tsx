"use client";

import Link from "next/link";
import { useDetailsAnimations } from "@/components/animations/useCoverAnimations";
import { CopyAliasButton } from "@/components/details/CopyAliasButton";
import { RsvpButton } from "@/components/RsvpButton";
import { donation, eventDetails } from "@/lib/invitation";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eventDetails.mapsQuery)}`;

export function DetailsPage() {
  const rootRef = useDetailsAnimations();

  return (
    <main
      ref={rootRef}
      className="mx-auto min-h-dvh max-w-2xl px-4 py-10 sm:px-6 sm:py-14"
    >
      <header className="mb-10 text-center">
        <p className="font-[family-name:var(--font-script)] text-3xl text-[var(--gold-light)] sm:text-4xl">
          Grandes Éxitos Vol. 60
        </p>
        <h1 className="gold-text mt-2 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
          Detalles de la fiesta
        </h1>
        <p className="mt-3 text-white/85">
          Gracias por abrir la invitación. Acá están todos los datos para
          celebrar con Myriam.
        </p>
      </header>

      <div className="space-y-4">
        <article
          data-detail-card
          className="gold-border rounded-sm bg-black/70 p-5 backdrop-blur-sm"
        >
          <h2 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
            Cuándo
          </h2>
          <p className="mt-2 text-xl text-white sm:text-2xl">
            {eventDetails.dateLabel} {eventDetails.year}
          </p>
        </article>

        <article
          data-detail-card
          className="gold-border rounded-sm bg-black/70 p-5 backdrop-blur-sm"
        >
          <h2 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
            Horario
          </h2>
          <p className="mt-2 text-xl text-white sm:text-2xl">
            {eventDetails.time}
          </p>
        </article>

        <article
          data-detail-card
          className="gold-border rounded-sm bg-black/70 p-5 backdrop-blur-sm"
        >
          <h2 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
            Lugar
          </h2>
          <p className="mt-2 text-xl text-white">{eventDetails.venue}</p>
          <p className="text-white/85">{eventDetails.address}</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)] underline decoration-[var(--gold)] underline-offset-4 hover:text-white"
          >
            Cómo llegar →
          </a>
        </article>

        <article
          data-detail-card
          className="gold-border rounded-sm bg-black/70 p-5 backdrop-blur-sm"
        >
          <h2 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
            Regalo solidario
          </h2>
          <p className="mt-3 leading-relaxed text-white/90">{donation.message}</p>
          <p className="mt-4 text-white/90">{donation.aliasIntro}</p>
          <p className="mt-2 rounded-sm bg-[var(--velvet-deep)] px-4 py-3 font-mono text-lg tracking-wide text-[var(--gold-light)]">
            {donation.alias}
          </p>
          <div className="mt-4">
            <CopyAliasButton alias={donation.alias} />
          </div>
        </article>
      </div>

      <div className="mt-10 flex flex-col items-center gap-6 text-center">
        <RsvpButton />
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/30 px-6 py-2 text-sm uppercase tracking-wider text-white/90 transition hover:border-[var(--gold)] hover:text-[var(--gold-light)]"
        >
          ← Volver a la tapa del disco
        </Link>
      </div>
    </main>
  );
}
