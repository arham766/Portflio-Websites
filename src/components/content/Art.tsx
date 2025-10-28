"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Brush,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Download,
} from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Nature" | "Fantasy" | "Village" | "Abstract" | "People";

type ArtItem = {
  src: string;
  title: string;
  description: string;
  category: Category;
};

const allArts: ArtItem[] = [
  {
    src: "Art 1.jpg",
    title: '"Shanti Nodi" (The River of Peace)',
    description: "Along the banks of a calm river in rural Bangladesh...",
    category: "Village",
  },
  {
    src: "Art 2.jpg",
    title: '"Braids of Moonlight"',
    description: "With her hair turned to moonlight, she stands...",
    category: "People",
  },
  {
    src: "Art 3.jpg",
    title: '"The Scarlet Princess"',
    description: "Draped in a flowing gown of scarlet...",
    category: "Fantasy",
  },
  {
    src: "Art 4.jpg",
    title: '"Hello, My Sunshine"',
    description: 'A sunflower bursts into golden bloom...',
    category: "Nature",
  },
  {
    src: "Art 5.jpg",
    title: '"Pathway to the Heart of the Village"',
    description: "A narrow dirt path winds through green fields...",
    category: "Village",
  },
  {
    src: "Art 6.jpg",
    title: '"Chasing the Horizon"',
    description: "Beneath a warm golden sky, a lone figure walks...",
    category: "Nature",
  },
  {
    src: "Art 7.jpg",
    title: '"Field of Eternal Spring"',
    description: "A blooming meadow stretches beneath a bright blue sky...",
    category: "Nature",
  },
  {
    src: "Art 8.jpg",
    title: '"Moonlit Village by the River"',
    description: "Beneath the soft glow of a full moon...",
    category: "Village",
  },
  {
    src: "Art 9.jpg",
    title: '"Moon Over the Bridge"',
    description: "A perfect circle frames the poetry of night...",
    category: "Nature",
  },
  {
    src: "Art 10.jpg",
    title: '"Lanterns in the Winter Stillness"',
    description: "The world outside lies hushed under a blanket of snow...",
    category: "Nature",
  },
  {
    src: "Art 11.jpg",
    title: '"Festival of Flames"',
    description: "Against a rich tapestry of crimson and gold...",
    category: "Village",
  },
  {
    src: "Art 12.jpg",
    title: '"Song of the Meadow"',
    description: "In the quiet blush of a spring morning...",
    category: "Nature",
  },
  {
    src: "Art 13.jpg",
    title: '"Hanging Garden in the Sky"',
    description: "From the quiet hand of the clouds...",
    category: "Fantasy",
  },
  {
    src: "Art 14.jpg",
    title: '"Tangled Hearts and Daring Paths"',
    description: "Golden hair like spun sunlight dances...",
    category: "Fantasy",
  },
  {
    src: "Art 15.jpg",
    title: '"The Enchanted Mushroom Cottage"',
    description: "Beneath the emerald sigh of grass...",
    category: "Fantasy",
  },
  {
    src: "Art 16.jpg",
    title: '"Amethyst Bloom"',
    description: "In the hush of midnight’s veil...",
    category: "Nature",
  },
  {
    src: "art 17.jpg",
    title: "Floral Symphony",
    description: "Delicate lines bloom into life...",
    category: "Abstract",
  },
  {
    src: "art 18.jpg",
    title: "Boats of Bengal",
    description: "The gentle waves kiss the wooden hulls...",
    category: "Village",
  },
  {
    src: "art 19.jpg",
    title: "Treehouse Dream",
    description: "A tiny treehouse perched among the branches...",
    category: "Fantasy",
  },
  {
    src: "art 20.jpg",
    title: "Twin Flames",
    description: "Two candles burn softly...",
    category: "Abstract",
  },
  {
    src: "art 21.jpg",
    title: "Robot with a Flower",
    description: "A metal heart holds a fragile bloom...",
    category: "Fantasy",
  },
  {
    src: "art 22.jpg",
    title: "Evening by the River",
    description: "Crimson hues melt into the river...",
    category: "Village",
  },
  {
    src: "art 23.jpg",
    title: "Rhythm of Colors",
    description: "A palette painted in swirls of color...",
    category: "Abstract",
  },
  {
    src: "art 24.jpg",
    title: "Tom and Jerry: A Smile from Childhood",
    description: "A cartoon sketch takes us back...",
    category: "People",
  },
  {
    src: "art 25.jpg",
    title: "Village by the Pond",
    description: "A small village gathers around a pond...",
    category: "Village",
  },
  {
    src: "art 26.jpg",
    title: "Love Beneath the Leaf",
    description: "Two hearts hide under a green leaf...",
    category: "Nature",
  },
  {
    src: "art 27.jpg",
    title: "Whisper of Solitude",
    description: "A lone figure stands on a cliff...",
    category: "People",
  },
  {
    src: "art 28.jpg",
    title: "Colorful House on a Hill",
    description: "A vibrant house stands proudly...",
    category: "Village",
  },
  {
    src: "art 29.jpg",
    title: "Village Landscape with Sunset",
    description: "This artwork shows a breathtaking sunset...",
    category: "Village",
  },
  {
    src: "art 30.jpg",
    title: "Boat on a River",
    description: "A serene river scene with a boat...",
    category: "Village",
  },
  {
    src: "art 31.jpg",
    title: "Two Swans on a Lake",
    description: "Two elegant swans float gracefully...",
    category: "Nature",
  },
  {
    src: "art 32.jpg",
    title: "Hand with Butterfly",
    description: "This artwork beautifully captures...",
    category: "Nature",
  },
];

export default function ArtSection() {
  const [selectedImage, setSelectedImage] = useState<ArtItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredArts = selectedCategory === "All"
    ? allArts
    : allArts.filter(art => art.category === selectedCategory);

  const displayedArts = showAll ? filteredArts : filteredArts.slice(0, 12);

  const openLightbox = (art: ArtItem, index: number) => {
    setSelectedImage(art);
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigate = (dir: "prev" | "next") => {
    const arts = filteredArts;
    const newIdx =
      dir === "next"
        ? (lightboxIndex + 1) % arts.length
        : (lightboxIndex - 1 + arts.length) % arts.length;
    setLightboxIndex(newIdx);
    setSelectedImage(arts[newIdx]);
  };

  const downloadImage = () => {
    if (!selectedImage) return;
    const link = document.createElement("a");
    link.href = `/images/Art/${selectedImage.src}`;
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
  }, [selectedImage, lightboxIndex, filteredArts]);

  const handleLoad = (src: string) => {
    setLoadedImages((s) => new Set([...s, src]));
  };

  const categories: Category[] = ["All", "Nature", "Fantasy", "Village", "Abstract", "People"];

  return (
    <>
      <section
        id="art"
        className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-black dark:to-slate-950"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
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
              <Brush className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Digital Art Collection
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient">
              Art Gallery
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Collection of some of my art works
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className={clsx(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedCategory === cat
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid: 6 per row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {displayedArts.map((art, idx) => {
              const isLoaded = loadedImages.has(art.src);
              return (
                <motion.div
                  key={art.src}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                  layout
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(art, idx)}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg cursor-pointer transition-all duration-500 bg-white dark:bg-gray-900 backdrop-blur-sm hover:shadow-xl hover:ring-4 hover:ring-primary/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-between">
                    <span className="text-white font-medium text-xs sm:text-sm truncate">{art.title}</span>
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>

                  {/* Skeleton Loader */}
                  {!isLoaded && (
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-xl sm:rounded-2xl" />
                  )}

                  {/* Image with fade-in */}
                  <Image
                    src={`/images/Art/${art.src}`}
                    alt={art.title}
                    width={800}
                    height={800}
                    className={clsx(
                      "w-full h-auto object-cover transition-all duration-700 group-hover:scale-105",
                      isLoaded ? "opacity-100" : "opacity-0"
                    )}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhgfHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8fHh8BCgsLDw0OEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAPEBAP/8AAEQgAAQABAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/dAAXAAQE/AAgBAQAAAACv/9k="
                    loading="lazy"
                    onLoad={() => handleLoad(art.src)}
                    onError={() => handleLoad(art.src)} // Show even if 404
                  />

                  <div className="p-3 sm:p-4 bg-white dark:bg-gray-900">
                    <h3 className="font-semibold text-sm sm:text-base text-primary dark:text-primary-300 line-clamp-1">
                      {art.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {art.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All / Show Less */}
          {filteredArts.length > 12 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all"
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
                  src={`/images/Art/${selectedImage.src}`}
                  alt={selectedImage.title}
                  width={1600}
                  height={1600}
                  className="w-full h-auto max-h-[75vh] sm:max-h-[85vh] object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 text-white">
                  <p className="text-base sm:text-lg font-medium">{selectedImage.title}</p>
                  <p className="text-xs sm:text-sm opacity-75">
                    {lightboxIndex + 1} / {filteredArts.length}
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