import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import { getSettings } from '../../services/apiSettings';

export function useSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });

  return { isLoading, settings };
}
