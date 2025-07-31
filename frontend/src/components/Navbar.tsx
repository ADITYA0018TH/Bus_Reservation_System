import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        navigate('/home'); // Redirect to login page after logout
    };

    return (
        <nav className="fixed top-1 w-full bg-black/80 backdrop-blur-md shadow-lg py-3 z-50 rounded-full border-2 border-indigo-700">
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Left - Logo & Title */}
                <div className="flex items-center space-x-4"> 
                    <Link to="/">
                        <img
                            src="https://img.freepik.com/free-vector/school-bus-passing-by-cartoon_18591-51496.jpg?t=st=1739601722~exp=1739605322~hmac=50e6f631a0b7ce705cfbdfd887a419069bb87c1e6b841fdf5f8e9b2c00582d68&w=1380"
                            alt="Logo Bus"
                            className="h-12 w-12 object-cover rounded-full mix-blend-multiply transition-transform duration-200 ease-in-out transform hover:scale-125" />
                    </Link>
                    <Link to="/booking">
                        <h1 className="text-xl md:text-2xl font-bold text-white hover:text-indigo-600 transition-colors duration-200">
                            Bus Reservation
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center space-x-4 ml-auto">
                    <Link to="/booking-history">
                        <button
                            className="relative px-7 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-full 
                            hover:from-indigo-700 hover:to-purple-700 transform hover:scale-110  
                            focus:outline-none focus:ring-4 focus:ring-indigo-200 
                            transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl
                            min-w-[200px]">
                            Booking History
                        </button>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="relative px-7 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white text-lg font-semibold rounded-full 
                        hover:from-red-700 hover:to-red-900 transform hover:scale-110  
                        focus:outline-none focus:ring-4 focus:ring-red-200 
                        transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl
                        min-w-[200px]">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;