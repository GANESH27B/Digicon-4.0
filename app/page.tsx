"use client";

import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import TopBar from "@/components/TopBar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isExploding, setIsExploding] = useState(false);
  const router = useRouter();

  const handleRegisterClick = () => {
    setIsExploding(true);
    setTimeout(() => {
      window.location.href = "https://euphoria.kalasalingam.ac.in/pages/form/registerform.php";
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden selection:bg-red-500/30">

      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay removed for maximum clarity */}
        {/* <div className="absolute inset-0 bg-black/20 mix-blend-multiply" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" /> */}
      </div>

      {/* Navigation Layer */}
      <div className="relative z-50">
        <TopBar />
        <SidebarLeft />
        <SidebarRight />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 pb-20 text-center px-4">

        {/* Massive Background Text "DIGICON" */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">
          <h1 className="text-[15vw] md:text-[20vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent opacity-30 transform -rotate-6 blur-sm">
            DIGICON
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="relative z-10 space-y-6 -mt-10 md:-mt-20 lg:-mt-90"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {/* Chapter Label */}

          </div>

          <h1 className="relative flex flex-col items-center">

            <div className="text-4xl md:text-5xl lg:text-8xl font-serif font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-white to-gray-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] uppercase text-center px-4 hover:animate-glitch transition-all duration-300 cursor-default select-none">
              KARE ACM SIGBED
            </div>
          </h1>
        </motion.div>

        {/* Subtitle / Button - Moved outside to prevent transform conflicts with fixed position */}
        <div className="fixed bottom-16 left-0 right-0 z-50 flex justify-center">
          <motion.button
            onClick={handleRegisterClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: ["0 0 20px #dc2626", "0 0 40px #dc2626", "0 0 20px #dc2626"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="px-10 py-4 bg-red-700 text-white font-black tracking-[0.2em] text-xl uppercase border-2 border-red-500 hover:bg-red-600 transition-colors cursor-pointer select-none"
            style={{
              clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)"
            }}
          >
            Registration
          </motion.button>
        </div>

      </main>

      {/* Explosion Effect Layer */}
      <AnimatePresence>
        {isExploding && (
          <motion.div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
            {/* Central Blood Core */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "circIn" }}
              className="w-32 h-32 bg-red-900 rounded-full blur-xl relative"
            />

            {/* Outer Blood Splash */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 40, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="absolute w-40 h-40 bg-red-600 rounded-full blur-2xl mixture-blend-overlay"
            />

            {/* Chaos Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, scale: 0 }}
                animate={{
                  x: (Math.random() - 0.5) * 2000,
                  y: (Math.random() - 0.5) * 2000,
                  scale: Math.random() * 5
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-12 h-12 bg-red-700 rounded-full blur-md opacity-80"
              />
            ))}

            {/* Screen Flash */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-red-900/50 mix-blend-overlay"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating particles or dust could go here */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>

    </div>
  );
}
