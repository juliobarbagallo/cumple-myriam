import { rsvpFormUrl } from "@/lib/invitation";

type Props = {
  className?: string;
};

export function RsvpButton({ className = "" }: Props) {
  return (
    <a
      href={rsvpFormUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-rsvp-btn
      data-cta-primary
      className={`inline-flex min-h-12 w-full max-w-lg items-center justify-center rounded-sm border-2 border-[var(--gold)] bg-[var(--gold)]/20 px-10 py-4 font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-[0.22em] text-[var(--gold-light)] shadow-[0_0_32px_rgba(212,175,55,0.35)] transition hover:bg-[var(--gold)]/30 hover:shadow-[0_0_48px_rgba(212,175,55,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] sm:text-lg ${className}`}
    >
      Confirmar asistencia
    </a>
  );
}
