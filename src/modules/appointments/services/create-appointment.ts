import { supabase } from '@/lib/supabase'

export async function createAppointment({
  clientId,
  barberId,
  date,
  time
}: {
  clientId: string
  barberId: string
  date: string
  time: string
}) {
  // 1. Conflict check (double booking)
  const { data: existing } = await supabase
    .from('appointments')
    .select('id')
    .eq('barber_id', barberId)
    .eq('date', date)
    .eq('time', time)
    .eq('status', 'scheduled')
    .single()

  if (existing) {
    throw new Error('This time slot is already booked.')
  }

  // 2. Insert appointment
  const { data, error } = await supabase
    .from('appointments')
    .insert([
      {
        client_id: clientId,
        barber_id: barberId,
        date,
        time,
        status: 'scheduled'
      }
    ])
    .select()
    .single()

  if (error) throw error

  return data
}
