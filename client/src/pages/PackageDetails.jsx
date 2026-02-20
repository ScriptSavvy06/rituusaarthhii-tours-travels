import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, MapPin, IndianRupee, CheckCircle, XCircle, Calendar, Phone, ArrowLeft } from 'lucide-react';

const PackageDetails = () => {
    const { id } = useParams();
    const [pkg, setPkg] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Dummy Data - In a real app, fetch from API using ID
        const dummyData = {
            _id: id,
            title: 'Mahakaleshwar Ujjain',
            description: 'Experience the divine atmosphere of Ujjain, one of the seven sacred cities (Sapta Puri) of Hinduism. Our tour takes you through the most significant spiritual landmarks, ensuring a peaceful and enlightening journey. Witness the soul-stirring Bhasma Aarti and explore the rich cultural heritage of this ancient city.',
            price: '8,500',
            duration: '2 Days / 1 Night',
            location: 'Ujjain',
            category: 'Spiritual',
            images: [
                '/assets/inside-detail-f.jpg',
                'https://media.assettype.com/outlooktraveller%2F2024-01%2F28b51af3-4c37-4de9-9ff4-122fe704ec6f%2Fshutterstock_2173332103.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100'
            ],
            itinerary: [
                { day: 1, title: 'Shipra River & Gadkalika Temple', details: 'Visit the holy Shipra River, known for its spiritual significance and peaceful ghats. Later, visit the Gadkalika Temple, an ancient shrine with a divine atmosphere and historical importance.' },
                { day: 2, title: 'Mahakaleshwar, Mangalnath & Kaal Bhairav', details: 'Morning VIP Darshan at Mahakaleshwar. Visit Mangalnath Temple, a sacred place linked to planet Mars. Explore Kaal Bhairav temple known for its unique rituals. Finally, visit Maharishi Vidya Temple for a serene environment and spiritual learning.' }
            ],
            inclusions: [
                '2 Days / 1 Night',
                'Travelers Bus (entire travel)',
                'Morning refreshment in bus',
                '3 Star Hotel Stay',
                'Breakfast & Dinner',
                'VIP Darshan',
                'Travel Guide',
                'Yoga session & bonfire'
            ],
            exclusions: [
                'Air/Train fare',
                'Entry tickets to monuments',
                'Personal expenses (Laundry, Telephone)',
                'Anything not mentioned in inclusions'
            ]
        };

        // Simulate API fetch delay
        setTimeout(() => {
            setPkg(dummyData);
            setLoading(false);
        }, 1000);
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
        </div>
    );

    if (!pkg) return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-4">Package not found</h2>
            <Link to="/packages" className="text-brand-green font-bold flex items-center">
                <ArrowLeft size={20} className="mr-2" />
                Back to All Packages
            </Link>
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Dynamic Image Header */}
            <div className="relative h-96 lg:h-[500px]">
                <img
                    src={pkg.images[0]}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 text-white">
                    <div className="max-w-7xl mx-auto">
                        <Link to="/packages" className="inline-flex items-center text-white/80 hover:text-white mb-6 font-medium transition">
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Packages
                        </Link>
                        <div className="bg-brand-red inline-block px-4 py-1 rounded-full text-sm font-bold mb-4">
                            {pkg.category} Package
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{pkg.title}</h1>
                        <div className="flex flex-wrap gap-6 text-lg font-medium">
                            <div className="flex items-center"><Clock className="mr-2" size={24} /> {pkg.duration}</div>
                            <div className="flex items-center"><MapPin className="mr-2" size={24} /> {pkg.location}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-brand-green mb-6 border-b pb-4">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {pkg.description}
                            </p>
                        </section>

                        {/* Itinerary */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-brand-green mb-8 border-b pb-4">Itinerary</h2>
                            <div className="space-y-8">
                                {pkg.itinerary.map((item, index) => (
                                    <div key={index} className="flex gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-lg">
                                                {item.day}
                                            </div>
                                            {index !== pkg.itinerary.length - 1 && (
                                                <div className="w-px h-full bg-gray-200 mx-auto mt-2"></div>
                                            )}
                                        </div>
                                        <div className="pb-8">
                                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inclusions & Exclusions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold text-brand-green mb-6 flex items-center">
                                    <CheckCircle className="mr-2 text-green-500" size={24} />
                                    What's Included
                                </h2>
                                <ul className="space-y-4">
                                    {pkg.inclusions.map((item, i) => (
                                        <li key={i} className="flex text-gray-600 items-start">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold text-brand-green mb-6 flex items-center">
                                    <XCircle className="mr-2 text-red-500" size={24} />
                                    What's Excluded
                                </h2>
                                <ul className="space-y-4">
                                    {pkg.exclusions.map((item, i) => (
                                        <li key={i} className="flex text-gray-600 items-start">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* Sidebar / Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-32">
                            <div className="text-gray-500 font-medium mb-1">Starting from</div>
                            <div className="flex items-center font-extrabold text-4xl text-gray-900 mb-6">
                                <IndianRupee size={32} />
                                <span>{pkg.price}</span>
                                <span className="text-sm text-gray-400 ml-2 font-medium">/ per person</span>
                            </div>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-center text-gray-600">
                                    <Calendar className="mr-3 text-brand-red" size={20} />
                                    <span>Instant Enquiry & Support</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <ShieldCheck className="mr-3 text-brand-red" size={20} />
                                    <span>Secure Booking Process</span>
                                </div>
                            </div>

                            <Link
                                to={`/contact?package=${pkg.title}`}
                                className="w-full bg-brand-green text-white font-bold py-4 rounded-xl flex items-center justify-center hover:bg-green-800 transition shadow-lg mb-4"
                            >
                                Book Now / Enquire
                            </Link>

                            <a
                                href={`tel:+9198238847850`}
                                className="w-full bg-white border-2 border-brand-green text-brand-green font-bold py-4 rounded-xl flex items-center justify-center hover:bg-green-50 transition"
                            >
                                <Phone className="mr-2" size={20} />
                                Call for Customization
                            </a>

                            <p className="text-center text-xs text-gray-400 mt-6">
                                *Prices may vary depending on travel dates and availability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simple ShieldCheck icon if lucide doesn't have it in this version
const ShieldCheck = ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

export default PackageDetails;
