import { useState, useEffect } from "react";

export const useMouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isGlowVisible, setIsGlowVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsGlowVisible(true);

      const timeout = setTimeout(() => {
        setIsGlowVisible(false);
      }, 2000);

      return () => clearTimeout(timeout);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return { mousePosition, isGlowVisible };
};
