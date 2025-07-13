import React from "react";
import { useDigitalRain } from "@/hooks/useDigitalRain";

const DigitalRainBackground: React.FC = () => {
  const digitalRainRef = useDigitalRain();

  return <div ref={digitalRainRef} className="digital-rain"></div>;
};

export default DigitalRainBackground;
