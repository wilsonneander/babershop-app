'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ThemeToggle } from '@/contexts/ThemeContext';
import { Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthLayout, authItemVariants } from '@/components/ui/auth-layout';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulated auth delay
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <AuthLayout
      imageUrl="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop"
      imageAlt="Barbershop experience"
      slideDirection="left"
    >
      {/* Brand + theme toggle */}
      <motion.div variants={authItemVariants} className="flex items-center justify-between mb-[32px]">
        <div
          className="text-[24px]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {t.auth.brand}
        </div>
        <ThemeToggle />
      </motion.div>

      <motion.h1
        variants={authItemVariants}
        className="mb-[8px] text-[32px] font-bold"
        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
      >
        {t.auth.signInTitle}
      </motion.h1>

      <motion.div variants={authItemVariants} className="mb-[32px] text-[14px] text-[#718096]">
        {t.auth.noAccount}{' '}
        <Link href="/auth/register" className="text-[#A443C4] hover:underline transition-colors">
          {t.auth.createNow}
        </Link>
      </motion.div>

      <motion.form variants={authItemVariants} className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[16px]">
          {/* Email */}
          <motion.div variants={authItemVariants}>
            <Input
              variant="auth"
              type="email"
              label={t.auth.emailLabel}
              placeholder={t.auth.emailPlaceholder}
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div variants={authItemVariants}>
            <PasswordInput
              label={t.auth.passwordLabel}
              placeholder={t.auth.passwordPlaceholder}
              required
              autoComplete="current-password"
            />
          </motion.div>
        </div>

        {/* Remember me + Forgot password */}
        <motion.div variants={authItemVariants} className="flex items-center justify-between mt-[16px]">
          <motion.label
            whileHover={{ opacity: 0.8 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <motion.input
              type="checkbox"
              whileTap={{ scale: 0.8 }}
              className="accent-[#A443C4] w-4 h-4 cursor-pointer rounded border-gray-600 bg-transparent transition-colors focus:ring-2 focus:ring-[#A443C4]/50"
            />
            <span className="text-[14px] text-[#718096] group-hover:text-gray-300 transition-colors">
              {t.auth.rememberMe}
            </span>
          </motion.label>

          <Link
            href="/auth/forgot-password"
            className="text-[14px] text-[#A443C4] hover:underline transition-colors"
          >
            {t.auth.forgotPassword}
          </Link>
        </motion.div>

        {/* Submit */}
        <motion.div variants={authItemVariants} className="mt-[24px]">
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-[52px] rounded-[16px] text-white font-medium flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#9C3FEF]/20 relative overflow-hidden"
            style={{ background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)' }}
          >
            {loading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2"
              >
                <Loader2 size={20} className="animate-spin" />
                <span>{t.auth.signingInBtn}</span>
              </motion.div>
            ) : (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {t.auth.signInBtn}
              </motion.span>
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </AuthLayout>
  );
}
