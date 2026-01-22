"use client";

import { useEffect, useRef } from "react";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";

interface RevealPresentationProps {
  children: React.ReactNode;
}

export default function RevealPresentation({
  children,
}: RevealPresentationProps) {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initReveal = async () => {
      if (deckRef.current && !revealInstanceRef.current) {
        const Reveal = (await import("reveal.js")).default;
        const RevealHighlight = (await import("reveal.js/plugin/highlight/highlight.esm.js"))
          .default;

        revealInstanceRef.current = new Reveal(deckRef.current, {
          // Core configuration
          hash: true,
          transition: "slide",
          transitionSpeed: "default",

          plugins: [RevealHighlight],

          // Display options
          controls: true,
          progress: true,
          center: true,
          slideNumber: false,
          showSlideNumber: "all",

          // Navigation
          keyboard: true,
          overview: true,
          touch: true,
          loop: false,
          rtl: false,
          navigationMode: "default",

          // Behavior
          shuffle: false,
          fragments: true,
          fragmentInURL: true,
          embedded: false,
          help: true,
          pause: true,

          // Presentation size
          width: 960,
          height: 700,
          margin: 0.04,
          minScale: 0.2,
          maxScale: 2.0,

          // Accessibility
          disableLayout: false,
          mouseWheel: false,
          hideInactiveCursor: true,
          hideCursorTime: 5000,
        });

        await revealInstanceRef.current.initialize();
      }
    };

    initReveal();

    // Cleanup function
    return () => {
      if (revealInstanceRef.current) {
        revealInstanceRef.current.destroy();
        revealInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">{children}</div>
    </div>
  );
}
