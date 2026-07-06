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
  phone: "+91 94158 50932",
  phoneHref: "tel:+919415850932",
  whatsapp: "919415850932",
  whatsappHref: "https://wa.me/919415850932",
  email: "singhtravelgkp@gmail.com",
  address: "Shop No 26/27, GDA Building, Railway Station Road, in-front of Gate No 1, Gorakhpur, Uttar Pradesh 273001, India",
  mapsUrl: "https://maps.app.goo.gl/S7GQ5BjtsaQzHv8Q8",
  mapsEmbedUrl: "https://www.google.com/maps?q=Singh+Tour+and+Travels,+GDA+Building,+Railway+Station+Road,+Gorakhpur&ll=26.7579546,83.3839899&z=17&output=embed",
  geo: { lat: 26.7579546, lng: 83.3839899 },
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
  // Uttar Pradesh (extended)
  { slug: "aligarh", name: "Aligarh", state: "Uttar Pradesh" },
  { slug: "moradabad", name: "Moradabad", state: "Uttar Pradesh" },
  { slug: "saharanpur", name: "Saharanpur", state: "Uttar Pradesh" },
  { slug: "muzaffarnagar", name: "Muzaffarnagar", state: "Uttar Pradesh" },
  { slug: "mathura", name: "Mathura", state: "Uttar Pradesh" },
  { slug: "firozabad", name: "Firozabad", state: "Uttar Pradesh" },
  { slug: "jhansi", name: "Jhansi", state: "Uttar Pradesh" },
  { slug: "ayodhya", name: "Ayodhya", state: "Uttar Pradesh" },
  { slug: "faizabad", name: "Faizabad", state: "Uttar Pradesh" },
  { slug: "sultanpur", name: "Sultanpur", state: "Uttar Pradesh" },
  { slug: "raebareli", name: "Raebareli", state: "Uttar Pradesh" },
  { slug: "sitapur", name: "Sitapur", state: "Uttar Pradesh" },
  { slug: "hardoi", name: "Hardoi", state: "Uttar Pradesh" },
  { slug: "unnao", name: "Unnao", state: "Uttar Pradesh" },
  { slug: "etawah", name: "Etawah", state: "Uttar Pradesh" },
  { slug: "farrukhabad", name: "Farrukhabad", state: "Uttar Pradesh" },
  { slug: "mainpuri", name: "Mainpuri", state: "Uttar Pradesh" },
  { slug: "banda", name: "Banda", state: "Uttar Pradesh" },
  { slug: "mirzapur", name: "Mirzapur", state: "Uttar Pradesh" },
  { slug: "jaunpur", name: "Jaunpur", state: "Uttar Pradesh" },
  { slug: "ghazipur", name: "Ghazipur", state: "Uttar Pradesh" },
  { slug: "ballia", name: "Ballia", state: "Uttar Pradesh" },
  { slug: "azamgarh", name: "Azamgarh", state: "Uttar Pradesh" },
  { slug: "mau", name: "Mau", state: "Uttar Pradesh" },
  { slug: "deoria", name: "Deoria", state: "Uttar Pradesh" },
  { slug: "kushinagar", name: "Kushinagar", state: "Uttar Pradesh" },
  { slug: "basti", name: "Basti", state: "Uttar Pradesh" },
  { slug: "gonda", name: "Gonda", state: "Uttar Pradesh" },
  { slug: "bahraich", name: "Bahraich", state: "Uttar Pradesh" },
  { slug: "shahjahanpur", name: "Shahjahanpur", state: "Uttar Pradesh" },
  { slug: "pilibhit", name: "Pilibhit", state: "Uttar Pradesh" },
  { slug: "rampur", name: "Rampur", state: "Uttar Pradesh" },
  { slug: "bulandshahr", name: "Bulandshahr", state: "Uttar Pradesh" },
  { slug: "hapur", name: "Hapur", state: "Uttar Pradesh" },
  { slug: "greater-noida", name: "Greater Noida", state: "Uttar Pradesh" },
  { slug: "etah", name: "Etah", state: "Uttar Pradesh" },
  { slug: "budaun", name: "Budaun", state: "Uttar Pradesh" },
  // Bihar (extended)
  { slug: "darbhanga", name: "Darbhanga", state: "Bihar" },
  { slug: "purnia", name: "Purnia", state: "Bihar" },
  { slug: "arrah", name: "Arrah", state: "Bihar" },
  { slug: "begusarai", name: "Begusarai", state: "Bihar" },
  { slug: "katihar", name: "Katihar", state: "Bihar" },
  { slug: "chapra", name: "Chapra", state: "Bihar" },
  { slug: "hajipur", name: "Hajipur", state: "Bihar" },
  { slug: "siwan", name: "Siwan", state: "Bihar" },
  { slug: "motihari", name: "Motihari", state: "Bihar" },
  { slug: "bettiah", name: "Bettiah", state: "Bihar" },
  { slug: "bihar-sharif", name: "Bihar Sharif", state: "Bihar" },
  { slug: "nalanda", name: "Nalanda", state: "Bihar" },
  { slug: "sasaram", name: "Sasaram", state: "Bihar" },
  { slug: "munger", name: "Munger", state: "Bihar" },
  { slug: "kishanganj", name: "Kishanganj", state: "Bihar" },
  { slug: "saharsa", name: "Saharsa", state: "Bihar" },
  { slug: "samastipur", name: "Samastipur", state: "Bihar" },
  { slug: "sitamarhi", name: "Sitamarhi", state: "Bihar" },
  { slug: "madhubani", name: "Madhubani", state: "Bihar" },
  // Jharkhand
  { slug: "bokaro", name: "Bokaro", state: "Jharkhand" },
  { slug: "hazaribagh", name: "Hazaribagh", state: "Jharkhand" },
  { slug: "deoghar", name: "Deoghar", state: "Jharkhand" },
  { slug: "giridih", name: "Giridih", state: "Jharkhand" },
  { slug: "ramgarh", name: "Ramgarh", state: "Jharkhand" },
  { slug: "dumka", name: "Dumka", state: "Jharkhand" },
  // West Bengal
  { slug: "howrah", name: "Howrah", state: "West Bengal" },
  { slug: "durgapur", name: "Durgapur", state: "West Bengal" },
  { slug: "asansol", name: "Asansol", state: "West Bengal" },
  { slug: "kharagpur", name: "Kharagpur", state: "West Bengal" },
  { slug: "malda", name: "Malda", state: "West Bengal" },
  { slug: "burdwan", name: "Burdwan", state: "West Bengal" },
  { slug: "darjeeling", name: "Darjeeling", state: "West Bengal" },
  // Odisha
  { slug: "rourkela", name: "Rourkela", state: "Odisha" },
  { slug: "sambalpur", name: "Sambalpur", state: "Odisha" },
  { slug: "puri", name: "Puri", state: "Odisha" },
  { slug: "berhampur", name: "Berhampur", state: "Odisha" },
  { slug: "balasore", name: "Balasore", state: "Odisha" },
  // Assam & NE
  { slug: "dibrugarh", name: "Dibrugarh", state: "Assam" },
  { slug: "silchar", name: "Silchar", state: "Assam" },
  { slug: "jorhat", name: "Jorhat", state: "Assam" },
  { slug: "tezpur", name: "Tezpur", state: "Assam" },
  { slug: "nagaon", name: "Nagaon", state: "Assam" },
  { slug: "agartala", name: "Agartala", state: "Tripura" },
  { slug: "imphal", name: "Imphal", state: "Manipur" },
  { slug: "aizawl", name: "Aizawl", state: "Mizoram" },
  { slug: "shillong", name: "Shillong", state: "Meghalaya" },
  { slug: "kohima", name: "Kohima", state: "Nagaland" },
  { slug: "itanagar", name: "Itanagar", state: "Arunachal Pradesh" },
  { slug: "gangtok", name: "Gangtok", state: "Sikkim" },
  // Punjab & Haryana
  { slug: "patiala", name: "Patiala", state: "Punjab" },
  { slug: "bathinda", name: "Bathinda", state: "Punjab" },
  { slug: "mohali", name: "Mohali", state: "Punjab" },
  { slug: "pathankot", name: "Pathankot", state: "Punjab" },
  { slug: "hoshiarpur", name: "Hoshiarpur", state: "Punjab" },
  { slug: "moga", name: "Moga", state: "Punjab" },
  { slug: "faridabad", name: "Faridabad", state: "Haryana" },
  { slug: "gurgaon", name: "Gurugram", state: "Haryana" },
  { slug: "panipat", name: "Panipat", state: "Haryana" },
  { slug: "ambala", name: "Ambala", state: "Haryana" },
  { slug: "karnal", name: "Karnal", state: "Haryana" },
  { slug: "hisar", name: "Hisar", state: "Haryana" },
  { slug: "rohtak", name: "Rohtak", state: "Haryana" },
  { slug: "sonipat", name: "Sonipat", state: "Haryana" },
  { slug: "yamunanagar", name: "Yamunanagar", state: "Haryana" },
  { slug: "kurukshetra", name: "Kurukshetra", state: "Haryana" },
  // Uttarakhand
  { slug: "haldwani", name: "Haldwani", state: "Uttarakhand" },
  { slug: "roorkee", name: "Roorkee", state: "Uttarakhand" },
  { slug: "nainital", name: "Nainital", state: "Uttarakhand" },
  { slug: "kashipur", name: "Kashipur", state: "Uttarakhand" },
  { slug: "rudrapur", name: "Rudrapur", state: "Uttarakhand" },
  // Himachal Pradesh
  { slug: "manali", name: "Manali", state: "Himachal Pradesh" },
  { slug: "dharamshala", name: "Dharamshala", state: "Himachal Pradesh" },
  { slug: "solan", name: "Solan", state: "Himachal Pradesh" },
  { slug: "mandi", name: "Mandi", state: "Himachal Pradesh" },
  { slug: "kullu", name: "Kullu", state: "Himachal Pradesh" },
  // J&K
  { slug: "udhampur", name: "Udhampur", state: "Jammu & Kashmir" },
  { slug: "anantnag", name: "Anantnag", state: "Jammu & Kashmir" },
  { slug: "leh", name: "Leh", state: "Ladakh" },
  // Rajasthan
  { slug: "ajmer", name: "Ajmer", state: "Rajasthan" },
  { slug: "bikaner", name: "Bikaner", state: "Rajasthan" },
  { slug: "alwar", name: "Alwar", state: "Rajasthan" },
  { slug: "bharatpur", name: "Bharatpur", state: "Rajasthan" },
  { slug: "sikar", name: "Sikar", state: "Rajasthan" },
  { slug: "pushkar", name: "Pushkar", state: "Rajasthan" },
  { slug: "mount-abu", name: "Mount Abu", state: "Rajasthan" },
  { slug: "jaisalmer", name: "Jaisalmer", state: "Rajasthan" },
  // Madhya Pradesh
  { slug: "ujjain", name: "Ujjain", state: "Madhya Pradesh" },
  { slug: "sagar", name: "Sagar", state: "Madhya Pradesh" },
  { slug: "satna", name: "Satna", state: "Madhya Pradesh" },
  { slug: "rewa", name: "Rewa", state: "Madhya Pradesh" },
  { slug: "ratlam", name: "Ratlam", state: "Madhya Pradesh" },
  { slug: "khandwa", name: "Khandwa", state: "Madhya Pradesh" },
  { slug: "burhanpur", name: "Burhanpur", state: "Madhya Pradesh" },
  { slug: "chhindwara", name: "Chhindwara", state: "Madhya Pradesh" },
  { slug: "khajuraho", name: "Khajuraho", state: "Madhya Pradesh" },
  // Chhattisgarh
  { slug: "bilaspur", name: "Bilaspur", state: "Chhattisgarh" },
  { slug: "korba", name: "Korba", state: "Chhattisgarh" },
  { slug: "bhilai", name: "Bhilai", state: "Chhattisgarh" },
  { slug: "durg", name: "Durg", state: "Chhattisgarh" },
  { slug: "raigarh", name: "Raigarh", state: "Chhattisgarh" },
  // Maharashtra
  { slug: "thane", name: "Thane", state: "Maharashtra" },
  { slug: "navi-mumbai", name: "Navi Mumbai", state: "Maharashtra" },
  { slug: "aurangabad", name: "Chhatrapati Sambhajinagar", state: "Maharashtra" },
  { slug: "solapur", name: "Solapur", state: "Maharashtra" },
  { slug: "kolhapur", name: "Kolhapur", state: "Maharashtra" },
  { slug: "amravati", name: "Amravati", state: "Maharashtra" },
  { slug: "akola", name: "Akola", state: "Maharashtra" },
  { slug: "jalgaon", name: "Jalgaon", state: "Maharashtra" },
  { slug: "sangli", name: "Sangli", state: "Maharashtra" },
  { slug: "satara", name: "Satara", state: "Maharashtra" },
  { slug: "latur", name: "Latur", state: "Maharashtra" },
  { slug: "ahmednagar", name: "Ahmednagar", state: "Maharashtra" },
  { slug: "nanded", name: "Nanded", state: "Maharashtra" },
  { slug: "chandrapur", name: "Chandrapur", state: "Maharashtra" },
  // Gujarat
  { slug: "bhavnagar", name: "Bhavnagar", state: "Gujarat" },
  { slug: "jamnagar", name: "Jamnagar", state: "Gujarat" },
  { slug: "junagadh", name: "Junagadh", state: "Gujarat" },
  { slug: "gandhinagar", name: "Gandhinagar", state: "Gujarat" },
  { slug: "anand", name: "Anand", state: "Gujarat" },
  { slug: "bharuch", name: "Bharuch", state: "Gujarat" },
  { slug: "mehsana", name: "Mehsana", state: "Gujarat" },
  { slug: "nadiad", name: "Nadiad", state: "Gujarat" },
  { slug: "porbandar", name: "Porbandar", state: "Gujarat" },
  { slug: "dwarka", name: "Dwarka", state: "Gujarat" },
  { slug: "somnath", name: "Somnath", state: "Gujarat" },
  // Karnataka
  { slug: "hubli", name: "Hubli-Dharwad", state: "Karnataka" },
  { slug: "belgaum", name: "Belagavi", state: "Karnataka" },
  { slug: "gulbarga", name: "Kalaburagi", state: "Karnataka" },
  { slug: "davangere", name: "Davangere", state: "Karnataka" },
  { slug: "bellary", name: "Ballari", state: "Karnataka" },
  { slug: "shimoga", name: "Shivamogga", state: "Karnataka" },
  { slug: "tumkur", name: "Tumakuru", state: "Karnataka" },
  { slug: "udupi", name: "Udupi", state: "Karnataka" },
  { slug: "hospet", name: "Hospet", state: "Karnataka" },
  // Andhra & Telangana
  { slug: "guntur", name: "Guntur", state: "Andhra Pradesh" },
  { slug: "nellore", name: "Nellore", state: "Andhra Pradesh" },
  { slug: "kurnool", name: "Kurnool", state: "Andhra Pradesh" },
  { slug: "kadapa", name: "Kadapa", state: "Andhra Pradesh" },
  { slug: "tirupati", name: "Tirupati", state: "Andhra Pradesh" },
  { slug: "rajahmundry", name: "Rajahmundry", state: "Andhra Pradesh" },
  { slug: "kakinada", name: "Kakinada", state: "Andhra Pradesh" },
  { slug: "anantapur", name: "Anantapur", state: "Andhra Pradesh" },
  { slug: "warangal", name: "Warangal", state: "Telangana" },
  { slug: "nizamabad", name: "Nizamabad", state: "Telangana" },
  { slug: "karimnagar", name: "Karimnagar", state: "Telangana" },
  { slug: "khammam", name: "Khammam", state: "Telangana" },
  { slug: "secunderabad", name: "Secunderabad", state: "Telangana" },
  // Tamil Nadu
  { slug: "salem", name: "Salem", state: "Tamil Nadu" },
  { slug: "tiruchirappalli", name: "Tiruchirappalli", state: "Tamil Nadu" },
  { slug: "tirunelveli", name: "Tirunelveli", state: "Tamil Nadu" },
  { slug: "erode", name: "Erode", state: "Tamil Nadu" },
  { slug: "vellore", name: "Vellore", state: "Tamil Nadu" },
  { slug: "thoothukudi", name: "Thoothukudi", state: "Tamil Nadu" },
  { slug: "dindigul", name: "Dindigul", state: "Tamil Nadu" },
  { slug: "thanjavur", name: "Thanjavur", state: "Tamil Nadu" },
  { slug: "tiruppur", name: "Tiruppur", state: "Tamil Nadu" },
  { slug: "kanchipuram", name: "Kanchipuram", state: "Tamil Nadu" },
  { slug: "cuddalore", name: "Cuddalore", state: "Tamil Nadu" },
  { slug: "rameswaram", name: "Rameswaram", state: "Tamil Nadu" },
  { slug: "kanyakumari", name: "Kanyakumari", state: "Tamil Nadu" },
  // Kerala
  { slug: "kozhikode", name: "Kozhikode", state: "Kerala" },
  { slug: "thrissur", name: "Thrissur", state: "Kerala" },
  { slug: "kollam", name: "Kollam", state: "Kerala" },
  { slug: "kannur", name: "Kannur", state: "Kerala" },
  { slug: "palakkad", name: "Palakkad", state: "Kerala" },
  { slug: "alappuzha", name: "Alappuzha", state: "Kerala" },
  { slug: "kottayam", name: "Kottayam", state: "Kerala" },
  // Goa & UTs
  { slug: "panaji", name: "Panaji", state: "Goa" },
  { slug: "margao", name: "Margao", state: "Goa" },
  { slug: "vasco", name: "Vasco da Gama", state: "Goa" },
  { slug: "port-blair", name: "Port Blair", state: "Andaman & Nicobar" },
  { slug: "puducherry", name: "Puducherry", state: "Puducherry" },
  { slug: "silvassa", name: "Silvassa", state: "Dadra & Nagar Haveli" },
  { slug: "daman", name: "Daman", state: "Daman & Diu" },
  { slug: "kavaratti", name: "Kavaratti", state: "Lakshadweep" },
  // Additional Uttar Pradesh
  { slug: "maharajganj", name: "Maharajganj", state: "Uttar Pradesh" },
  { slug: "siddharthnagar", name: "Siddharthnagar", state: "Uttar Pradesh" },
  { slug: "sant-kabir-nagar", name: "Sant Kabir Nagar", state: "Uttar Pradesh" },
  { slug: "ambedkar-nagar", name: "Ambedkar Nagar", state: "Uttar Pradesh" },
  { slug: "amethi", name: "Amethi", state: "Uttar Pradesh" },
  { slug: "barabanki", name: "Barabanki", state: "Uttar Pradesh" },
  { slug: "balrampur", name: "Balrampur", state: "Uttar Pradesh" },
  { slug: "sonbhadra", name: "Sonbhadra", state: "Uttar Pradesh" },
  { slug: "chandauli", name: "Chandauli", state: "Uttar Pradesh" },
  { slug: "bhadohi", name: "Bhadohi", state: "Uttar Pradesh" },
  { slug: "pratapgarh-up", name: "Pratapgarh", state: "Uttar Pradesh" },
  { slug: "kannauj", name: "Kannauj", state: "Uttar Pradesh" },
  { slug: "auraiya", name: "Auraiya", state: "Uttar Pradesh" },
  { slug: "kasganj", name: "Kasganj", state: "Uttar Pradesh" },
  { slug: "hathras", name: "Hathras", state: "Uttar Pradesh" },
  // Additional Bihar
  { slug: "buxar", name: "Buxar", state: "Bihar" },
  { slug: "jehanabad", name: "Jehanabad", state: "Bihar" },
  { slug: "araria", name: "Araria", state: "Bihar" },
  { slug: "supaul", name: "Supaul", state: "Bihar" },
  { slug: "gopalganj", name: "Gopalganj", state: "Bihar" },
  { slug: "vaishali", name: "Vaishali", state: "Bihar" },
  { slug: "rohtas", name: "Rohtas", state: "Bihar" },
  { slug: "aurangabad-bihar", name: "Aurangabad", state: "Bihar" },
  // Additional Jharkhand
  { slug: "chaibasa", name: "Chaibasa", state: "Jharkhand" },
  { slug: "phusro", name: "Phusro", state: "Jharkhand" },
  { slug: "medininagar", name: "Medininagar", state: "Jharkhand" },
  // Additional West Bengal
  { slug: "haldia", name: "Haldia", state: "West Bengal" },
  { slug: "kalimpong", name: "Kalimpong", state: "West Bengal" },
  { slug: "cooch-behar", name: "Cooch Behar", state: "West Bengal" },
  { slug: "jalpaiguri", name: "Jalpaiguri", state: "West Bengal" },
  // Additional Uttarakhand
  { slug: "mussoorie", name: "Mussoorie", state: "Uttarakhand" },
  { slug: "almora", name: "Almora", state: "Uttarakhand" },
  { slug: "pithoragarh", name: "Pithoragarh", state: "Uttarakhand" },
  // Additional Rajasthan
  { slug: "bhilwara", name: "Bhilwara", state: "Rajasthan" },
  { slug: "chittorgarh", name: "Chittorgarh", state: "Rajasthan" },
  { slug: "sri-ganganagar", name: "Sri Ganganagar", state: "Rajasthan" },
  { slug: "hanumangarh", name: "Hanumangarh", state: "Rajasthan" },
  // Additional MP
  { slug: "dewas", name: "Dewas", state: "Madhya Pradesh" },
  { slug: "vidisha", name: "Vidisha", state: "Madhya Pradesh" },
  { slug: "singrauli", name: "Singrauli", state: "Madhya Pradesh" },
  { slug: "chhatarpur", name: "Chhatarpur", state: "Madhya Pradesh" },
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

// ---------- Destination details (standalone destination pages) ----------
export interface DestinationDetail extends Destination {
  bestTime: string;
  duration: string;
  altitude?: string;
  attractions: { name: string; about: string }[];
  howToReach: string;
  tips: string[];
  faqs: { q: string; a: string }[];
}

export const DESTINATION_DETAILS: Record<string, DestinationDetail> = {
  kathmandu: {
    ...DESTINATIONS[0],
    bestTime: "October to April",
    duration: "2–3 days recommended",
    altitude: "1,400 m",
    attractions: [
      { name: "Pashupatinath Temple", about: "Sacred Shiva temple on the Bagmati — witness the evening aarti." },
      { name: "Boudhanath Stupa", about: "Giant Buddhist stupa surrounded by monasteries — perfect for kora walk." },
      { name: "Swayambhunath", about: "Hilltop 'Monkey Temple' with sweeping Kathmandu Valley views." },
      { name: "Kathmandu Durbar Square", about: "UNESCO World Heritage royal palace complex and Kumari Ghar." },
    ],
    howToReach: "From Gorakhpur it is a comfortable 7–8 hour drive via the Sunauli border. We also coordinate flights from Indian metros to Kathmandu (TIA airport).",
    tips: ["Carry Aadhaar/Voter ID for the border", "INR is widely accepted up to ₹100 notes", "Modest dress at temples"],
    faqs: [
      { q: "How many days are enough for Kathmandu?", a: "2 full days cover all major temples and Durbar Square. Add a day for Nagarkot or Bhaktapur." },
      { q: "Is Kathmandu safe for families?", a: "Yes, the city is welcoming and very family-friendly. Our drivers and guides accompany you throughout." },
    ],
  },
  pokhara: {
    ...DESTINATIONS[1],
    bestTime: "September to May",
    duration: "2–3 days recommended",
    altitude: "820 m",
    attractions: [
      { name: "Sarangkot Sunrise", about: "Watch the Annapurna range light up in golden hues at dawn." },
      { name: "Phewa Lake & Tal Barahi", about: "Boating to the island temple in the middle of Phewa Lake." },
      { name: "Davis Falls & Gupteshwor Cave", about: "Mysterious waterfall and the underground Shiva cave opposite." },
      { name: "World Peace Pagoda", about: "White stupa across the lake with panoramic city + mountain views." },
    ],
    howToReach: "From Kathmandu it is a 200 km / 6-hour scenic drive on the Prithvi Highway. Domestic flights also available.",
    tips: ["Stay near Lakeside (Baidam) for nightlife", "Sunrise at Sarangkot requires a 4:30 AM start", "Pack a light jacket — mornings can be chilly"],
    faqs: [
      { q: "Can elderly travellers enjoy Pokhara?", a: "Yes — most sights are accessible by car. Sarangkot vehicle drop is near the viewpoint." },
    ],
  },
  muktinath: {
    ...DESTINATIONS[2],
    bestTime: "March–June, September–November",
    duration: "2 days from Pokhara",
    altitude: "3,710 m",
    attractions: [
      { name: "Muktinath Temple", about: "One of 108 Divya Desams sacred to Vishnu — Mukti Kshetra." },
      { name: "108 Mukti Dharas", about: "Holy bath under 108 stone water spouts — said to grant moksha." },
      { name: "Jwala Mai Temple", about: "Eternal flame burning naturally from a rock crevice." },
      { name: "Kagbeni Village", about: "Ancient Mustang trading post en route to Upper Mustang." },
    ],
    howToReach: "Fly Pokhara → Jomsom (20 min) and take a shared jeep to Muktinath (3 hours). Road journey is also possible.",
    tips: ["Acclimatise slowly — altitude is 3,710 m", "Carry warm woollens year-round", "Consult a doctor if you have BP/heart conditions"],
    faqs: [
      { q: "Is Muktinath suitable for senior citizens?", a: "Yes, with normal fitness. We arrange jeep till the temple base and ponies for the final climb." },
    ],
  },
  lumbini: {
    ...DESTINATIONS[3],
    bestTime: "October to March",
    duration: "1–2 days",
    altitude: "150 m",
    attractions: [
      { name: "Maya Devi Temple", about: "Exact birthplace of Lord Buddha marked by the Marker Stone." },
      { name: "Ashoka Pillar", about: "Emperor Ashoka's pillar inscribed in 249 BCE confirming the birthplace." },
      { name: "World Peace Pagoda", about: "Serene white stupa among the Lumbini gardens." },
      { name: "International Monasteries", about: "Monastery zone featuring Japan, China, Thailand, Sri Lanka & more." },
    ],
    howToReach: "Just 3 hours by road from Gorakhpur via Sunauli. Closest airport is Bhairahawa (Gautam Buddha International).",
    tips: ["Mornings are coolest for monastery walks", "E-rickshaws available within the gardens", "Photography limited inside Maya Devi sanctum"],
    faqs: [
      { q: "Can Lumbini be done as a day trip from Gorakhpur?", a: "Yes — early start at 6 AM, full day at Lumbini and back by night is comfortable." },
    ],
  },
  janakpur: {
    ...DESTINATIONS[4],
    bestTime: "October to March",
    duration: "1–2 days",
    altitude: "78 m",
    attractions: [
      { name: "Janaki Mandir", about: "Stunning marble temple dedicated to Mata Sita — built in 1910." },
      { name: "Ram Mandir", about: "Oldest temple in Janakpur — Pagoda-style architecture." },
      { name: "Vivah Mandap", about: "The sacred spot where Ram-Sita married." },
      { name: "Dhanusha Dham", about: "Where pieces of Shiva Dhanush are believed to have fallen." },
    ],
    howToReach: "Approx 4–5 hours by road from Gorakhpur via Bhitthamore/Jaynagar border. Direct trains also run from Jaynagar.",
    tips: ["Vivah Panchami (Nov–Dec) is the grandest festival", "Modest dress required inside temples"],
    faqs: [
      { q: "Best festival to visit Janakpur?", a: "Vivah Panchami when the divine wedding of Ram-Sita is celebrated." },
    ],
  },
  chitwan: {
    ...DESTINATIONS[5],
    bestTime: "October to March",
    duration: "2–3 days",
    altitude: "150 m",
    attractions: [
      { name: "Chitwan National Park Jeep Safari", about: "Spot one-horned rhinos, deer, crocodiles and occasional tigers." },
      { name: "Rapti River Canoe Ride", about: "Glide past gharial crocodiles in a traditional dugout canoe." },
      { name: "Tharu Cultural Programme", about: "Stick dance and traditional Tharu hospitality." },
      { name: "Elephant Breeding Centre", about: "Conservation centre for Asian elephants near Sauraha." },
    ],
    howToReach: "From Gorakhpur it is a 6–7 hour drive via Sunauli. From Kathmandu/Pokhara it is 5–6 hours.",
    tips: ["Carry mosquito repellent", "Earth-tone clothing for safari", "Book safari permits in advance during peak season"],
    faqs: [
      { q: "What is the chance of seeing a rhino?", a: "Very high — Chitwan has one of the world's densest populations of one-horned rhinos." },
    ],
  },
};

export function destinationFromSlug(slug: string): DestinationDetail | undefined {
  return DESTINATION_DETAILS[slug.toLowerCase()];
}

// ---------- Tour types (category landing pages) ----------
export interface TourTypeInfo {
  slug: string;
  name: string;
  category: TourPackage["category"];
  tagline: string;
  intro: string;
  bullets: string[];
}

export const TOUR_TYPES: TourTypeInfo[] = [
  { slug: "family-tours", name: "Family Tours", category: "Family", tagline: "Comfortable Nepal tours for the whole family",
    intro: "Multi-generational Nepal trips with gentle pacing, family-friendly hotels and kid-safe activities.",
    bullets: ["Spacious AC vehicles", "Family rooms & connecting suites", "Pure veg / Jain meals on request", "Senior-citizen friendly itineraries"] },
  { slug: "honeymoon-tours", name: "Honeymoon Tours", category: "Honeymoon", tagline: "Romantic Himalayan escapes for newlyweds",
    intro: "Curated couple experiences — lakeside dinners, Himalayan sunrises, spa stays and private transfers.",
    bullets: ["4★ romantic stays in Pokhara & Nagarkot", "Candle-light dinner by Phewa Lake", "Couple spa & welcome flowers", "Private chauffeur sedan"] },
  { slug: "religious-tours", name: "Religious Tours", category: "Religious", tagline: "Muktinath, Pashupatinath, Lumbini & Janakpur yatras",
    intro: "Pilgrimage circuits covering the most sacred Hindu and Buddhist sites of Nepal with experienced escorts.",
    bullets: ["Muktinath darshan & 108 dhara snan", "Pashupatinath morning aarti", "Lumbini, Janakpur, Manakamana", "Pooja samagri assistance"] },
  { slug: "adventure-tours", name: "Adventure Tours", category: "Adventure", tagline: "Treks, safaris, paragliding and white-water rafting",
    intro: "Adrenaline-rich Nepal experiences for thrill-seekers — Chitwan safaris, Pokhara paragliding and Annapurna foothill treks.",
    bullets: ["Chitwan jungle safari", "Pokhara paragliding & zip-flyer", "Trishuli river rafting", "Short Himalayan treks"] },
  { slug: "luxury-tours", name: "Luxury Tours", category: "Luxury", tagline: "5★ stays, private jets and gourmet dining",
    intro: "Premium Nepal journeys with handpicked 5★ properties, private mountain flights and personal butler service.",
    bullets: ["Hyatt, Marriott, Dwarika's stays", "Private Everest mountain flight", "Helicopter to Muktinath", "Gourmet Newari & continental dining"] },
  { slug: "corporate-tours", name: "Corporate Tours", category: "Corporate", tagline: "Offsites, MICE and group incentives to Nepal",
    intro: "Hassle-free corporate offsites — group bookings of 25–500 pax with team-building, conferences and cultural evenings.",
    bullets: ["Conference halls in Kathmandu & Pokhara", "Group air & ground transport", "Team-building activities", "GST invoicing & MICE support"] },
];

export function tourTypeFromSlug(slug: string): TourTypeInfo | undefined {
  return TOUR_TYPES.find((t) => t.slug === slug.toLowerCase());
}

// ---------- Vehicles (taxi / vehicle booking) ----------
export interface Vehicle {
  slug: string;
  name: string;
  capacity: string;
  bestFor: string;
  pricePerKm: number;
  pricePerDay: number;
  features: string[];
}

export const VEHICLES: Vehicle[] = [
  { slug: "swift-dzire", name: "Swift Dzire", capacity: "4 + 1 passengers", bestFor: "Couples & small families",
    pricePerKm: 12, pricePerDay: 2500, features: ["AC", "Music system", "Experienced driver", "Boot space for 2 bags"] },
  { slug: "ertiga", name: "Maruti Ertiga", capacity: "6 + 1 passengers", bestFor: "Small families & friends",
    pricePerKm: 15, pricePerDay: 3200, features: ["AC", "Spacious 3 rows", "Music system", "Boot space for 3 bags"] },
  { slug: "innova-crysta", name: "Toyota Innova Crysta", capacity: "6 + 1 passengers", bestFor: "Family Nepal tours & long hauls",
    pricePerKm: 18, pricePerDay: 4000, features: ["AC", "Plush seating", "Large boot", "Most popular for Nepal trips"] },
  { slug: "tempo-traveller-12", name: "Tempo Traveller (12-seater)", capacity: "12 + 1 passengers", bestFor: "Group & family tours",
    pricePerKm: 28, pricePerDay: 6500, features: ["AC", "Push-back seats", "Roof carrier", "Ideal for Nepal yatra groups"] },
  { slug: "tempo-traveller-17", name: "Tempo Traveller (17-seater)", capacity: "17 + 1 passengers", bestFor: "Large groups & pilgrim parties",
    pricePerKm: 32, pricePerDay: 7500, features: ["AC", "Push-back seats", "Roof carrier", "Pilgrim group favourite"] },
  { slug: "mini-bus-26", name: "Mini Bus (26-seater)", capacity: "26 + 1 passengers", bestFor: "Corporate & wedding groups",
    pricePerKm: 42, pricePerDay: 11000, features: ["AC", "Push-back seats", "PA system", "Luggage hold"] },
];

export function vehicleFromSlug(slug: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.slug === slug.toLowerCase());
}

// ---------- Blog posts ----------
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMins: number;
  cover: string;
  category: string;
  content: { heading: string; body: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "nepal-tour-from-gorakhpur-complete-guide",
    title: "Nepal Tour from Gorakhpur — The Complete 2026 Guide",
    excerpt: "Everything you need to know about planning a Nepal trip from Gorakhpur — border, costs, best time, itineraries and more.",
    date: "2026-05-12", readMins: 9, cover: heroNepal, category: "Travel Guide",
    content: [
      { heading: "Why Gorakhpur is the best gateway to Nepal", body: "Gorakhpur sits just 100 km from the Sunauli border, making it the most convenient launch-pad for Nepal trips from India. Most of our travellers fly or train into Gorakhpur and start the Nepal journey within the same day." },
      { heading: "Border formalities for Indian citizens", body: "No visa is required. A valid Aadhaar card, Voter ID or Passport (any one) is enough. Our team handles the immigration counter and currency exchange." },
      { heading: "Best time to visit Nepal from Gorakhpur", body: "October to April offers clear Himalayan views and the most pleasant weather. March–May is ideal for sightseeing, while September–November is the festival season." },
      { heading: "Suggested itineraries", body: "6 days for Kathmandu-Pokhara, 8 days for Muktinath, 5 days for Lumbini-Janakpur and 4 days for a Chitwan safari escape." },
      { heading: "Cost estimate", body: "Most Nepal packages from Gorakhpur start at ₹8,999 per person on twin-sharing basis, all inclusive of transport, hotels and breakfast/dinner." },
    ],
  },
  {
    slug: "muktinath-yatra-from-india",
    title: "Muktinath Yatra from India — Route, Cost & Best Time",
    excerpt: "A definitive Muktinath Dham guide for Indian pilgrims — Jomsom flight, road route, what to pack and how much it costs.",
    date: "2026-04-22", readMins: 7, cover: destMuktinath, category: "Pilgrimage",
    content: [
      { heading: "Why Muktinath?", body: "Muktinath is one of the 108 Divya Desams sacred to Vishnu and a Mukti Kshetra — said to free the soul from rebirth." },
      { heading: "Two routes to reach Muktinath", body: "(1) Pokhara → Jomsom by flight (20 minutes) → jeep to Muktinath (3 hours). (2) All road via Beni-Tatopani-Jomsom (long but scenic)." },
      { heading: "What to pack", body: "Warm woollens, gloves, sunglasses, sunscreen, basic medicines including Diamox if prone to AMS. Comfortable trek shoes for the temple climb." },
      { heading: "Cost from Gorakhpur", body: "An 8-day Muktinath yatra from Gorakhpur typically costs ₹24,999 per person on twin sharing including flights." },
    ],
  },
  {
    slug: "kathmandu-vs-pokhara",
    title: "Kathmandu vs Pokhara — Which Should You Choose First?",
    excerpt: "Heritage temples or lakeside calm? Here is how to decide between Kathmandu and Pokhara for your first Nepal trip.",
    date: "2026-03-08", readMins: 5, cover: destPokhara, category: "Destinations",
    content: [
      { heading: "Choose Kathmandu if…", body: "You love history, temples, street food and bustling bazaars. Pashupatinath aarti and Thamel nightlife are unmissable." },
      { heading: "Choose Pokhara if…", body: "You want lakes, mountains, paragliding and a slower pace. Sarangkot sunrise is one of the world's most beautiful." },
      { heading: "Best of both worlds", body: "Our 5N/6D Kathmandu-Pokhara package covers both cities at a relaxed pace and is our bestseller for first-timers." },
    ],
  },
  {
    slug: "lumbini-buddhist-circuit",
    title: "Lumbini Buddhist Circuit — A Day-by-Day Guide",
    excerpt: "The complete guide to exploring Lumbini's monastic zone, Maya Devi Temple and Ashoka Pillar in two unhurried days.",
    date: "2026-02-14", readMins: 6, cover: destLumbini, category: "Pilgrimage",
    content: [
      { heading: "The sacred garden", body: "Maya Devi Temple marks the exact spot where Buddha was born in 623 BCE. The Marker Stone, Ashoka Pillar and sacred pond are within a few minutes' walk." },
      { heading: "International monastic zone", body: "Walk or e-rickshaw through Japan, China, Thailand, Sri Lanka, Vietnam, Korea and Myanmar monasteries — each in its native architectural style." },
      { heading: "Where to stay", body: "Comfortable 3★ hotels are clustered just outside the gardens. We recommend Hotel Tilaurakot or Lumbini Garden New Crystal." },
    ],
  },
];

export function blogPostFromSlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug.toLowerCase());
}