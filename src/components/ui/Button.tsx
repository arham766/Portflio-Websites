"use client";

import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onDragOver"
    | "onDragEnter"
    | "onDragLeave"
    | "onDrop"
    | "onAnimationStart"
    | "onAnimationComplete"
  > {
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-2 rounded-md font-semibold transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles =
    variant === "secondary"
      ? "bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--accent)]/10"
      : "bg-[var(--primary)] text-white hover:bg-[var(--accent)]";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={cn(`${baseStyles} ${variantStyles} ${className}`)}
      {...props}
    >
      {children}
    </motion.button>
  );
}