"use client";

import { useState } from "react";

type Props = {
  alias: string;
};

export function CopyAliasButton({ alias }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(alias);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="min-h-11 rounded-sm border border-[var(--gold)] bg-black/60 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)] transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
    >
      {copied ? "¡Alias copiado!" : "Copiar alias"}
    </button>
  );
}
