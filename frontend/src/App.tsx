import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Page imports
import BookingHistory from './pages/BookingHistory';
import Booking from './pages/Booking';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/Home';

// Components
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return !!localStorage.getItem('token'); // ✅ Read token on initial render
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    return (
        <Router>
            <Routes>
                {/* Home page is accessible to everyone */}
                <Route path="/" element={<Home />} />

                {/* Public Routes - Prevent access if logged in */}
                <Route path="/login" element={isAuthenticated ? <Navigate to="/booking" replace /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/register" element={isAuthenticated ? <Navigate to="/login" replace /> : <Register setIsAuthenticated={setIsAuthenticated} />} />

                {/* Protected Routes */}
                <Route 
                    path="/booking" 
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Booking />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path="/booking-history" 
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <BookingHistory />
                        </ProtectedRoute>
                    } 
                />

                {/* Redirect unknown routes to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
