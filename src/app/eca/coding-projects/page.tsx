// app/skills/page.tsx
export const dynamic = 'force-dynamic';

import Link from "next/link";

export default function SkillsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-[var(--primary)] mb-4">
        Skills Page
      </h1>
      <p className="text-[var(--muted)] mb-8">
        This page is under construction.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[var(--accent)] text-white rounded-xl hover:bg-[var(--primary)] transition"
      >
        Go Home
      </Link>
    </div>
  );
}