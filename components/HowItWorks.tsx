"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
 const steps = [
  {
   number: "01",
   title: "Discover",
   description:
    "Search and filter thousands of restaurants by cuisine, location, price range, and more to find your perfect dining match.",
  },
  {
   number: "02",
   title: "Book",
   description:
    "Choose your date, time, and party size. Get instant confirmation for your reservation with just a few clicks.",
  },
  {
   number: "03",
   title: "Dine",
   description:
    "Enjoy your meal at the best restaurants. Your table is reserved and waiting for you.",
  },
  {
   number: "04",
   title: "Earn",
   description:
    "Collect points with every booking. Unlock exclusive rewards and special dining perks as you dine out.",
  },
 ];

 return (
  <section className="py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative overflow-hidden">
   {/* Background Gradient Circles */}
   <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] bg-[#c0a080] opacity-[0.15] rounded-full blur-[120px] pointer-events-none"></div>
   {/* <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-[#c0a080] opacity-[0.15] rounded-full blur-[100px] pointer-events-none"></div> */}

   <div className="container mx-auto px-6 relative z-10">
    <div className="text-center mb-16">
     <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-serif text-[#f4f4f5] mb-4">
      How <span className="text-[#c0a080] italic">BookMe Table</span> Works
     </motion.h2>
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-[#8d7f71] text-lg max-w-2xl mx-auto">
      Four simple steps to an unforgettable dining experience
     </motion.p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
     {steps.map((step, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
       className="relative">
       <div className="bg-[#121212] border border-white/5 p-8 rounded-lg hover:border-[#c0a080]/30 transition-all duration-300 h-full">
        <div className="text-[#c0a080]/20 font-serif text-6xl font-bold mb-4">
         {step.number}
        </div>
        <h3 className="text-2xl font-serif text-[#f4f4f5] mb-3">
         {step.title}
        </h3>
        <p className="text-[#8d7f71] text-sm leading-relaxed">
         {step.description}
        </p>
       </div>
       {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#c0a080]/20">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
         </svg>
        </div>
       )}
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
