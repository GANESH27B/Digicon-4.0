"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";

// Placeholder data - In a real app, these would be your actual image paths
const categories = ["All", "Hackathon", "Workshops", "Speakers", "Cultural"];

const galleryItems = [
    {
        id: 1,
        category: "Hackathon",
        src: "/api/placeholder/800/600",
        title: "Coding Marathon",
        description: "Participants deeply focused during the 24-hour hackathon."
    },
    {
        id: 2,
        category: "Workshops",
        src: "/api/placeholder/800/800",
        title: "IoT Workshop",
        description: "Hands-on session with embedded systems."
    },
    {
        id: 3,
        category: "Speakers",
        src: "/api/placeholder/800/500",
        title: "Keynote Speech",
        description: "Industry experts sharing insights on Future Tech."
    },
    {
        id: 4,
        category: "Cultural",
        src: "/api/placeholder/600/800",
        title: "Music Night",
        description: "Unwinding after a long day of tech."
    },
    {
        id: 5,
        category: "Hackathon",
        src: "/api/placeholder/800/600",
        title: "Team Collaboration",
        description: "Brainstorming innovative solutions."
    },
    {
        id: 6,
        category: "Workshops",
        src: "/api/placeholder/800/800",
        title: "Robotics Demo",
        description: "Live demonstration of autonomous bots."
    },
    {
        id: 7,
        category: "Speakers",
        src: "/api/placeholder/800/500",
        title: "Panel Discussion",
        description: "Interactive Q&A with tech leaders."
    },
    {
        id: 8,
        category: "Cultural",
        src: "/api/placeholder/800/600",
        title: "Light Show",
        description: "Visual spectacle at the closing ceremony."
    },
];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

    const filteredItems = selectedCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-red-500/30 overflow-x-hidden">

            {/* Background Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            </div>

            {/* Navigation */}
            <div className="relative z-50">
                <TopBar />
                <SidebarLeft />
                <SidebarRight />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-4 md:pl-24 md:pr-24 max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-4xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        Event <span className="text-red-600">Gallery</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Capturing the moments of innovation, learning, and celebration at DigiCon.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrapjustify-center gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide"
                >
                    <div className="flex flex-wrap justify-center gap-4 w-full">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-bold uppercase tracking-wider ${selectedCategory === cat
                                    ? "bg-red-600 border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                                    : "bg-black/40 border-white/10 text-gray-400 hover:border-red-500/50 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer"
                                onClick={() => setSelectedImage(item)}
                            >
                                {/* Placeholder Image Display - Replace 'bg-zinc-800' with actual Image component when URLs are real */}
                                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 group-hover:scale-110 transition-transform duration-500">
                                    <Camera className="w-12 h-12 opacity-50" />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {item.description}
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-red-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                                        <ZoomIn className="w-4 h-4" /> View Match
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-red-600 transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-5xl w-full max-h-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="aspect-video bg-zinc-800 relative flex items-center justify-center">
                                {/* Large Image Placeholder */}
                                <Camera className="w-24 h-24 text-zinc-700" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 to-transparent">
                                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                                        {selectedImage.category}
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedImage.title}</h2>
                                    <p className="text-gray-300 text-lg">{selectedImage.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
