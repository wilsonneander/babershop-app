"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "auth";
  isLoading?: boolean;
  loadingText?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading,
      loadingText,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-70 disabled:cursor-not-allowed";

    const variants = {
      primary: "button-gradient text-white shadow-lg shadow-primary/20",
      secondary: "bg-secondary text-white",
      outline:
        "border-2 border-border glass text-foreground hover:bg-white/5",
      ghost: "text-foreground-secondary hover:text-foreground hover:bg-white/5",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm rounded-xl",
      md: "h-12 px-6 text-[14px] rounded-xl font-bold",
      lg: "h-14 px-8 text-[14px] rounded-xl font-bold",
      /** Matches the auth pages exactly: h-[52px], rounded-[16px], w-full */
      auth: "h-[52px] w-full rounded-[16px] text-[14px]",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
        whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2"
          >
            <Loader2 size={20} className="animate-spin" />
            {loadingText && <span>{loadingText}</span>}
          </motion.span>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2"
          >
            {children}
          </motion.span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
