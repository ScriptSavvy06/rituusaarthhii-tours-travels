import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// 1. Add this line outside the component or at the top of the component
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Contact = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialPackage = queryParams.get('package') || '';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        travelDate: '',
        message: '',
        package: initialPackage
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            // 2. Use the API_URL variable here instead of localhost
            const response = await axios.post(`${API_URL}/api/enquiries`, formData);
            if (response.status === 201) {
                setLoading(false);
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', travelDate: '', message: '', package: '' });
            }
        } catch (err) {
            setLoading(false);
            console.error('Submission error:', err);
            setError(err.response?.data?.message || 'Something went wrong. Please try again or contact us via phone.');
        }
    };

    return (
        <div className="bg-white">
            <div className="bg-brand-red py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl font-extrabold mb-4">Contact Rituu Saarthhii</h1>
                    <p className="opacity-90 max-w-2xl mx-auto text-lg">We are here to help you plan your perfect spiritual or leisure trip.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl font-bold text-brand-green mb-8">Get In Touch</h2>
                        <p className="text-gray-600 mb-10 text-lg">
                            Have questions about our tour packages? Want a customized itinerary? Feel free to reach out to us. Our travel experts are available to assist you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-red-50 text-brand-red rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Phone Number</h3>
                                    <p className="text-gray-600">+91 98238 847850</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-green-50 text-brand-green rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email Address</h3>
                                    <p className="text-gray-600">rituusaarthhiii07@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Our Office</h3>
                                    <p className="text-gray-600">123, Arera Colony, Bhopal, Madhya Pradesh, India - 462016</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-12 h-64 bg-gray-100 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center text-gray-400 font-medium border border-gray-200">
                            <div className="text-center">
                                <MapPin className="mx-auto mb-2 opacity-50" size={48} />
                                Google Maps Location
                            </div>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Send an Enquiry</h2>

                        {submitted ? (
                            <div className="bg-green-100 text-green-800 p-8 rounded-2xl text-center">
                                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                <p className="text-lg">Your enquiry has been received. Our team will contact you shortly.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-brand-green font-bold hover:underline"
                                >
                                    Send another enquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && <div className="bg-red-100 text-red-700 p-4 rounded-lg">{error}</div>}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                                            placeholder="+91 00000 00000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Travel Date</label>
                                        <input
                                            type="date"
                                            name="travelDate"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                                            value={formData.travelDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Package</label>
                                        <select
                                            name="package"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                                            value={formData.package}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Package (Optional)</option>
                                            <option value="Mahakaleshwar Ujjain">Mahakaleshwar Ujjain</option>
                                            <option value="Himalayan Holiday">Himalayan Holiday</option>
                                            <option value="Royal Rajasthan Experience">Royal Rajasthan Experience</option>
                                            <option value="Varanasi Spiritual Journey">Varanasi Spiritual Journey</option>
                                            <option value="custom">Customized Trip</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                                        placeholder="Tell us about your requirements..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-brand-green text-white font-bold py-4 rounded-xl hover:bg-green-800 transition flex items-center justify-center shadow-lg disabled:opacity-50"
                                >
                                    {loading ? 'Processing...' : (
                                        <>
                                            Send Enquiry
                                            <Send size={18} className="ml-2" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
