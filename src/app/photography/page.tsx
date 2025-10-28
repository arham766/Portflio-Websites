"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Camera } from "lucide-react";
import Link from "next/link";

export default function PhotographyPage() {
  const allPhotos = [
    "1 (1).jpg", "1 (2).jpg", "1 (3).jpg", "1 (4).jpg", "1 (5).jpg",
    "1 (6).JPG", "1 (7).JPG", "1 (8).JPG", "1 (9).JPG", "1 (10).JPG",
    "1 (11).JPG", "1 (12).JPG", "1 (13).JPG", "1 (14).JPG", "1 (15).JPG",
    "1 (16).jpg", "1 (17).jpg", "1 (18).jpg", "1 (19).jpg", "1 (20).jpg",
  ]; // Extend this list to include all 20-25 photos

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

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
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] overflow-x-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto max-w-6xl px-6 py-24"
      >
        <motion.h1
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold text-center text-primary mb-12"
        >
          Photography Gallery
        </motion.h1>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {allPhotos.map((photo, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={`/images/photos/${photo}`}
                alt={`Photography ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-full cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>

        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedPhoto(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl max-h-[80vh] overflow-auto"
            >
              <Image
                src={`/images/photos/${selectedPhoto}`}
                alt="Selected Photo"
                width={800}
                height={600}
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl bg-primary/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-accent"
                onClick={() => setSelectedPhoto(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <Link href="/">
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300 flex items-center gap-2 mx-auto">
              <Camera className="w-5 h-5" />
              Back to Home
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}