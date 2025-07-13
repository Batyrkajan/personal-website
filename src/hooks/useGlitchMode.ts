import { useState, useEffect } from "react";

const SECRET_CODE = "hackme";

export const useGlitchMode = () => {
  const [isGlitchMode, setIsGlitchMode] = useState(false);
  const [typedKeys, setTypedKeys] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1 && e.key.match(/[a-z]/)) {
        setTypedKeys((prev) => {
          const newKeys = (prev + e.key).slice(-SECRET_CODE.length);

          if (newKeys === SECRET_CODE) {
            setIsGlitchMode(true);

            const audio = new Audio("/glitch.mp3");
            audio.volume = 0.3;
            audio.play().catch(() => {});

            setTimeout(() => {
              setIsGlitchMode(false);
            }, 5000);
          }

          return newKeys;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { isGlitchMode };
};
