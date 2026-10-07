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
      className={`inline-flex min-h-11 items-center justify-center rounded-sm border-2 border-[var(--gold)] bg-[var(--gold)]/10 px-8 py-3 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold-light)] shadow-[0_0_24px_rgba(212,175,55,0.15)] transition hover:bg-[var(--gold)]/20 hover:shadow-[0_0_32px_rgba(212,175,55,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] ${className}`}
    >
      Confirmar asistencia
    </a>
  );
}
