"use client";

import { ReactNode } from "react";

interface CyberCardProps {
  children: ReactNode;
  className?: string;
}

const CyberCard = ({ children, className = "" }: CyberCardProps) => {
  return (
    <div
      className={`cyber-card p-6 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg transition-all duration-300 hover:border-[var(--neon-cyan)] hover:shadow-[0_0_10px_var(--neon-cyan)] ${className}`}>
      {children}
    </div>
  );
};

export default CyberCard;
