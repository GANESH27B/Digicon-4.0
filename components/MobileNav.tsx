"use client";

import { Home, Calendar, Phone, Users, Gem, ShoppingCart, Camera } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
    const pathname = usePathname();

    const links = [
        { name: "Home", icon: Home, href: "/" },
        { name: "About", icon: Users, href: "/about" },
        { name: "Events", icon: Calendar, href: "/events" },
        { name: "Gallery", icon: Camera, href: "/gallery" },
        // Excluding less critical ones for space if needed, but scrolling row works
        { name: "Contact", icon: Phone, href: "/contact" },
    ];

    return (
        <div className="md:hidden fixed top-20 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10 py-3 px-4 shadow-lg">
            <div className="flex justify-between items-center max-w-sm mx-auto">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? "text-red-500" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            <div className={`p-2 rounded-full transition-all ${isActive ? "bg-red-500/20" : "bg-transparent"
                                }`}>
                                <link.icon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-medium uppercase tracking-wider">{link.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
