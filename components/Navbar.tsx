"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="p-2 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 group-hover:scale-110 transition-transform">
                            <Rocket className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            DigiCon
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="/register"
                            className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all hover:scale-105"
                        >
                            Register Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/register"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold"
                            >
                                Register Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
