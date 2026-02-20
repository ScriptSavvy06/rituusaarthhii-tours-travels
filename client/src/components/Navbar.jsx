import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src="/assets/logo.png" alt="Rituu Saarthhii Logo" className="h-14 w-auto mr-3" />
                            <div className="flex flex-col leading-tight">
                                <span className="text-xl md:text-2xl font-bold text-brand-green">Rituu Saarthhii</span>
                                <span className="text-xs md:text-sm font-medium text-brand-red tracking-widest uppercase">Tour & Travels</span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-brand-green font-medium transition">Home</Link>
                        <Link to="/packages" className="text-gray-700 hover:text-brand-green font-medium transition">Packages</Link>
                        <Link to="/about" className="text-gray-700 hover:text-brand-green font-medium transition">About Us</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-brand-green font-medium transition">Contact</Link>
                        <a href="tel:+9198238847850" className="flex items-center bg-brand-red text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
                            <Phone size={18} className="mr-2" />
                            <span>Call Now</span>
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 pb-4 px-4 space-y-2">
                    <Link to="/" className="block py-2 text-gray-700 hover:text-brand-green font-medium" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/packages" className="block py-2 text-gray-700 hover:text-brand-green font-medium" onClick={() => setIsOpen(false)}>Packages</Link>
                    <Link to="/about" className="block py-2 text-gray-700 hover:text-brand-green font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link to="/contact" className="block py-2 text-gray-700 hover:text-brand-green font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
                    <a href="tel:+9198238847850" className="flex items-center text-brand-red font-bold py-2">
                        <Phone size={18} className="mr-2" />
                        <span>Call Now</span>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
