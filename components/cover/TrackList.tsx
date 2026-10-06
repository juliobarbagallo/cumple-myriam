import { tracks } from "@/lib/invitation";

export function TrackList() {
  return (
    <aside
      data-reveal
      className="gold-border mx-auto w-full max-w-sm rounded-sm bg-black/85 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-4 lg:mx-0 lg:max-w-none"
    >
      <h2 className="mb-3 text-center font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold-light)]">
        Incluye los siguientes éxitos
      </h2>
      <ol className="space-y-2 text-sm">
        {tracks.map((track, i) => (
          <li key={track.title} className="flex gap-2 leading-snug">
            <span className="shrink-0 text-[var(--gold)]" aria-hidden>
              ♪
            </span>
            <span>
              <span className="font-semibold text-[var(--gold-light)]">
                {i + 1}. {track.title}
              </span>{" "}
              <span className="text-white/85">{track.subtitle}</span>
            </span>
          </li>
        ))}
      </ol>
    </aside>
  );
}
