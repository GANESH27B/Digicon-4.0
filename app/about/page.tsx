"use client";

import TopBar from "@/components/TopBar";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Zap, Trophy, Rocket } from "lucide-react";

export default function AboutPage() {
    const stats = [
        { label: "Attendees", value: "5000+" },
        { label: "Speakers", value: "50+" },
        { label: "Workshops", value: "10+" },
        { label: "Events", value: "15+" },
    ];

    const features = [
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Fostering a culture of creativity and groundbreaking ideas in embedded systems and digital technology.",
            color: "text-yellow-400",
            border: "border-yellow-400/20",
            bg: "bg-yellow-400/10"
        },
        {
            icon: Users,
            title: "Community",
            description: "Building a strong network of students, professionals, and industry leaders to collaborate and grow.",
            color: "text-blue-400",
            border: "border-blue-400/20",
            bg: "bg-blue-400/10"
        },
        {
            icon: Target,
            title: "Excellence",
            description: "Setting high standards in technical education and event organization.",
            color: "text-red-400",
            border: "border-red-400/20",
            bg: "bg-red-400/10"
        }
    ];

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-red-500/30 overflow-x-hidden">

            {/* Background Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            </div>

            {/* Navigation */}
            <div className="relative z-50">
                <TopBar />
                <SidebarLeft />
                <SidebarRight />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-4 md:pl-24 md:pr-24 max-w-7xl mx-auto space-y-24">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">DigiCon 4.0</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        The flagship Digital Convention organized by <span className="text-white font-semibold">KARE ACM SIGBED</span> Student Chapter. Where technology meets imagination.
                    </p>
                </motion.div>

                {/* About KARE ACM SIGBED Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                            <Rocket className="w-8 h-8 text-red-500" />
                            Who We Are
                        </h2>
                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                            <p>
                                <strong className="text-white">KARE ACM SIGBED</strong> (Association for Computing Machinery - Special Interest Group on Embedded Systems) is a vibrant student chapter at Kalasalingam Academy of Research and Education.
                            </p>
                            <p>
                                We are dedicated to promoting knowledge and innovation in the field of embedded systems, IoT, and digital technologies. Our chapter serves as a bridge between academic learning and real-world industry applications.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Decorative visual for 'Who We Are' */}
                        <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 p-8 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-red-600/10 blur-3xl group-hover:bg-red-600/20 transition-all duration-500" />
                            <h3 className="text-4xl md:text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors uppercase select-none text-center">
                                KARE ACM<br />SIGBED
                            </h3>
                        </div>
                    </motion.div>
                </div>

                {/* Event Highlights / Features */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`p-8 rounded-2xl border ${feature.border} ${feature.bg} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                        >
                            <feature.icon className={`w-12 h-12 ${feature.color} mb-6`} />
                            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="py-12 border-y border-white/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                                <div className="text-sm md:text-base text-red-500 font-bold uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-white/10 text-center space-y-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

                    <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto italic">
                        "To create a dynamic ecosystem where students are empowered to explore, experiment, and excel in the world of digital technology, contributing to a smarter connected future."
                    </p>

                    <div className="pt-4">
                        <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all uppercase tracking-wider">
                            Join Our Community
                        </button>
                    </div>
                </motion.div>

            </main>
        </div>
    );
}
