"use client";

import { motion } from "framer-motion";
import { Video } from "lucide-react";

const VideoShowcase = () => {
  // List of YouTube video links
  const videos = [
    "https://youtube.com/shorts/t9k6nI-5gRE",
    "https://youtu.be/psW-hoVwkkQ",
    "https://youtu.be/HW2SOGgyV0U",
  ];

  // Variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="video-showcase"
      className="relative py-24 bg-gradient-to-b from-secondary/10 via-background to-background overflow-hidden"
    >
      <div className="container relative mx-auto max-w-6xl px-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-10"
        >
          Video Showcase
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {videos.map((videoUrl, index) => {
            // Extract video ID from URL
            const videoId = videoUrl.includes("shorts")
              ? videoUrl.split("shorts/")[1]
              : videoUrl.split("youtu.be/")[1].split("?")[0];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Artwork Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-center justify-center mt-2 text-accent">
                  <Video className="w-5 h-5 mr-2" />
                  <span className="text-sm text-foreground/80">Video {index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;