import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { LogIn, UserPlus, Home, User, Compass, Heart, MessageCircle } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import type { RootState, AppDispatch } from '../app/store';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
      dispatch(logout());
      dispatch(reset());
      navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Explore', path: '/explore', icon: Compass }, // Added Explore
    { name: 'Messages', path: '/messages', icon: MessageCircle }, // Added Messages
    { name: 'Notifications', path: '/notifications', icon: Heart }, // Added Notifications
    ...(isAuthenticated ? [{ name: 'Profile', path: '/profile', icon: User }] : []),
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm dark:bg-black/95 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
             <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 font-instagram tracking-tighter hover:opacity-80 transition-opacity">
              SocialFuse
            </span>
          </Link>

          {/* Desktop Navigation (Centered) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative group flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${isActive ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-900'}`}
                >
                  <Icon className={`w-6 h-6 transition-transform group-hover:scale-110 ${isActive ? 'text-black dark:text-white fill-current' : 'text-gray-500 dark:text-gray-400'}`} />
                  
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[22px] w-full h-1 bg-gradient-to-r from-purple-600 to-orange-500 rounded-t-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Auth / User Buttons */}
          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <button className="px-5 py-2 text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors">
                    Log In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="px-5 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
                <div className="flex items-center space-x-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                  >
                     <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-orange-500 p-[2px]">
                         <div className="w-full h-full rounded-full bg-white dark:bg-black p-[2px]">
                             <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="Profile" className="w-full h-full rounded-full object-cover"/>
                         </div>
                     </div>
                  </motion.div>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-semibold text-gray-500 hover:text-red-500 transition-colors"
                  >
                    Logout
                  </button>
               </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
