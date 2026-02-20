import React from 'react';
import { Target, Users, Landmark, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white">
            {/* Banner */}
            <div className="bg-brand-green py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Rituu Saarthhii</h1>
                    <p className="opacity-90 max-w-3xl mx-auto text-xl leading-relaxed">
                        Leading the way in spiritual tourism and holistic travel experiences across India.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-brand-green mb-6">Our Journey</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                Rituu Saarthhii Tours & Travels was founded with a simple mission: to make spiritual and leisure travel accessible, peaceful, and trustworthy for everyone. Based in Bhopal, we specialize in organizing journeys that are not just trips, but life-changing experiences.
                            </p>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                Whether it's the sacred ghats of Varanasi, the serene mountains of the Himalayas, or the royal palaces of Rajasthan, we ensure every detail is meticulously planned so you can focus on the experience itself.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <div className="border-l-4 border-brand-red pl-4">
                                    <div className="text-3xl font-bold text-brand-green">10+</div>
                                    <div className="text-gray-500">Years of Experience</div>
                                </div>
                                <div className="border-l-4 border-brand-red pl-4">
                                    <div className="text-3xl font-bold text-brand-green">5000+</div>
                                    <div className="text-gray-500">Happy Travelers</div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Temple Architecture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-20 bg-brand-red text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Our Grand Opening</h2>
                        <p className="max-w-3xl mx-auto text-xl opacity-90 leading-relaxed">
                            Rituu Saarthhii was inaugurated with the presence of respected guests including public leaders and community figures, emphasizing our trust, vision, and commitment to providing high-quality travel experiences that resonate with the heart of every traveler.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video">
                        <video
                            controls
                            className="w-full h-full"
                            poster="/assets/logo.png"
                        >
                            <source src="/assets/opening_video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <Target size={48} className="text-brand-red mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-600 text-lg">
                                To provide seamless, peaceful, and spiritually enriching travel experiences that connect people with the divine heritage and cultural beauty of India.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <Users size={48} className="text-brand-green mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-600 text-lg">
                                To become India's most trusted name in spiritual and customized tourism, known for our integrity, modern approach, and customer-first philosophy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-brand-green mb-16">Our Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto">
                                <ShieldCheck size={32} />
                            </div>
                            <h4 className="font-bold text-xl">Trust</h4>
                            <p className="text-gray-500">Transparent pricing and honest services.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex items-center justify-center mx-auto">
                                <Heart size={32} />
                            </div>
                            <h4 className="font-bold text-xl">Peace</h4>
                            <p className="text-gray-500">Hassle-free planning for a peaceful journey.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                                <Landmark size={32} />
                            </div>
                            <h4 className="font-bold text-xl">Heritage</h4>
                            <p className="text-gray-500">Deep respect for Indian cultue and spirituality.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto">
                                <Users size={32} />
                            </div>
                            <h4 className="font-bold text-xl">Service</h4>
                            <p className="text-gray-500">Personalized attention to every traveler.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ShieldCheck = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

export default About;
