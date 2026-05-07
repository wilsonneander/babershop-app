"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Scissors, Calendar, Smartphone, Star, Zap, CheckCircle2 } from 'lucide-react';
import { ThemeToggle } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function Home() {
  return (
    <main
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6 transition-colors duration-300"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      {/* Theme toggle — fixed top-right */}
      <div className="fixed top-5 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Decorative background glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#9C3FEF]/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, delay: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C65647]/10 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 w-full max-w-6xl space-y-20 py-20"
      >
        {/* HERO SECTION */}
        <header className="space-y-8 text-center max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[#A443C4] text-sm font-medium tracking-wide border border-white/10 shadow-sm hover:scale-[1.02] transition-transform">
              <Scissors className="w-4 h-4" />
              <span>SISTEMA PREMIUM DE GESTÃO</span>
            </div>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif", color: 'var(--foreground)' }}
          >
            Barber<span className="text-[#A443C4]">&</span>Shop
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--foreground-secondary)' }}
          >
            Agendamento simples para barbearias. O fim da bagunça no WhatsApp e o início de uma experiência profissional.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/auth/login" className="w-full sm:w-auto" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto text-[16px] px-10 h-14 rounded-2xl">
                Agendar Agora
              </Button>
            </Link>
            <Link href="/auth/login" className="w-full sm:w-auto" tabIndex={-1}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-[16px] px-10 h-14 rounded-2xl">
                Entrar como Admin
              </Button>
            </Link>
          </motion.div>
        </header>

        {/* BENEFITS SECTION */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: 'Agendamento rápido',
              desc: 'Marcações em segundos, sem atritos ou esperas.',
            },
            {
              icon: <Smartphone className="w-6 h-6" />,
              title: 'Fim do WhatsApp',
              desc: 'Liberte-se das mensagens. Tudo 100% automatizado.',
            },
            {
              icon: <Calendar className="w-6 h-6" />,
              title: 'Organização da agenda',
              desc: 'Controle total dos seus horários e profissionais.',
            },
            {
              icon: <Star className="w-6 h-6" />,
              title: 'Melhor experiência',
              desc: 'Seus clientes vão amar a facilidade de agendar.',
            },
          ].map(({ icon, title, desc }) => (
            <motion.div key={title} variants={itemVariants}>
              <Card className="p-8 space-y-4 hover:border-[#A443C4]/30 transition-all hover:scale-[1.02] active:scale-[0.98] h-full flex flex-col items-center text-center cursor-default group">
                <div className="w-14 h-14 bg-[#9C3FEF]/10 rounded-2xl flex items-center justify-center text-[#A443C4] mb-2 shadow-sm group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                  {title}
                </h3>
                <p className="font-light text-sm" style={{ color: 'var(--foreground-secondary)' }}>
                  {desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </section>

        {/* VISUAL SECTION */}
        <motion.section variants={itemVariants} className="pt-10">
          <div className="glass rounded-[32px] p-2 md:p-4 border border-white/10 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#9C3FEF]/5 to-[#C65647]/5 pointer-events-none" />
            <div className="bg-background/80 backdrop-blur-md rounded-[24px] overflow-hidden border border-white/5">
              {/* Fake Browser Window Top Bar */}
              <div className="h-12 border-b border-border/50 flex items-center px-6 gap-2 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              
              <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center justify-between">
                <div className="flex-1 space-y-6 max-w-xl">
                  <h3 className="text-3xl font-bold font-['Instrument_Sans']">Experiência premium para o seu cliente</h3>
                  <p className="text-lg text-foreground-secondary font-light leading-relaxed">
                    Uma interface limpa, rápida e moderna. Seu cliente acessa, escolhe o serviço, o profissional e o horário ideal. Tudo de forma completamente autônoma.
                  </p>
                  <ul className="space-y-4 pt-2">
                    {['Layout responsivo (Celular e PC)', 'Sincronização em tempo real', 'Integração visual com a sua marca'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[15px]">
                        <CheckCircle2 className="text-[#A443C4] w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Fake Schedule Card Mockup */}
                <div className="w-full max-w-sm flex-shrink-0">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="glass p-6 rounded-3xl border border-[#A443C4]/20 shadow-2xl shadow-[#9C3FEF]/10 space-y-5"
                  >
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <div>
                        <div className="font-bold text-lg">Corte & Barba</div>
                        <div className="text-xs text-foreground-secondary mt-1">45 Minutos</div>
                      </div>
                      <div className="text-[#A443C4] font-bold text-xl">R$ 75</div>
                    </div>
                    
                    <div className="flex items-center gap-4 py-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#9C3FEF] to-[#C65647] p-[2px]">
                        <div className="w-full h-full rounded-full border-2 border-background bg-background/50 flex items-center justify-center font-bold text-xs">
                          CE
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-[15px]">Carlos Eduardo</div>
                        <div className="text-xs text-[#A443C4] font-medium">Especialista Senior</div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-3 flex justify-between items-center border border-white/5">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-foreground-secondary" />
                        <span className="text-sm font-medium">Hoje, 14:30</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button className="w-full h-12 pointer-events-none rounded-xl text-[15px]">
                        Confirmar Agendamento
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </motion.div>

      {/* FOOTER */}
      <footer className="mt-auto py-8 text-center w-full z-10 border-t border-white/5 mt-12 opacity-80 hover:opacity-100 transition-opacity">
        <p className="text-sm font-light tracking-wide" style={{ color: 'var(--foreground-secondary)' }}>
          © {new Date().getFullYear()} Barber&Shop. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
