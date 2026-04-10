import Link from 'next/link'
import { Calendar, Clock, Scissors, MapPin, LogOut } from 'lucide-react'

// Mock data
const myAppointments = [
  { id: '1', barber: 'Alex Mota', date: '2026-04-12', time: '14:00', status: 'scheduled' },
  { id: '2', barber: 'Bruno Silva', date: '2026-03-28', time: '10:00', status: 'completed' },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-inter">
      {/* Sidebar / Top Nav */}
      <nav className="glass sticky top-0 z-50 border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-outfit font-bold text-white tracking-tight">
          Razor<span className="text-primary">Line</span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-sm font-bold text-white">Wilson Neto</span>
            <span className="text-xs text-slate-400">Cliente</span>
          </div>
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <LogOut className="w-5 h-5 text-slate-400" />
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6 space-y-12 py-12 animate-in">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-outfit font-bold text-white">Olá, Wilson</h2>
            <p className="text-slate-400">Aqui estão seus agendamentos recentes e futuros.</p>
          </div>
          <Link 
            href="/booking" 
            className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-center"
          >
            NOVO AGENDAMENTO
          </Link>
        </header>

        <section className="space-y-6">
          <h3 className="text-lg font-bold text-slate-300 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Meus Agendamentos
          </h3>

          <div className="grid gap-4">
            {myAppointments.map((app) => (
              <div 
                key={app.id} 
                className="glass p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary/10 transition-colors">
                    <Scissors className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{app.barber}</h4>
                    <div className="flex gap-4 text-sm text-slate-400 mt-1">
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
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    app.status === 'scheduled' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                    'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                  }`}>
                    {app.status === 'scheduled' ? 'Confirmado' : 'Finalizado'}
                  </span>
                  {app.status === 'scheduled' && (
                    <button className="text-xs text-red-400 hover:text-red-300 transition-colors">
                      Cancelar
                    </button>
                  )}
                </div>
              </div>
            ))}

            {myAppointments.length === 0 && (
              <div className="text-center py-20 glass rounded-3xl space-y-4">
                <p className="text-slate-500 italic">Você ainda não possui agendamentos.</p>
                <Link href="/booking" className="text-primary font-bold hover:underline">
                  Agendar minha primeira visita
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className="glass rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
          <div className="space-y-4 max-w-md">
            <h3 className="text-2xl font-outfit font-bold text-white">Nossa Localização</h3>
            <p className="text-slate-400 font-light flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              Rua das Navalhas, 123 - Centro, São Paulo - SP
            </p>
            <p className="text-slate-400 font-light flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary flex-shrink-0" />
              Segunda a Sábado: 09:00 - 20:00
            </p>
          </div>
          <div className="w-full md:w-64 h-48 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-slate-600 italic">
            Mapa Interativo
          </div>
        </section>
      </main>
    </div>
  )
}
