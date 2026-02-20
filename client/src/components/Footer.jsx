import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-green text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold mb-4">Rituu Saarthhii</h2>
                        <p className="text-gray-300 mb-6">
                            Your trusted partner for spiritual tours, holiday packages, and customized trips across India. Experience the journey of a lifetime with us.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-brand-red transition"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/rituusaarthhiii?igsh=MnJjbGpqZ3h6N3F3" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-brand-red transition"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-brand-red">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
                            <li><Link to="/packages" className="text-gray-300 hover:text-white transition">Tour Packages</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Direct Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-brand-red">Our Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-300">Spiritual Tours</li>
                            <li className="text-gray-300">Holiday Packages</li>
                            <li className="text-gray-300">Group Tours</li>
                            <li className="text-gray-300">Customized Trips</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-brand-red">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={20} className="mr-3 text-brand-red flex-shrink-0" />
                                <span className="text-gray-300">Bhopal, Madhya Pradesh, India</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="mr-3 text-brand-red flex-shrink-0" />
                                <span className="text-gray-300">+91 98238 847850</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="mr-3 text-brand-red flex-shrink-0" />
                                <span className="text-gray-300 text-sm">rituusaarthhiii07@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Rituu Saarthhii Tour & Travels. All rights reserved.</p>
                    <p className="mt-2">
                        Developer: <a href="https://www.linkedin.com/in/ashish-sharma-66031b268" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline transition">Ashish Sharma</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
