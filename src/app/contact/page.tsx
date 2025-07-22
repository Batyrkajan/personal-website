"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import DigitalRain from "@/components/DigitalRain";

import CyberCard from "@/components/CyberCard";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! I will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

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
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[var(--neon-purple)] opacity-5 blur-[80px] animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-[7rem]">
        <div className="pb-16">
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 font-[var(--font-orbitron)] neon-text">
            CONTACT<span className="text-foreground">_ME</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <CyberCard>
              <p className="text-lg mb-6 text-gray-400">
                I&apos;m always open to discussing new projects, opportunities, or
                partnerships. Feel free to reach out using the contact form or
                through my social media.
              </p>

              <div className="space-y-6 mt-8">
                {/* Email */}
                <div className="flex items-center hover-glow transition-all duration-300 p-3 border border-[var(--border-color)] rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-[var(--neon-cyan)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300">
                    batyrmammetesenov@gmail.com
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center hover-glow transition-all duration-300 p-3 border border-[var(--border-color)] rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-[var(--neon-green)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3l2 5-2 2a16 16 0 006 6l2-2 5 2v3a2 2 0 01-2 2h-1c-8.837 0-16-7.163-16-16V5z"
                    />
                  </svg>
                  <span className="text-gray-300">+1 (475) 305-9771</span>
                </div>

                {/* Location */}
                <div className="flex items-center hover-glow transition-all duration-300 p-3 border border-[var(--border-color)] rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-[var(--neon-magenta)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-300">Tempe, AZ</span>
                </div>

                {/* Currently Open To status */}
                <div className="mt-6 p-4 border-l-4 border-[var(--neon-purple)] bg-[#121212] text-[var(--neon-purple)] rounded-md font-mono">
                  🚀 Open to freelance projects, collaborations, and disruptive
                  ideas.
                </div>

                {/* Response Time note */}
                <p className="text-sm text-gray-500 mt-2">
                  Response time: usually within 24–48 hours.
                </p>

                {/* Social Media Links */}
                <div className="flex space-x-6 mt-8 justify-center">
                  <a
                    href="https://github.com/Batyrkajan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-glow text-gray-500 hover:text-[var(--neon-cyan)] transition-all duration-300"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/pro100batyrka/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-glow-magenta text-gray-500 hover:text-[var(--neon-magenta)] transition-all duration-300"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/batyr-mammedesenov-62b715317/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-glow text-gray-500 hover:text-[var(--neon-cyan)] transition-all duration-300"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/batyr-mammedesenov-62b715317/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-glow-magenta text-gray-500 hover:text-[var(--neon-magenta)] transition-all duration-300"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </CyberCard>

            <CyberCard className="neon-border-animated">
              <h2 className="text-2xl font-semibold mb-6 font-[var(--font-orbitron)] text-[var(--neon-cyan)]">
                SEND_MESSAGE
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {submitMessage && (
                  <div className="p-4 border-l-4 border-[var(--neon-green)] bg-[#121212] text-[var(--neon-green)] rounded-md">
                    {submitMessage}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 font-[var(--font-orbitron)]"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-md bg-[var(--card-bg)] text-foreground focus:outline-none focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--neon-cyan)] transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 font-[var(--font-orbitron)]"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-md bg-[var(--card-bg)] text-foreground focus:outline-none focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--neon-cyan)] transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 font-[var(--font-orbitron)]"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[var(--border-color)] rounded-md bg-[var(--card-bg)] text-foreground focus:outline-none focus:border-[var(--neon-cyan)] focus:ring-1 focus:ring-[var(--neon-cyan)] transition-all duration-300"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 neon-btn text-center font-medium rounded-md transition-all duration-300 font-[var(--font-orbitron)] disabled:opacity-70 spray-tag"
                    data-spray="SEND"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                </div>
              </form>
            </CyberCard>
          </div>
        </div>
      </main>

      {/* Digital signature tag */}
      <div className="digital-signature">BATYR::SYSTEM</div>
    </div>
  );
}
