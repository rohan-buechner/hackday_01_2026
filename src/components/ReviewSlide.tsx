"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const reviews = [
  "Screenshot 2026-01-22 at 15.53.00.png",
  "Screenshot 2026-01-22 at 15.53.56.png",
  "Screenshot 2026-01-22 at 15.54.38.png",
  "Screenshot 2026-01-22 at 15.55.03.png",
  "Screenshot 2026-01-22 at 15.55.08.png",
  "Screenshot 2026-01-22 at 15.57.19.png",
  "Screenshot 2026-01-22 at 15.57.30.png",
  "Screenshot 2026-01-22 at 15.57.36.png",
  "Screenshot 2026-01-22 at 16.28.16.png",
  "Screenshot 2026-01-22 at 16.29.07.png",
  "Screenshot 2026-01-22 at 16.29.42.png",
  "Screenshot 2026-01-22 at 15.58.07.png",

  "Screenshot 2026-01-22 at 16.33.06.png",
  "Screenshot 2026-01-22 at 16.33.41.png",
  "Screenshot 2026-01-22 at 16.34.12.png",

  "Screenshot 2026-01-22 at 16.26.07.png",
];

// Helper to generate "chaotic" styles
const getChaoticStyle = (index: number) => {
  const seed = index * 1337;
  const random = (s: number) => {
    const x = Math.sin(s) * 10000;
    return x - Math.floor(x);
  };

  const top = 20 + random(seed) * 60; // 20% to 80%
  const left = 20 + random(seed + 1) * 60; // 20% to 80%
  const rotation = (random(seed + 2) - 0.5) * 60; // -30deg to 30deg
  const scale = 0.5 + random(seed + 3) * 0.5; // 0.5 to 1.0

  return {
    position: "absolute" as const,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
    zIndex: index,
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    border: "8px solid white",
    maxWidth: "500px",
  };
};

export default function ReviewSlide() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "800px" }}>
      <h2>
        User Feedback
      </h2>
      {reviews.map((review, index) => (
        <div
          key={review}
          className="fragment"
          style={isMounted ? getChaoticStyle(index) : { position: "absolute", visibility: "hidden" }}
        >
          <img
            src={`/review/${review}`}
            alt={`User Review ${index + 1}`}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      ))}
    </div>
  );
}
