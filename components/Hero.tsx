"use client";

import { motion } from "framer-motion";
import { cities } from "@/lib/data";
import SearchBox from "./SearchBox";

interface HeroProps {
 onSearch: (query: string, city: string) => void;
 onNearMe: () => void;
}

export default function Hero({ onSearch, onNearMe }: HeroProps) {
 return (
  <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#050505]">
   {/* Background Ambience */}
   <div className="absolute inset-0 bg-[#050505]">
    <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[#c0a080] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#1a1a1a] opacity-30 rounded-full blur-[100px] pointer-events-none"></div>
   </div>

   <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
    <motion.h1
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
     className="text-5xl md:text-8xl font-serif text-center text-[#f4f4f5] leading-[0.9] tracking-tight mb-8">
     Crafted For <br />
     <span className="text-[#c0a080] italic">Elite Experience</span>
    </motion.h1>

    <motion.div
     initial={{ opacity: 0, scale: 0.95 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.8, delay: 0.2 }}
     className="w-full flex justify-center">
     <SearchBox onSearch={onSearch} cities={cities} />
    </motion.div>

    <motion.button
     onClick={onNearMe}
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.5, duration: 1 }}
     className="mt-8 text-[#525252] text-xs uppercase tracking-widest hover:text-[#c0a080] transition-colors flex items-center gap-2">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
     </svg>
     Find Tables Near Me
    </motion.button>
   </div>
  </section>
 );
}
