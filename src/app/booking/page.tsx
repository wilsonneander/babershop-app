'use client'

import { useState } from 'react'
import { Scissors, Calendar as CalendarIcon, Clock, ChevronRight, Loader2, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

// Mock data (would be from services)
const barbers = [
  { id: '1', name: 'Alex Mota', active: true },
  { id: '2', name: 'Bruno Silva', active: true },
  { id: '3', name: 'Carlos Santos', active: true },
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const availableSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']

  async function handleBook() {
    setLoading(true)
    // Create appointment logic
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1500)
  }

  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-[#0f172a]">
        <div className="glass p-12 rounded-3xl text-center space-y-6 animate-in max-w-lg">
          <div className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-outfit font-bold text-white">Agendamento Realizado!</h1>
          <p className="text-slate-400">
            Seu horário foi reservado com sucesso. Você receberá uma confirmação em breve.
          </p>
          <Link href="/" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl transition-transform hover:scale-105">
            VOLTAR PARA HOME
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0f172a] p-6 pb-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="max-w-xl mx-auto space-y-8 animate-in relative z-10">
        <header className="flex items-center gap-4">
           <Link href="/" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            ←
          </Link>
          <div>
            <h1 className="text-2xl font-outfit font-bold text-white">Agendar Horário</h1>
            <p className="text-sm text-slate-400">Escolha o profissional e o melhor momento.</p>
          </div>
        </header>

        {/* Step Progress */}
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`h-1.5 flex-1 rounded-full transition-colors ${s <= step ? 'bg-primary' : 'bg-white/10'}`} 
            />
          ))}
        </div>

        {/* STEP 1: SELECT BARBER */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Scissors className="w-5 h-5 text-primary" />
              Selecione o Barbeiro
            </h2>
            <div className="grid gap-3">
              {barbers.map((barber) => (
                <button
                  key={barber.id}
                  onClick={() => { setSelectedBarber(barber.id); setStep(2); }}
                  className={`glass p-6 rounded-2xl flex items-center justify-between group hover:border-primary/50 transition-all ${selectedBarber === barber.id ? 'border-primary ring-1 ring-primary' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                      <User className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-medium text-white">{barber.name}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: SELECT DATE */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-primary" />
              Escolha a Data
            </h2>
            <input 
              type="date" 
              min={new Date().toISOString().split('T')[0]}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-white/5 border border-white/10 glass rounded-2xl p-6 text-white text-xl focus:outline-none focus:border-primary/50"
            />
            <button 
              disabled={!selectedDate}
              onClick={() => setStep(3)}
              className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl disabled:opacity-50 transition-all active:scale-95"
            >
              PRÓXIMO PASSO
            </button>
            <button onClick={() => setStep(1)} className="w-full text-slate-500 text-sm hover:text-slate-300">Voltar</button>
          </div>
        )}

        {/* STEP 3: SELECT TIME */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Horários Disponíveis
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`p-4 rounded-xl border transition-all text-center font-bold ${selectedTime === slot ? 'bg-primary text-primary-foreground border-primary' : 'glass text-white border-white/10 hover:border-primary'}`}
                >
                  {slot}
                </button>
              ))}
            </div>
            
            <div className="pt-6">
              <button 
                disabled={!selectedTime || loading}
                onClick={handleBook}
                className="w-full py-5 bg-primary text-primary-foreground font-bold rounded-2xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'CONFIRMAR AGENDAMENTO'}
              </button>
              <button onClick={() => setStep(2)} className="w-full mt-4 text-slate-500 text-sm hover:text-slate-300">Voltar</button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
