'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  const pageVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="flex min-h-screen w-full bg-[#0a0a0a] text-white dark:bg-white dark:text-gray-900 font-sans"
      initial="hidden"
      animate="show"
      variants={pageVariants}
    >
      {/* Left Column - Form */}
      <div className="w-full md:max-w-[480px] shrink-0 flex items-center justify-center">
        <div className="w-full max-w-[480px] flex flex-col px-[24px] md:px-[48px] py-8">
          
          <motion.div variants={itemVariants}>
            <div 
              className="mb-[32px] text-[24px]" 
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Barber&Shop
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="mb-[8px] text-[32px] font-bold"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            Create account
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-[32px] text-[14px] text-[#718096]">
            Already have an account?{' '}
            <Link 
              href="/auth/login" 
              className="text-[#A443C4] hover:underline transition-colors"
            >
              Sign in
            </Link>
          </motion.div>

          <motion.form variants={itemVariants} className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[16px]">
              
              {/* Name Input */}
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-sm text-[#718096] font-medium">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="h-[48px] px-[16px] rounded-[12px] bg-[#1C1919] text-[#FFFFFF] dark:bg-[#F7FAFC] dark:text-[#4A5568] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A443C4]/50 transition-all border-none w-full shadow-sm"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-sm text-[#718096] font-medium">E-mail</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  required
                  className="h-[48px] px-[16px] rounded-[12px] bg-[#1C1919] text-[#FFFFFF] dark:bg-[#F7FAFC] dark:text-[#4A5568] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A443C4]/50 transition-all border-none w-full shadow-sm"
                />
              </motion.div>

              {/* Password Input */}
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-sm text-[#718096] font-medium">Password</label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    className="h-[48px] w-full px-[16px] pr-[48px] rounded-[12px] bg-[#1C1919] text-[#FFFFFF] dark:bg-[#F7FAFC] dark:text-[#4A5568] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A443C4]/50 transition-all border-none shadow-sm"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-[16px] text-[#718096] hover:text-[#A443C4] transition-colors focus:outline-none flex items-center justify-center p-1 rounded-md"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {showPassword ? (
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
                </div>
              </motion.div>

              {/* Confirm Password Input */}
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <label className="text-sm text-[#718096] font-medium">Confirm Password</label>
                <div className="relative flex items-center">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    className="h-[48px] w-full px-[16px] pr-[48px] rounded-[12px] bg-[#1C1919] text-[#FFFFFF] dark:bg-[#F7FAFC] dark:text-[#4A5568] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A443C4]/50 transition-all border-none shadow-sm"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-[16px] text-[#718096] hover:text-[#A443C4] transition-colors focus:outline-none flex items-center justify-center p-1 rounded-md"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {showConfirmPassword ? (
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
                </div>
              </motion.div>
            </div>

            {/* Primary Button */}
            <motion.div variants={itemVariants} className="mt-[24px]">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-[52px] rounded-[16px] text-white font-medium flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#9C3FEF]/20 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)'
                }}
              >
                {loading ? (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <Loader2 size={20} className="animate-spin" />
                    <span>Creating account...</span>
                  </motion.div>
                ) : (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Sign up
                  </motion.span>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>

      {/* Right Column - Image */}
      <motion.div 
        className="hidden md:block flex-1 relative overflow-hidden bg-[#0a0a0a]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
      >
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Barbershop experience" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0a0a0a]/50" />
      </motion.div>
    </motion.div>
  );
}
