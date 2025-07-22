"use client";

import { useEffect, useRef } from "react";

const DIGITAL_MATRIX_CHARS =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン";

const DigitalRain = () => {
  const digitalRainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = digitalRainRef.current;
    if (!container) return;

    const createRain = () => {
      if (!container) return;
      const containerWidth = container.offsetWidth;
      const columns = Math.floor(containerWidth / 20);

      container.innerHTML = "";

      for (let i = 0; i < columns; i++) {
        const column = document.createElement("div");
        column.className = "digital-rain-column";
        column.style.left = `${Math.floor((i / columns) * 100)}%`;
        column.style.animationDuration = `${Math.random() * 5 + 8}s`;

        const charCount = Math.floor(Math.random() * 20) + 10;
        let chars = "";
        for (let j = 0; j < charCount; j++) {
          chars += DIGITAL_MATRIX_CHARS.charAt(
            Math.floor(Math.random() * DIGITAL_MATRIX_CHARS.length)
          );
        }
        column.textContent = chars;

        container.appendChild(column);
      }
    };

    createRain();

    const resizeObserver = new ResizeObserver(createRain);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return <div ref={digitalRainRef} className="digital-rain"></div>;
};

export default DigitalRain;
