import { supabase } from '@/lib/supabase'

export async function getAvailableSlots(barberId: string, date: string) {
  // 1. Get appointments for this barber and date
  const { data: appointments } = await supabase
    .from('appointments')
    .select('time')
    .eq('barber_id', barberId)
    .eq('date', date)
    .eq('status', 'scheduled')

  const bookedTimes = appointments?.map(a => a.time) || []

  // 2. Get barber's availability for this day of week
  const dayOfWeek = new Date(date).getUTCDay() // 0-6
  
  const { data: availability } = await supabase
    .from('availability')
    .select('start_time, end_time')
    .eq('barber_id', barberId)
    .eq('day_of_week', dayOfWeek)
    .single()

  if (!availability) {
    return [] // No availability for this day
  }

  const { start_time, end_time } = availability
  
  // 3. Generate slots (simple 1-hour increments for now)
  const slots: string[] = []
  const [startHour] = start_time.split(':').map(Number)
  const [endHour] = end_time.split(':').map(Number)

  for (let h = startHour; h < endHour; h++) {
    const time = `${h.toString().padStart(2, '0')}:00`
    if (!bookedTimes.includes(time)) {
      slots.push(time)
    }
  }

  return slots
}
