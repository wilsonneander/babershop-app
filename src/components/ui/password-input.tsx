"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "./input";

export interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  error?: string;
  name?: string;
  id?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

export function PasswordInput({
  label,
  placeholder = "••••••••",
  error,
  name,
  id,
  required,
  value,
  onChange,
  autoComplete,
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  const eyeToggle = (
    <motion.button
      type="button"
      onClick={() => setShow((prev) => !prev)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-[#718096] hover:text-[#A443C4] transition-colors focus:outline-none flex items-center justify-center p-1 rounded-md"
      aria-label={show ? "Ocultar senha" : "Mostrar senha"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {show ? (
          <motion.div
            key="eye-off"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            <EyeOff size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="eye"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            <Eye size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );

  return (
    <Input
      variant="auth"
      type={show ? "text" : "password"}
      label={label}
      placeholder={placeholder}
      error={error}
      name={name}
      id={id}
      required={required}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      rightElement={eyeToggle}
    />
  );
}
