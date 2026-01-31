"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Calendar, Users, Camera, Phone, Gem, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TopBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isMenuOpen]);

    const links = [
        { name: "Home", href: "/", icon: Home },
        { name: "About Us", href: "/about", icon: Users },
        { name: "Events", href: "/events", icon: Calendar },
        { name: "Gallery", href: "/gallery", icon: Camera },
        { name: "Sponsors", href: "/sponsors", icon: Gem },
        { name: "Contact", href: "/contact", icon: Phone },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-8 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px] md:backdrop-blur-none transition-all duration-300">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group relative z-[110]">
                        <div className="relative w-10 h-10 md:w-16 md:h-16 shadow-[0_0_15px_rgba(255,255,255,0.3)] rounded-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 group-hover:border-red-500/50 transition-colors">
                            <Image
                                src="/kare-logo.jpg"
                                alt="KARE ACM SIGBED"
                                fill
                                className="object-contain p-0.5 md:p-1"
                            />
                        </div>
                        <span className="hidden md:block font-bold text-white text-lg tracking-wider group-hover:text-red-500 transition-colors">
                            KARE ACM SIGBED
                        </span>
                        {/* Mobile Text Logo */}
                        <span className="md:hidden font-bold text-white text-md tracking-wider">
                            DIGICON 4.0
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-10">
                        {links.filter(l => ["About Us", "Gallery", "Events"].includes(l.name)).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white font-bold tracking-wider hover:text-red-500 transition-colors uppercase text-sm relative group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Actions Area */}
                    <div className="flex items-center gap-4 relative z-[110]">
                        <button className="hidden md:block bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-sm uppercase tracking-wider text-sm clip-path-polygon transition-all hover:shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                            Sign In
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white active:scale-95 transition-all focus:outline-none"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[90] bg-black bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black md:hidden flex flex-col pt-24 pb-10 px-6"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

                        <div className="flex flex-col gap-2 h-full overflow-y-auto">
                            {links.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${pathname === link.href
                                                ? "bg-red-900/20 border-red-500/50 text-white"
                                                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg ${pathname === link.href ? "bg-red-500 text-white" : "bg-black/50 text-gray-500 group-hover:text-white"} transition-colors`}>
                                                <link.icon size={20} />
                                            </div>
                                            <span className="text-xl font-bold uppercase tracking-wide">{link.name}</span>
                                        </div>
                                        <div className={`w-2 h-2 rounded-full ${pathname === link.href ? "bg-red-500" : "bg-transparent group-hover:bg-red-500/50"} transition-colors`} />
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile Sign In */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-auto pt-6"
                            >
                                <button className="w-full bg-red-700 text-white font-bold py-4 rounded-xl uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                                    Sign In / Register
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
