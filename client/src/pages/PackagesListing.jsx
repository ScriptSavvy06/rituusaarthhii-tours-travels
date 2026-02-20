import React, { useState, useEffect, useMemo } from 'react';
import PackageCard from '../components/PackageCard';
import { Search, Filter } from 'lucide-react';

// 1. Move static dummy data OUTSIDE the component to avoid cascading render warnings
const DUMMY_DATA = [
    {
        _id: '1',
        title: 'Mahakaleshwar Ujjain',
        description: 'Experience the divine Mahakal Lok and witness the powerful Bhasma Aarti.',
        price: '8,500',
        duration: '2 Days / 1 Night',
        location: 'Ujjain',
        category: 'Spiritual',
        image: 'https://media.assettype.com/outlooktraveller%2F2024-01%2F28b51af3-4c37-4de9-9ff4-122fe704ec6f%2Fshutterstock_2173332103.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100'
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
    },
    {
        _id: '4',
        title: 'Chardham Yatra',
        description: 'A sacred pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath.',
        price: '55,000',
        duration: '12 Days / 11 Nights',
        location: 'Uttarakhand',
        category: 'Spiritual',
        image: 'https://media.istockphoto.com/id/539105384/photo/kedarnath-in-india.jpg?s=1024x1024&w=is&k=20&c=m_bsZ55eow_uOF4w47A2aRrpqtFQZvNGS4pX-6kZjn0='
    },
    {
        _id: '5',
        title: 'Kerala Backwaters',
        description: 'Relax in the houseboats of Alleppey and explore the tea gardens of Munnar.',
        price: '22,000',
        duration: '4 Days / 3 Nights',
        location: 'Kerala',
        category: 'Holiday',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
];

const PackagesListing = () => {
    const [packages, setPackages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    // 2. Initialize data. Using a simple useEffect to simulate a fetch.
    useEffect(() => {
        setPackages(DUMMY_DATA);
        setLoading(false);
    }, []);

    // 3. Use useMemo for filtering. This avoids the "cascading setState" error 
    // because it calculates the list during render instead of after.
    const filteredPackages = useMemo(() => {
        return packages.filter(pkg => {
            const matchesCategory = category === 'All' || pkg.category === category;
            const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [category, searchTerm, packages]);

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <div className="bg-brand-green py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-white mb-4">Explore Our Tour Packages</h1>
                    <p className="text-white opacity-80 max-w-2xl mx-auto">Find the perfect journey for your spiritual peace or holiday adventure.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
                    <div className="relative flex-grow w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by destination or package name..."
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center space-x-3 w-full md:w-auto">
                        <Filter size={20} className="text-brand-green" />
                        <select
                            className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green/20 min-w-[150px] w-full"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="All">All Categories</option>
                            <option value="Spiritual">Spiritual</option>
                            <option value="Holiday">Holiday</option>
                            <option value="Group">Group</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {loading ? (
                    <div className="text-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green mx-auto"></div>
                    </div>
                ) : filteredPackages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPackages.map(pkg => (
                            <PackageCard key={pkg._id} pkg={pkg} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                        <h3 className="text-xl font-bold text-gray-400">No packages found matching your criteria.</h3>
                        <button
                            onClick={() => { setCategory('All'); setSearchTerm(''); }}
                            className="mt-4 text-brand-green font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PackagesListing;