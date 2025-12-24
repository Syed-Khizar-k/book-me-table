"use client";

import Image from "next/image";
import { Restaurant, mockTimeSlots } from "@/lib/data";
import { motion } from "framer-motion";

interface RestaurantCardProps {
 restaurant: Restaurant;
 onViewMenu: () => void;
 onReserve: () => void;
 index: number;
}

export default function RestaurantCard({
 restaurant,
 onViewMenu,
 onReserve,
 index,
}: RestaurantCardProps) {
 // Mock available slots - randomize slightly for realism
 const slots = mockTimeSlots.slice(0, 5 - (index % 3));

 return (
  <motion.div
   initial={{ opacity: 0, y: 20 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5, delay: index * 0.1 }}
   viewport={{ once: true }}
   className="group relative bg-[#121212] rounded-sm overflow-hidden flex flex-col h-full border border-white/5 hover:border-[#c0a080]/30 transition-colors">
   {/* Image Container */}
   <div className="aspect-[16/9] relative overflow-hidden bg-[#1a1a1a]">
    <Image
     src={restaurant.image}
     alt={restaurant.name}
     fill
     className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>

    {/* Badges */}
    <div className="absolute top-4 right-4 flex gap-2">
     <span className="bg-[#f4f4f5] text-[#050505] text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-xl">
      {restaurant.rating} ★
     </span>
     <span className="bg-[#121212]/80 backdrop-blur-md text-[#f4f4f5] text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-white/10">
      {restaurant.reviewCount} Reviews
     </span>
    </div>
   </div>

   <div className="p-5 flex-1 flex flex-col">
    <div className="flex justify-between items-start mb-2">
     <h3 className="text-xl font-serif text-[#f4f4f5] leading-tight group-hover:text-[#c0a080] transition-colors cursor-pointer">
      {restaurant.name}
     </h3>
    </div>

    <p className="text-[#8d7f71] text-xs uppercase tracking-widest font-medium mb-4">
     {restaurant.cuisine} • {restaurant.city} • {restaurant.priceRange}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-6">
     {restaurant.tags.map((tag) => (
      <span
       key={tag}
       className="text-[#525252] text-[10px] border border-[#2a2a2a] px-2 py-1 rounded-full">
       {tag}
      </span>
     ))}
    </div>

    <div className="mt-auto">
     <p className="text-[#f4f4f5] text-xs font-bold mb-3">
      Available Times (Today)
     </p>
     <div className="flex flex-wrap gap-2 mb-4">
      {slots.map((slot) => (
       <button
        key={slot}
        onClick={onReserve}
        className="bg-[#c0a080] text-[#050505] text-xs font-bold px-3 py-2 rounded hover:bg-[#d4b494] transition-colors cursor-pointer">
        {slot}
       </button>
      ))}
     </div>

     <div className="flex gap-4 border-t border-white/5 pt-4">
      <button
       onClick={onViewMenu}
       className="flex-1 text-[#525252] text-xs font-bold uppercase tracking-widest hover:text-[#f4f4f5] transition-colors text-center cursor-pointer">
       View Menu
      </button>
     </div>
    </div>
   </div>
  </motion.div>
 );
}
