"use client";

import { MenuItem } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

interface MenuModalProps {
 isOpen: boolean;
 onClose: () => void;
 restaurantName: string;
 items: MenuItem[];
}

export default function MenuModal({
 isOpen,
 onClose,
 restaurantName,
 items,
}: MenuModalProps) {
 return (
  <AnimatePresence>
   {isOpen && (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="absolute inset-0 bg-black/90 backdrop-blur-sm"
     />

     <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      className="relative bg-[#121212] w-full max-w-lg overflow-hidden border border-white/5 shadow-2xl">
      <div className="p-10">
       <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-6">
        <div>
         <span className="text-[#c0a080] text-xs uppercase tracking-widest font-bold mb-2 block">
          Menu
         </span>
         <h2 className="text-3xl font-serif text-[#f4f4f5]">
          {restaurantName}
         </h2>
        </div>
        <button
         onClick={onClose}
         className="text-[#525252] hover:text-[#f4f4f5] transition-colors text-sm uppercase tracking-widest">
         Close
        </button>
       </div>

       <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
        {items.map((item, index) => (
         <div key={index} className="group cursor-default">
          <div className="flex justify-between items-baseline mb-1">
           <h3 className="text-[#f4f4f5] font-serif text-lg group-hover:text-[#c0a080] transition-colors">
            {item.name}
           </h3>
           <span className="text-[#8d7f71] text-sm font-medium">
            {item.price}
           </span>
          </div>
          <p className="text-[#525252] text-sm leading-relaxed">
           {item.description}
          </p>
         </div>
        ))}
       </div>
      </div>
     </motion.div>
    </div>
   )}
  </AnimatePresence>
 );
}
