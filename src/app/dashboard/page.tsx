'use client';

import Link from 'next/link';
import { Calendar, Clock, Scissors, MapPin, LogOut } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Mock data
const myAppointments = [
  { id: '1', barber: 'Alex Mota', date: '2026-04-12', time: '14:00', status: 'scheduled' },
  { id: '2', barber: 'Bruno Silva', date: '2026-03-28', time: '10:00', status: 'completed' },
];

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Top Nav */}
      <nav className="glass sticky top-0 z-50 border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div
          className="text-[24px] text-white"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Barber&amp;Shop
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-sm font-bold text-white">Wilson Neto</span>
            <span className="text-xs text-[#718096]">Cliente</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-white/5 rounded-full transition-colors text-[#718096] hover:text-white"
            aria-label="Sair"
          >
            <LogOut className="w-5 h-5" />
          </motion.button>
        </div>
      </nav>

      <motion.main
        className="max-w-4xl mx-auto p-6 space-y-12 py-12"
        initial="hidden"
        animate="show"
        variants={pageVariants}
      >
        {/* Header */}
        <motion.header
          variants={itemVariants}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h1
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              Olá, Wilson
            </h1>
            <p className="text-[14px] text-[#718096]">
              Aqui estão seus agendamentos recentes e futuros.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/booking"
              className="block px-6 py-3 text-white font-bold rounded-[16px] shadow-lg shadow-[#9C3FEF]/20 text-center text-sm"
              style={{ background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)' }}
            >
              NOVO AGENDAMENTO
            </Link>
          </motion.div>
        </motion.header>

        {/* Appointments */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#A443C4]" />
            Meus Agendamentos
          </h2>

          <div className="grid gap-4">
            {myAppointments.map((app) => (
              <motion.div
                key={app.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="glass p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-[#A443C4]/30 transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#A443C4] border border-white/10 group-hover:bg-[#9C3FEF]/10 transition-colors">
                    <Scissors className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{app.barber}</h3>
                    <div className="flex gap-4 text-sm text-[#718096] mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(app.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {app.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      app.status === 'scheduled'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-white/5 text-[#718096] border border-white/10'
                    }`}
                  >
                    {app.status === 'scheduled' ? 'Confirmado' : 'Finalizado'}
                  </span>
                  {app.status === 'scheduled' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs text-red-400 hover:text-red-300 transition-colors"
                    >
                      Cancelar
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}

            {myAppointments.length === 0 && (
              <motion.div variants={itemVariants} className="text-center py-20 glass rounded-3xl space-y-4">
                <p className="text-[#718096] italic">Você ainda não possui agendamentos.</p>
                <Link href="/booking" className="text-[#A443C4] font-bold hover:underline">
                  Agendar minha primeira visita
                </Link>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Location */}
        <motion.section
          variants={itemVariants}
          className="glass rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#9C3FEF]/10"
        >
          <div className="space-y-4 max-w-md">
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              Nossa Localização
            </h2>
            <p className="text-[#718096] font-light flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#A443C4] flex-shrink-0" />
              Rua das Navalhas, 123 - Centro, São Paulo - SP
            </p>
            <p className="text-[#718096] font-light flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#A443C4] flex-shrink-0" />
              Segunda a Sábado: 09:00 - 20:00
            </p>
          </div>
          <div className="w-full md:w-64 h-48 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-[#718096] italic">
            Mapa Interativo
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
}
