"use client";

import { useState, useMemo } from "react";
import { restaurants, Restaurant } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RestaurantCard from "@/components/RestaurantCard";
import Footer from "@/components/Footer";
import ReservationPopup from "@/components/ReservationPopup";
import MenuModal from "@/components/MenuModal";
import CategoryTabs from "@/components/CategoryTabs";

export default function Home() {
 const [searchQuery, setSearchQuery] = useState("");
 const [selectedCity, setSelectedCity] = useState("");
 const [selectedCategory, setSelectedCategory] = useState("All");

 const [isReserveOpen, setReserveOpen] = useState(false);
 const [isMenuOpen, setMenuOpen] = useState(false);
 const [selectedRestaurant, setSelectedRestaurant] =
  useState<Restaurant | null>(null);

 const handleSearch = (query: string, city: string) => {
  setSearchQuery(query);
  if (city) setSelectedCity(city);
  // Reset category if searching specifically
  if (query) setSelectedCategory("All");
 };

 const handleNearMe = () => {
  if ("geolocation" in navigator) {
   navigator.geolocation.getCurrentPosition(
    () => {
     alert("Location detected! Showing results for your area.");
     setSelectedCity("Lahore");
    },
    (error) => {
     console.error(error);
     alert("Could not get your location.");
    }
   );
  }
 };

 const filteredRestaurants = useMemo(() => {
  return restaurants.filter((r) => {
   const matchesCity = selectedCity ? r.city === selectedCity : true;
   const matchesCategory =
    selectedCategory === "All" ? true : r.category === selectedCategory;
   const matchesQuery =
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.tags.some((tag) => tag.includes(searchQuery.toLowerCase()));

   return matchesCity && matchesCategory && matchesQuery;
  });
 }, [selectedCity, searchQuery, selectedCategory]);

 const openReservation = () => {
  setReserveOpen(true);
 };

 const openMenu = (restaurant: Restaurant) => {
  setSelectedRestaurant(restaurant);
  setMenuOpen(true);
 };

 return (
  <main className="min-h-screen bg-[#050505] text-[#f4f4f5]">
   <Navbar />
   <Hero onSearch={handleSearch} onNearMe={handleNearMe} />

   <section className="container mx-auto px-6 -mt-8 relative z-20 mb-16">
    <div className="bg-[#121212]/80 backdrop-blur-md border border-white/5 p-4 rounded-xl shadow-2xl">
     <CategoryTabs selected={selectedCategory} onSelect={setSelectedCategory} />
    </div>
   </section>

   <section className="container mx-auto px-6 pb-32">
    <div className="flex justify-between items-end mb-10 px-2">
     <div>
      <h2 className="text-3xl font-serif text-[#f4f4f5]">
       {selectedCategory === "All"
        ? "Featured Venues"
        : `${selectedCategory} Experiences`}
      </h2>
      {searchQuery && (
       <p className="text-[#8d7f71] text-sm mt-1">
        Results for "{searchQuery}"
       </p>
      )}
     </div>
     <p className="text-[#525252] text-sm uppercase tracking-widest font-medium hidden md:block">
      {filteredRestaurants.length} Venues Available
     </p>
    </div>

    {filteredRestaurants.length > 0 ? (
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredRestaurants.map((restaurant, index) => (
       <RestaurantCard
        key={restaurant.id}
        index={index}
        restaurant={restaurant}
        onReserve={openReservation}
        onViewMenu={() => openMenu(restaurant)}
       />
      ))}
     </div>
    ) : (
     <div className="text-center py-32 border border-white/5 bg-[#121212]">
      <h3 className="text-2xl font-serif text-[#f4f4f5] mb-2">
       No venues match your criteria
      </h3>
      <button
       onClick={() => {
        setSearchQuery("");
        setSelectedCity("");
        setSelectedCategory("All");
       }}
       className="mt-6 text-[#c0a080] text-sm uppercase tracking-widest hover:underline">
       Clear all filters
      </button>
     </div>
    )}
   </section>

   <Footer />

   <ReservationPopup
    isOpen={isReserveOpen}
    onClose={() => setReserveOpen(false)}
   />

   {selectedRestaurant && (
    <MenuModal
     isOpen={isMenuOpen}
     onClose={() => setMenuOpen(false)}
     restaurantName={selectedRestaurant.name}
     items={selectedRestaurant.menu}
    />
   )}
  </main>
 );
}
