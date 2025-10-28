"use client";

import { motion } from "framer-motion";

export const AnimatedFooter = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-t p-4 text-sm text-center text-[var(--muted)]"
    >
      © 2025 Rubiya. All rights reserved.
    </motion.footer>
  );
};