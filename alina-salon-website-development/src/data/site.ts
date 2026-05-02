export const SITE = {
  name: "Alina Salon",
  city: "Eindhoven",
  address: "Geldropseweg 75, 5611 SE Eindhoven, Netherlands",
  phone: "+31 6 42816121",
  phoneTel: "+31642816121",
  whatsapp: "https://wa.me/31642816121",
  instagram: "https://instagram.com/alina.mar4uk",
  instagramHandle: "@alina.mar4uk",
  rating: 5.0,
  experience: 20,
};

export const HOURS = [
  { day: "Monday", time: "9:00 – 20:00" },
  { day: "Tuesday", time: "9:00 – 20:00" },
  { day: "Wednesday", time: "9:00 – 20:00" },
  { day: "Thursday", time: "9:00 – 20:00" },
  { day: "Friday", time: "9:00 – 20:00" },
  { day: "Saturday", time: "9:00 – 20:00" },
  { day: "Sunday", time: "Closed" },
];

export const SERVICES = [
  {
    name: "Precision Haircut",
    desc: "A personalised cut sculpted to your face shape, lifestyle and natural texture. Includes wash, consultation and styling.",
    price: "from €55",
    duration: "60 min",
    icon: "scissors",
  },
  {
    name: "Airtouch Coloring",
    desc: "An advanced technique that uses airflow to separate the finest hairs — creating the softest, most natural blend possible.",
    price: "from €230",
    duration: "4 – 6 hrs",
    icon: "wind",
  },
  {
    name: "Highlights & Balayage",
    desc: "Hand-painted dimension or classic foil highlights for a luminous, sun-kissed result that grows out beautifully.",
    price: "from €180",
    duration: "3 – 5 hrs",
    icon: "sparkle",
  },
  {
    name: "Dark to Light Transformation",
    desc: "A careful multi-step lift designed to protect the integrity of your hair while reaching your dream blonde.",
    price: "on consultation",
    duration: "5 – 7 hrs",
    icon: "sun",
  },
  {
    name: "Hair Treatments",
    desc: "Restorative bonding, deep moisture and gloss treatments to bring softness, shine and strength back into the hair.",
    price: "from €45",
    duration: "30 – 60 min",
    icon: "drop",
  },
  {
    name: "Styling & Blowout",
    desc: "A polished finish — soft waves, glassy straight, or volume-rich blowouts for a special occasion or just because.",
    price: "from €40",
    duration: "45 min",
    icon: "brush",
  },
];

export const SPECIALTIES = [
  "Airtouch Coloring",
  "Highlights & Balayage",
  "Dark → Light Transformations",
  "Restorative Hair Treatments",
  "Precision Women's Haircuts",
];

export const GALLERY = [
  { src: "/images/work-1.jpg", caption: "Soft beige balayage", tag: "Balayage" },
  { src: "/images/work-2.jpg", caption: "Honey blonde bob", tag: "Color & Cut" },
  { src: "/images/work-3.jpg", caption: "Cool ash highlights", tag: "Highlights" },
  { src: "/images/work-4.jpg", caption: "Bold pink transformation", tag: "Transformation" },
  { src: "/images/work-5.jpg", caption: "Layered ash blonde", tag: "Airtouch" },
  { src: "/images/work-6.jpg", caption: "Caramel honey balayage", tag: "Balayage" },
  { src: "/images/work-1.jpg", caption: "Beach wave finish", tag: "Styling" },
  { src: "/images/work-3.jpg", caption: "Glossy blowout", tag: "Treatment" },
  { src: "/images/work-5.jpg", caption: "Dimensional blonde", tag: "Color" },
];

export const INITIAL_REVIEWS = [
  {
    name: "Sophie van Dijk",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Alina is a true artist. I came in with very dark, over-coloured hair and she designed a multi-session plan to bring me to a healthy soft blonde. My hair has never felt better. The salon is calm and intimate — exactly what I was looking for.",
  },
  {
    name: "Marta Kowalska",
    rating: 5,
    date: "1 month ago",
    comment:
      "Best airtouch in Eindhoven, hands down. She takes her time, explains everything and the result looks completely natural. Already booked my next appointment.",
  },
  {
    name: "Lotte de Vries",
    rating: 5,
    date: "2 months ago",
    comment:
      "I trust Alina with my hair completely. She listens, she's honest about what will and won't work, and she has an incredible eye for what suits you. Five stars are not enough.",
  },
  {
    name: "Jana Petrova",
    rating: 5,
    date: "3 months ago",
    comment:
      "Felt like coming home. Warm welcome, real coffee, beautiful space — and a haircut that finally fits my face. Highly recommend.",
  },
];

export const AMENITIES = {
  Business: ["Women-owned"],
  Amenities: ["Gender-neutral restroom", "Free Wi-Fi", "Restroom"],
  Crowd: ["LGBTQ+ friendly", "Transgender safe space"],
  Planning: ["Appointment required", "Walk-ins accepted"],
  Payments: ["Credit cards", "Debit cards", "NFC payments"],
  "Family Friendly": ["Good for kids"],
  Parking: ["Free parking lot", "Paid street parking"],
};
