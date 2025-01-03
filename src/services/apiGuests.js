import supabase from './supabase';

export async function getGuests() {
  const { data, error } = await supabase.from('guests').select('*');

  if (error) {
    console.error(error);
    throw new Error('Guests could not get loaded');
  }

  return data;
}
