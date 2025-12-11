'use client';

import { Button } from "@/components/ui/button";
import { Wifi, Plug, Coffee, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface BusCardProps {
    id: string;
    operator: string;
    type: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    price: number;
    seatsAvailable: number;
    rating: number;
}

const BusCard = ({ id, operator, type, departureTime, arrivalTime, duration, price, seatsAvailable, rating }: BusCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 group"
        >
            <div className="flex flex-col md:flex-row justify-between gap-6">
                {/* Operator Info */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{operator}</h3>
                        <span className="bg-yellow-500/20 text-yellow-500 text-xs px-2 py-1 rounded-full font-medium">★ {rating}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{type}</p>

                    <div className="flex gap-4 text-gray-500">
                        <Wifi size={16} className="hover:text-white transition-colors" />
                        <Plug size={16} className="hover:text-white transition-colors" />
                        <Coffee size={16} className="hover:text-white transition-colors" />
                        <Shield size={16} className="hover:text-white transition-colors" />
                    </div>
                </div>

                {/* Timing */}
                <div className="flex-[2] flex items-center justify-between text-center px-4 md:px-10 border-l border-r border-white/5">
                    <div className="text-left">
                        <p className="text-2xl font-bold text-white">{departureTime}</p>
                        <p className="text-gray-500 text-sm">Departure</p>
                    </div>

                    <div className="flex flex-col items-center px-4">
                        <span className="text-gray-500 text-xs mb-1">{duration}</span>
                        <div className="w-24 h-[1px] bg-gray-700 relative">
                            <div className="absolute -top-1 right-0 w-2 h-2 bg-gray-500 rounded-full"></div>
                            <div className="absolute -top-1 left-0 w-2 h-2 bg-white rounded-full"></div>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-2xl font-bold text-gray-300">{arrivalTime}</p>
                        <p className="text-gray-500 text-sm">Arrival</p>
                    </div>
                </div>

                {/* Price & Action */}
                <div className="flex-1 flex flex-col items-end justify-between">
                    <div>
                        <p className="text-gray-500 text-sm text-right">Starting from</p>
                        <p className="text-3xl font-bold text-indigo-400">₹{price}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2 mt-4">
                        <p className="text-green-400 text-xs">{seatsAvailable} Seats Left</p>
                        <Button variant="premium" className="w-full md:w-auto px-8">View Seats</Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default BusCard;
