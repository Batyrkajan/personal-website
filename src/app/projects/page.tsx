"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import DigitalRain from "@/components/DigitalRain";
import CyberCard from "@/components/CyberCard";

import { projects } from "@/data/projects";
import NeonButton from "@/components/NeonButton";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [cardsRefs, setCardsRefs] = useState<HTMLDivElement[]>([]);
  const [mounted, setMounted] = useState(false);

  // Function to add refs
  const addCardRef = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRefs.includes(el)) {
      setCardsRefs((prev) => {
        const newRefs = [...prev];
        newRefs[index] = el;
        return newRefs;
      });
    }
  };

  useEffect(() => {
    setMounted(true);

    // Add scroll animations for each card
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRefs.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [cardsRefs, mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />

      {/* Digital rain background effect */}
      <DigitalRain />

      {/* Background grid effect */}
      <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djRoLTJ2LTRoLTR2LTJoNHYtNGgydjRoNHYyaC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 z-0"></div>

      {/* Glowing orb - decorative element */}
      <div
        className="absolute top-0 left-[30%] w-[600px] h-[600px] rounded-full bg-[var(--neon-purple)] opacity-5 blur-[80px] animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-[7rem]">
        <div className="pb-16">
          <div className="flex items-center mb-12">
            <div className="h-px flex-1 bg-gray-800"></div>
            <h1 className="text-5xl sm:text-7xl font-bold px-4 font-[var(--font-orbitron)] tracking-wider neon-text">
              PROJECTS
            </h1>
            <div className="h-px flex-1 bg-gray-800"></div>
          </div>

          <CyberCard className="neon-border-animated p-6 mb-12">
            <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto">
              Explore my digital creations. Each project is a fusion of
              technology and creativity, pushing the boundaries of what&apos;s
              possible on the web.
            </p>
          </CyberCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <CyberCard
                key={project.id}
                className={`rounded-lg overflow-hidden transform transition-all duration-500 opacity-0 translate-y-10`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  // When active, add a glowing border with the project's color
                  boxShadow:
                    activeProject === project.id
                      ? `0 0 10px ${project.color}, 0 0 20px ${project.color}`
                      : "none",
                  borderColor:
                    activeProject === project.id
                      ? project.color
                      : "var(--border-color)",
                }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{
                      objectFit: "cover",
                      filter: "contrast(1.1) brightness(0.9)",
                    }}
                  />
                  {/* Glitch overlay effect on hover */}
                  {activeProject === project.id && (
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] mix-blend-overlay opacity-80 z-20"></div>
                  )}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div
                      className="text-xs font-medium px-2 py-1 rounded-sm spray-tag"
                      data-spray={`P${project.id.toString().padStart(2, "0")}`}
                      style={{
                        backgroundColor: project.color,
                        color: "black",
                        boxShadow: `0 0 10px ${project.color}`,
                      }}
                    >
                      PROJECT {project.id.toString().padStart(2, "0")}
                    </div>
                  </div>
                  {/* Add status badge if project has a status */}
                  {project.status && (
                    <div className="absolute top-4 right-4 z-20">
                      <div
                        className="text-xs font-medium px-2 py-1 rounded-sm"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.7)",
                          color: project.color,
                          border: `1px solid ${project.color}`,
                          boxShadow: `0 0 5px ${project.color}`,
                        }}
                      >
                        {project.status}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5 relative">
                  <h3
                    className="text-xl font-semibold mb-2 font-[var(--font-orbitron)] tracking-wide"
                    style={{
                      color: project.color,
                      textShadow:
                        activeProject === project.id
                          ? `0 0 5px ${project.color}`
                          : "none",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[var(--card-bg)] text-xs rounded-full border border-[var(--border-color)] hover:border-[var(--neon-cyan)] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between pt-2 border-t border-gray-800">
                    <a
                      href={project.demoUrl}
                      className="text-[var(--neon-cyan)] hover:text-white hover-glow transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LIVE DEMO
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-[var(--neon-cyan)] hover:text-white hover-glow transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB →
                    </a>
                  </div>
                </div>
              </CyberCard>
            ))}
          </div>

          <div className="mt-16 text-center">
            <NeonButton
              href="https://github.com/yourusername"
              data-spray="GITHUB"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              VIEW ALL PROJECTS
            </NeonButton>
          </div>
        </div>
      </main>

      {/* Social Media Links */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CyberCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4 font-[var(--font-orbitron)] text-[var(--neon-cyan)] text-center">
            SOCIAL_CONNECTIONS
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="https://github.com/Batyrkajan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border border-[var(--neon-cyan)] rounded-md hover:bg-[var(--neon-cyan)] hover:bg-opacity-20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.instagram.com/pro100batyrka/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border border-[var(--neon-magenta)] rounded-md hover:bg-[var(--neon-magenta)] hover:bg-opacity-20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/batyr-mammedesenov-62b715317/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border border-[var(--neon-purple)] rounded-md hover:bg-[var(--neon-purple)] hover:bg-opacity-20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </CyberCard>
      </div>

      {/* Digital signature tag */}
      <div className="digital-signature">BATYR::SYSTEM</div>
    </div>
  );
}
