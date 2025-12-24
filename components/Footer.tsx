export default function Footer() {
 return (
  <footer className="bg-[#121212] border-t border-white/10 py-12 mt-20 relative overflow-hidden">
   {/* Background Gradient Circles */}
   <div className="absolute top-[-20%] left-[-5%] w-[40vw] h-[40vw] bg-[#c0a080] opacity-[0.15] rounded-full blur-[100px] pointer-events-none"></div>
   <div className="absolute bottom-[-20%] right-[-5%] w-[45vw] h-[45vw] bg-[#c0a080] opacity-[0.15] rounded-full blur-[110px] pointer-events-none"></div>

   <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 relative z-10">
    <div>
     <h3 className="text-xl font-serif font-bold text-[#f8fafc] mb-4">
      BookMe <span className="text-[#c0a080]">Table</span>
     </h3>
     <p className="text-[#94a3b8] text-sm leading-relaxed">
      Elevating the dining experience. Connect with the best restaurants in
      town.
     </p>
    </div>

    <div>
     <h4 className="text-[#f8fafc] font-bold mb-4">Discover</h4>
     <ul className="space-y-2 text-sm text-[#94a3b8]">
      <li className="hover:text-[#d4af37] cursor-pointer">Near Me</li>
      <li className="hover:text-[#d4af37] cursor-pointer">Top Rated</li>
      <li className="hover:text-[#d4af37] cursor-pointer">New Arrivals</li>
     </ul>
    </div>

    <div>
     <h4 className="text-[#f8fafc] font-bold mb-4">For Restaurants</h4>
     <ul className="space-y-2 text-sm text-[#94a3b8]">
      <li className="hover:text-[#d4af37] cursor-pointer">Partner with us</li>
      <li className="hover:text-[#d4af37] cursor-pointer">Business Login</li>
     </ul>
    </div>

    <div>
     <h4 className="text-[#f8fafc] font-bold mb-4">Contact</h4>
     <p className="text-[#94a3b8] text-sm">support@bookmetable.com</p>
     <p className="text-[#94a3b8] text-sm mt-2">+92 300 0000000</p>
    </div>
   </div>
   <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-[#94a3b8] text-xs">
    &copy; {new Date().getFullYear()} Bookme Table. All rights reserved.
   </div>
  </footer>
 );
}
