"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import DigitalRain from "@/components/DigitalRain";
import { skills } from "@/data/skills";
import NeonButton from "@/components/NeonButton";

// Secret code for Easter egg
const SECRET_CODE = "hackme";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTag, setActiveTag] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isGlowVisible, setIsGlowVisible] = useState(false);
  const [isGlitchMode, setIsGlitchMode] = useState(false);
  const typedKeys = useRef("");


  // Cycle through skills automatically
  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setActiveTag((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Mouse movement for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsGlowVisible(true);

      // Hide glow after 2 seconds of inactivity
      const timeout = setTimeout(() => {
        setIsGlowVisible(false);
      }, 2000);

      return () => clearTimeout(timeout);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Easter egg keyboard detection
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only track lowercase letters
      if (e.key.length === 1 && e.key.match(/[a-z]/)) {
        typedKeys.current = (typedKeys.current + e.key).slice(-SECRET_CODE.length);

        // Check if secret code is typed
        if (typedKeys.current === SECRET_CODE) {
          setIsGlitchMode(true);

          // Play glitch sound
          const audio = new Audio("/glitch.mp3");
          audio.volume = 0.3;
          audio.play().catch(() => {}); // Ignore errors if sound can't play

          // Automatically turn off glitch mode after 5 seconds
          setTimeout(() => {
            setIsGlitchMode(false);
          }, 5000);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${
        isGlitchMode ? "glitch-mode" : ""
      }`}
    >
      <Navbar />

      {/* Mouse glow effect */}
      <div
        className={`mouse-glow ${isGlowVisible ? "visible" : ""}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Easter egg glitch effect overlay */}
      {isGlitchMode && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute inset-0 bg-[var(--neon-purple)] opacity-10 animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] mix-blend-overlay opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[var(--font-orbitron)] text-[var(--neon-cyan)] text-4xl text-center neon-text">
            SYSTEM HACKED
          </div>
        </div>
      )}

      <main>
        {/* Hero Section with Cyberpunk Neon styling */}
        <div className="relative min-h-screen flex items-center overflow-hidden">
          {/* Digital rain background effect */}
          <DigitalRain />

          {/* Background grid effect */}
          <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djRoLTJ2LTRoLTR2LTJoNHYtNGgydjRoNHYyaC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 z-0"></div>

          {/* Glowing orb - decorative element */}
          <div
            className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[var(--neon-purple)] opacity-5 blur-[80px] animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-[var(--font-orbitron)] tracking-wider text-[var(--neon-cyan)]">
                    BUILDING THE FUTURE FROM THE EDGE OF THE SYSTEM <span className="text-sm text-gray-500 italic ml-2">
  (This website is currently a work in progress)
</span>

                  </h2>

                  {/* Added spray tag class to heading for hover effect */}
                  <h1
                    className="text-4xl md:text-7xl font-bold tracking-tight font-[var(--font-orbitron)] spray-tag spray-tag-magenta "
                    data-spray="BATYR"
                  >
                    I&apos;M{" "}
                    <span className="neon-text-magenta hover:text-[var(--neon-magenta)] text-5xl md:text-7xl leading-tight">
  BATYR
</span>

                  </h1>

                  <div className="h-16">
                    <p className="text-xl sm:text-3xl text-gray-400">
                      <span
                        className="inline-block transition-all duration-500"
                        style={{
                          color: skills[activeTag].color,
                          textShadow: `0 0 5px ${skills[activeTag].color}, 0 0 10px ${skills[activeTag].color}`,
                        }}
                      >
                        {skills[activeTag].name}
                      </span>
                    </p>
                  </div>

                  <p className="text-lg sm:text-xl text-gray-400 max-w-3xl border-l-4 border-[var(--neon-cyan)] pl-4">
  I&apos;m not here to blend in. I&apos;m here to{" "}
  <strong>build, disrupt, and dominate</strong> — using{" "}
  algorithms, systems thinking, and storytelling as my tools. I
  combine{" "}
  <strong>AI, automation, business intuition, and design</strong>{" "}
  to craft solutions that{" "}
  <strong>look sharp, move fast, and scale smart</strong>.<br />
  <br />
  Born in Turkmenistan. Forged through discipline. Now mastering{" "}
  <strong>AI, entrepreneurship, and strategic design</strong> in
  the U.S. Every project, every decision, every prototype I build
  is part of a larger plan:{" "}
  <strong>to reshape systems from within</strong>.<br />
  <br />
  If you&apos;re building something{" "}
  <strong>bold</strong>,{" "}
  <strong>intelligent</strong>, and{" "}
  <strong>unapologetic</strong> — I want in.
</p>


                  {/* Live status element */}
                  <div className="live-status inline-block">
                    <span className="status-indicator"></span>
                    <span>
                      CURRENTLY: Building Next-Level Interfaces & AI Tools
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* Added spray tag to create spray paint effect */}
                  <NeonButton href="/projects" data-spray="PROJECTS">
                    VIEW PROJECTS
                  </NeonButton>
                  <NeonButton
                    href="/contact"
                    className="neon-btn-magenta spray-tag-magenta"
                    data-spray="CONNECT"
                  >
                    CONTACT ME
                  </NeonButton>
                </div>

                {/* Social links with hover glow */}
                <div className="flex space-x-6 pt-4">
                  <a
                    href="https://github.com/Batyrkajan"
                    className="hover-glow text-gray-500 hover:text-[var(--neon-cyan)]"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/batyr-mammedesenov-62b715317/"
                    className="hover-glow text-gray-500 hover:text-[var(--neon-cyan)]"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/pro100batyrka/"
                    className="hover-glow text-gray-500 hover:text-[var(--neon-cyan)]"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2 hidden lg:block">
                <div className="relative w-full aspect-square overflow-hidden rounded-md">
                  {/* Enhanced with glitching hologram effect and animated neon border */}
                  <div className="relative w-full h-full border-2 border-[var(--neon-cyan)] neon-border-animated rounded-md overflow-hidden glitch-image">
                    <div className="absolute top-0 left-0 w-full h-full bg-[var(--card-bg)] z-10 opacity-30"></div>
                    <div className="absolute top-5 left-5 w-full h-full border-2 border-[var(--neon-magenta)] z-0 rounded-md"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                      <span className="text-xl font-[var(--font-orbitron)] text-[var(--neon-cyan)]">
                        VISIBLE IDENTITY: IN DEVELOPMENT
                      </span>
                      <span className="text-md font-[var(--font-orbitron)] text-[var(--neon-magenta)]">
                        INTERNAL SYSTEM: 99% LOADED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-sm text-gray-400">SCROLL</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
            <div className="w-2 h-2 bg-[var(--neon-cyan)] rounded-full animate-bounce"></div>
          </div>
        </div>
      </main>

      {/* Digital signature tag */}
      <div className="digital-signature mb-8">BATYR::SYSTEM</div>

      {/* Now Playing Widget */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-400 opacity-50 hover:opacity-100 transition-opacity">
        <span className="font-mono">🎧 Synthwave Loading...</span>
      </div>

      {/* Easter egg hint - hidden but can be revealed */}
      <div className="fixed bottom-4 left-4 text-xs text-gray-600 opacity-20 hover:opacity-100 transition-opacity">
        <span className="font-mono">
          Type &quot;hackme&quot; for a surprise
        </span>
      </div>
    </div>
  );
}
