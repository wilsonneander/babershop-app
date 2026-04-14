"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon: Icon, error, type, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full">
        <div
          className={cn(
            "relative flex items-center w-full rounded-xl border border-border bg-white/5 transition-all duration-200 overflow-hidden",
            isFocused && "border-primary ring-1 ring-primary/50",
            error && "border-red-500",
            className
          )}
        >
          {Icon && (
            <div className="pl-4 flex items-center justify-center text-foreground-secondary">
              <Icon size={20} />
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex h-12 w-full bg-transparent px-4 py-2 text-md text-foreground placeholder:text-foreground-secondary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              Icon && "pl-3"
            )}
            ref={ref}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
