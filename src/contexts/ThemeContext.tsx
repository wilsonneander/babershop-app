'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

type Theme = 'dark' | 'light';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
});

function applyTheme(t: Theme) {
  if (t === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('barbershop-theme') as Theme | null;
    const resolved: Theme = saved === 'light' ? 'light' : 'dark';
    setTheme(resolved);
    applyTheme(resolved);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
    localStorage.setItem('barbershop-theme', next);
  }

  // During SSR / before hydration, serve dark (matches default class on <html>)
  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

/** Pill toggle — identical size/shape/gradient to the old LanguageToggle */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex items-center w-[56px] h-[28px] rounded-full p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A443C4]/50 shadow-inner"
      style={{ background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)' }}
      aria-label={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
    >
      {/* Background hint icons */}
      <span className="absolute left-[7px] flex items-center justify-center pointer-events-none">
        <Sun size={10} className="text-white/50" />
      </span>
      <span className="absolute right-[7px] flex items-center justify-center pointer-events-none">
        <Moon size={10} className="text-white/50" />
      </span>

      {/* Sliding knob */}
      <motion.div
        className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center shadow-md z-10"
        initial={false}
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon size={11} className="text-[#A443C4]" />
        ) : (
          <Sun size={11} className="text-[#A443C4]" />
        )}
      </motion.div>
    </button>
  );
}
