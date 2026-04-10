'use server'

import { createAppointment } from '../services/create-appointment'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const bookingSchema = z.object({
  barberId: z.string().uuid(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().regex(/^\d{2}:\d{2}$/),
})

export async function bookAppointmentAction(formData: FormData) {
  const data = {
    barberId: formData.get('barberId'),
    date: formData.get('date'),
    time: formData.get('time'),
  }

  const validated = bookingSchema.parse(data)

  // In a real app, you'd get the clientId from the session
  const clientId = '00000000-0000-0000-0000-000000000000' 

  try {
    const result = await createAppointment({
      clientId,
      barberId: validated.barberId,
      date: validated.date,
      time: validated.time,
    })

    revalidatePath('/dashboard')
    return { success: true, data: result }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred'
    return { success: false, error: message }
  }
}
