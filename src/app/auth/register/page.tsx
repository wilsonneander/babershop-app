'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ThemeToggle } from '@/contexts/ThemeContext';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { AuthLayout, authItemVariants } from '@/components/ui/auth-layout';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <AuthLayout
      imageUrl="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
      imageAlt="Barbershop experience"
      slideDirection="right"
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
        {t.auth.signUpTitle}
      </motion.h1>

      <motion.div variants={authItemVariants} className="mb-[32px] text-[14px] text-[#718096]">
        {t.auth.hasAccount}{' '}
        <Link href="/auth/login" className="text-[#A443C4] hover:underline transition-colors">
          {t.auth.signIn}
        </Link>
      </motion.div>

      <motion.form variants={authItemVariants} className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[16px]">
          {/* Name */}
          <motion.div variants={authItemVariants}>
            <Input
              variant="auth"
              type="text"
              label={t.auth.nameLabel}
              placeholder={t.auth.namePlaceholder}
              required
              autoComplete="name"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={authItemVariants}>
            <Input
              variant="auth"
              type="email"
              label={t.auth.emailLabel}
              placeholder={t.auth.emailPlaceholder}
              required
              autoComplete="email"
            />
          </motion.div>

          {/* Password */}
          <motion.div variants={authItemVariants}>
            <PasswordInput
              label={t.auth.passwordLabel}
              placeholder={t.auth.passwordPlaceholder}
              required
              autoComplete="new-password"
            />
          </motion.div>

          {/* Confirm Password */}
          <motion.div variants={authItemVariants}>
            <PasswordInput
              label={t.auth.confirmPasswordLabel}
              placeholder={t.auth.passwordPlaceholder}
              required
              autoComplete="new-password"
            />
          </motion.div>
        </div>

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
                <span>{t.auth.signingUpBtn}</span>
              </motion.div>
            ) : (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {t.auth.signUpBtn}
              </motion.span>
            )}
          </motion.button>
        </motion.div>
      </motion.form>
    </AuthLayout>
  );
}
