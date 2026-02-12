import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

const ProtectedRoute = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
