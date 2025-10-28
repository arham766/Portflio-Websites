"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Palette, Video } from "lucide-react";

export function AboutSection() {
  // Variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-secondary/10 via-background to-background overflow-hidden"
    >
      {/* 🔹 Animated grid background with parallax */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
          animate={{ backgroundPositionY: ["0%", "100%", "0%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative mx-auto max-w-6xl px-6">
        {/* Header with enhanced entrance */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-14"
        >
          About Me
        </motion.h2>

        {/* Content Cards with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-card/60 backdrop-blur-md border border-border rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="flex items-center justify-center mb-4 text-accent">
              <Sparkles className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground/90 text-center">
              A Creative Beginning
            </h3>
            <p className="text-foreground/80 leading-relaxed text-center">
              ✨ My journey began as a <strong>part-time primary school teacher</strong>,
              where I discovered the joy of inspiring young minds and unlocking my creativity.
              Teaching taught me patience, empathy, and the art of storytelling.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-card/60 backdrop-blur-md border border-border rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="flex items-center justify-center mb-4 text-accent">
              <Code2 className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground/90 text-center">
              The Tech Shift
            </h3>
            <p className="text-foreground/80 leading-relaxed text-center">
              💡 After completing my HSC in 2022, I faced challenges getting into Computer Science —
              but instead of stopping, I took a gap year to learn
              <strong> HTML</strong>, <strong> CSS</strong>, <strong> JavaScript</strong>,
              and <strong> Graphic Design</strong>. That year turned uncertainty into growth.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-card/60 backdrop-blur-md border border-border rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="flex items-center justify-center mb-4 text-accent">
              <Palette className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground/90 text-center">
              Art Meets Technology
            </h3>
            <p className="text-foreground/80 leading-relaxed text-center">
              🎨 My artistic side shines through in <strong>graphic design, art, and crafts</strong> —
              helping me blend logic with beauty. Today, I focus on merging
              <span className="text-accent font-semibold"> creativity </span> and
              <span className="text-accent font-semibold"> technology </span> to craft
              meaningful digital experiences.
            </p>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-3xl font-bold text-center text-primary mb-10"
        >
          Skills
        </motion.h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Skill 1 */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-card/60 backdrop-blur-md border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="flex items-center justify-center mb-3 text-accent">
              <Code2 className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
            </div>
            <h4 className="text-lg font-semibold text-center text-foreground/90">
              C, HTML, CSS, JavaScript (Basic)
            </h4>
          </motion.div>

          {/* Skill 2 */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-card/60 backdrop-blur-md border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="flex items-center justify-center mb-3 text-accent">
              <Palette className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
            </div>
            <h4 className="text-lg font-semibold text-center text-foreground/90">
              Graphic Design (Canva, Adobe Illustrator - Basic)
            </h4>
          </motion.div>

          {/* Skill 3 */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-card/60 backdrop-blur-md border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="flex items-center justify-center mb-3 text-accent">
              <Sparkles className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
            </div>
            <h4 className="text-lg font-semibold text-center text-foreground/90">
              Arts & Crafts (Handmade items, recycling art)
            </h4>
          </motion.div>

          {/* Skill 4 */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-card/60 backdrop-blur-md border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="flex items-center justify-center mb-3 text-accent">
              <Video className="w-6 h-6 transition-transform duration-300 group-hover:scale-125" />
            </div>
            <h4 className="text-lg font-semibold text-center text-foreground/90">
              Video Editing (CapCut, basic tools)
            </h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}