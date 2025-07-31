import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Waves from '../../components/waves';  // Adjust the import path based on your file structure
import axios from 'axios';

interface LoginProps {
    setIsAuthenticated: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5001/api/auth/login', {
                email: formData.email,
                password: formData.password,
            });

            const data = response.data;

            if (response.status === 200) {
                localStorage.setItem('token', data.token);
                setIsAuthenticated(true);
                navigate('/booking'); // Redirect to booking page
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
            style={{
                background: 'linear-gradient(135deg, #0d0d1f 0%, #1a0033 100%)', // Dark cosmic gradient
                overflow: 'hidden', // Prevent overflow from Waves
            }}
        >
            {/* Waves Background */}
            <Waves
                lineColor="#aa7942" // Neon cyan with transparency
                backgroundColor="transparent"
                waveSpeedX={0.0125}
                waveSpeedY={0.005}
                waveAmpX={32}
                waveAmpY={16}
                xGap={10}
                yGap={32}
                friction={0.925}
                tension={0.005}
                maxCursorMove={100}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />

            {/* Glassmorphism Form Container */}
            <div
                className="max-w-md w-full p-8 rounded-2xl relative space-y-6"
                style={{
                    background: 'rgba(255, 255, 255, 0.05)', // Transparent glass effect
                    backdropFilter: 'blur(10px)', // Glassmorphism blur
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                    zIndex: 1, // Ensure it’s above the Waves
                }}
            >
                <div>
                    <h2
                        className="text-center text-3xl font-bold text-white"
                        style={{
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            textShadow: '0 0 10px rgba(0, 255, 204, 0.8)', // Neon glow
                        }}
                    >
                        Sign In
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-300">
                        Don't have an account?{' '}
                        <button
                            onClick={() => navigate('/register')}
                            className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                            style={{ textShadow: '0 0 5px rgba(0, 255, 204, 0.5)' }}
                        >
                            Sign Up
                        </button>
                    </p>
                </div>

                {error && (
                    <div
                        className="p-3 rounded-md text-center"
                        style={{
                            background: 'rgba(255, 0, 122, 0.1)', // Neon pink error background
                            color: '#ff007a',
                            textShadow: '0 0 5px rgba(255, 0, 122, 0.5)',
                        }}
                    >
                        {error}
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-cyan-400" />
                            </div>
                            <input
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 pl-10 rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                                placeholder="Email Address"
                                style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.3)' }}
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-cyan-400" />
                            </div>
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-3 pl-10 rounded-md bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                                placeholder="Password"
                                style={{ boxShadow: '0 0 10px rgba(0, 255, 204, 0.3)' }}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff className="h-5 w-5 text-cyan-400" /> : <Eye className="h-5 w-5 text-cyan-400" />}
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full p-3 rounded-full text-white font-semibold transition-all"
                            style={{
                                background: 'linear-gradient(45deg, #ff007a, #8a2be2)', // Neon pink to purple gradient
                                boxShadow: '0 0 15px rgba(255, 0, 122, 0.7)',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 0, 122, 1)')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 0, 122, 0.7)')
                            }
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;