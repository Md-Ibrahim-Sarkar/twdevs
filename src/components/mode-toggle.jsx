"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const ModeChange = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Match the animation duration

    setMode(!mode);
    setTheme(mode ? "light" : "dark");
  };

  return (
    <>
      <div onClick={ModeChange} className="cursor-pointer">
        {mode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-sun transition-transform ${
              isAnimating ? "rotate-animation" : ""
            }`}
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-moon transition-transform ${
              isAnimating ? "rotate-animation" : ""
            }`}
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </div>
      <style jsx>{`
        .rotate-animation {
          animation: rotate 0.3s ease-in-out;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
