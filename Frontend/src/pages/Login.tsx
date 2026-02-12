import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login, reset } from '../features/auth/authSlice';
import type { AppDispatch, RootState } from '../app/store'; // Adjust import if needed
import { Mail, Lock, Loader2, AlertCircle } from 'lucide-react';

import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    return () => {
        if(isSuccess || isError){
            dispatch(reset());
        }
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Please sign in to your account
          </p>
        </div>
        
        {isError && (
            <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                <AlertCircle className="flex-shrink-0 inline w-4 h-4 me-3" />
                <span className="sr-only">Error</span>
                <div>
                    <span className="font-medium">Error!</span> {message}
                </div>
            </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div className="relative">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Email address"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Password"
                value={password}
                onChange={onChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                  <Loader2 className="animate-spin h-5 w-5 text-white" />
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>
        
         <div className="text-center mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                >
                Sign up
                </Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
