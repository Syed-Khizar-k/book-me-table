"use client";

import { motion } from "framer-motion";

export default function FeaturesSection() {
 const features = [
  {
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
     <circle cx="12" cy="10" r="3"></circle>
    </svg>
   ),
   title: "Discover Restaurants",
   description: "Explore over 60,000+ restaurants worldwide and instantly see what's available nearby. From hidden gems to Michelin-starred establishments."
  },
  {
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
     <line x1="16" y1="2" x2="16" y2="6"></line>
     <line x1="8" y1="2" x2="8" y2="6"></line>
     <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
   ),
   title: "Instant Reservations",
   description: "Book in real-time and get instant confirmation. See live availability for today, tomorrow, or any date you choose."
  },
  {
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
   ),
   title: "Earn Rewards",
   description: "Get rewarded for every reservation. Earn points with every booking and unlock exclusive dining perks and benefits."
  },
  {
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
     <circle cx="9" cy="7" r="4"></circle>
     <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
     <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
   ),
   title: "Verified Reviews",
   description: "Read authentic reviews from verified diners. Share your own experiences and help others discover great restaurants."
  }
 ];

 return (
  <section className="py-24 bg-[#050505] border-t border-white/5">
   <div className="container mx-auto px-6">
    <div className="text-center mb-16">
     <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-serif text-[#f4f4f5] mb-4">
      Why Choose <span className="text-[#c0a080] italic">BookMe Table</span>
     </motion.h2>
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-[#8d7f71] text-lg max-w-2xl mx-auto">
      Your gateway to the finest dining experiences. Book instantly, earn rewards, and discover culinary excellence.
     </motion.p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
     {features.map((feature, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
       className="group bg-[#121212] border border-white/5 p-8 rounded-lg hover:border-[#c0a080]/30 transition-all duration-300 hover:shadow-2xl">
       <div className="text-[#c0a080] mb-4 group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
       </div>
       <h3 className="text-xl font-serif text-[#f4f4f5] mb-3 group-hover:text-[#c0a080] transition-colors">
        {feature.title}
       </h3>
       <p className="text-[#8d7f71] text-sm leading-relaxed">
        {feature.description}
       </p>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
