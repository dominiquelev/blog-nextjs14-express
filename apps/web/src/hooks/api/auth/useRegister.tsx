'use client';

import { axiosInstance } from '@/app/lib/axios';
import { User } from '@/types/user.type';
import { useRouter } from 'next/navigation';

interface RegisterArgs extends Omit<User, 'id'> {
  password: string;
}

const useRegister = () => {
  const router = useRouter();
  const register = async (payload: Omit<User, 'id'>) => {
    try {
      await axiosInstance.post('/auth/register', payload);

      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return { register };
};
export default useRegister;