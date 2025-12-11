'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const SearchForm = () => {
    const router = useRouter();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');

    // Autocomplete states
    const [locations, setLocations] = useState<string[]>([]);
    const [fromSuggestions, setFromSuggestions] = useState<string[]>([]);
    const [toSuggestions, setToSuggestions] = useState<string[]>([]);
    const [showFromSuggestions, setShowFromSuggestions] = useState(false);
    const [showToSuggestions, setShowToSuggestions] = useState(false);

    // Refs for clicking outside
    const fromRef = useRef<HTMLDivElement>(null);
    const toRef = useRef<HTMLDivElement>(null);

    // Fetch locations on mount
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const res = await fetch('/api/locations');
                if (res.ok) {
                    const data = await res.json();
                    setLocations(data);
                }
            } catch (error) {
                console.error("Failed to fetch locations", error);
            }
        };
        fetchLocations();
    }, []);

    // Filter suggestions
    useEffect(() => {
        if (from) {
            setFromSuggestions(locations.filter(city => city.toLowerCase().includes(from.toLowerCase())));
        } else {
            setFromSuggestions([]);
        }
    }, [from, locations]);

    useEffect(() => {
        if (to) {
            setToSuggestions(locations.filter(city => city.toLowerCase().includes(to.toLowerCase())));
        } else {
            setToSuggestions([]);
        }
    }, [to, locations]);

    // Handle clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
                setShowFromSuggestions(false);
            }
            if (toRef.current && !toRef.current.contains(event.target as Node)) {
                setShowToSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = () => {
        if (from && to && date) {
            router.push(`/booking?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`);
        } else {
            const missing = [];
            if (!from) missing.push("From City");
            if (!to) missing.push("To City");
            if (!date) missing.push("Journey Date");
            alert(`Please fill in the following fields: ${missing.join(', ')}`);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-4xl mx-auto p-6 lg:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl relative z-20"
        >
            <div className="flex flex-col gap-6">
                <div className="flex gap-4 border-b border-white/10 pb-4">
                    <button className="text-white font-semibold border-b-2 border-indigo-500 pb-4 -mb-4.5 px-2">Bus Tickets</button>
                    <button className="text-gray-400 font-medium hover:text-white transition-colors pb-4 -mb-4 px-2">Charter</button>
                    <button className="text-gray-400 font-medium hover:text-white transition-colors pb-4 -mb-4 px-2">Hotels</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    {/* From */}
                    <div className="relative group md:col-span-1" ref={fromRef}>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">From</label>
                        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl focus-within:border-indigo-500/50 focus-within:bg-white/10 transition-all hover:bg-white/10">
                            <MapPin className="ml-3 text-indigo-400 w-5 h-5 flex-shrink-0" />
                            <input
                                type="text"
                                value={from}
                                onChange={(e) => {
                                    setFrom(e.target.value);
                                    setShowFromSuggestions(true);
                                }}
                                onFocus={() => setShowFromSuggestions(true)}
                                placeholder="Departure City"
                                className="w-full bg-transparent border-none text-white placeholder-gray-500 py-3 px-3 focus:outline-none text-sm font-medium"
                            />
                        </div>
                        {/* Suggestions Dropdown */}
                        <AnimatePresence>
                            {showFromSuggestions && fromSuggestions.length > 0 && (
                                <motion.ul
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl mt-2 max-h-48 overflow-y-auto z-50 shadow-xl"
                                >
                                    {fromSuggestions.map((city) => (
                                        <li
                                            key={city}
                                            onClick={() => {
                                                setFrom(city);
                                                setShowFromSuggestions(false);
                                            }}
                                            className="px-4 py-2 hover:bg-indigo-500/20 text-gray-300 hover:text-white cursor-pointer transition-colors text-sm"
                                        >
                                            {city}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* To */}
                    <div className="relative group md:col-span-1" ref={toRef}>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">To</label>
                        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl focus-within:border-indigo-500/50 focus-within:bg-white/10 transition-all hover:bg-white/10">
                            <MapPin className="ml-3 text-pink-400 w-5 h-5 flex-shrink-0" />
                            <input
                                type="text"
                                value={to}
                                onChange={(e) => {
                                    setTo(e.target.value);
                                    setShowToSuggestions(true);
                                }}
                                onFocus={() => setShowToSuggestions(true)}
                                placeholder="Destination City"
                                className="w-full bg-transparent border-none text-white placeholder-gray-500 py-3 px-3 focus:outline-none text-sm font-medium"
                            />
                        </div>
                        {/* Suggestions Dropdown */}
                        <AnimatePresence>
                            {showToSuggestions && toSuggestions.length > 0 && (
                                <motion.ul
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl mt-2 max-h-48 overflow-y-auto z-50 shadow-xl"
                                >
                                    {toSuggestions.map((city) => (
                                        <li
                                            key={city}
                                            onClick={() => {
                                                setTo(city);
                                                setShowToSuggestions(false);
                                            }}
                                            className="px-4 py-2 hover:bg-indigo-500/20 text-gray-300 hover:text-white cursor-pointer transition-colors text-sm"
                                        >
                                            {city}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Date */}
                    <div className="relative group md:col-span-1">
                        <label className="block text-xs font-medium text-gray-300 mb-1.5 ml-1">Journey Date</label>
                        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl focus-within:border-indigo-500/50 focus-within:bg-white/10 transition-all hover:bg-white/10">
                            <Calendar className="ml-3 text-cyan-400 w-5 h-5 flex-shrink-0" />
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full bg-transparent border-none text-white placeholder-gray-500 py-3 px-3 focus:outline-none text-sm font-medium min-h-[46px]" // min-h to match text inputs
                            />
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="md:col-span-1">
                        <Button
                            variant="premium"
                            onClick={handleSearch}
                            className="w-full h-[46px] rounded-xl text-md font-semibold shadow-indigo-500/20"
                        >
                            <Search className="mr-2 w-5 h-5" /> Search Buses
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SearchForm;
