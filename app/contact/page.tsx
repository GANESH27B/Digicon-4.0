"use client";

import TopBar from "@/components/TopBar";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-red-500/30 overflow-x-hidden">

            {/* Background Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            </div>

            {/* Navigation */}
            <div className="relative z-50">
                <TopBar />
                <SidebarLeft />
                <SidebarRight />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-4 md:pl-24 md:pr-24 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">
                                Get in <span className="text-red-600">Touch</span>
                            </h1>
                            <p className="text-gray-400 text-lg">
                                Have questions about DigiCon 4.0? Reach out to us and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                <Mail className="w-8 h-8 text-red-500 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Email Us</h3>
                                    <a href="mailto:digicon@klu.ac.in" className="text-gray-400 hover:text-white transition-colors">digicon@klu.ac.in</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                <Phone className="w-8 h-8 text-red-500 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Call Us</h3>
                                    <p className="text-gray-400">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                                <MapPin className="w-8 h-8 text-red-500 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Visit Us</h3>
                                    <p className="text-gray-400">
                                        Kalasalingam Academy of Research and Education,<br />
                                        Krishnankoil, Virudhunagar Dist,<br />
                                        Tamil Nadu, India.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-gray-400">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-all group">
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}
