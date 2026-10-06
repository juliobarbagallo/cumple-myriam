"use client";

import Image from "next/image";

export function PortraitSpotlight() {
  return (
    <div
      data-reveal
      className="relative mx-auto w-full max-w-[min(100%,22rem)] sm:max-w-[26rem] lg:max-w-none lg:px-2"
    >
      <div className="absolute -inset-3 rounded-lg bg-[radial-gradient(circle,rgba(255,210,120,0.22),transparent_70%)] blur-md" />
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.55)] ring-1 ring-[rgba(212,175,55,0.35)]">
        <Image
          src="/myriam-album-portrait.jpg"
          alt="Myriam"
          fill
          priority
          className="object-cover object-[center_18%]"
          sizes="(max-width: 768px) 90vw, 380px"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#2a0509]/80 to-transparent" />
      </div>
    </div>
  );
}
