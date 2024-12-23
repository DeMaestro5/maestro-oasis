import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateSetting as updateSettingApi } from '../../services/apiSettings';
import { toast } from 'react-hot-toast';

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['settings'] });
      toast.success('settings updated');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateSetting, isUpdating };
}
