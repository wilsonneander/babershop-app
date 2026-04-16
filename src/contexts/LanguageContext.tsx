'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/lib/i18n';
import { motion } from 'framer-motion';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextProps>({ 
  lang: 'pt', 
  setLang: () => {},
  t: translations.pt
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('barbershop-lang') as Language;
    if (saved && (saved === 'en' || saved === 'pt')) {
      setLangState(saved);
    }
    setMounted(true);
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('barbershop-lang', l);
  };

  // Previne erros de hydration (servidor/client) e retorna PT via SSR
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ lang: 'pt', setLang, t: translations.pt }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const isPt = lang === 'pt';

  return (
    <button
      type="button"
      onClick={() => setLang(isPt ? 'en' : 'pt')}
      className="relative flex items-center w-[56px] h-[28px] rounded-full p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A443C4]/50 transition-colors shadow-inner"
      style={{
        background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)'
      }}
      aria-label="Toggle language"
    >
      {/* Background text (discretos nas bordas) */}
      <span className="absolute left-[8px] text-[10px] font-bold text-white/50 pointer-events-none">
        EN
      </span>
      <span className="absolute right-[8px] text-[10px] font-bold text-white/50 pointer-events-none">
        PT
      </span>

      {/* Toggle Knob (Bolinha que corre) */}
      <motion.div
        className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center shadow-md z-10"
        initial={false}
        animate={{
          x: isPt ? 28 : 0, 
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <span className="text-[9px] font-bold text-[#A443C4]">
          {isPt ? 'PT' : 'EN'}
        </span>
      </motion.div>
    </button>
  );
}
