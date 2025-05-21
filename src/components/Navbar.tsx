"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-[var(--card-bg)] bg-opacity-80 backdrop-blur-md border-b border-[var(--border-color)] shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          : "bg-[rgba(10,10,10,0.3)] backdrop-blur-sm"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="font-bold text-2xl font-[var(--font-orbitron)] tracking-widest neon-text"
            >
              BATYR
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[var(--neon-cyan)] text-sm font-medium transition-all duration-300 hover:text-[var(--neon-cyan)]"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[var(--neon-cyan)] text-sm font-medium transition-all duration-300 hover:text-[var(--neon-cyan)]"
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[var(--neon-cyan)] text-sm font-medium transition-all duration-300 hover:text-[var(--neon-cyan)]"
            >
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[var(--neon-magenta)] text-sm font-medium transition-all duration-300 hover:text-[var(--neon-magenta)]"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[var(--neon-cyan)] hover:bg-[var(--card-bg)] transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div
          className="sm:hidden bg-[var(--card-bg)] bg-opacity-90 backdrop-blur-md border-t border-[var(--border-color)]"
          id="mobile-menu"
        >
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-[var(--neon-cyan)] hover:bg-[#151515] hover:text-[var(--neon-cyan)] text-base font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-[var(--neon-cyan)] hover:bg-[#151515] hover:text-[var(--neon-cyan)] text-base font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-[var(--neon-cyan)] hover:bg-[#151515] hover:text-[var(--neon-cyan)] text-base font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </Link>
            <Link
              href="/contact"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-[var(--neon-magenta)] hover:bg-[#151515] hover:text-[var(--neon-magenta)] text-base font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
