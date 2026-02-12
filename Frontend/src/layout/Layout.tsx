import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
