import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// Placeholder components for routes not yet implemented
const Profile = () => <div className="flex justify-center items-center h-full text-2xl font-bold text-gray-400">Profile Page Coming Soon</div>;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route index element={<HomePage />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            
            {/* Catch all - 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
