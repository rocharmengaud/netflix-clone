import { useRouter } from 'next/router';
import { UserAuth } from '@/context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = UserAuth();
  if (!user) {
    return router.push('/');
  } else {
    return children;
  }
};
