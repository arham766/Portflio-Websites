"use client";

import { motion } from "framer-motion";
import { Video, Play } from "lucide-react";
import ClientOnly from "@/components/ClientOnly"; // Adjust path if needed

// Helper: Extract YouTube ID from any URL
const getYouTubeId = (url: string): string => {
  if (url.includes("shorts")) return url.split("shorts/")[1].split("?")[0];
  if (url.includes("youtu.be")) return url.split("youtu.be/")[1].split("?")[0];
  if (url.includes("watch")) return url.split("v=")[1].split("&")[0];
  return url.split("/").pop() || "";
};

const VideoShowcase = () => {
  const videos = [
    "https://youtube.com/shorts/t9k6nI-5gRE",
    "https://youtu.be/psW-hoVwkkQ",
    "https://youtu.be/HW2SOGgyV0U",
  ];

  return (
    <ClientOnly>
      <section
        id="video-showcase"
        className="relative py-24 bg-gradient-to-b from-[var(--secondary)]/5 via-[var(--background)] to-[var(--background)] overflow-hidden"
      >
        {/* Subtle animated grid background */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(120,120,120,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(120,120,120,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container relative mx-auto max-w-7xl px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mb-16 tracking-tight"
          >
            Video Showcase
          </motion.h2>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((url, index) => {
              const videoId = getYouTubeId(url);
              const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

              return (
                <motion.div
                  key={videoId}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.15,
                  }}
                  className="group relative bg-[var(--card)]/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--border)]"
                  whileHover={{ y: -8 }}
                >
                  {/* Thumbnail with hover overlay */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={thumbnail}
                      alt={`Video thumbnail ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[var(--accent)]/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>

                    {/* Actual iframe (lazy loaded) */}
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                      title={`Video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Caption */}
                  <div className="p-4 flex items-center justify-center gap-2 text-[var(--muted)]">
                    <Video className="w-4 h-4 text-[var(--accent)]" />
                    <span className="text-sm font-medium">Video {index + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </ClientOnly>
  );
};

export default VideoShowcase;