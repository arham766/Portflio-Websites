"use client";

import { Navigate, Route, Routes } from "react-router-dom";
import { HeroSection } from "@/components/content/Hero";
import { AboutSection } from "@/components/content/About";
import PhotographySection from "@/components/content/Photography";
import GraphicsSection from "@/components/content/Graphics";
import ArtSection from "@/components/content/Art";
import VideoShowcase from "@/components/content/VideoShowcase";
import ContactSection from "@/components/content/ContactSection";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={null} /> {/* Homepage handled by layout.tsx */}
      <Route path="/about" element={<AboutSection />} />
      <Route path="/photography" element={<PhotographySection />} />
      <Route path="/graphics" element={<GraphicsSection />} />
      <Route path="/art" element={<ArtSection />} />
      <Route path="/video-showcase" element={<VideoShowcase />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}