import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Loader2, ArrowLeft } from 'lucide-react';
import { MockBackend } from '../services/mockBackend';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const success = await MockBackend.login(username, password);

    if (success) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Subtle Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-neutral-50 to-neutral-100 z-0"></div>

      <div className="w-full max-w-md bg-white border border-neutral-200 shadow-xl shadow-black/5 p-10 z-10 animate-fade-in-up">
        <div className="text-center mb-10">
          <div className="h-14 w-14 border border-neutral-100 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="h-5 w-5 text-gold-500" />
          </div>
          <h1 className="text-xl font-bold uppercase tracking-[0.2em] text-black">Admin Portal</h1>
          <p className="text-gray-400 text-xs mt-3 tracking-wide">Mitobias Internal System</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 text-red-500 text-xs p-4 mb-6 text-center tracking-wide">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="group">
            <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 text-black px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-sm"
            />
          </div>
          <div className="group">
            <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 text-black px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white font-bold uppercase tracking-[0.2em] text-xs py-4 hover:bg-gold-500 transition-colors duration-300 flex justify-center items-center mt-8 shadow-md"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'Authenticate'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-neutral-100 text-center">
             <Link to="/" className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-black transition-colors">
                <ArrowLeft className="h-3 w-3 mr-2" /> Back to Website
             </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;