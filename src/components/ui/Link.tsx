import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

/**
 * Wrapper around Next.js <Link> with consistent styling.
 */
export function Link({
  href,
  children,
  className = "",
  target,
  rel,
}: LinkProps) {
  return (
    <NextLink
      href={href}
      target={target}
      rel={rel}
      className={`text-[var(--accent)] hover:underline transition-colors duration-300 ${className}`}
    >
      {children}
    </NextLink>
  );
}
