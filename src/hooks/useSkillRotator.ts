import { useState, useEffect } from "react";

interface Skill {
  name: string;
  color: string;
}

export const useSkillRotator = (skills: Skill[]) => {
  const [activeTag, setActiveTag] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTag((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills]);

  return { activeTag };
};
