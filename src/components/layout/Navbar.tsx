"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
    console.log("Navbar mounted", { theme, location });
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== "undefined" && location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        console.log("Scrolling to", location.hash);
      }
    }
  }, [location.hash, mounted]);

  return (
    <header className="fixed top-0 left-0 right-0 border-b p-4 flex justify-between items-center z-50 bg-[var(--background)] text-[var(--foreground)] shadow-md">
      <span className="font-semibold text-lg">Rubiya Portfolio</span>
      <nav className="hidden md:flex items-center space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/photography"
          className={({ isActive }) =>
            `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
          }
        >
          Photography
        </NavLink>
        <NavLink
          to="/graphics"
          className={({ isActive }) =>
            `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
          }
        >
          Graphics
        </NavLink>
        <NavLink
          to="/art"
          className={({ isActive }) =>
            `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
          }
        >
          Art
        </NavLink>
        <NavLink
          to="/video-showcase"
          className={({ isActive }) =>
            `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
          }
        >
          Videos
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
          }
        >
          Contact
        </NavLink>
      </nav>
      <button
        className="md:hidden text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full right-4 mt-2 w-48 bg-[var(--background)] border border-[var(--muted)] rounded-lg shadow-lg p-4 flex flex-col space-y-2 z-40">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/photography"
            className={({ isActive }) =>
              `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Photography
          </NavLink>
          <NavLink
            to="/graphics"
            className={({ isActive }) =>
              `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Graphics
          </NavLink>
          <NavLink
            to="/art"
            className={({ isActive }) =>
              `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Art
          </NavLink>
          <NavLink
            to="/video-showcase"
            className={({ isActive }) =>
              `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Videos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[var(--foreground)] ${isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"} cursor-pointer transition-colors`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      )}
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </header>
  );
}

function ThemeToggle({ theme, setTheme }: { theme?: string; setTheme: (t: string) => void }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex h-8 w-16 items-center rounded-full bg-[var(--secondary)] px-1 transition-all duration-300 dark:bg-[var(--secondary)]"
    >
      <span
        className={`absolute h-6 w-6 transform rounded-full bg-white shadow-md transition-all duration-300 ${isDark ? "translate-x-8" : "translate-x-0"}`}
      />
      <Sun className="absolute left-2 text-[var(--accent)]" size={16} />
      <Moon className="absolute right-2 text-[var(--foreground)] dark:text-white" size={16} />
    </button>
  );
}