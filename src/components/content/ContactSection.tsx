"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Mail, Github, Linkedin, Instagram, Facebook, Download } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hover: { scale: 1.05, rotate: 1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", transition: { duration: 0.3, ease: "easeInOut" } },
    tap: { scale: 0.98, transition: { duration: 0.2 } },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 5, color: "var(--accent)" },
    tap: { scale: 0.9 },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.3,
      transition: { duration: 1, ease: "easeOut" },
    },
    hover: { opacity: isHovered ? 0.5 : 0.3 },
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Contact Information"
      className="relative py-24 bg-gradient-to-b from-[var(--secondary)]/10 via-[var(--background)] to-[var(--background)] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={gridVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-radial from-transparent to-[var(--accent)]/5 opacity-50 pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1.5, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[var(--primary)] mb-12 tracking-tight"
          tabIndex={-1}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="text-center text-[var(--muted)] mb-16 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
          role="doc-subtitle"
        >
          I'm always open to new opportunities and collaborations. Reach out via email or social media, or download my resume below.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
          role="list"
        >
          <motion.div
            variants={fadeInUp}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="bg-[var(--card)]/60 backdrop-blur-md border border-[var(--muted)]/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4 group"
            role="listitem"
            aria-label="Email Contact"
          >
            <motion.div
              variants={iconVariants}
              className="flex-shrink-0 group-hover:text-[var(--accent)] transition-colors"
              aria-hidden="true"
            >
              <Mail className="w-6 h-6 text-[var(--primary)]" />
            </motion.div>
            <a
              href="mailto:rubaiyaananya@gmail.com"
              className="text-[var(--foreground)]/90 hover:text-[var(--primary)] transition-colors text-sm md:text-base truncate focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              aria-label="Send email to rubaiyaananya@gmail.com"
            >
              rubaiyaananya@gmail.com
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="bg-[var(--card)]/60 backdrop-blur-md border border-[var(--muted)]/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4 group"
            role="listitem"
            aria-label="GitHub Profile"
          >
            <motion.div
              variants={iconVariants}
              className="flex-shrink-0 group-hover:text-[var(--accent)] transition-colors"
              aria-hidden="true"
            >
              <Github className="w-6 h-6 text-[var(--primary)]" />
            </motion.div>
            <NavLink
              to="https://github.com/rubaiya-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/90 hover:text-[var(--primary)] transition-colors text-sm md:text-base truncate focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              aria-label="Visit GitHub profile at github.com/rubaiya-code"
            >
              github.com/rubaiya-code
            </NavLink>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="bg-[var(--card)]/60 backdrop-blur-md border border-[var(--muted)]/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4 group"
            role="listitem"
            aria-label="LinkedIn Profile"
          >
            <motion.div
              variants={iconVariants}
              className="flex-shrink-0 group-hover:text-[var(--accent)] transition-colors"
              aria-hidden="true"
            >
              <Linkedin className="w-6 h-6 text-[var(--primary)]" />
            </motion.div>
            <NavLink
              to="https://linkedin.com/in/rubaiya-binte-rahman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/90 hover:text-[var(--primary)] transition-colors text-sm md:text-base truncate focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              aria-label="Visit LinkedIn profile at linkedin.com/in/rubaiya-binte-rahman"
            >
              linkedin.com/in/rubaiya-binte-rahman
            </NavLink>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="bg-[var(--card)]/60 backdrop-blur-md border border-[var(--muted)]/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4 group"
            role="listitem"
            aria-label="Instagram Profile"
          >
            <motion.div
              variants={iconVariants}
              className="flex-shrink-0 group-hover:text-[var(--accent)] transition-colors"
              aria-hidden="true"
            >
              <Instagram className="w-6 h-6 text-[var(--primary)]" />
            </motion.div>
            <NavLink
              to="https://instagram.com/_rubaiya_rahman__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/90 hover:text-[var(--primary)] transition-colors text-sm md:text-base truncate focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              aria-label="Visit Instagram profile at instagram.com/_rubaiya_rahman__"
            >
              instagram.com/_rubaiya_rahman__
            </NavLink>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="bg-[var(--card)]/60 backdrop-blur-md border border-[var(--muted)]/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4 group"
            role="listitem"
            aria-label="Facebook Profile"
          >
            <motion.div
              variants={iconVariants}
              className="flex-shrink-0 group-hover:text-[var(--accent)] transition-colors"
              aria-hidden="true"
            >
              <Facebook className="w-6 h-6 text-[var(--primary)]" />
            </motion.div>
            <NavLink
              to="https://facebook.com/profile.php?id=61577648223317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/90 hover:text-[var(--primary)] transition-colors text-sm md:text-base truncate focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              aria-label="Visit Facebook profile at facebook.com/profile.php?id=61577648223317"
            >
              facebook.com/profile.php?id=61577648223317
            </NavLink>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            className="bg-[var(--card)]/60 backdrop-blur-md border border-[var(--muted)]/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center gap-4 group"
            role="listitem"
            aria-label="Download Resume"
          >
            <motion.div
              variants={iconVariants}
              className="flex-shrink-0 group-hover:text-[var(--accent)] transition-colors"
              aria-hidden="true"
            >
              <Download className="w-6 h-6 text-[var(--primary)]" />
            </motion.div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/90 hover:text-[var(--primary)] transition-colors flex items-center gap-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              aria-label="Download resume PDF"
            >
              View My Resume
              <span className="text-xs text-[var(--muted)]">(Download)</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;