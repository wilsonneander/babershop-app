'use client';

import { useState } from 'react';
import { Scissors, Calendar as CalendarIcon, Clock, ChevronRight, CheckCircle2, User } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Mock data
const barbers = [
  { id: '1', name: 'Alex Mota', active: true },
  { id: '2', name: 'Bruno Silva', active: true },
  { id: '3', name: 'Carlos Santos', active: true },
];

const availableSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.25, ease: 'easeIn' } },
};

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleBook() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  }

  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="glass p-12 rounded-3xl text-center space-y-6 max-w-lg w-full"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.15 }}
            className="mx-auto w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #9C3FEF22, #C6564722)' }}
          >
            <CheckCircle2 className="w-12 h-12 text-[#A443C4]" />
          </motion.div>
          <h1
            className="text-3xl font-bold text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Agendamento Realizado!
          </h1>
          <p className="text-[14px] text-[#718096]">
            Seu horário foi reservado com sucesso. Você receberá uma confirmação em breve.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/"
              className="inline-block px-8 py-4 text-white font-bold rounded-[16px] shadow-lg shadow-[#9C3FEF]/20"
              style={{ background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)' }}
            >
              VOLTAR PARA HOME
            </Link>
          </motion.div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] p-6 pb-24 relative overflow-hidden text-white font-sans">
      {/* Background glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#9C3FEF]/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-xl mx-auto space-y-8 relative z-10"
        initial="hidden"
        animate="show"
        variants={pageVariants}
      >
        {/* Header */}
        <motion.header variants={itemVariants} className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="/"
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Voltar"
            >
              ←
            </Link>
          </motion.div>
          <div>
            <h1
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              Agendar Horário
            </h1>
            <p className="text-sm text-[#718096]">Escolha o profissional e o melhor momento.</p>
          </div>
        </motion.header>

        {/* Step Progress */}
        <motion.div variants={itemVariants} className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                s <= step
                  ? 'bg-[#A443C4]'
                  : 'bg-white/10'
              }`}
            />
          ))}
        </motion.div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          {/* STEP 1 — Select Barber */}
          {step === 1 && (
            <motion.div
              key="step-1"
              variants={stepVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="space-y-4"
            >
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Scissors className="w-5 h-5 text-[#A443C4]" />
                Selecione o Barbeiro
              </h2>
              <div className="grid gap-3">
                {barbers.map((barber) => (
                  <motion.button
                    key={barber.id}
                    onClick={() => { setSelectedBarber(barber.id); setStep(2); }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`glass p-6 rounded-2xl flex items-center justify-between group transition-all ${
                      selectedBarber === barber.id
                        ? 'border-[#A443C4] ring-1 ring-[#A443C4]'
                        : 'hover:border-[#A443C4]/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#718096] group-hover:text-[#A443C4] transition-colors">
                        <User className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-medium text-white">{barber.name}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#718096] group-hover:text-[#A443C4] group-hover:translate-x-1 transition-all" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2 — Select Date */}
          {step === 2 && (
            <motion.div
              key="step-2"
              variants={stepVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="space-y-6"
            >
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-[#A443C4]" />
                Escolha a Data
              </h2>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full h-[48px] px-[16px] rounded-[12px] bg-[#1C1919] text-white text-base focus:outline-none focus:ring-2 focus:ring-[#A443C4]/50 transition-all border-none shadow-sm"
              />
              <motion.button
                disabled={!selectedDate}
                onClick={() => setStep(3)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-[52px] text-white font-bold rounded-[16px] disabled:opacity-50 shadow-lg shadow-[#9C3FEF]/20 transition-all"
                style={{ background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)' }}
              >
                PRÓXIMO PASSO
              </motion.button>
              <button
                onClick={() => setStep(1)}
                className="w-full text-[#718096] text-sm hover:text-white transition-colors"
              >
                Voltar
              </button>
            </motion.div>
          )}

          {/* STEP 3 — Select Time */}
          {step === 3 && (
            <motion.div
              key="step-3"
              variants={stepVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="space-y-6"
            >
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#A443C4]" />
                Horários Disponíveis
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {availableSlots.map((slot) => (
                  <motion.button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-[12px] border transition-all text-center font-bold text-sm ${
                      selectedTime === slot
                        ? 'text-white border-[#A443C4] shadow-lg shadow-[#9C3FEF]/20'
                        : 'glass text-white border-white/10 hover:border-[#A443C4]/30'
                    }`}
                    style={
                      selectedTime === slot
                        ? { background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)' }
                        : undefined
                    }
                  >
                    {slot}
                  </motion.button>
                ))}
              </div>

              <div className="pt-6 space-y-4">
                <motion.button
                  disabled={!selectedTime || loading}
                  onClick={handleBook}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-[52px] text-white font-bold rounded-[16px] shadow-lg shadow-[#9C3FEF]/20 flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
                  style={{ background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)' }}
                >
                  {loading ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Confirmando...
                    </motion.span>
                  ) : 'CONFIRMAR AGENDAMENTO'}
                </motion.button>
                <button
                  onClick={() => setStep(2)}
                  className="w-full text-[#718096] text-sm hover:text-white transition-colors"
                >
                  Voltar
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
