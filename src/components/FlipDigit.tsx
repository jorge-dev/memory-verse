"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlipCardProps {
  digit: number;
}

export const FlipCard = ({ digit }: FlipCardProps) => {
  return (
    <div className="relative w-16 h-24 bg-card dark:bg-gray-800 rounded-lg overflow-hidden shadow-md dark:shadow-lg border border-border">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={digit}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-foreground dark:text-white"
        >
          {digit}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-x-0 top-1/2 h-px bg-border  dark:bg-gray-800 opacity-50" />
    </div>
  );
};
