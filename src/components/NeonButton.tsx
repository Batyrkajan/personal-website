"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface NeonButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  "data-spray"?: string;
}

const NeonButton = ({ href, children, className = "", ...props }: NeonButtonProps) => {
  return (
    <Link
      href={href}
      className={`neon-btn px-6 py-3 rounded-md font-medium tracking-wider font-[var(--font-orbitron)] spray-tag ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NeonButton;
