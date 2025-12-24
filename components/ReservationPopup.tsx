"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ReservationPopupProps {
 isOpen: boolean;
 onClose: () => void;
}

export default function ReservationPopup({
 isOpen,
 onClose,
}: ReservationPopupProps) {
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="relative bg-[#121212] w-full max-w-sm p-10 text-center border border-white/5 shadow-2xl">
      <div className="w-12 h-12 mx-auto bg-[#c0a080] text-[#050505] flex items-center justify-center rounded-full mb-6">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 2v20"></path>
        <path d="M2 12h20"></path>
       </svg>
      </div>

      <h2 className="text-2xl font-serif text-[#f4f4f5] mb-3">Coming Soon</h2>
      <p className="text-[#8d7f71] text-sm mb-8 leading-relaxed">
       We are finalizing our exclusive partnership with this venue. Online
       reservations will be enabled shortly.
      </p>

      <button
       onClick={onClose}
       className="text-[#f4f4f5] text-xs font-bold uppercase tracking-widest hover:text-[#c0a080] transition-colors border-b border-[#f4f4f5] hover:border-[#c0a080] pb-1">
       Close Notification
      </button>
     </motion.div>
    </div>
   )}
  </AnimatePresence>
 );
}
