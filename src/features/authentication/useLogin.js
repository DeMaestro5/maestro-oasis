import { login as loginApi } from '../../services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate('/dashboard', { replace: true });
    },
    onError: (error) => {
      console.log('Error', error);
      toast.error('Email or password is incorrect');
    },
  });

  return { login, isLoading };
}
