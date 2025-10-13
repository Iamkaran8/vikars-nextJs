'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { login, logout } from '@/store/slices/authSlice';

export default function AuthExample() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login({
      email: 'admin@example.com',
      token: 'sample-token-123'
    }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Redux Auth Example</h3>
      
      {isAuthenticated ? (
        <div>
          <p className="text-green-600 mb-2">✅ Authenticated</p>
          <p className="mb-2">Email: {user?.email}</p>
          <p className="mb-4">Token: {user?.token}</p>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="text-red-600 mb-4">❌ Not authenticated</p>
          <button 
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}