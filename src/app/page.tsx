import Link from 'next/link'
import { Scissors, Calendar, ShieldCheck, Clock } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />

      <div className="z-10 w-full max-w-5xl space-y-12 text-center animate-in">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium tracking-wide">
            <Scissors className="w-4 h-4" />
            <span>EXCELLENCE EM BARBEARIA</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-outfit font-bold tracking-tight text-white">
            Razor<span className="text-primary">Line</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Agende seu horário com os mestres da tesoura em segundos. 
            Sem complicação, sem WhatsApp.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/booking" 
            className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/25"
          >
            AGENDAR AGORA
          </Link>
          <Link 
            href="/auth/login" 
            className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
          >
            ÁREA DO CLIENTE
          </Link>
        </div>

        <section className="grid md:grid-cols-3 gap-6 pt-12">
          <div className="glass p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Agendamento Real-time</h3>
            <p className="text-slate-400 font-light">
              Visualize horários disponíveis instantaneamente e reserve o seu em poucos cliques.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Lembretes Inteligentes</h3>
            <p className="text-slate-400 font-light">
              Não perca mais seu horário. Receba notificações automáticas do seu agendamento.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Controle Total</h3>
            <p className="text-slate-400 font-light">
              Gerencie seus agendamentos, cancele ou remarque diretamente pelo painel.
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-24 text-slate-500 text-sm font-light">
        © 2026 RazorLine. Todos os direitos reservados.
      </footer>
    </main>
  )
}
