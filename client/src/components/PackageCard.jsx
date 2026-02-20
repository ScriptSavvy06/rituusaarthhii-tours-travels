import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, IndianRupee } from 'lucide-react';

const PackageCard = ({ pkg }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div className="relative h-56">
                <img
                    src={pkg.image || "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    {pkg.category}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-brand-green mb-2">{pkg.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                    <div className="flex items-center">
                        <Clock size={16} className="mr-1 text-brand-red" />
                        <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin size={16} className="mr-1 text-brand-red" />
                        <span>{pkg.location}</span>
                    </div>
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    {pkg.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center font-bold text-gray-900 text-lg">
                        <IndianRupee size={18} />
                        <span>{pkg.price}</span>
                        <span className="text-xs text-gray-400 ml-1">/ person</span>
                    </div>
                    <Link
                        to={`/package/${pkg._id}`}
                        className="bg-brand-green text-white px-4 py-2 rounded-lg font-medium hover:bg-green-800 transition"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
