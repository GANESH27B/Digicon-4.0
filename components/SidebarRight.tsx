"use client";

import { Instagram, Linkedin, Twitter, Facebook, DiscIcon as Discord, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Youtube } from "lucide-react";

export default function SidebarRight() {
    const socials = [
        { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-red-500" },
        { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-red-400" },
        { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
        { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-red-400" },
        { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-red-500" },
        { name: "Discord", icon: Discord, href: "#", color: "hover:text-red-400" },
        { name: "WhatsApp", icon: MessageCircle, href: "#", color: "hover:text-red-500" },
    ];

    return (
        <div className="hidden md:flex flex-col gap-5 fixed right-0 top-1/2 -translate-y-1/2 mr-4 md:mr-6 lg:mr-8 z-50 p-3 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/5">
            {socials.map((social) => (
                <Link
                    key={social.name}
                    href={social.href}
                    className={`text-gray-400 transition-all duration-300 hover:scale-125 ${social.color}`}
                >
                    <social.icon className="w-5 h-5" />
                </Link>
            ))}
        </div>
    );
}
