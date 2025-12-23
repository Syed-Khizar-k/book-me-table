import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen w-full flex flex-col md:flex-row">
      
      {/* ==============================================
          OPTION 1: THE MIDNIGHT RESERVE (Dark & Gold)
          Vibe: Nightlife, Exclusive, "Monal at Night"
      =============================================== */}
      <div className="w-full md:w-1/2 bg-[#0f172a] p-10 flex flex-col items-center justify-center border-r border-white/10 relative overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4af37] opacity-5 rounded-full blur-3xl pointer-events-none"></div>

        <h2 className="text-[#94a3b8] tracking-widest text-xs uppercase mb-8 font-semibold">
          Option 1: Midnight Reserve
        </h2>

        {/* CARD MOCKUP */}
        <div className="w-full max-w-sm bg-[#1e293b] rounded-xl overflow-hidden shadow-2xl border border-white/5">
          {/* Image Placeholder */}
          <div className="h-48 bg-slate-800 relative flex items-center justify-center">
             <span className="text-slate-600 font-medium">High-Res Food Image Here</span>
             {/* Elite Badge */}
             <div className="absolute top-4 right-4 bg-[#d4af37] text-[#0f172a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
               Top Rated
             </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-serif text-[#f8fafc]">
                The Poetic Bistro
              </h3>
              <span className="text-[#d4af37] text-sm">★★★★★</span>
            </div>
            
            <p className="text-[#94a3b8] text-sm mb-6 leading-relaxed">
              Experience the finest dining in the heart of Lahore. Exclusive tables available for members.
            </p>

            {/* The "Sale Grabbing" Elements */}
            <div className="flex gap-3 items-center">
              <button className="flex-1 bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Book Table
              </button>
              <button className="px-4 py-3 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
            <p className="text-center text-[#d4af37] text-xs mt-4 font-medium">
              Only 3 tables left for tonight
            </p>
          </div>
        </div>
      </div>


      {/* ==============================================
          OPTION 2: MODERN GASTRONOMY (Light & Emerald)
          Vibe: Michelin Guide, Fresh, Trustworthy
      =============================================== */}
      <div className="w-full md:w-1/2 bg-[#f9fafb] p-10 flex flex-col items-center justify-center">
        
        <h2 className="text-gray-400 tracking-widest text-xs uppercase mb-8 font-semibold">
          Option 2: Modern Gastronomy
        </h2>

        {/* CARD MOCKUP */}
        <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
          {/* Image Placeholder */}
          <div className="h-48 bg-gray-100 relative flex items-center justify-center group">
             <span className="text-gray-400 font-medium">High-Res Food Image Here</span>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-1">
              {/* Serif Font is crucial here */}
              <h3 className="text-2xl font-serif text-[#111827]">
                Maison d'Lahore
              </h3>
            </div>
            <p className="text-[#064e3b] text-xs font-bold uppercase tracking-wide mb-4">
              French • Gulberg III • $$$
            </p>
            
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
               A culinary journey through taste and tradition. Reserve your spot for the chef's tasting menu.
            </p>

            {/* The "Sale Grabbing" Elements */}
            <div className="flex gap-3 items-center">
              <button className="flex-1 bg-[#ea580c] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#c2410c] transition-colors shadow-lg shadow-orange-500/20">
                Reserve Now
              </button>
              <button className="px-4 py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
              </button>
            </div>
            <p className="text-center text-gray-400 text-xs mt-4">
              High demand: Booked 12 times today
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
