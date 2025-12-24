export interface MenuItem {
 name: string;
 price: string;
 description: string;
}

export interface Restaurant {
 id: string;
 name: string;
 rating: number;
 image: string;
 city: string;
 address: string;
 coords: { lat: number; lng: number };
 menu: MenuItem[];
 reviewCount: number;
 priceRange: "$$" | "$$$" | "$$$$";
 cuisine: string;
 category:
  | "Fine Dining"
  | "Desi"
  | "Cafe"
  | "Steakhouse"
  | "Pan Asian"
  | "Seafood"; // New field
 tags: string[]; // For filtering
}

export const cities = [
 "Lahore",
 "Karachi",
 "Islamabad",
 "Rawalpindi",
 "Faisalabad",
 "Multan",
];

export const categories = [
 "All",
 "Fine Dining",
 "Desi",
 "Cafe",
 "Steakhouse",
 "Pan Asian",
 "Seafood",
];

export const restaurants: Restaurant[] = [
 {
  id: "1",
  name: "The Poetic Bistro",
  rating: 4.8,
  image: "/images/restaurant.jpg",
  city: "Lahore",
  address: "12 Gulberg III, Lahore",
  coords: { lat: 31.5204, lng: 74.3587 },
  reviewCount: 124,
  priceRange: "$$$",
  cuisine: "Continental",
  category: "Fine Dining",
  tags: ["romantic", "wine", "outdoor"],
  menu: [
   {
    name: "Truffle Risotto",
    price: "PKR 3500",
    description: "Creamy arborio rice with black truffle oil.",
   },
   {
    name: "Wagyu Beef Burger",
    price: "PKR 4200",
    description: "Premium beef patty with caramelized onions.",
   },
   {
    name: "Molten Lava Cake",
    price: "PKR 1500",
    description: "Warm chocolate cake with a gooey center.",
   },
  ],
 },
 {
  id: "2",
  name: "Golden Fork Fine Dining",
  rating: 4.9,
  image: "/images/restaurant.jpg",
  city: "Karachi",
  address: "Clifton Block 4, Karachi",
  coords: { lat: 24.8607, lng: 67.0011 },
  reviewCount: 310,
  priceRange: "$$$$",
  cuisine: "Steakhouse",
  category: "Steakhouse",
  tags: ["luxury", "steak", "business"],
  menu: [
   {
    name: "Ribeye Steak",
    price: "PKR 5500",
    description: "300g premium cut, grilled to perfection.",
   },
   {
    name: "Lobster Thermidor",
    price: "PKR 7000",
    description: "Fresh lobster in a creamy mushroom sauce.",
   },
  ],
 },
 {
  id: "3",
  name: "Skyline Roof",
  rating: 4.5,
  image: "/images/restaurant.jpg",
  city: "Islamabad",
  address: "Blue Area, Islamabad",
  coords: { lat: 33.7077, lng: 73.0501 },
  reviewCount: 89,
  priceRange: "$$$",
  cuisine: "Pan Asian",
  category: "Pan Asian",
  tags: ["rooftop", "sushi", "view"],
  menu: [
   {
    name: "Sushi Platter",
    price: "PKR 4000",
    description: "Assorted nigiri and maki rolls.",
   },
   {
    name: "Thai Green Curry",
    price: "PKR 2200",
    description: "Authentic spicy coconut curry.",
   },
  ],
 },
 {
  id: "4",
  name: "Monal Downtown",
  rating: 4.7,
  image: "/images/restaurant.jpg",
  city: "Lahore",
  address: "Liberty Market, Lahore",
  coords: { lat: 31.51, lng: 74.34 },
  reviewCount: 500,
  priceRange: "$$",
  cuisine: "Traditional",
  category: "Desi",
  tags: ["family", "desi", "bbq"],
  menu: [
   {
    name: "Chicken Karahi",
    price: "PKR 2500",
    description: "Spicy wok-fried chicken with ginger.",
   },
   {
    name: "Mutton Handi",
    price: "PKR 3200",
    description: "Slow-cooked mutton in a clay pot.",
   },
  ],
 },
 {
  id: "5",
  name: "Ocean's Catch",
  rating: 4.6,
  image: "/images/restaurant.jpg",
  city: "Karachi",
  address: "DHA Phase 6, Karachi",
  coords: { lat: 24.8, lng: 67.05 },
  reviewCount: 200,
  priceRange: "$$$",
  cuisine: "Seafood",
  category: "Seafood",
  tags: ["fresh", "seafood", "casual"],
  menu: [
   {
    name: "Grilled Red Snapper",
    price: "PKR 3500",
    description: "Fresh catch with lemon butter sauce.",
   },
   {
    name: "Prawn Tempura",
    price: "PKR 2800",
    description: "Crispy fried prawns with dipping sauce.",
   },
  ],
 },
 {
  id: "6",
  name: "Espresso Lounge",
  rating: 4.4,
  image: "/images/restaurant.jpg",
  city: "Lahore",
  address: "MM Alam Road, Lahore",
  coords: { lat: 31.51, lng: 74.35 },
  reviewCount: 150,
  priceRange: "$$",
  cuisine: "Cafe",
  category: "Cafe",
  tags: ["coffee", "brunch", "wifi"],
  menu: [
   {
    name: "Eggs Benedict",
    price: "PKR 1200",
    description: "Poached eggs on english muffin with hollandaise.",
   },
   {
    name: "Iced Latte",
    price: "PKR 650",
    description: "Signature house blend espresso with milk.",
   },
  ],
 },
];

export const mockTimeSlots = [
 "18:00",
 "18:30",
 "19:00",
 "19:30",
 "20:00",
 "20:30",
 "21:00",
];
