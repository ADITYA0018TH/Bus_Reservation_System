import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-indigo-600">Bus Reservation</h2>
                        <p className="mt-2 text-white">© 2025 Bus Reservation. All rights reserved.</p>
                    </div>
                    <div className="flex mt-6 md:mt-0 space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:animate-pulse">
                            <Facebook className="w-6 h-6 text-white hover:text-indigo-500 transition-colors duration-300" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:animate-pulse">
                            <Twitter className="w-6 h-6 text-white hover:text-indigo-500 transition-colors duration-300" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:animate-pulse">
                            <Instagram className="w-6 h-6 text-white hover:text-indigo-500 transition-colors duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;