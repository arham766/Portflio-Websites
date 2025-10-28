"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";

/* ------ tiny inline typewriter for 3 lines ------ */
function Typewriter({ lines, speed = 65, gap = 280 }: { lines: string[]; speed?: number; gap?: number }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    let t: any;
    const typeLine = () => {
      const target = lines[lineIndex] ?? "";
      if (i <= target.length) {
        setTyped(target.slice(0, i));
        i++;
        t = setTimeout(typeLine, speed);
      } else if (lineIndex < lines.length - 1) {
        t = setTimeout(() => {
          setLineIndex((x) => x + 1);
          setTyped("");
        }, gap);
      }
    };
    typeLine();
    return () => clearTimeout(t);
  }, [lineIndex, lines, speed, gap]);
  return (
    <div style={{ lineHeight: 1.05 }}>
      {lines.map((line, idx) => {
        const active = idx === lineIndex;
        const visible = idx < lineIndex ? line : active ? typed : "";
        return (
          <div key={line + idx} style={{ height: "clamp(2.5rem, 6vw, 5rem)", overflow: "hidden" }}>
            <span
              style={{
                fontWeight: 800,
                color: "var(--primary)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {visible}
            </span>
            {active && (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{ marginLeft: 6, color: "var(--accent)", fontWeight: 800 }}
              >
                |
              </motion.span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function HeroSection() {
  /* roles ticker (slides) */
  const roles = useMemo(
    () => [
      { key: "dev", icon: "💻", label: "Developer" },
      { key: "des", icon: "🎨", label: "Designer" },
      { key: "cre", icon: "✂️", label: "Creative Mind" },
    ],
    []
  );
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, []);

  /* image block grid */
  const rows = 14;
  const cols = 10;
  const total = rows * cols;
  const order = useMemo(() => {
    const a = Array.from({ length: total }, (_, i) => i);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }, [total]);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        paddingTop: "9rem",
        backgroundImage: "radial-gradient(circle at 18% 24%, var(--accent)/18, transparent 60%)",
      }}
    >
      {/* faint grid */}
      <div
        style={{
          position: "absolute",
          inset: 0 as any,
          opacity: 0.08,
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* row */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          margin: "0 auto",
          maxWidth: "112rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // Adjusted to balance the layout
          columnGap: "3rem",
          alignItems: "center", // Center items vertically
          justifyContent: "center", // Center the grid horizontally
        }}
      >
        {/* LEFT */}
        <div style={{ maxWidth: "42rem" }}>
          {/* name */}
          <Typewriter lines={["Rubaiya", "Binte", "Rahman"]} />

          {/* roles ticker */}
          <div
            style={{
              marginTop: 12,
              height: 40,
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              borderRadius: 999,
              border: "1px solid var(--accent)",
              background: "color-mix(in oklab, var(--background) 60%, transparent)",
              boxShadow: "0 4px 14px rgba(0,0,0,.08)",
              maxWidth: 260,
              padding: "0 6px",
            }}
          >
            <div style={{ fontSize: 18, marginRight: 6 }}>✨</div>
            <div style={{ position: "relative", height: 28, width: 180 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[roleIdx].key}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 16 }}>{roles[roleIdx].icon}</span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: ".02em",
                      color: "color-mix(in oklab, var(--foreground) 92%, transparent)",
                    }}
                  >
                    {roles[roleIdx].label}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* microcopy (clean + confident) */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              marginTop: 18,
              maxWidth: "40rem",
              fontSize: "clamp(1rem, 2.2vw, 1.125rem)",
              lineHeight: 1.7,
              color: "color-mix(in oklab, var(--foreground) 85%, transparent)",
            }}
          >
            I build{" "}
            <span style={{ fontWeight: 700, color: "var(--accent)" }}>fast, accessible</span> interfaces
            where <span style={{ fontWeight: 700, color: "var(--accent)" }}>design meets code</span>.  
            Focused on clarity, motion, and polish.
          </motion.p>

          {/* focus row (3 small bites) */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0,1fr))",
              gap: 10,
              marginTop: 16,
              maxWidth: 520,
            }}
          >
            {[
              { icon: "⚡", label: "Web UI" },
              { icon: "🎨", label: "Graphics" },
              { icon: "🎞️", label: "Video & Craft" },
            ].map((f) => (
              <motion.li
                key={f.label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 10px",
                  borderRadius: 10,
                  background: "color-mix(in oklab, var(--background) 70%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--accent) 35%, transparent)",
                }}
              >
                <span style={{ fontSize: 16 }}>{f.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{f.label}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <Button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[var(--primary)] text-white hover:bg-[var(--accent)]"
            >
              About Me
            </Button>
            <Link href="/art">
              <Button variant="secondary" className="border border-[var(--accent)] hover:bg-[var(--accent)]/10">
                My Work →
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: rectangular image with block grid reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "relative",
            width: "min(28rem, 38vw)",
            aspectRatio: "3 / 4",
            overflow: "hidden",
            borderRadius: 16,
            boxShadow: "0 20px 60px rgba(0,0,0,.25)",
            padding: "1rem", // Added padding for a nicer frame
            border: "1px solid color-mix(in oklab, var(--accent) 20%, transparent)", // Subtle border
          }}
        >
          {/* pixelated -> sharp base */}
          <motion.div
            initial={{ filter: "blur(8px) contrast(.9)", imageRendering: "pixelated" as any }}
            animate={{ filter: "blur(0px) contrast(1)", imageRendering: "auto" as any }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src="/images/personal/Intro.jpg"
              alt="Rubaiya Binte Rahman"
              fill
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1280px) 340px, 448px"
              style={{ objectFit: "cover", objectPosition: "50% 40%" }} // Adjusted to center the photo
            />
          </motion.div>

          {/* shuffled tiles fade away */}
          <div style={{ position: "absolute", inset: 0 }}>
            {Array.from({ length: rows * cols }).map((_, i) => {
              const row = Math.floor(i / cols);
              const col = i % cols;
              // reveal order is shuffled:
              const idx = order.indexOf(i);
              const delay = (idx / (rows * cols)) * 2.2;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay, duration: 0.24, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    left: `${(col / cols) * 100}%`,
                    top: `${(row / rows) * 100}%`,
                    width: `${100 / cols}%`,
                    height: `${100 / rows}%`,
                    background: "color-mix(in oklab, var(--background) 96%, transparent)",
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}