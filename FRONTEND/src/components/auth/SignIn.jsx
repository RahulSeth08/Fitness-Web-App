import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import signinimg from '../../assets/signup.jpg'; // Ensure the correct path for the image

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const backend_url = import.meta.env.VITE_API_URL
  console.log("Hello!!")
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch(`${backend_url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        try {
          // Check if the response is JSON
          const contentType = response.headers.get('Content-Type');
          if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            if (data.token) {
              const token = data.token;
              localStorage.setItem('authToken', token);
              navigate('/dashboard');
            } else {
              setError('Token not found in response. Please try again.');
            }
          } else {
            // If the response is not JSON, assume it's plain text
            const token = await response.text();
            localStorage.setItem('authToken', token);
            navigate('/dashboard');
          }
        } catch (jsonError) {
          setError('Failed to parse response. Please try again.');
        }
      } else {
        try {
          const errorData = await response.json();
          setError(errorData.message || 'Sign in failed. Please try again.');
        } catch (jsonError) {
          setError('An error occurred. Please try again.');
        }
      }
    } catch (err) {
      setError('An error occurred during sign in. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-4xl h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex">
        <div className="w-1/2 p-8 flex flex-col">
          <div className="mb-6">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="text-2xl font-bold mt-2">FitGuysWeb</h2>
            <p className="text-xs text-gray-600">Your Transformation Partner</p>
          </div>
          <h1 className="text-2xl font-bold mb-4">Sign In</h1>
          <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full p-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="text-xs text-center mt-3">
            Don't have an account?{' '}
            <Link to="/auth/signup" className="text-indigo-600 hover:underline">
              Register now
            </Link>
          </p>
          <div className="mt-6 text-xs text-gray-500 flex justify-between">
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
        <div className="w-1/2 relative overflow-hidden">
          <img
            src={signinimg}
            alt="Fitness"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
