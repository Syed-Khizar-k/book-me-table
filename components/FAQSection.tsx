"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
 const [activeTab, setActiveTab] = useState("discovery");

 const tabs = [
  { id: "discovery", label: "Discovery" },
  { id: "reservations", label: "Reservations" },
  { id: "availability", label: "Availability" },
  { id: "points", label: "BookMe Points" },
 ];

 const faqs = {
  discovery: [
   {
    question: "How do I find the perfect restaurant?",
    answer:
     "Use our advanced search filters to discover restaurants by cuisine type, location, price range, dining occasion, or special features like outdoor seating. You can also browse curated collections of top-rated venues, new openings, and hidden gems in your area.",
   },
   {
    question: "Can I see restaurant menus before booking?",
    answer:
     "Yes! Most restaurant profiles include their full menu, photos, pricing, and detailed descriptions. You can also view verified diner reviews and ratings to help make your decision.",
   },
   {
    question: "What makes BookMe Table's search different?",
    answer:
     "BookMe Table offers real-time availability across 60,000+ restaurants worldwide. Our intelligent search shows you only available time slots, personalized recommendations based on your preferences, and exclusive access to special events and dining experiences.",
   },
  ],
  reservations: [
   {
    question: "How do I make a reservation?",
    answer:
     "Simply search for a restaurant, select your preferred date, time, and party size from the available options, and click 'Reserve'. You'll receive instant confirmation via email and SMS. Your reservation details will also be saved in your BookMe Table account.",
   },
   {
    question: "Can I modify or cancel my reservation?",
    answer:
     "Yes, you can easily modify or cancel most reservations directly from your account. Simply go to 'My Reservations', select the booking you want to change, and choose your preferred option. Please note that some restaurants have specific cancellation policies.",
   },
   {
    question: "What happens if I'm running late?",
    answer:
     "If you're running late, please contact the restaurant directly using the phone number provided in your confirmation email. Most restaurants will hold your table for 15 minutes past your reservation time, but it's always best to communicate any delays.",
   },
   {
    question: "Do I need to pay to make a reservation?",
    answer:
     "No, making reservations through BookMe Table is completely free. Some exclusive or high-demand restaurants may require a credit card to hold the reservation or may have a cancellation fee, which will be clearly indicated during booking.",
   },
  ],
  availability: [
   {
    question: "How do I know if a restaurant has availability?",
    answer:
     "BookMe Table shows real-time availability across all partner restaurants. When you search for a restaurant, you'll instantly see all available time slots for your selected date and party size. If no times are shown, the restaurant is fully booked for that period.",
   },
   {
    question: "What if my preferred time isn't available?",
    answer:
     "Try being flexible with your timing—restaurants often have availability 30 minutes before or after your preferred time. You can also join our waitlist feature, and we'll notify you if a table becomes available. Additionally, consider booking for a different day or exploring similar restaurants in the area.",
   },
   {
    question: "How far in advance can I book?",
    answer:
     "Most restaurants allow bookings up to 30-60 days in advance, though some high-end establishments may open their calendar up to 90 days ahead. You can also make same-day reservations based on real-time availability.",
   },
  ],
  points: [
   {
    question: "How do BookMe Points work?",
    answer:
     "Earn 100 points for every completed reservation made through BookMe Table. Points can be redeemed for dining rewards, exclusive experiences, and special perks at participating restaurants. The more you dine, the more you earn!",
   },
   {
    question: "How do I redeem my points?",
    answer:
     "Points can be redeemed through your account dashboard. Choose from dining credits, priority reservations, exclusive chef's table experiences, or special event access. Each reward has a specific point value clearly displayed.",
   },
   {
    question: "Do my points expire?",
    answer:
     "Points remain active as long as you have at least one completed reservation within 12 months. If you dine out regularly through BookMe Table, your points will never expire.",
   },
   {
    question: "Can I use points for special occasions?",
    answer:
     "Absolutely! Save up your points for special occasions and redeem them for premium experiences like complimentary champagne, private dining rooms, or exclusive tasting menus at select partner restaurants.",
   },
  ],
 };

 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
  <section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
   {/* Background Gradient Circles */}
   <div className="absolute top-[-5%] left-[5%] w-[45vw] h-[45vw] bg-[#c0a080] opacity-[0.15] rounded-full blur-[110px] pointer-events-none"></div>
   <div className="absolute bottom-[-5%] right-[5%] w-[55vw] h-[55vw] bg-[#c0a080] opacity-[0.15] rounded-full blur-[120px] pointer-events-none"></div>

   <div className="container mx-auto px-6 relative z-10">
    <div className="text-center mb-16">
     <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-serif text-[#f4f4f5] mb-4">
      Frequently Asked <span className="text-[#c0a080] italic">Questions</span>
     </motion.h2>
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-[#8d7f71] text-lg max-w-2xl mx-auto">
      Everything you need to know about BookMe Table
     </motion.p>
    </div>

    {/* Tabs */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
     {tabs.map((tab) => (
      <button
       key={tab.id}
       onClick={() => {
        setActiveTab(tab.id);
        setOpenIndex(0);
       }}
       className={`relative px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all cursor-pointer rounded-lg ${
        activeTab === tab.id
         ? "text-[#050505] bg-[#c0a080]"
         : "text-[#8d7f71] hover:text-[#c0a080] bg-[#121212] border border-white/5 hover:border-[#c0a080]/30"
       }`}>
       {tab.label}
      </button>
     ))}
    </div>

    {/* FAQ Content */}
    <div className="max-w-3xl mx-auto">
     <AnimatePresence mode="wait">
      <motion.div
       key={activeTab}
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20 }}
       transition={{ duration: 0.3 }}
       className="space-y-4">
       {faqs[activeTab as keyof typeof faqs].map((faq, index) => (
        <div
         key={index}
         className="bg-[#121212] border border-white/5 rounded-lg overflow-hidden hover:border-[#c0a080]/30 transition-colors">
         <button
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          className="w-full px-6 py-5 flex justify-between items-center text-left cursor-pointer group">
          <span className="text-[#f4f4f5] font-serif text-lg pr-8 group-hover:text-[#c0a080] transition-colors">
           {faq.question}
          </span>
          <motion.svg
           animate={{ rotate: openIndex === index ? 180 : 0 }}
           transition={{ duration: 0.3 }}
           xmlns="http://www.w3.org/2000/svg"
           width="20"
           height="20"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           className="text-[#c0a080] flex-shrink-0">
           <polyline points="6 9 12 15 18 9"></polyline>
          </motion.svg>
         </button>
         <AnimatePresence>
          {openIndex === index && (
           <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden">
            <div className="px-6 pb-5 text-[#8d7f71] leading-relaxed border-t border-white/5 pt-4">
             {faq.answer}
            </div>
           </motion.div>
          )}
         </AnimatePresence>
        </div>
       ))}
      </motion.div>
     </AnimatePresence>
    </div>
   </div>
  </section>
 );
}
