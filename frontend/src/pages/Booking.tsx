import React, { useState } from 'react';
import { Rocket, Shield, MessageCircle, Calendar, Clock, MapPin, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Waves from '../components/waves';
import axios from 'axios';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import AlertNotification from '../components/AlertNotification'; // Import the AlertNotification component

const MAPBOX_TOKEN = 'your_mapbox_token_here'; // Replace with your Mapbox token

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1',
    time: '10:00',
  });

  const [showForm, setShowForm] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // State for alert message

  const [suggestions, setSuggestions] = useState({
    from: [],
    to: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Booking details:', data);
        setAlertMessage('Booking submitted successfully!');
      } else {
        setAlertMessage('Failed to submit booking. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setAlertMessage('An error occurred. Please check your connection and try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchSuggestions = async (query: string, field: 'from' | 'to') => {
    if (!query) {
      setSuggestions((prev) => ({ ...prev, [field]: [] }));
      return;
    }
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json`,
      {
        params: {
          access_token: MAPBOX_TOKEN,
          autocomplete: true,
        },
      }
    );
    setSuggestions((prev) => ({
      ...prev,
      [field]: response.data.features.map((feature: any) => feature.place_name),
    }));
  };

  return (
    <div className="min-h-screen relative">
      {/* Waves Background */}
      <Waves
        lineColor="#303F9F" // Neon cyan with slight transparency
        backgroundColor="transparent" // Keep it transparent to show the gradient
        waveSpeedX={0.0125}
        waveSpeedY={0.005}
        waveAmpX={32}
        waveAmpY={16}
        xGap={10}
        yGap={32}
        friction={0.925}
        tension={0.005}
        maxCursorMove={100}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} // Full-screen coverage
      />
      <Navbar />
      <div className="relative z-0 pt-20">
        <div className="container mx-auto px-6 py-10 bg-white/95 backdrop-blur-3xl rounded-2xl shadow-2xl  w-full md:w-2/3 lg:w-1/2 mt-12">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Book Your Journey</h1>

          <div className="flex justify-center">
            <button
              type="button"
              onMouseEnter={() => setShowForm(true)}
              aria-label="Book Now"
              className="relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-xl 
                       hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 
                       focus:outline-none focus:ring-4 focus:ring-indigo-200 
                       transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl
                       min-w-[200px]"
            >
              Book Now
              <div className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </div>
            </button>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${showForm ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}
            onMouseLeave={() => setShowForm(false)}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block text-sm font-semibold text-white mb-2">From</label>
                  <div className="relative ">
                    <MapPin className="absolute left-3 bottom-5  -translate-y-[0.2rem] text-indigo-500 group-hover:text-indigo-600 transition-colors" size={20} />
                    <Combobox
                      onSelect={(value) => setFormData({ ...formData, from: value })}
                    >
                      <ComboboxInput
                        className="pl-10 w-full  items-center justify-center p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 ease-in-out text-white bg-transparent"
                        name="from"
                        value={formData.from}
                        onChange={(e) => {
                          handleChange(e);
                          fetchSuggestions(e.target.value, 'from');
                        }}
                        placeholder="Departure City"
                      />
                      {suggestions.from.length > 0 && (
                        <ComboboxPopover className="mt-1 rounded-xl border-2 border-gray-100 shadow-lg">
                          <ComboboxList className="py-2">
                            {suggestions.from.map((suggestion, index) => (
                              <ComboboxOption key={index} value={suggestion} className="px-4 py-2 hover:bg-indigo-50 cursor-pointer text-white" />
                            ))}
                          </ComboboxList>
                        </ComboboxPopover>
                      )}
                    </Combobox>
                  </div>
                </div>
                <div className="relative group">
                  <label className="block text-sm font-semibold text-white mb-2">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 bottom-5  -translate-y-[0.2rem] text-indigo-500 group-hover:text-indigo-600 transition-colors"size={20} />
                    <Combobox
                      onSelect={(value) => setFormData({ ...formData, to: value })}
                    >
                      <ComboboxInput
                        className="pl-10 w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 ease-in-out text-white bg-transparent"
                        name="to"
                        value={formData.to}
                        onChange={(e) => {
                          handleChange(e);
                          fetchSuggestions(e.target.value, 'to');
                        }}
                        placeholder="Destination City"
                      />
                      {suggestions.to.length > 0 && (
                        <ComboboxPopover className="mt-1 rounded-xl border-2 border-gray-100 shadow-lg">
                          <ComboboxList className="py-2">
                            {suggestions.to.map((suggestion, index) => (
                              <ComboboxOption key={index} value={suggestion} className="px-4 py-2 hover:bg-indigo-50 cursor-pointer text-white" />
                            ))}
                          </ComboboxList>
                        </ComboboxPopover>
                      )}
                    </Combobox>
                  </div>
                </div>
                <div className="relative group">
                  <label className="block text-sm font-semibold text-white mb-2">Date</label>
                  <div className="relative flex items-center">
                    <Calendar className="absolute left-3   -translate-y-[0.2rem] text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 ease-in-out text-white bg-transparent"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <label className="block text-sm font-semibold text-white mb-2">Preferred Time</label>
                  <div className="relative flex items-center">
                    <Clock className="absolute left-3 bottom-5  -translate-y-[0.2rem] text-indigo-500 group-hover:text-indigo-600   transition-colors" />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 ease-in-out text-white bg-transparent"
                    />
                  </div>
                </div>
                <div className="relative md:col-span-2 group">
                  <label className="block text-sm font-semibold text-white mb-2">Number of Passengers</label>
                  <div className="relative flex items-center">
                    <Users className="absolute left-3 top-1 mt-3 gap-5 -translate-y-1/2 -translate-y-[0.2rem] text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="pl-10 w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 ease-in-out appearance-none text-white bg-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Passenger' : 'Passengers'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-xl 
                           hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 
                           focus:outline-none focus:ring-4 focus:ring-indigo-200 
                           transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl
                           min-w-[200px]"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>

          {alertMessage && (
            <div className="fixed bottom-4 right-4">
              <AlertNotification message={alertMessage} onClose={() => setAlertMessage(null)} />
            </div>
          )}

          <div className="max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Instant Confirmation', desc: 'Secure your journey with immediate booking confirmation', icon: <Rocket className="w-8 h-8 mx-auto text-indigo-500" /> },
              { title: 'Safe & Secure', desc: 'Travel with peace of mind knowing your safety is our priority', icon: <Shield className="w-8 h-8 mx-auto text-indigo-500" /> },
              { title: '24/7 Support', desc: 'Our dedicated team is always here to assist you', icon: <MessageCircle className="w-8 h-8 mx-auto text-indigo-500" /> },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center 
                          hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/90"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;