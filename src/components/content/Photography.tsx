"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Download,
} from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

type PhotoItem = {
  src: string;
  title: string;
  description: string;
};

const allPhotos: PhotoItem[] = [
  { src: "1 (1).JPG", title: "Mountain Camp", description: "Tent under the starry sky in the Himalayas." },
  { src: "1 (2).JPG", title: "Goat on the Edge", description: "A curious goat stands on a cliff with mountains behind." },
  { src: "1 (3).jpg", title: "Purple Bloom", description: "Delicate purple flower against green leaves." },
  { src: "1 (4).jpg", title: "Cloud Beam", description: "Sun rays piercing through dramatic clouds." },
  { src: "1 (5).jpg", title: "Golden Lights", description: "Circular array of glowing bulbs in the dark." },
  { src: "1 (6).jpg", title: "Sunset by the Sea", description: "Golden sunset reflecting on calm waters." },
  { src: "1 (7).jpg", title: "City at Dusk", description: "Urban skyline with warm evening light." },
  { src: "1 (8).jpg", title: "Sunrise Over Buildings", description: "Golden sunrise behind residential blocks." },
  { src: "1 (9).jpg", title: "Rooftop View", description: "Aerial view of a city neighborhood at sunrise." },
  { src: "1 (10).jpg", title: "Cloudy Sky", description: "Soft clouds with sunlight breaking through." },
  { src: "1 (11).jpg", title: "Sunset Horizon", description: "Dramatic orange sky over distant hills." },
  { src: "1 (12).JPG", title: "Camping in the Valley", description: "Two tents in a lush green valley." },
  { src: "1 (13).JPG", title: "Misty Mountains", description: "Fog rolling over snow-capped peaks." },
  { src: "1 (14).JPG", title: "Pine Forest", description: "Tall pine trees under a clear blue sky." },
  { src: "1 (15).JPG", title: "Snowy Peak", description: "Majestic snow-covered mountain under blue sky." },
  { src: "1 (16).JPG", title: "Lone Tree", description: "A solitary tree in a misty mountain landscape." },
  { src: "1 (17).JPG", title: "Village in the Hills", description: "Small houses nestled in a green valley." },
  { src: "1 (18).JPG", title: "Golden Horizon", description: "Sun setting behind layered mountain ranges." },
  { src: "1 (19).JPG", title: "Prayer Flags", description: "Colorful prayer flags fluttering on a mountain pass." },
];

export default function PhotographySection() {
  const [selectedImage, setSelectedImage] = useState<PhotoItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const displayedPhotos = showAll ? allPhotos : allPhotos.slice(0, 12);

  const openLightbox = (photo: PhotoItem, index: number) => {
    setSelectedImage(photo);
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
        ? (lightboxIndex + 1) % allPhotos.length
        : (lightboxIndex - 1 + allPhotos.length) % allPhotos.length;
    setLightboxIndex(newIdx);
    setSelectedImage(allPhotos[newIdx]);
  };

  const downloadImage = () => {
    if (!selectedImage) return;
    const link = document.createElement("a");
    link.href = `/images/photos/${selectedImage.src}`;
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
        id="photography"
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-black dark:to-slate-950"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-transparent to-teal-400/20" />
        </div>

        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
              <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Photography Collection
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient">
              Photography Gallery
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Moments captured through the lens
            </p>
          </motion.div>

          {/* Grid: 6 per row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {displayedPhotos.map((photo, idx) => {
              const isLoaded = loadedImages.has(photo.src);
              return (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                  layout
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(photo, idx)}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg cursor-pointer transition-all duration-500 bg-white dark:bg-gray-900 backdrop-blur-sm hover:shadow-xl hover:ring-4 hover:ring-primary/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-between">
                    <span className="text-white font-medium text-xs sm:text-sm truncate">{photo.title}</span>
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>

                  {/* Skeleton Loader */}
                  {!isLoaded && (
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-xl sm:rounded-2xl" />
                  )}

                  {/* Image */}
                  <Image
                    src={`/images/photos/${photo.src}`}
                    alt={photo.title}
                    width={800}
                    height={800}
                    className={clsx(
                      "w-full h-auto object-cover transition-all duration-700 group-hover:scale-105",
                      isLoaded ? "opacity-100" : "opacity-0"
                    )}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhgfHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8BCgsLDw0OEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAP/8AAEQgAAQABAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/dAAXAAQE/AAgBAQAAAACv/9k="
                    loading="lazy"
                    onLoad={() => handleLoad(photo.src)}
                    onError={() => handleLoad(photo.src)}
                  />

                  <div className="p-3 sm:p-4 bg-white dark:bg-gray-900">
                    <h3 className="font-semibold text-sm sm:text-base text-primary dark:text-primary-300 line-clamp-1">
                      {photo.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {photo.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All / Show Less */}
          {allPhotos.length > 12 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-accent transition-all"
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
                  src={`/images/photos/${selectedImage.src}`}
                  alt={selectedImage.title}
                  width={1600}
                  height={1600}
                  className="w-full h-auto max-h-[75vh] sm:max-h-[85vh] object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 text-white">
                  <p className="text-base sm:text-lg font-medium">{selectedImage.title}</p>
                  <p className="text-xs sm:text-sm opacity-75">
                    {lightboxIndex + 1} / {allPhotos.length}
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