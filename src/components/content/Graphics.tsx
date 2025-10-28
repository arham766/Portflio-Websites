"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Palette,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Download,
} from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

type GraphicItem = {
  src: string;
  title: string;
  description: string;
};

const allGraphics: GraphicItem[] = [
  { src: "Design 1.jpg", title: "Burger Bliss", description: "A deliciously layered burger with fresh ingredients." },
  { src: "Design 2_.jpg", title: "Stacked Burger", description: "Double decker burger with greens and toppings." },
  { src: "Design 3.jpg", title: "Pizza Perfection", description: "Classic pepperoni pizza with melted cheese." },
  { src: "Design 4.jpg", title: "Create Your Style", description: "Bold typography with vibrant splash art." },
  { src: "Design 5.jpg", title: "Colorful Portrait", description: "Abstract face with dripping paint effect." },
  { src: "Design 6.jpg", title: "Lightbulb Guitar", description: "Creative fusion of music and innovation." },
  { src: "Design 7.jpg", title: "Nike Splash", description: "Dynamic Nike logo with explosive colors." },
  { src: "Design 8.jpg", title: "Melting Face", description: "Surreal portrait with dripping colors." },
  { src: "Design 9.jpg", title: "Cheesy Pizza Slice", description: "Goey cheese pull from a hot pizza slice." },
  { src: "Design 10.jpg", title: "Minimal Burger", description: "Clean and modern burger illustration." },
  { src: "Design 11.jpg", title: "Abstract Eye", description: "Colorful eye with dripping paint and splashes." },
  { src: "Design 12.jpg", title: "Sci-Fi Portal", description: "Futuristic glowing portal in space." },
  { src: "Design 13.jpg", title: "Elegant Portrait", description: "Soft watercolor-style female portrait." },
  { src: "Design 14.jpg", title: "Explosive Eye", description: "Dramatic eye with colorful paint explosion." },
  { src: "Design 15.jpg", title: "Butterfly Splash", description: "Vibrant butterfly with abstract color burst." },
  { src: "Design 16.jpg", title: "Joker Card", description: "Playing card with colorful joker character." },
  { src: "Design 17.jpg", title: "Fast Food Combo", description: "Burger, fries, and drink combo meal." },
  { src: "Design 18.jpg", title: "Hold Your Dream", description: "Motivational lightbulb with hanging figure." },
  { src: "Design 19.jpg", title: "Happy New Year 2025", description: "Festive celebration with fireworks and colors." },
];

export default function GraphicsSection() {
  const [selectedImage, setSelectedImage] = useState<GraphicItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const displayedGraphics = showAll ? allGraphics : allGraphics.slice(0, 12);

  const openLightbox = (graphic: GraphicItem, index: number) => {
    setSelectedImage(graphic);
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigate = (dir: "prev" | "next") => {
    const newIdx =
      dir === "next"
        ? (lightboxIndex + 1) % allGraphics.length
        : (lightboxIndex - 1 + allGraphics.length) % allGraphics.length;
    setLightboxIndex(newIdx);
    setSelectedImage(allGraphics[newIdx]);
  };

  const downloadImage = () => {
    if (!selectedImage) return;
    const link = document.createElement("a");
    link.href = `/images/Graphics/${selectedImage.src}`;
    link.download = selectedImage.src;
    link.click();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate("next");
      if (e.key === "ArrowLeft") navigate("prev");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedImage, lightboxIndex]);

  const handleLoad = (src: string) => {
    setLoadedImages((s) => new Set([...s, src]));
  };

  return (
    <>
      <section
        id="graphics"
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-black dark:to-slate-950"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 via-transparent to-pink-400/20" />
        </div>

        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
              <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Graphics Design Collection
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 bg-size-200 animate-gradient">
              Graphics Gallery
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Creative posters, branding, and digital designs
            </p>
          </motion.div>

          {/* Grid: 6 per row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {displayedGraphics.map((graphic, idx) => {
              const isLoaded = loadedImages.has(graphic.src);
              return (
                <motion.div
                  key={graphic.src}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                  layout
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(graphic, idx)}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg cursor-pointer transition-all duration-500 bg-white dark:bg-gray-900 backdrop-blur-sm hover:shadow-xl hover:ring-4 hover:ring-orange-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-between">
                    <span className="text-white font-medium text-xs sm:text-sm truncate">{graphic.title}</span>
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>

                  {/* Skeleton Loader */}
                  {!isLoaded && (
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-xl sm:rounded-2xl" />
                  )}

                  {/* Image */}
                  <Image
                    src={`/images/Graphics/${graphic.src}`}
                    alt={graphic.title}
                    width={800}
                    height={800}
                    className={clsx(
                      "w-full h-auto object-cover transition-all duration-700 group-hover:scale-105",
                      isLoaded ? "opacity-100" : "opacity-0"
                    )}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhgfHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8BCgsLDw0OEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAP/8AAEQgAAQABAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/dAAXAAQE/AAgBAQAAAACv/9k="
                    loading="lazy"
                    onLoad={() => handleLoad(graphic.src)}
                    onError={() => handleLoad(graphic.src)}
                  />

                  <div className="p-3 sm:p-4 bg-white dark:bg-gray-900">
                    <h3 className="font-semibold text-sm sm:text-base text-orange-600 dark:text-orange-400 line-clamp-1">
                      {graphic.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {graphic.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All / Show Less */}
          {allGraphics.length > 12 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all"
              >
                {showAll ? "Show Less" : "View All"}
                {showAll ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-10 sm:-top-12 right-0 text-white/70 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                <Image
                  src={`/images/Graphics/${selectedImage.src}`}
                  alt={selectedImage.title}
                  width={1600}
                  height={1600}
                  className="w-full h-auto max-h-[75vh] sm:max-h-[85vh] object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 text-white">
                  <p className="text-base sm:text-lg font-medium">{selectedImage.title}</p>
                  <p className="text-xs sm:text-sm opacity-75">
                    {lightboxIndex + 1} / {allGraphics.length}
                  </p>
                </div>
              </div>

              <button
                onClick={downloadImage}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all"
                title="Download"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={() => navigate("prev")}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={() => navigate("next")}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient { background-size: 200% auto; animation: gradient 6s ease infinite; }
        .bg-size-200 { background-size: 200% auto; }
      `}</style>
    </>
  );
}