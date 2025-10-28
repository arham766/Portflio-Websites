"use client";

import "../styles/globals.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedFooter } from "@/components/layout/AnimatedFooter";
import { HeroSection } from "@/components/content/Hero";
import { AboutSection } from "@/components/content/About";
import PhotographySection from "@/components/content/Photography";
import GraphicsSection from "@/components/content/Graphics";
import ArtSection from "@/components/content/Art";
import VideoShowcase from "@/components/content/VideoShowcase";
import ContactSection from "@/components/content/ContactSection";

export const dynamic = "force-dynamic";

export default function RootLayout() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen transition-colors duration-500 bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden pt-16"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {mounted && (
            <BrowserRouter>
              <Navbar />
              <main className="min-h-[calc(100vh-64px)]">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <section id="home"><HeroSection /></section>
                        <section id="about"><AboutSection /></section>
                        <section id="photography"><PhotographySection /></section>
                        <section id="graphics"><GraphicsSection /></section>
                        <section id="art"><ArtSection /></section>
                        <section id="video-showcase"><VideoShowcase /></section>
                        <section id="contact"><ContactSection /></section>
                      </>
                    }
                  />
                  <Route path="/about" element={<AboutSection />} />
                  <Route path="/photography" element={<PhotographySection />} />
                  <Route path="/graphics" element={<GraphicsSection />} />
                  <Route path="/art" element={<ArtSection />} />
                  <Route path="/video-showcase" element={<VideoShowcase />} />
                  <Route path="/contact" element={<ContactSection />} />
                </Routes>
              </main>
              <AnimatedFooter />
            </BrowserRouter>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
