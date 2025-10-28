"use client";

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/content/Hero";
import { AboutSection } from "@/components/content/About";
import PhotographySection from "@/components/content/Photography";
import GraphicsSection from "@/components/content/Graphics";
import ArtSection from "@/components/content/Art";
import VideoShowcase from "@/components/content/VideoShowcase";
import ContactSection from "@/components/content/ContactSection";
import { AnimatedFooter } from "@/components/layout/AnimatedFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen transition-colors duration-500 bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden pt-16">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <BrowserRouter>
            <Navbar />
            <main className="min-h-[calc(100vh-64px)]"> {/* Adjust height to account for navbar */}
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <section id="home">
                        <HeroSection />
                      </section>
                      <section id="about">
                        <AboutSection />
                      </section>
                      <section id="photography">
                        <PhotographySection />
                      </section>
                      <section id="graphics">
                        <GraphicsSection />
                      </section>
                      <section id="art">
                        <ArtSection />
                      </section>
                      <section id="video-showcase">
                        <VideoShowcase />
                      </section>
                      <section id="contact">
                        <ContactSection />
                      </section>
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
        </ThemeProvider>
      </body>
    </html>
  );
}