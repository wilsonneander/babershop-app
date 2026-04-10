import { supabase } from '@/lib/supabase'

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) return null

  return data
}

export async function createProfile({
  id,
  name,
  email,
  phone,
  role = 'client'
}: {
  id: string
  name: string
  email: string
  phone: string
  role?: 'client' | 'admin'
}) {
  const { data, error } = await supabase
    .from('profiles')
    .insert([{ id, name, email, phone, role }])
    .select()
    .single()

  if (error) throw error

  return data
}
