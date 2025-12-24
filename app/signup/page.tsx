"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function SignupPage() {
 const [role, setRole] = useState<"user" | "business">("user");

 return (
  <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden">
   <Navbar />

   {/* Background Effect */}
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050505] to-[#050505] opacity-50"></div>

   <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="w-full max-w-md relative z-10 px-6">
    <div className="text-center mb-12">
     <h1 className="text-4xl font-serif text-[#f4f4f5] mb-2">Request Access</h1>
     <p className="text-[#8d7f71]">Join the inner circle of gastronomy.</p>
    </div>

    <div className="flex mb-10 border-b border-white/10">
     <button
      onClick={() => setRole("user")}
      className={`flex-1 pb-4 text-xs font-bold uppercase tracking-widest transition-all ${
       role === "user"
        ? "text-[#c0a080] border-b-2 border-[#c0a080]"
        : "text-[#525252] hover:text-[#f4f4f5]"
      }`}>
      Diner Access
     </button>
     <button
      onClick={() => setRole("business")}
      className={`flex-1 pb-4 text-xs font-bold uppercase tracking-widest transition-all ${
       role === "business"
        ? "text-[#c0a080] border-b-2 border-[#c0a080]"
        : "text-[#525252] hover:text-[#f4f4f5]"
      }`}>
      Partner Access
     </button>
    </div>

    <form className="space-y-6">
     <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
       <label className="text-[#525252] text-[10px] uppercase font-bold tracking-widest">
        First Name
       </label>
       <input
        type="text"
        className="w-full bg-transparent border-b border-white/10 py-3 text-[#f4f4f5] outline-none focus:border-[#c0a080] transition-colors"
       />
      </div>
      <div className="space-y-2">
       <label className="text-[#525252] text-[10px] uppercase font-bold tracking-widest">
        Last Name
       </label>
       <input
        type="text"
        className="w-full bg-transparent border-b border-white/10 py-3 text-[#f4f4f5] outline-none focus:border-[#c0a080] transition-colors"
       />
      </div>
     </div>
     <div className="space-y-2">
      <label className="text-[#525252] text-[10px] uppercase font-bold tracking-widest">
       Email Address
      </label>
      <input
       type="email"
       className="w-full bg-transparent border-b border-white/10 py-3 text-[#f4f4f5] outline-none focus:border-[#c0a080] transition-colors"
      />
     </div>
     <div className="space-y-2">
      <label className="text-[#525252] text-[10px] uppercase font-bold tracking-widest">
       Password
      </label>
      <input
       type="password"
       className="w-full bg-transparent border-b border-white/10 py-3 text-[#f4f4f5] outline-none focus:border-[#c0a080] transition-colors"
       placeholder="••••••••"
      />
     </div>

     <button className="w-full bg-[#c0a080] text-[#050505] font-bold uppercase tracking-widest text-xs py-4 mt-8 hover:bg-[#d4b494] transition-colors duration-500">
      Submit Request
     </button>
    </form>

    <p className="text-center text-[#525252] text-xs mt-8">
     Already a member?{" "}
     <Link
      href="/login"
      className="text-[#f4f4f5] hover:text-[#c0a080] transition-colors underline decoration-white/20 underline-offset-4">
      Sign In
     </Link>
    </p>
   </motion.div>
  </div>
 );
}
