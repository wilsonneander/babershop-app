import { supabase } from '@/lib/supabase'

export async function getBarbers() {
  const { data, error } = await supabase
    .from('barbers')
    .select('*')
    .eq('active', true)
    .order('name')

  if (error) throw error

  return data
}
