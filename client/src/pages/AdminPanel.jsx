import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, MessageSquare, LogOut, Plus, Edit, Trash2, Check, ExternalLink, LayoutDashboard } from 'lucide-react';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('packages');
    const [packages, setPackages] = useState([]);
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Check authentication
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
        }

        // Mock data fetching
        const fetchData = async () => {
            setLoading(true);
            // Simulate API calls
            const mockPackages = [
                { _id: '1', title: 'Varanasi Spiritual Tour', price: '15,000', location: 'Varanasi', category: 'Spiritual' },
                { _id: '2', title: 'Himalayan Holiday', price: '25,000', location: 'Shimla & Manali', category: 'Holiday' }
            ];
            const mockEnquiries = [
                { _id: '1', name: 'John Doe', phone: '+91 9988776655', email: 'john@example.com', package: 'Varanasi Tour', status: 'New', date: '2026-02-19' },
                { _id: '2', name: 'Jane Smith', phone: '+91 8877665544', email: 'jane@example.com', package: 'Himalayan Holiday', status: 'Contacted', date: '2026-02-18' }
            ];

            setTimeout(() => {
                setPackages(mockPackages);
                setEnquiries(mockEnquiries);
                setLoading(false);
            }, 1000);
        };

        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const deletePackage = (id) => {
        if (window.confirm('Are you sure you want to delete this package?')) {
            setPackages(packages.filter(p => p._id !== id));
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div className="w-64 bg-brand-green text-white fixed h-full shadow-2xl z-20">
                <div className="p-6 border-b border-green-800">
                    <h1 className="text-xl font-bold">Rituu Saarthhii</h1>
                    <p className="text-xs opacity-60 uppercase tracking-widest mt-1">Admin Dashboard</p>
                </div>
                <nav className="mt-8 px-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('packages')}
                        className={`w-full flex items-center px-4 py-3 rounded-xl transition ${activeTab === 'packages' ? 'bg-brand-red shadow-lg' : 'hover:bg-green-800'}`}
                    >
                        <Package size={20} className="mr-3" />
                        <span className="font-medium">Packages</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('enquiries')}
                        className={`w-full flex items-center px-4 py-3 rounded-xl transition ${activeTab === 'enquiries' ? 'bg-brand-red shadow-lg' : 'hover:bg-green-800'}`}
                    >
                        <MessageSquare size={20} className="mr-3" />
                        <span className="font-medium">Enquiries</span>
                    </button>
                    <div className="pt-8 mt-8 border-t border-green-800">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center px-4 py-3 rounded-xl hover:bg-red-800 text-red-200 transition"
                        >
                            <LogOut size={20} className="mr-3" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-64 p-8">
                <header className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 capitalize flex items-center">
                        {activeTab === 'packages' ? <Package className="mr-3 text-brand-green" size={32} /> : <MessageSquare className="mr-3 text-brand-green" size={32} />}
                        Manage {activeTab}
                    </h2>
                    {activeTab === 'packages' && (
                        <button className="bg-brand-red text-white px-6 py-3 rounded-xl font-bold flex items-center shadow-lg hover:scale-105 transition transform">
                            <Plus size={20} className="mr-2" />
                            Add New Package
                        </button>
                    )}
                </header>

                {loading ? (
                    <div className="bg-white rounded-2xl p-20 flex flex-col items-center justify-center shadow-sm border border-gray-100">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green mb-4"></div>
                        <p className="text-gray-500 font-medium">Loading dashboard data...</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {activeTab === 'packages' ? (
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-gray-700">Package Title</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Location</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Price</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Category</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {packages.map(pkg => (
                                        <tr key={pkg._id} className="hover:bg-gray-50/50 transition">
                                            <td className="px-6 py-4 font-medium text-gray-900">{pkg.title}</td>
                                            <td className="px-6 py-4 text-gray-600">{pkg.location}</td>
                                            <td className="px-6 py-4 font-bold text-brand-green">₹{pkg.price}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-xs font-bold uppercase">
                                                    {pkg.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 flex space-x-3">
                                                <button className="text-blue-600 hover:text-blue-800"><Edit size={18} /></button>
                                                <button onClick={() => deletePackage(pkg._id)} className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-gray-700">Client Info</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Interest</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Date</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Status</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {enquiries.map(enquiry => (
                                        <tr key={enquiry._id} className="hover:bg-gray-50/50 transition">
                                            <td className="px-6 py-4">
                                                <div className="font-bold text-gray-900">{enquiry.name}</div>
                                                <div className="text-xs text-gray-500">{enquiry.phone} | {enquiry.email}</div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 font-medium">{enquiry.package}</td>
                                            <td className="px-6 py-4 text-gray-400 text-sm">{enquiry.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${enquiry.status === 'New' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                                                    }`}>
                                                    {enquiry.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button title="Mark as Contacted" className="text-green-600 hover:text-green-800"><Check size={18} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
