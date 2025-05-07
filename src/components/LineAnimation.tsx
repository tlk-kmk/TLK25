"use client";

import { useEffect } from 'react';

// Easing function (ease-in-out-cubic)
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function LineAnimation() {
  useEffect(() => {
    const lines = document.querySelectorAll('.line'); // Changed selector to class
    const animationDuration = 4000; // 4 seconds in milliseconds

    lines.forEach((line) => {
      function step(timestamp: number) {
        const progress = (timestamp % animationDuration) / animationDuration;
        let width: number;

        if (progress < 0.5) {
          // Expanding
          width = 16 + (32 - 16) * easeInOutCubic(progress * 2); // Multiply progress to fit 0-1 range for this half
        } else {
          // Contracting
          width = 32 - (32 - 16) * easeInOutCubic((progress - 0.5) * 2); // Adjust progress to fit 0-1 range for this half
        }

        // Cast the line to HTMLElement to access the style property
        (line as HTMLElement).style.width = `${width}px`;
        requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
}
