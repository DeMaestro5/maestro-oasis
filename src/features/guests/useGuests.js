import { useQuery } from '@tanstack/react-query';
import { getGuests as getGuestsApi } from '../../services/apiGuests';

export function useGuests() {
  const {
    data: guests,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['guests'],
    queryFn: getGuestsApi,
  });
  console.log(guests);

  return { guests, error, isLoading };
}
