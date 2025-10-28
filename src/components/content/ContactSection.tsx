"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Download,
} from "lucide-react";

interface ContactItem {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  download?: boolean;
  aria: string;
}
import ClientOnly from "./ClientOnly";
const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "rubaiyaananya@gmail.com",
    href: "mailto:rubaiyaananya@gmail.com",
    aria: "Send email to rubaiyaananya@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rubaiya-code",
    href: "https://github.com/rubaiya-code",
    aria: "Visit GitHub profile",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rubaiya-binte-rahman",
    href: "https://linkedin.com/in/rubaiya-binte-rahman",
    aria: "Visit LinkedIn profile",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "instagram.com/_rubaiya_rahman__",
    href: "https://instagram.com/_rubaiya_rahman__",
    aria: "Visit Instagram profile",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/profile.php?id=61577648223317",
    href: "https://facebook.com/profile.php?id=61577648223317",
    aria: "Visit Facebook profile",
  },
  {
    icon: Download,
    label: "Resume",
    value: "View My Resume",
    href: "/resume.pdf",
    download: true,
    aria: "Download resume PDF",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [sectionHovered, setSectionHovered] = useState(false);

  return (
    <ClientOnly>
    <section
      id="contact"
      ref={ref}
      aria-label="Contact Information"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[var(--secondary)]/5 via-[var(--background)] to-[var(--background)]"
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
    >
      {/* Animated subtle grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isInView ? (sectionHovered ? 0.4 : 0.25) : 0,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100,100,100,.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100,100,100,.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(circle at center, white 10%, transparent 70%)",
        }}
      />

      {/* Radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 2, opacity: 0.3 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(circle at center, var(--accent) 0%, transparent 60%)",
        }}
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mb-4 tracking-tight"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-[var(--muted)] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Open to collaborations, opportunities, or just a chat. Feel free to
            reach out!
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 + idx * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,.12)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-[var(--card)]/70 backdrop-blur-xl border border-[var(--border)] rounded-2xl p-6 shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center gap-4 z-10">
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 8 }}
                  className="flex-shrink-0 p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300"
                >
                  <item.icon className="w-6 h-6" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                    {item.label}
                  </p>

                  {item.href.startsWith("mailto:") || item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      target={item.download ? undefined : "_blank"}
                      rel={item.download ? undefined : "noopener noreferrer"}
                      download={item.download ? "Rubaiya_Resume.pdf" : undefined}
                      className="block mt-1 text-[var(--foreground)] hover:text-[var(--primary)] font-medium text-sm md:text-base truncate transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
                      aria-label={item.aria}
                    >
                      {item.value}
                      {item.download && (
                        <span className="block text-xs text-[var(--muted)] mt-1">
                          (Click to download)
                        </span>
                      )}
                    </a>
                  ) : (
                    <NavLink
                      to={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-1 text-[var(--foreground)] hover:text-[var(--primary)] font-medium text-sm md:text-base truncate transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
                      aria-label={item.aria}
                    >
                      {item.value}
                    </NavLink>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </ClientOnly>
  );
}