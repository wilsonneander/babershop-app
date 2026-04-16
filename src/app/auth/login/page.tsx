'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-[#0a0a0a] text-white dark:bg-white dark:text-gray-900 font-sans">
      {/* Left Column - Form */}
      <div className="w-full md:max-w-[480px] shrink-0 flex items-center justify-center">
        <div className="w-full max-w-[480px] flex flex-col px-[24px] md:px-[48px] py-8">
          
          <div 
            className="mb-[32px] text-[24px]" 
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Barber&Shop
          </div>

          <h1 
            className="mb-[8px] text-[32px] font-bold"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            Sign in
          </h1>

          <div className="mb-[32px] text-[14px] text-[#718096]">
            Don't have an account?{' '}
            <Link 
              href="/auth/register" 
              className="text-[#A443C4] hover:underline"
            >
              Create now
            </Link>
          </div>

          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-[16px]">
              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#718096] font-medium">E-mail</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="h-[48px] px-[16px] rounded-[12px] bg-[#1C1919] text-[#FFFFFF] dark:bg-[#F7FAFC] dark:text-[#4A5568] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A443C4]/50 transition-all border-none w-full"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#718096] font-medium">Password</label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="h-[48px] w-full px-[16px] pr-[48px] rounded-[12px] bg-[#1C1919] text-[#FFFFFF] dark:bg-[#F7FAFC] dark:text-[#4A5568] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A443C4]/50 transition-all border-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-[16px] text-[#718096] hover:text-[#A443C4] transition-colors focus:outline-none flex items-center justify-center"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Actions Row */}
            <div className="flex items-center justify-between mt-[16px]">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="accent-[#A443C4] w-4 h-4 cursor-pointer rounded border-gray-600 bg-transparent transition-colors"
                />
                <span className="text-[14px] text-[#718096] group-hover:text-gray-300 dark:group-hover:text-gray-600 transition-colors">
                  Remember me
                </span>
              </label>

              <Link 
                href="/auth/forgot-password"
                className="text-[14px] text-[#A443C4] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Primary Button */}
            <button
              type="submit"
              className="mt-[24px] w-full h-[52px] rounded-[16px] text-white font-medium flex items-center justify-center transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.95] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#9C3FEF]/20"
              style={{
                background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)'
              }}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="hidden md:block flex-1 relative overflow-hidden bg-[#0a0a0a]">
        <img 
          src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop" 
          alt="Barbershop experience" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft overlay to ensure image blends nicely and text would be readable if placed here */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]/50" />
      </div>
    </div>
  );
}
