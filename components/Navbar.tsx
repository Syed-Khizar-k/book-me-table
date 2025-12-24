"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
 const [hidden, setHidden] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const { scrollY } = useScroll();

 useMotionValueEvent(scrollY, "change", (latest) => {
  const previous = scrollY.getPrevious() ?? 0;
  if (latest > previous && latest > 150) {
   setHidden(true);
  } else {
   setHidden(false);
  }
  setScrolled(latest > 50);
 });

 return (
  <motion.nav
   variants={{
    visible: { y: 0 },
    hidden: { y: "-100%" },
   }}
   animate={hidden ? "hidden" : "visible"}
   transition={{ duration: 0.35, ease: "easeInOut" }}
   className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
    scrolled
     ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-3"
     : "bg-transparent py-6"
   }`}>
   <div className="container mx-auto px-6 flex justify-between items-center">
    <Link
     href="/"
     className="text-2xl font-serif font-semibold tracking-tighter text-[#f4f4f5]">
     BookMe<span className="text-[#c0a080] italic ml-1">Table</span>
    </Link>

    <div className="flex items-center gap-8">
     <Link
      href="/login"
      className="hidden md:block text-[#8d7f71] hover:text-[#c0a080] transition-colors text-xs uppercase tracking-widest font-medium">
      Sign In
     </Link>
     <Link
      href="/signup"
      className="group relative px-6 py-2 overflow-hidden rounded-full bg-[#c0a080] text-[#050505] text-xs font-bold uppercase tracking-wide transition-all hover:bg-[#d4b494]">
      <span className="relative z-10">Join</span>
     </Link>
    </div>
   </div>
  </motion.nav>
 );
}
