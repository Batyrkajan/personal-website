import React from "react";

interface MouseGlowProps {
  mousePosition: { x: number; y: number };
  isGlowVisible: boolean;
}

const MouseGlow: React.FC<MouseGlowProps> = ({
  mousePosition,
  isGlowVisible,
}) => {
  return (
    <div
      className={`mouse-glow ${isGlowVisible ? "visible" : ""}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    />
  );
};

export default MouseGlow;
