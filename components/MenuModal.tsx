"use client";

import { MenuItem } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface MenuModalProps {
 isOpen: boolean;
 onClose: () => void;
 restaurantName: string;
 items: MenuItem[];
 contactNumber: string;
}

export default function MenuModal({
 isOpen,
 onClose,
 restaurantName,
 items,
 contactNumber,
}: MenuModalProps) {
 const [showPreview, setShowPreview] = useState(false);

 return (
  <AnimatePresence>
   {isOpen && (
    <div
    
     className="fixed  inset-0 z-[60] flex items-center justify-center p-4">
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
      className="relative bg-[#121212] w-full max-w-2xl overflow-hidden border border-white/5 shadow-2xl rounded-xl z-20">
      <div className="p-8">
       <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-6">
        <div>
         <span className="text-[#c0a080] text-xs uppercase tracking-widest font-bold mb-2 block">
          Menu & Contact
         </span>
         <h2 className="text-3xl font-serif text-[#f4f4f5] mb-2">
          {restaurantName}
         </h2>
         <p className="text-[#8d7f71] text-sm font-medium flex items-center gap-2">
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
           <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          {contactNumber || "Contact not available"}
         </p>
        </div>
        <button
         onClick={onClose}
         className="text-[#525252] hover:text-[#f4f4f5] transition-colors text-sm uppercase tracking-widest cursor-pointer">
         Close
        </button>
       </div>

       <div className="grid md:grid-cols-2 gap-8 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
        {/* Menu Items List */}
        <div className="space-y-6">
         <h3 className="text-[#f4f4f5] text-sm font-bold uppercase tracking-widest mb-4 border-l-2 border-[#c0a080] pl-3">
          Signature Dishes
         </h3>
         {items.map((item, index) => (
          <div key={index} className="group cursor-default">
           <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-[#f4f4f5] font-serif text-lg group-hover:text-[#c0a080] transition-colors">
             {item.name}
            </h4>
            <span className="text-[#8d7f71] text-sm font-medium">
             {item.price}
            </span>
           </div>
           <p className="text-[#525252] text-xs leading-relaxed">
            {item.description}
           </p>
          </div>
         ))}
        </div>

        {/* Menu Image Preview */}
        <div className="flex flex-col gap-4">
         <h3 className="text-[#f4f4f5] text-sm font-bold uppercase tracking-widest mb-2 border-l-2 border-[#c0a080] pl-3">
          Menu Card
         </h3>
         <div
          onClick={() => setShowPreview(true)}
          className="relative aspect-3/4 w-full bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5 group cursor-pointer hover:border-[#c0a080]/50 transition-colors">
          {/* Placeholder for Menu Image - In real app this would be a specific menu image */}
          <div className="absolute inset-0 flex items-center justify-center text-[#525252] flex-col gap-2 group-hover:scale-105 transition-transform duration-500">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
           </svg>
           <span className="text-xs uppercase tracking-widest group-hover:text-[#c0a080] transition-colors">
            Click to Preview
           </span>
          </div>
         </div>
         <a
          href="#" // In real app, this would be the link to the image
          download
          className="bg-[#c0a080] text-[#050505] w-full py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#d4b494] transition-colors flex items-center justify-center gap-2 cursor-pointer">
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
           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
           <polyline points="7 10 12 15 17 10"></polyline>
           <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Menu
         </a>
        </div>
       </div>
      </div>
     </motion.div>

     {/* Full Screen Preview Overlay */}
     <AnimatePresence>
      {showPreview && (
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-70 bg-black/95 flex flex-col items-center justify-center p-4"
        onClick={() => setShowPreview(false)}>
        <motion.div
         initial={{ scale: 0.9 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0.9 }}
         onClick={(e) => e.stopPropagation()}
         className="relative w-full max-w-2xl aspect-3/4 bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
         {/* Full Screen Image Placeholder */}
         <div className="absolute inset-0 flex items-center justify-center text-[#525252]">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           width="80"
           height="80"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="0.5"
           strokeLinecap="round"
           strokeLinejoin="round">
           <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
           <circle cx="8.5" cy="8.5" r="1.5"></circle>
           <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
         </div>

         <button
          onClick={() => setShowPreview(false)}
          className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors cursor-pointer">
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
           <line x1="18" y1="6" x2="6" y2="18"></line>
           <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
         </button>
        </motion.div>

        <a
         href="#"
         download
         onClick={(e) => e.stopPropagation()}
         className="mt-6 bg-[#c0a080] text-[#050505] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#d4b494] transition-colors flex items-center gap-2 cursor-pointer shadow-xl">
         Download High-Res
        </a>
       </motion.div>
      )}
     </AnimatePresence>
    </div>
   )}
  </AnimatePresence>
 );
}
