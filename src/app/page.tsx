import Link from 'next/link';
import { Scissors, Calendar, ShieldCheck, Clock } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6 bg-[#0a0a0a]">
      {/* Decorative background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#9C3FEF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C65647]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 w-full max-w-5xl space-y-12 text-center animate-in">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[#A443C4] text-sm font-medium tracking-wide">
            <Scissors className="w-4 h-4" />
            <span>EXCELLENCE EM BARBEARIA</span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-bold tracking-tight text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Razor<span className="text-[#A443C4]">Line</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#718096] max-w-2xl mx-auto font-light leading-relaxed">
            Agende seu horário com os mestres da tesoura em segundos.{' '}
            Sem complicação, sem WhatsApp.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="px-8 py-4 text-white font-bold rounded-[16px] hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg shadow-[#9C3FEF]/20 text-center"
            style={{ background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)' }}
          >
            AGENDAR AGORA
          </Link>
          <Link
            href="/auth/login"
            className="px-8 py-4 glass text-white font-bold rounded-[16px] hover:bg-white/10 transition-colors text-center border border-white/10"
          >
            ÁREA DO CLIENTE
          </Link>
        </div>

        <section className="grid md:grid-cols-3 gap-6 pt-12">
          {[
            {
              icon: <Calendar className="w-6 h-6" />,
              title: 'Agendamento Real-time',
              desc: 'Visualize horários disponíveis instantaneamente e reserve o seu em poucos cliques.',
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: 'Lembretes Inteligentes',
              desc: 'Não perca mais seu horário. Receba notificações automáticas do seu agendamento.',
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: 'Controle Total',
              desc: 'Gerencie seus agendamentos, cancele ou remarque diretamente pelo painel.',
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="glass p-8 rounded-2xl space-y-4 hover:border-[#A443C4]/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-default"
            >
              <div className="w-12 h-12 bg-[#9C3FEF]/10 rounded-[12px] flex items-center justify-center text-[#A443C4]">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-[#718096] font-light">{desc}</p>
            </div>
          ))}
        </section>
      </div>

      <footer className="mt-24 text-[#718096] text-sm font-light">
        © 2026 RazorLine. Todos os direitos reservados.
      </footer>
    </main>
  );
}
