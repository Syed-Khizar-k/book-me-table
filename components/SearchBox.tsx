"use client";

import { useState, useEffect, useRef } from "react";
import { restaurants, Restaurant } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBoxProps {
 onSearch: (query: string, city: string) => void;
 cities: string[];
}

export default function SearchBox({ onSearch, cities }: SearchBoxProps) {
 const [query, setQuery] = useState("");
 const [selectedCity, setSelectedCity] = useState("");
 const [date, setDate] = useState("");
 const [time, setTime] = useState("19:00");
 const [partySize, setPartySize] = useState("2");

 const [suggestions, setSuggestions] = useState<Restaurant[]>([]);
 const [showSuggestions, setShowSuggestions] = useState(false);

 const wrapperRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
   if (
    wrapperRef.current &&
    !wrapperRef.current.contains(event.target as Node)
   ) {
    setShowSuggestions(false);
   }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

 useEffect(() => {
  if (query.length > 1) {
   const matches = restaurants.filter(
    (r) =>
     r.name.toLowerCase().includes(query.toLowerCase()) ||
     r.cuisine.toLowerCase().includes(query.toLowerCase())
   );
   setSuggestions(matches);
   setShowSuggestions(true);
  } else {
   setSuggestions([]);
   setShowSuggestions(false);
  }
 }, [query]);

 const handleSelectSuggestion = (r: Restaurant) => {
  setQuery(r.name);
  setShowSuggestions(false);
  onSearch(r.name, selectedCity);
 };

 const handleManualSearch = () => {
  onSearch(query, selectedCity);
  scrollToBottom();
 };

 const scrollToBottom = () => {
  window.scrollTo({
   top: (document.querySelector("#results") as HTMLElement)?.offsetTop || 0,
   behavior: "smooth",
  });
 };

 return (
  <div className="w-full max-w-4xl bg-[#121212] border border-white/5 rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row gap-4 relative z-50">
   {/* Date & Time Group */}
   <div className="flex gap-2 flex-1 md:border-r border-white/5 pr-4">
    <div className="flex-1">
     <label className="text-[10px] uppercase text-[#525252] font-bold tracking-widest mb-1 flex items-center gap-1">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="12"
       height="12"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round">
       <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
       <line x1="16" y1="2" x2="16" y2="6"></line>
       <line x1="8" y1="2" x2="8" y2="6"></line>
       <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      Date
     </label>
     <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="w-full bg-transparent text-[#f4f4f5] text-sm outline-none cursor-pointer font-medium"
     />
    </div>
    <div className="w-px bg-white/5 mx-2"></div>
    <div className="flex-1">
     <label className="text-[10px] uppercase text-[#525252] font-bold tracking-widest mb-1 flex items-center gap-1">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="12"
       height="12"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round">
       <circle cx="12" cy="12" r="10"></circle>
       <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      Time
     </label>
     <select
      value={time}
      onChange={(e) => setTime(e.target.value)}
      className="w-full bg-transparent text-[#f4f4f5] text-sm outline-none cursor-pointer appearance-none font-medium">
      {Array.from({ length: 12 }, (_, i) => i + 12).map((hour) => (
       <>
        <option value={`${hour}:00`} className="bg-[#121212]">
         {hour > 12 ? hour - 12 : hour}:00 {hour >= 12 ? "PM" : "AM"}
        </option>
        <option value={`${hour}:30`} className="bg-[#121212]">
         {hour > 12 ? hour - 12 : hour}:30 {hour >= 12 ? "PM" : "AM"}
        </option>
       </>
      ))}
     </select>
    </div>
    <div className="w-px bg-white/5 mx-2"></div>
    <div className="flex-1">
     <label className="text-[10px] uppercase text-[#525252] font-bold tracking-widest mb-1 flex items-center gap-1">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="12"
       height="12"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round">
       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
       <circle cx="9" cy="7" r="4"></circle>
       <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
       <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
      People
     </label>
     <select
      value={partySize}
      onChange={(e) => setPartySize(e.target.value)}
      className="w-full bg-transparent text-[#f4f4f5] text-sm outline-none cursor-pointer appearance-none font-medium">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
       <option key={n} value={n} className="bg-[#121212]">
        {n} People
       </option>
      ))}
     </select>
    </div>
   </div>

   {/* Autocomplete Input */}
   <div className="flex-[2] relative" ref={wrapperRef}>
    <div className="flex gap-2 h-full items-end">
     <div className="flex-1">
      <input
       type="text"
       placeholder="Restaurant, cuisine, or occasion..."
       value={query}
       onChange={(e) => setQuery(e.target.value)}
       onFocus={() => query.length > 1 && setShowSuggestions(true)}
       className="w-full bg-transparent text-[#f4f4f5] py-2 outline-none placeholder:text-[#525252] text-sm font-medium h-10 border-b border-transparent focus:border-[#c0a080] transition-colors"
      />
     </div>
     <button
      onClick={handleManualSearch}
      className="bg-[#c0a080] text-[#050505] px-8 rounded-lg font-bold uppercase text-xs tracking-wider hover:bg-[#d4b494] transition-colors h-10">
      Find
     </button>
    </div>

    {/* Dropdown */}
    <AnimatePresence>
     {showSuggestions && suggestions.length > 0 && (
      <motion.div
       initial={{ opacity: 0, y: 10 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: 10 }}
       className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/5 rounded-xl shadow-2xl overflow-hidden">
       {suggestions.map((r) => (
        <div
         key={r.id}
         onClick={() => handleSelectSuggestion(r)}
         className="p-3 hover:bg-[#252525] cursor-pointer flex justify-between items-center border-b border-white/5 last:border-0">
         <div>
          <h4 className="text-[#f4f4f5] font-serif">{r.name}</h4>
          <span className="text-[#8d7f71] text-xs uppercase">
           {r.city} • {r.cuisine}
          </span>
         </div>
         <span className="text-[#c0a080] text-xs font-bold">{r.rating} ★</span>
        </div>
       ))}
      </motion.div>
     )}
    </AnimatePresence>
   </div>
  </div>
 );
}
