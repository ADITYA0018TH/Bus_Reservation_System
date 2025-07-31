import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, MapPin, Users, User } from 'lucide-react';
import Waves from '../components/waves';

interface Booking {
    from: string;
    to: string;
    date: string;
    time: string;
    passengers: number;
    bookingId: string;
    userEmail: string;
}

const BookingHistory: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            const parsedUser = JSON.parse(userData);
            const email = parsedUser?.email || null;
            console.log('User Email:', email); // Debugging line
            setUserEmail(email);
        }
    }, []);

    useEffect(() => {
        const fetchBookings = async () => {
            if (!userEmail) return;
            setLoading(true);
            setError('');

            try {
                const response = await axios.get(`http://localhost:5001/api/bookings/history/${encodeURIComponent(userEmail)}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log('Booking history response:', response.data);
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching booking history:', error);
                setError('Failed to load booking history. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [userEmail]);

    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Waves
                lineColor="#303F9F"
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
            <Navbar />
            <div className="container mx-auto px-6 py-10 bg-white/95 backdrop-blur-3xl rounded-2xl shadow-2xl my-12 flex-grow">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Booking History</h1>

                {loading && (
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="text-2xl text-gray-100">Loading...</div>
                    </div>
                )}

                {error && (
                    <div className="text-center text-lg text-red-600 bg-red-100 p-3 rounded-md">
                        {error}
                    </div>
                )}

                {bookings.length === 0 ? (
                    <div className="text-center text-xl text-white">No bookings found for your account</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {bookings.map((booking) => (
                            <div key={booking.bookingId} className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <div className="flex items-center mb-4">
                                    <User className="text-indigo-500 mr-2" />
                                    <span className="text-sm text-gray-600">{booking.userEmail}</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <MapPin className="text-indigo-500 mr-2" />
                                        <span className="text-lg text-gray-900">{booking.from}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="text-indigo-500 mr-2" />
                                        <span className="text-lg text-gray-900">{booking.to}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <Calendar className="text-indigo-500 mr-2" />
                                        <span className="text-lg text-gray-900">{booking.date}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="text-indigo-500 mr-2" />
                                        <span className="text-lg text-gray-900">{booking.time}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Users className="text-indigo-500 mr-2" />
                                    <span className="text-lg text-gray-900">{booking.passengers} {booking.passengers === 1 ? 'Passenger' : 'Passengers'}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default BookingHistory;