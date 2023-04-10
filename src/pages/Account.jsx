import { Navbar } from '@/components/Navbar';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function Account() {
  return (
    <ProtectedRoute>
      <Navbar />
    </ProtectedRoute>
  );
}
