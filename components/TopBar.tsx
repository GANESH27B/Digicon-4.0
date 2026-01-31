"use client";

import Link from "next/link";
import Image from "next/image";
import { Rocket } from "lucide-react";

export default function TopBar() {
    const links = [
        { name: "ABOUT US", href: "/about" },
        { name: "GALLERY", href: "/gallery" },

    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 shadow-[0_0_15px_rgba(255,255,255,0.3)] rounded-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/20">
                        <Image
                            src="/kare-logo.jpg"
                            alt="KARE ACM SIGBED"
                            fill
                            className="object-contain p-1"
                        />
                    </div>
                    <span className="hidden md:block font-bold text-white text-lg tracking-wider">KARE ACM SIGBED </span>
                </Link>

                {/* Center Links */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white font-bold tracking-wider hover:text-red-500 transition-colors uppercase text-sm md:text-base relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Sign In Button */}
                <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-sm uppercase tracking-wider text-sm clip-path-polygon transition-all hover:shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                    Sign In
                </button>

            </div>
        </nav>
    );
}
