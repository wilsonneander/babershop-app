"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface AuthLayoutProps {
  children: React.ReactNode;
  /** URL of the hero image shown in the right column */
  imageUrl: string;
  imageAlt?: string;
  /**
   * Slide direction for the page entrance animation.
   * Login slides from the left (`-20`), register from the right (`+20`).
   */
  slideDirection?: "left" | "right";
}

export function AuthLayout({
  children,
  imageUrl,
  imageAlt = "Barbershop experience",
  slideDirection = "left",
}: AuthLayoutProps) {
  const pageVariants: Variants = {
    hidden: { opacity: 0, x: slideDirection === "left" ? -20 : 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  return (
    <motion.div
      className="flex min-h-screen w-full bg-[#0a0a0a] text-white font-sans"
      initial="hidden"
      animate="show"
      variants={pageVariants}
    >
      {/* Left Column — Form */}
      <div className="w-full md:max-w-[480px] shrink-0 flex items-center justify-center">
        <div className="w-full max-w-[480px] flex flex-col px-[24px] md:px-[48px] py-8">
          {children}
        </div>
      </div>

      {/* Right Column — Image */}
      <motion.div
        className="hidden md:block flex-1 relative overflow-hidden bg-[#0a0a0a]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
        }}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0a0a0a]/50" />
      </motion.div>
    </motion.div>
  );
}

/** Shared animation variants for staggered child elements inside AuthLayout */
export const authItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
