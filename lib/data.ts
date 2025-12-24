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
 contactNumber: string; // New field
}

export const cities = [
 "Gojra",
 "Lahore",
 "Karachi",
 "Islamabad",
 "Rawalpindi",
 "Faisalabad",
 "Multan",
];

export const cityCoordinates: Record<string, { lat: number; lng: number }> = {
 Gojra: { lat: 31.149, lng: 72.684 },
 Lahore: { lat: 31.5204, lng: 74.3587 },
 Karachi: { lat: 24.8607, lng: 67.0011 },
 Islamabad: { lat: 33.6844, lng: 73.0479 },
 Rawalpindi: { lat: 33.5651, lng: 73.0169 },
 Faisalabad: { lat: 31.4504, lng: 73.135 },
 Multan: { lat: 30.1575, lng: 71.5249 },
};

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
  contactNumber: "+92 300 1234567",
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
  contactNumber: "+92 21 35678901",
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
  contactNumber: "+92 51 2823456",
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
  contactNumber: "+92 42 35789012",
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
  contactNumber: "+92 21 35345678",
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
  contactNumber: "+92 42 35756789",
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
 {
  id: "7",
  name: "Bonsai Gojra",
  rating: 4.4,
  image: "/images/restaurant.jpg",
  city: "Gojra",
  address: "Tehsil office road , Gojra",
  coords: { lat: 31.149, lng: 72.684 },
  reviewCount: 150,
  priceRange: "$$",
  cuisine: "Cafe",
  category: "Cafe",
  tags: ["Fast Food", "lunch", "Dinner"],
  contactNumber: "+92 46 3512345",
  menu: [
   {
    name: "Zinger Burger",
    price: "PKR 650",
    description: "Crispy chicken fillet with cheese and mayo.",
   },
   {
    name: "Chicken Pizza",
    price: "PKR 1200",
    description: "Spicy chicken with onions and capsicum.",
   },
  ],
 },
 {
  id: "8",
  name: "B Relish",
  rating: 4.3,
  image: "/images/restaurant.jpg",
  city: "Gojra",
  address: "Tehsil office Road , Gojra",
  coords: { lat: 31.15, lng: 72.69 },
  reviewCount: 80,
  priceRange: "$$",
  cuisine: "Fast Food",
  category: "Cafe",
  tags: ["Fast Food", "lunch", "Dinner"],
  contactNumber: "+92 46 3516789",
  menu: [
   {
    name: "Chicken Tikka",
    price: "PKR 400",
    description: "Charcoal grilled marinated chicken.",
   },
   {
    name: "Seekh Kabab",
    price: "PKR 500",
    description: "Spicy minced meat skewers.",
   },
  ],
 },
 {
  id: "9",
  name: "Savour Foods",
  rating: 4.8,
  image: "/images/restaurant.jpg",
  city: "Gojra",
  address: "Tehsil office Road , Gojra",
  coords: { lat: 31.15, lng: 72.69 },
  reviewCount: 400,
  priceRange: "$$$$",
  cuisine: "Continental",
  category: "Fine Dining",
  tags: ["luxury", "buffet", "event"],
  contactNumber: "+92 41 111133133",
  menu: [
   {
    name: "Hi-Tea Buffet",
    price: "PKR 2500",
    description: "Assorted savory and sweet treats.",
   },
   {
    name: "Grilled Fish",
    price: "PKR 2200",
    description: "Lemon butter sauce grilled fish.",
   },
  ],
 },
 {
  id: "10",
  name: "Fork N Knives",
  rating: 4.2,
  image: "/images/restaurant.jpg",
  city: "Faisalabad",
  address: "D Ground, Faisalabad",
  coords: { lat: 31.41, lng: 73.1 },
  reviewCount: 350,
  priceRange: "$$",
  cuisine: "Fast Food",
  category: "Cafe",
  tags: ["pizza", "burger", "casual"],
  contactNumber: "+92 41 8543210",
  menu: [
   {
    name: "Stuffed Pizza",
    price: "PKR 1800",
    description: "Cheese stuffed crust pizza.",
   },
   {
    name: "Pasta Alfredo",
    price: "PKR 900",
    description: "Creamy white sauce pasta.",
   },
  ],
 },
 {
  id: "11",
  name: "Savour Foods",
  rating: 4.6,
  image: "/images/restaurant.jpg",
  city: "Islamabad",
  address: "Blue Area, Islamabad",
  coords: { lat: 33.71, lng: 73.06 },
  reviewCount: 1500,
  priceRange: "$$",
  cuisine: "Traditional",
  category: "Desi",
  tags: ["pulao", "budget", "famous"],
  contactNumber: "+92 51 111123456",
  menu: [
   {
    name: "Savour Pulao Kabab",
    price: "PKR 600",
    description: "Famous chicken pulao with shami kabab.",
   },
  ],
 },
 {
  id: "12",
  name: "Fork N Knives",
  rating: 4.2,
  image: "/images/restaurant.jpg",
  city: "Gojra",
  address: "Tehsil office road, Gojra",
  coords: { lat: 31.149, lng: 72.684 },
  reviewCount: 350,
  priceRange: "$$",
  cuisine: "Fast Food",
  category: "Cafe",
  tags: ["pizza", "burger", "casual"],
  contactNumber: "+92 41 8543210",
  menu: [
   {
    name: "Stuffed Pizza",
    price: "PKR 1800",
    description: "Cheese stuffed crust pizza.",
   },
   {
    name: "Pasta Alfredo",
    price: "PKR 900",
    description: "Creamy white sauce pasta.",
   },
  ],
 },
 {
  id: "13",
  name: "Savour Foods",
  rating: 4.6,
  image: "/images/restaurant.jpg",
  city: "Gojra",
  address: "Tehsil office Road , Gojra",
  coords: { lat: 31.149, lng: 72.684 },
  reviewCount: 1500,
  priceRange: "$$",
  cuisine: "Traditional",
  category: "Desi",
  tags: ["pulao", "budget", "famous"],
  contactNumber: "+92 51 111123456",
  menu: [
   {
    name: "Savour Pulao Kabab",
    price: "PKR 600",
    description: "Famous chicken pulao with shami kabab.",
   },
  ],
 },
];

export const mockTimeSlots = [
 "2:00 PM",
 "3:00 PM",
 "4:00 PM",
 "5:00 PM",
 "6:00 PM",
 "7:00 PM",
 "8:00 PM",
 "9:00 PM",
 "10:00 PM",
];
