"use client";

import { Home, Calendar, Phone, Users, Gem, ShoppingCart, Camera } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLeft() {
    const pathname = usePathname();

    const links = [
        { name: "Home", icon: Home, href: "/" },
        { name: "Events", icon: Calendar, href: "/events" },
        { name: "Gallery", icon: Camera, href: "/gallery" },
        { name: "Contact", icon: Phone, href: "/contact" },
        { name: "About Us", icon: Users, href: "/about" },
        { name: "Sponsors", icon: Gem, href: "/sponsors" },
        { name: "Store", icon: ShoppingCart, href: "/store" },
    ];

    return (
        <div className="hidden md:flex flex-col gap-6 fixed left-0 top-1/2 -translate-y-1/2 ml-4 md:ml-6 lg:ml-8 z-50">
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`group flex items-center justify-center w-12 h-12 rounded-lg border backdrop-blur-md transition-all duration-300 ${isActive
                            ? "bg-red-600/50 border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                            : "bg-black/40 border-red-900/30 text-gray-400 hover:bg-red-900/20 hover:border-red-500/50 hover:text-red-400"
                            }`}
                    >
                        <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />

                        {/* Tooltip */}
                        <span className="absolute left-14 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-black/80 text-white text-xs py-1 px-2 rounded backdrop-blur-sm border border-white/10 whitespace-nowrap">
                            {link.name}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}
