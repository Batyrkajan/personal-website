"use client";

import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel: string;
}

const SocialLink = ({ href, children, className = "", ariaLabel }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-500 hover:text-[var(--neon-cyan)] transition-all duration-300 ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default SocialLink;
