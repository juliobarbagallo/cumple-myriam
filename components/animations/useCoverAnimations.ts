"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useCoverAnimations() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduced = prefersReducedMotion();

      if (!reduced) {
        gsap.to(root.querySelectorAll("[data-vinyl]"), {
          rotation: 360,
          duration: 18,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        gsap.to(root.querySelectorAll("[data-bulb]"), {
          opacity: 0.35,
          duration: 0.45,
          stagger: { each: 0.08, repeat: -1, yoyo: true },
          ease: "sine.inOut",
        });

        gsap.fromTo(
          root.querySelector("[data-marquee-btn]"),
          { scale: 1 },
          {
            scale: 1.03,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          },
        );
      }

      const revealTargets = root.querySelectorAll(
        "[data-reveal]:not([data-marquee-btn])",
      );
      gsap.fromTo(
        revealTargets,
        { opacity: 0, y: reduced ? 0 : 24 },
        {
          opacity: 1,
          y: 0,
          duration: reduced ? 0.3 : 0.9,
          stagger: reduced ? 0 : 0.12,
          ease: "power2.out",
          clearProps: "opacity,transform",
        },
      );
    },
    { scope: rootRef },
  );

  return rootRef;
}

export function useDetailsAnimations() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const reduced = prefersReducedMotion();

      gsap.from(root.querySelectorAll("[data-detail-card]"), {
        opacity: 0,
        y: reduced ? 0 : 20,
        duration: reduced ? 0.25 : 0.65,
        stagger: reduced ? 0 : 0.1,
        ease: "power2.out",
      });
    },
    { scope: rootRef },
  );

  return rootRef;
}
