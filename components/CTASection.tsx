"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
 return (
  <section className="py-24 bg-[#050505] border-t border-white/5">
   <div className="container mx-auto px-6">
    <motion.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.6 }}
     className="bg-gradient-to-r from-[#121212] to-[#1a1a1a] border border-white/5 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
     
     {/* Background Decorations */}
     <div className="absolute top-0 right-0 w-64 h-64 bg-[#c0a080] opacity-[0.03] rounded-full blur-[100px]"></div>
     <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c0a080] opacity-[0.03] rounded-full blur-[80px]"></div>

     <div className="relative z-10">
      <h2 className="text-4xl md:text-5xl font-serif text-[#f4f4f5] mb-4">
       Ready to Elevate Your{" "}
       <span className="text-[#c0a080] italic">Dining Experience?</span>
      </h2>
      <p className="text-[#8d7f71] text-lg mb-8 max-w-2xl mx-auto">
       Join thousands of food lovers discovering and booking the best restaurants. Start earning rewards with every reservation today.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
       <Link
        href="/signup"
        className="group relative px-8 py-4 overflow-hidden rounded-full bg-[#c0a080] text-[#050505] text-sm font-bold uppercase tracking-wide transition-all hover:bg-[#d4b494] shadow-xl hover:shadow-2xl cursor-pointer">
        <span className="relative z-10">Create Free Account</span>
       </Link>
       <Link
        href="/login"
        className="px-8 py-4 rounded-full border-2 border-[#c0a080] text-[#c0a080] text-sm font-bold uppercase tracking-wide hover:bg-[#c0a080] hover:text-[#050505] transition-all cursor-pointer">
        Sign In
       </Link>
      </div>

      <p className="text-[#525252] text-xs mt-6 uppercase tracking-widest">
       No credit card required • Free to join • Cancel anytime
      </p>
     </div>
    </motion.div>

    {/* Restaurant Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
     {[
      { number: "60,000+", label: "Restaurants Worldwide" },
      { number: "500M+", label: "Diners Seated" },
      { number: "40+", label: "Countries Covered" },
      { number: "4.8★", label: "Average Rating" }
     ].map((stat, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
       className="text-center">
       <div className="text-3xl md:text-4xl font-serif text-[#c0a080] mb-2">
        {stat.number}
       </div>
       <div className="text-[#8d7f71] text-sm uppercase tracking-widest">
        {stat.label}
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
