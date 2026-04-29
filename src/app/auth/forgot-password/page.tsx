'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage, LanguageToggle } from '@/contexts/LanguageContext';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthLayout, authItemVariants } from '@/components/ui/auth-layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();
  const fp = t.forgotPassword;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulated async delay (matches login/register pattern)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <AuthLayout
      imageUrl="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
      imageAlt="Barbershop tools"
      slideDirection="left"
    >
      {/* Brand + language toggle */}
      <motion.div variants={authItemVariants} className="flex items-center justify-between mb-[32px]">
        <div
          className="text-[24px]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {t.auth.brand}
        </div>
        <LanguageToggle />
      </motion.div>

      <AnimatePresence mode="wait">
        {submitted ? (
          /* ── Success State ───────────────────────────────────── */
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center text-center gap-6 pt-4"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #9C3FEF22 0%, #C6564722 100%)' }}
            >
              <CheckCircle2 size={40} className="text-[#A443C4]" />
            </motion.div>

            <div className="space-y-2">
              <h1
                className="text-[32px] font-bold"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {fp.successTitle}
              </h1>
              <p className="text-[14px] text-[#718096]">
                {fp.successSubtitle}
              </p>
            </div>

            <Link
              href="/auth/login"
              className="flex items-center gap-2 text-[14px] text-[#A443C4] hover:underline transition-colors mt-2"
            >
              <ArrowLeft size={14} />
              {fp.backToLogin}
            </Link>
          </motion.div>
        ) : (
          /* ── Form State ──────────────────────────────────────── */
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.1 } }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col"
          >
            <motion.h1
              variants={authItemVariants}
              className="mb-[8px] text-[32px] font-bold"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              {fp.title}
            </motion.h1>

            <motion.div variants={authItemVariants} className="mb-[32px] text-[14px] text-[#718096]">
              {fp.subtitle}
            </motion.div>

            <motion.form
              variants={authItemVariants}
              className="flex flex-col gap-[16px]"
              onSubmit={handleSubmit}
            >
              <motion.div variants={authItemVariants}>
                <Input
                  variant="auth"
                  type="email"
                  label={fp.emailLabel}
                  placeholder={fp.emailPlaceholder}
                  required
                />
              </motion.div>

              <motion.div variants={authItemVariants} className="mt-[8px]">
                <Button
                  type="submit"
                  variant="primary"
                  size="auth"
                  isLoading={loading}
                  loadingText={fp.submittingBtn}
                  style={{ background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)' }}
                >
                  {fp.submitBtn}
                </Button>
              </motion.div>
            </motion.form>

            <motion.div variants={authItemVariants} className="mt-[24px] flex justify-center">
              <Link
                href="/auth/login"
                className="flex items-center gap-2 text-[14px] text-[#718096] hover:text-[#A443C4] transition-colors"
              >
                <ArrowLeft size={14} />
                {fp.backToLogin}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AuthLayout>
  );
}
