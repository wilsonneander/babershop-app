"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface TimeSelectorProps {
  slots: TimeSlot[];
  selectedTime?: string;
  onSelectTime: (time: string) => void;
  className?: string;
}

export function TimeSelector({
  slots,
  selectedTime,
  onSelectTime,
  className,
}: TimeSelectorProps) {
  return (
    <div className={cn("grid grid-cols-4 gap-3", className)}>
      {slots.map((slot) => {
        const isSelected = selectedTime === slot.time;
        const isDisabled = !slot.available;

        return (
          <motion.button
            key={slot.time}
            type="button"
            disabled={isDisabled}
            onClick={() => !isDisabled && onSelectTime(slot.time)}
            whileHover={!isDisabled && !isSelected ? { scale: 1.05 } : {}}
            whileTap={!isDisabled ? { scale: 0.95 } : {}}
            className={cn(
              "h-12 rounded-xl text-md font-bold flex items-center justify-center transition-colors border",
              isSelected
                ? "bg-white text-primary border-white"
                : isDisabled
                ? "border-border/50 text-foreground-secondary/30 bg-transparent cursor-not-allowed"
                : "border-border text-foreground hover:bg-white/10 glass"
            )}
          >
            {slot.time}
          </motion.button>
        );
      })}
    </div>
  );
}
