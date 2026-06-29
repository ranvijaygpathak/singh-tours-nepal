import heroNepal from "@/assets/hero-nepal.jpg";
import destKathmandu from "@/assets/dest-kathmandu.jpg";
import destPokhara from "@/assets/dest-pokhara.jpg";
import destMuktinath from "@/assets/dest-muktinath.jpg";
import destLumbini from "@/assets/dest-lumbini.jpg";
import destJanakpur from "@/assets/dest-janakpur.jpg";
import destChitwan from "@/assets/dest-chitwan.jpg";

export const BRAND = {
  name: "Singh Tour And Travels",
  shortName: "Singh Travels",
  city: "Gorakhpur",
  tagline: "Nepal Tour Packages from Gorakhpur — and across India",
  phone: "+91 9876543210",
  phoneHref: "tel:+919876543210",
  whatsapp: "919876543210",
  whatsappHref: "https://wa.me/919876543210",
  email: "info@singhtourandtravels.com",
  address: "Golghar, Gorakhpur, Uttar Pradesh 273001, India",
  hours: "Open daily, 8:00 AM – 9:00 PM",
  established: 2008,
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
};

export const IMAGES = {
  hero: heroNepal,
  kathmandu: destKathmandu,
  pokhara: destPokhara,
  muktinath: destMuktinath,
  lumbini: destLumbini,
  janakpur: destJanakpur,
  chitwan: destChitwan,
};

export interface TourPackage {
  slug: string;
  name: string;
  destinations: string[];
  duration: string;
  nights: number;
  days: number;
  startingPrice: number;
  category: "Family" | "Honeymoon" | "Religious" | "Adventure" | "Luxury" | "Corporate";
  image: string;
  summary: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; details: string }[];
  hotels: string;
  transport: string;
  meals: string;
  faqs: { q: string; a: string }[];
  featured?: boolean;
}

export const PACKAGES: TourPackage[] = [
  {
    slug: "kathmandu-pokhara-5n-6d",
    name: "Kathmandu Pokhara Tour — 5N/6D",
    destinations: ["Kathmandu", "Pokhara"],
    duration: "5 Nights / 6 Days",
    nights: 5,
    days: 6,
    startingPrice: 14999,
    category: "Family",
    image: destPokhara,
    summary:
      "Our most-loved Nepal tour combining Kathmandu's heritage temples with Pokhara's serene lake and Himalayan sunrises.",
    highlights: [
      "Pashupatinath, Boudhanath & Swayambhunath darshan",
      "Sunrise at Sarangkot with Annapurna views",
      "Phewa Lake boating & Tal Barahi temple",
      "Comfortable AC vehicle and 3-star hotels",
    ],
    inclusions: [
      "5 nights accommodation on twin sharing",
      "Daily breakfast and dinner",
      "All transfers and sightseeing in private AC vehicle",
      "English/Hindi speaking driver",
      "All applicable taxes and tolls",
    ],
    exclusions: [
      "Airfare/train tickets to and from Gorakhpur",
      "Monument entry fees",
      "Personal expenses, tips, laundry",
      "Any item not mentioned in inclusions",
    ],
    itinerary: [
      { day: 1, title: "Gorakhpur → Sunauli → Kathmandu", details: "Pick-up from Gorakhpur, border formalities at Sunauli, drive to Kathmandu. Overnight stay." },
      { day: 2, title: "Kathmandu Sightseeing", details: "Pashupatinath, Boudhanath Stupa, Swayambhunath (Monkey Temple), Kathmandu Durbar Square." },
      { day: 3, title: "Kathmandu → Pokhara", details: "Scenic 200 km drive via Prithvi Highway. Evening at Lakeside Pokhara." },
      { day: 4, title: "Sarangkot Sunrise & Pokhara Tour", details: "Early sunrise at Sarangkot, Phewa Lake boating, Tal Barahi, Davis Falls, Gupteshwor Cave, Bindhyabasini Temple." },
      { day: 5, title: "Pokhara → Kathmandu", details: "Return drive to Kathmandu. Free evening for Thamel shopping." },
      { day: 6, title: "Kathmandu → Gorakhpur", details: "Drive back via Sunauli. Drop at Gorakhpur. Tour ends with memories." },
    ],
    hotels: "Hand-picked 3-star hotels: Hotel Encounter Nepal / similar in Kathmandu, Hotel Lake Star / similar in Pokhara.",
    transport: "Private AC Innova / Ertiga / Tempo Traveller based on group size.",
    meals: "Daily breakfast and dinner at hotel (veg & non-veg options).",
    faqs: [
      { q: "Do Indian citizens need a visa for Nepal?", a: "No visa is required. A valid Aadhaar card, Voter ID or Passport is accepted as ID proof at the border." },
      { q: "Is the package customizable?", a: "Yes — we can extend days, change hotel category, or add Muktinath/Chitwan as per your preference." },
    ],
    featured: true,
  },
  {
    slug: "muktinath-darshan-7n-8d",
    name: "Muktinath Darshan Yatra — 7N/8D",
    destinations: ["Kathmandu", "Pokhara", "Jomsom", "Muktinath"],
    duration: "7 Nights / 8 Days",
    nights: 7,
    days: 8,
    startingPrice: 24999,
    category: "Religious",
    image: destMuktinath,
    summary:
      "Sacred journey to Muktinath Dham (3,710 m) — one of the 108 Divya Desams — with Kathmandu and Pokhara temple darshan.",
    highlights: [
      "Muktinath Temple darshan and 108 Mukti Dhara bath",
      "Jomsom flight (subject to weather) with Annapurna views",
      "Pashupatinath aarti at Kathmandu",
      "Pokhara sightseeing en route",
    ],
    inclusions: [
      "7 nights accommodation on twin sharing",
      "Daily breakfast and dinner",
      "Jomsom–Muktinath jeep transfer",
      "All ground transfers in private AC vehicle",
      "Experienced tour escort",
    ],
    exclusions: ["Jomsom flight tickets", "Pooja samagri & donations", "Personal expenses", "Travel insurance"],
    itinerary: [
      { day: 1, title: "Gorakhpur → Kathmandu", details: "Drive to Kathmandu via Sunauli. Overnight." },
      { day: 2, title: "Kathmandu Darshan", details: "Pashupatinath, Boudhanath, Budhanilkantha (Sleeping Vishnu)." },
      { day: 3, title: "Kathmandu → Pokhara", details: "Drive to Pokhara. Evening at Phewa Lake." },
      { day: 4, title: "Pokhara → Jomsom → Muktinath", details: "Early flight to Jomsom, jeep to Muktinath. Overnight at Muktinath/Ranipauwa." },
      { day: 5, title: "Muktinath Darshan → Jomsom → Pokhara", details: "Morning darshan and 108 dhara snan. Return to Pokhara." },
      { day: 6, title: "Pokhara Sightseeing", details: "Sarangkot sunrise, Bindhyabasini, Davis Falls, World Peace Stupa." },
      { day: 7, title: "Pokhara → Kathmandu", details: "Drive back. Free time at Thamel." },
      { day: 8, title: "Kathmandu → Gorakhpur", details: "Drop at Gorakhpur." },
    ],
    hotels: "3-star hotels in Kathmandu & Pokhara, standard guesthouse at Muktinath/Ranipauwa.",
    transport: "Private AC vehicle on plains, shared jeep on Jomsom–Muktinath sector.",
    meals: "Daily breakfast and dinner. Pure veg available throughout.",
    faqs: [
      { q: "What is the best time for Muktinath yatra?", a: "March to June and September to November are ideal. Avoid heavy monsoon (July–August)." },
      { q: "Is it suitable for senior citizens?", a: "Yes, with normal fitness. Muktinath is at 3,710m — we acclimatise gradually." },
    ],
    featured: true,
  },
  {
    slug: "lumbini-janakpur-buddhist-circuit-4n-5d",
    name: "Lumbini & Janakpur Spiritual Tour — 4N/5D",
    destinations: ["Lumbini", "Janakpur"],
    duration: "4 Nights / 5 Days",
    nights: 4,
    days: 5,
    startingPrice: 11999,
    category: "Religious",
    image: destLumbini,
    summary:
      "Visit the birthplace of Lord Buddha at Lumbini and the sacred Janaki Mandir at Janakpur — an unforgettable spiritual circuit.",
    highlights: [
      "Maya Devi Temple & Ashoka Pillar at Lumbini",
      "World Peace Pagoda and international monasteries",
      "Janaki Mandir darshan at Janakpur",
      "Ram Janmabhoomi & Dhanusha Dham",
    ],
    inclusions: ["4 nights accommodation", "Breakfast & dinner", "All transfers in AC vehicle", "Guide assistance"],
    exclusions: ["Entry fees", "Personal expenses", "Lunch"],
    itinerary: [
      { day: 1, title: "Gorakhpur → Lumbini", details: "Drive to Lumbini (approx 3 hours). Evening at Maya Devi Temple." },
      { day: 2, title: "Lumbini Sightseeing", details: "Maya Devi Temple, Ashoka Pillar, World Peace Pagoda, monasteries of Japan, China, Thailand, Sri Lanka." },
      { day: 3, title: "Lumbini → Janakpur", details: "Drive to Janakpur. Evening aarti at Janaki Mandir." },
      { day: 4, title: "Janakpur Darshan", details: "Janaki Mandir, Ram Mandir, Dhanusha Dham, Vivah Mandap." },
      { day: 5, title: "Janakpur → Gorakhpur", details: "Return to Gorakhpur." },
    ],
    hotels: "Comfortable 3-star hotels at Lumbini and Janakpur.",
    transport: "Private AC vehicle for the entire journey.",
    meals: "Daily breakfast and dinner.",
    faqs: [
      { q: "Can this tour be done in less than 5 days?", a: "Yes, a 3-day Lumbini-only version is also available — contact us for a quote." },
    ],
  },
  {
    slug: "chitwan-jungle-safari-3n-4d",
    name: "Chitwan Jungle Safari — 3N/4D",
    destinations: ["Chitwan"],
    duration: "3 Nights / 4 Days",
    nights: 3,
    days: 4,
    startingPrice: 12999,
    category: "Adventure",
    image: destChitwan,
    summary:
      "Wildlife escape into Chitwan National Park — jeep safari, canoe ride, Tharu cultural evening and one-horned rhino spotting.",
    highlights: [
      "Full-day jeep safari in Chitwan National Park",
      "Canoe ride on Rapti River",
      "Tharu cultural dance evening",
      "Elephant breeding centre visit",
    ],
    inclusions: ["3 nights resort stay", "All meals", "Safari permits", "Park guide", "All transfers"],
    exclusions: ["Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Gorakhpur → Chitwan", details: "Drive to Chitwan. Evening Tharu cultural programme." },
      { day: 2, title: "Full-Day Safari", details: "Jeep safari, canoe ride, jungle walk, elephant breeding centre." },
      { day: 3, title: "Chitwan Activities", details: "Bird watching, village tour, sunset at Rapti River." },
      { day: 4, title: "Chitwan → Gorakhpur", details: "Return drive to Gorakhpur." },
    ],
    hotels: "Comfortable jungle resorts in Sauraha.",
    transport: "Private AC vehicle.",
    meals: "All meals included at the resort.",
    faqs: [
      { q: "What wildlife will we see?", a: "One-horned rhinoceros, deer, crocodiles, many birds. Tigers and leopards are rare but possible." },
    ],
  },
  {
    slug: "nepal-honeymoon-special-6n-7d",
    name: "Nepal Honeymoon Special — 6N/7D",
    destinations: ["Kathmandu", "Pokhara", "Nagarkot"],
    duration: "6 Nights / 7 Days",
    nights: 6,
    days: 7,
    startingPrice: 28999,
    category: "Honeymoon",
    image: destPokhara,
    summary:
      "A romantic Himalayan escape with lakeside dinners, mountain sunrises and curated couple experiences in luxury hotels.",
    highlights: [
      "Sunrise at Nagarkot with Himalayan panorama",
      "Candle-light dinner by Phewa Lake",
      "Private boating & couple spa",
      "4-star handpicked properties",
    ],
    inclusions: ["6 nights in 4-star hotels", "Breakfast & dinner", "Private AC sedan", "Welcome flowers in room", "Couple spa session"],
    exclusions: ["Airfare", "Entry fees", "Personal expenses"],
    itinerary: [
      { day: 1, title: "Gorakhpur → Kathmandu", details: "Pick-up & drive to Kathmandu. Welcome dinner." },
      { day: 2, title: "Kathmandu Heritage Tour", details: "Pashupatinath, Boudhanath, Kathmandu Durbar Square." },
      { day: 3, title: "Kathmandu → Nagarkot", details: "Drive to Nagarkot. Evening sunset views." },
      { day: 4, title: "Nagarkot → Pokhara", details: "Sunrise, then long drive to Pokhara." },
      { day: 5, title: "Pokhara Romance Day", details: "Sarangkot sunrise, lake boating, candle-light dinner." },
      { day: 6, title: "Pokhara → Kathmandu", details: "Drive back. Free evening at Thamel." },
      { day: 7, title: "Kathmandu → Gorakhpur", details: "Return home." },
    ],
    hotels: "4-star: Hotel Yak & Yeti / Hyatt Place / similar.",
    transport: "Private AC sedan with experienced chauffeur.",
    meals: "Daily breakfast and dinner with one candle-light dinner.",
    faqs: [
      { q: "Are honeymoon inclusions customizable?", a: "Absolutely — tell us your preferences and we'll tailor the experience." },
    ],
    featured: true,
  },
  {
    slug: "kathmandu-darshan-3n-4d",
    name: "Kathmandu Darshan — 3N/4D",
    destinations: ["Kathmandu"],
    duration: "3 Nights / 4 Days",
    nights: 3,
    days: 4,
    startingPrice: 8999,
    category: "Religious",
    image: destKathmandu,
    summary:
      "Short and sweet pilgrimage covering Kathmandu's most important temples — perfect for first-timers from Gorakhpur.",
    highlights: [
      "Pashupatinath morning aarti",
      "Boudhanath Stupa kora",
      "Swayambhunath sunrise",
      "Manakamana Devi (optional)",
    ],
    inclusions: ["3 nights hotel", "Breakfast & dinner", "All transfers"],
    exclusions: ["Entry fees", "Cable car at Manakamana", "Personal expenses"],
    itinerary: [
      { day: 1, title: "Gorakhpur → Kathmandu", details: "Drive to Kathmandu." },
      { day: 2, title: "Pashupatinath & Boudhanath", details: "Morning aarti at Pashupatinath, afternoon at Boudhanath." },
      { day: 3, title: "Swayambhunath & Durbar Square", details: "Sunrise at Swayambhu, heritage walk through Kathmandu Durbar Square." },
      { day: 4, title: "Kathmandu → Gorakhpur", details: "Return drive." },
    ],
    hotels: "Clean 3-star hotel near Thamel.",
    transport: "Private AC vehicle.",
    meals: "Daily breakfast and dinner.",
    faqs: [
      { q: "Is this suitable for senior citizens?", a: "Yes — the itinerary is paced gently with no high-altitude travel." },
    ],
  },
];

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
}

export const DESTINATIONS: Destination[] = [
  { slug: "kathmandu", name: "Kathmandu", tagline: "Heritage capital of Nepal", image: destKathmandu, description: "UNESCO heritage temples, ancient durbar squares and the spiritual heart of Nepal." },
  { slug: "pokhara", name: "Pokhara", tagline: "Lake city of the Himalayas", image: destPokhara, description: "Phewa Lake, Sarangkot sunrise and uninterrupted views of the Annapurna range." },
  { slug: "muktinath", name: "Muktinath", tagline: "Sacred Vishnu Dham at 3,710m", image: destMuktinath, description: "One of the 108 Divya Desams — bathe in 108 Mukti Dharas amid the Himalayas." },
  { slug: "lumbini", name: "Lumbini", tagline: "Birthplace of Lord Buddha", image: destLumbini, description: "Maya Devi Temple, Ashoka Pillar and monasteries from across the Buddhist world." },
  { slug: "janakpur", name: "Janakpur", tagline: "Birthplace of Mata Sita", image: destJanakpur, description: "The magnificent Janaki Mandir and the sacred Vivah Mandap of Ram-Sita." },
  { slug: "chitwan", name: "Chitwan", tagline: "Wildlife of the Terai", image: destChitwan, description: "Jeep safaris, one-horned rhinos and the rich biodiversity of Chitwan National Park." },
];

export const TESTIMONIALS = [
  { name: "Rajesh & Family", city: "Lucknow", text: "Our Kathmandu-Pokhara trip with Singh Travels was flawless. Driver Ji was excellent and the hotels were lovely. Highly recommended for families.", rating: 5 },
  { name: "Anita Sharma", city: "Delhi", text: "Muktinath yatra was a life-changing experience. Everything was arranged perfectly — pickup at Gorakhpur, hotels, jeep at Jomsom. Thank you Singh Ji.", rating: 5 },
  { name: "Vikram & Priya", city: "Mumbai", text: "Booked our honeymoon to Nepal — the candle-light dinner at Phewa Lake was magical. Worth every rupee.", rating: 5 },
  { name: "Suresh Gupta", city: "Patna", text: "Affordable, transparent pricing and no hidden charges. Will book again for Lumbini next year.", rating: 5 },
];

export const FAQS = [
  { q: "Do Indian citizens need a visa for Nepal?", a: "No. A valid Aadhaar card, Voter ID or Passport (any one) is accepted as ID proof at the Sunauli border." },
  { q: "What is the best time to visit Nepal?", a: "October to April is ideal — clear mountain views and pleasant weather. Avoid heavy monsoon (July–August) if you want guaranteed Himalayan sightings." },
  { q: "Can I pay in Indian Rupees?", a: "Yes, INR is widely accepted in tourist areas. We also accept UPI, bank transfer and cash for booking." },
  { q: "How do I book a package?", a: "Call us at " + BRAND.phone + ", WhatsApp us, or fill the enquiry form on this page. We confirm within 1 hour during business hours." },
  { q: "Is the package price per person?", a: "Yes — all 'starting from' prices are per person on twin-sharing basis." },
  { q: "Do you provide pickup from Gorakhpur railway station / airport?", a: "Absolutely — complimentary pickup and drop from Gorakhpur is included in every package." },
];

export const GALLERY_IMAGES = [
  { src: destPokhara, alt: "Phewa Lake Pokhara at sunrise" },
  { src: destKathmandu, alt: "Pashupatinath Temple Kathmandu" },
  { src: destMuktinath, alt: "Muktinath Temple high in the Himalayas" },
  { src: destLumbini, alt: "Maya Devi Temple Lumbini" },
  { src: destJanakpur, alt: "Janaki Mandir Janakpur" },
  { src: destChitwan, alt: "Rhinoceros at Chitwan National Park" },
  { src: heroNepal, alt: "Annapurna sunrise from Sarangkot" },
];

// Major Indian cities for SEO landing pages.
// Dynamic route accepts any slug, but these are the ones we link to and include in sitemap.
export const CITIES: { slug: string; name: string; state: string }[] = [
  { slug: "delhi", name: "Delhi", state: "Delhi" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra" },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal" },
  { slug: "bangalore", name: "Bangalore", state: "Karnataka" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana" },
  { slug: "pune", name: "Pune", state: "Maharashtra" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat" },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh" },
  { slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh" },
  { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh" },
  { slug: "allahabad", name: "Prayagraj", state: "Uttar Pradesh" },
  { slug: "gorakhpur", name: "Gorakhpur", state: "Uttar Pradesh" },
  { slug: "noida", name: "Noida", state: "Uttar Pradesh" },
  { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh" },
  { slug: "agra", name: "Agra", state: "Uttar Pradesh" },
  { slug: "meerut", name: "Meerut", state: "Uttar Pradesh" },
  { slug: "bareilly", name: "Bareilly", state: "Uttar Pradesh" },
  { slug: "patna", name: "Patna", state: "Bihar" },
  { slug: "gaya", name: "Gaya", state: "Bihar" },
  { slug: "muzaffarpur", name: "Muzaffarpur", state: "Bihar" },
  { slug: "bhagalpur", name: "Bhagalpur", state: "Bihar" },
  { slug: "ranchi", name: "Ranchi", state: "Jharkhand" },
  { slug: "jamshedpur", name: "Jamshedpur", state: "Jharkhand" },
  { slug: "dhanbad", name: "Dhanbad", state: "Jharkhand" },
  { slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha" },
  { slug: "cuttack", name: "Cuttack", state: "Odisha" },
  { slug: "siliguri", name: "Siliguri", state: "West Bengal" },
  { slug: "guwahati", name: "Guwahati", state: "Assam" },
  { slug: "chandigarh", name: "Chandigarh", state: "Chandigarh" },
  { slug: "amritsar", name: "Amritsar", state: "Punjab" },
  { slug: "ludhiana", name: "Ludhiana", state: "Punjab" },
  { slug: "jalandhar", name: "Jalandhar", state: "Punjab" },
  { slug: "dehradun", name: "Dehradun", state: "Uttarakhand" },
  { slug: "haridwar", name: "Haridwar", state: "Uttarakhand" },
  { slug: "rishikesh", name: "Rishikesh", state: "Uttarakhand" },
  { slug: "jammu", name: "Jammu", state: "Jammu & Kashmir" },
  { slug: "srinagar", name: "Srinagar", state: "Jammu & Kashmir" },
  { slug: "shimla", name: "Shimla", state: "Himachal Pradesh" },
  { slug: "indore", name: "Indore", state: "Madhya Pradesh" },
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh" },
  { slug: "gwalior", name: "Gwalior", state: "Madhya Pradesh" },
  { slug: "jabalpur", name: "Jabalpur", state: "Madhya Pradesh" },
  { slug: "raipur", name: "Raipur", state: "Chhattisgarh" },
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra" },
  { slug: "nashik", name: "Nashik", state: "Maharashtra" },
  { slug: "surat", name: "Surat", state: "Gujarat" },
  { slug: "vadodara", name: "Vadodara", state: "Gujarat" },
  { slug: "rajkot", name: "Rajkot", state: "Gujarat" },
  { slug: "udaipur", name: "Udaipur", state: "Rajasthan" },
  { slug: "jodhpur", name: "Jodhpur", state: "Rajasthan" },
  { slug: "kota", name: "Kota", state: "Rajasthan" },
  { slug: "kochi", name: "Kochi", state: "Kerala" },
  { slug: "trivandrum", name: "Thiruvananthapuram", state: "Kerala" },
  { slug: "coimbatore", name: "Coimbatore", state: "Tamil Nadu" },
  { slug: "madurai", name: "Madurai", state: "Tamil Nadu" },
  { slug: "mysore", name: "Mysuru", state: "Karnataka" },
  { slug: "mangalore", name: "Mangaluru", state: "Karnataka" },
  { slug: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh" },
  { slug: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh" },
];

export function cityFromSlug(slug: string): { slug: string; name: string; state: string } {
  const found = CITIES.find((c) => c.slug === slug.toLowerCase());
  if (found) return found;
  // Fallback: prettify the slug for an unknown city
  const name = slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
  return { slug: slug.toLowerCase(), name, state: "India" };
}

export function formatINR(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}