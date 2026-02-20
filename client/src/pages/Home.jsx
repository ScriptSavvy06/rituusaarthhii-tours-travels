import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import axios from 'axios';
import { Star, Shield, Heart, Award } from 'lucide-react';

const Home = () => {
    const [featuredPackages, setFeaturedPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // In a real app, this would be an API call
        // For now, using dummy data to ensure the UI looks good
        const dummyData = [
            {
                _id: '1',
                title: 'Mahakaleshwar Ujjain',
                description: 'Experience the divine Mahakal Lok and witness the powerful Bhasma Aarti. Includes 3-star stay and VIP Darshan.',
                price: '8,500',
                duration: '2 Days / 1 Night',
                location: 'Ujjain',
                category: 'Spiritual',
                image: 'https://images.unsplash.com/photo-1590422171112-9c9ae056637e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                inclusions: [
                    'Travelers Bus (entire travel)',
                    'Morning refreshment in bus',
                    '3 Star Hotel Stay',
                    'Breakfast & Dinner',
                    'VIP Darshan',
                    'Travel Guide',
                    'Yoga session & bonfire'
                ]
            },
            {
                _id: '2',
                title: 'Himalayan Holiday',
                description: 'Breathtaking views and peaceful stays in the heart of the Himalayas.',
                price: '25,000',
                duration: '5 Days / 4 Nights',
                location: 'Shimla & Manali',
                category: 'Holiday',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            {
                _id: '3',
                title: 'Royal Rajasthan Experience',
                description: 'Explore the majestic forts and colorful culture of Jaipur and Udaipur.',
                price: '30,000',
                duration: '6 Days / 5 Nights',
                location: 'Rajasthan',
                category: 'Group',
                image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
        ];
        setFeaturedPackages(dummyData);
        setLoading(false);
    }, []);

    return (
        <div>
            <Hero />

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why Choose <span className="text-brand-red">Rituu Saarthhii</span>?</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-16">
                        We provide peaceful, trustworthy, and modern travel solutions tailored to your spiritual and leisure needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Safe & Secure</h3>
                            <p className="text-gray-500 text-sm">Your safety is our top priority throughout the journey.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Spiritual Focus</h3>
                            <p className="text-gray-500 text-sm">Deeply understood spiritual needs for temple tours.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Expert Guides</h3>
                            <p className="text-gray-500 text-sm">Knowledgeable local guides to enhance your experience.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                            <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Star size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Best Values</h3>
                            <p className="text-gray-500 text-sm">Premium services at competitive and transparent prices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Tours Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green">Featured Spiritual Tours</h2>
                            <p className="text-gray-500 mt-2">Explore our most popular and peaceful journeys.</p>
                        </div>
                        <Link to="/packages" className="text-brand-red font-bold hover:underline flex items-center mb-2">
                            View All Packages
                            <Star size={18} className="ml-1 fill-current" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredPackages.map(pkg => (
                            <PackageCard key={pkg._id} pkg={pkg} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section Placeholder */}
            <section className="py-20 bg-brand-green text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-16">What Our Travelers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-green-800 p-8 rounded-2xl relative">
                            <div className="text-brand-red text-6xl absolute -top-4 -left-2 opacity-50 font-serif">“</div>
                            <p className="text-lg italic mb-6 relative z-10">
                                It was an amazing experience with Rituu Saarthhii. The spiritual tour to Varanasi was perfectly organized and very peaceful. Highly recommended!
                            </p>
                            <div className="font-bold">- Rajesh Kumar, Bhopal</div>
                        </div>
                        <div className="bg-green-800 p-8 rounded-2xl relative">
                            <div className="text-brand-red text-6xl absolute -top-4 -left-2 opacity-50 font-serif">“</div>
                            <p className="text-lg italic mb-6 relative z-10">
                                Best value for money. The Himalayan trip was well-planned, and the hotels provided were top-notch. Truly trustworthy service.
                            </p>
                            <div className="font-bold">- Sunita Sharma, Indore</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-brand-red rounded-3xl p-12 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Plan Your Next Journey?</h2>
                    <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                        Contact us today for customized holiday packages and spiritual tours tailored to your needs.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-brand-red px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg inline-block"
                    >
                        Get a Free Quote Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
