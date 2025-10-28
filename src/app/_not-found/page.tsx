// app/_not-found/page.tsx
"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-[var(--primary)] mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-xl hover:bg-[var(--primary)] transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
