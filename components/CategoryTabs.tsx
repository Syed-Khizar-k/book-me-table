"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/data";

interface CategoryTabsProps {
 selected: string;
 onSelect: (category: string) => void;
}

export default function CategoryTabs({
 selected,
 onSelect,
}: CategoryTabsProps) {
 return (
  <div className="w-full overflow-x-auto custom-scrollbar pb-2">
   <div className="flex gap-4 min-w-max px-2">
    {categories.map((category) => (
     <button
      key={category}
      onClick={() => onSelect(category)}
      className={`relative px-6 py-2 text-sm font-bold uppercase tracking-widest transition-colors ${
       selected === category
        ? "text-[#c0a080]"
        : "text-[#525252] hover:text-[#f4f4f5]"
      }`}>
      {category}
      {selected === category && (
       <motion.div
        layoutId="activeTab"
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c0a080]"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
       />
      )}
     </button>
    ))}
   </div>
  </div>
 );
}
