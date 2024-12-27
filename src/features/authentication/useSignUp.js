import { signUp as signUpApi } from '../../services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        'Account created successfully, please verify your account from your email'
      );
    },
  });

  return { signUp, isLoading };
}
