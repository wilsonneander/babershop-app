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
  /** Icon displayed on the left side of the input */
  icon?: LucideIcon;
  /** Error message displayed below the input */
  error?: string;
  /** Label displayed above the input */
  label?: string;
  /**
   * `default` — glass/border style used in booking/dashboard
   * `auth`    — matches login & register pages exactly
   */
  variant?: "default" | "auth";
  /** Element rendered on the right side (e.g. password eye toggle) */
  rightElement?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, icon: Icon, error, label, variant = "default", rightElement, type, ...props },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    if (variant === "auth") {
      return (
        <div className="flex flex-col gap-2 w-full">
          {label && (
            <label
              className="text-sm font-medium"
              style={{ color: "var(--auth-text-muted)" }}
            >
              {label}
            </label>
          )}
          <div className="relative flex items-center">
            <input
              type={type}
              className={cn(
                "h-[48px] w-full px-[16px] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#A443C4]/50 transition-all border-none shadow-sm",
                rightElement && "pr-[48px]",
                className
              )}
              style={{
                backgroundColor: "var(--auth-input-bg)",
                color: "var(--auth-input-text)",
                // placeholder color handled via global CSS below
              }}
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
            {rightElement && (
              <div className="absolute right-[16px] flex items-center justify-center">
                {rightElement}
              </div>
            )}
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
      );
    }

    // default variant — original glass style
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-1.5 text-sm text-foreground-secondary font-medium">
            {label}
          </label>
        )}
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
              Icon && "pl-3",
              rightElement && "pr-12"
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
          {rightElement && (
            <div className="absolute right-4 flex items-center justify-center">
              {rightElement}
            </div>
          )}
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
