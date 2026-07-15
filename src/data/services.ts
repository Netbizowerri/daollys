import { ServiceDetail, TravelPackage, Testimonial } from "../types";

export const SERVICES: ServiceDetail[] = [
  {
    slug: "travels",
    title: "International & Local Travel Bookings",
    subtitle: "Flights, Visas, Hotels, Tour Packages",
    iconName: "Globe",
    shortCopy: "Complete travel logistics solutions — flight bookings, visa assistance, hotel reservations, corporate travel management, and private jet charter arrangements.",
    overviewCopy: "At Da Ollys Integrated Services Limited, we provide complete travel logistics solutions designed to make local and international travel smooth and stress-free. We coordinate every stage of our clients' journeys — from flight bookings and visa processing to hotel reservations, airport transfers, and corporate travel management — ensuring convenience, efficiency, and peace of mind.",
    imageTheme: "Airport departure board / passport & boarding pass flatlay",
    imageUrl: "https://i.ibb.co/qMfk7Y21/DA-OLLYS-9.jpg",
    videoUrl: "https://www.youtube.com/shorts/ZvaJ11TEIw8",
    whatsIncluded: [
      "Flight Booking & Reservations (Local & International)",
      "Visa Assistance & Processing Support",
      "Hotel & Accommodation Bookings Worldwide",
      "Airport Pickup & Drop-Off Services",
      "Corporate Travel Management & Group Travel Coordination",
      "Holiday & Vacation Packages with Tour Planning",
      "Executive Travel Services & Private Jet Charter Arrangements",
      "Travel Insurance Assistance"
    ],
    processSteps: [
      { title: "Consultation", description: "Assess your travel or relocation plans, destination preferences, and budget." },
      { title: "Itinerary Planning", description: "Our team sources optimal flights, premium lodging, and customized tour layouts." },
      { title: "Visa & Document Filing", description: "We meticulously compile and audit your visa files and booking documentation." },
      { title: "Booking Confirmation", description: "Receive finalized tickets, hotel vouchers, and helpful pre-departure briefings." }
    ],
    bannerUrl: "https://i.ibb.co/WXFB4xy/Whats-App-Image-2026-07-08-at-7-04-33-AM-2.jpg",
    ctaText: "Start Travel Booking",
    bookingUrl: "/book/travels"
  },
  {
    slug: "deliveries",
    title: "Local & International Delivery Services",
    subtitle: "Door-to-Door | Nationwide | Global Shipping",
    iconName: "Send",
    shortCopy: "Fast, reliable, and secure delivery services within Nigeria and across international destinations — door-to-door.",
    overviewCopy: "We specialize in fast, reliable, and secure delivery services within Nigeria and across international destinations. Our logistics network ensures that every shipment — from documents and parcels to bulk cargo — arrives safely and on time. Whether you need same-day dispatch within Port Harcourt, nationwide parcel distribution, or international courier services with customs clearance support, Da Ollys delivers.",
    imageTheme: "Delivery bike rider in motion / parcel handoff",
    imageUrl: "https://i.ibb.co/6cFvcWbg/DA-OLLYS-8.jpg",
    whatsIncluded: [
      "Door-to-Door Deliveries (Local & International)",
      "Same-Day Deliveries within Port Harcourt Metro",
      "Nationwide Parcel Distribution",
      "International Courier Services",
      "Document Delivery & Secure Parcel Handling",
      "E-Commerce Logistics & Express Cargo Services",
      "Business-to-Business & Business-to-Customer Logistics",
      "Customs Clearance Support & Cargo Tracking",
      "Last-Mile Delivery"
    ],
    processSteps: [
      { title: "Schedule Dispatch", description: "Enter pickup and drop-off locations, parcel dimensions, and pick a time." },
      { title: "Rider Dispatched", description: "An executive Da Ollys dispatch rider is instantly assigned and routes to your location." },
      { title: "Careful Transit", description: "Your package is securely packed, loaded, and fast-tracked through optimized routes." },
      { title: "Delivered & Signed", description: "Recipient receives the parcel with immediate status and delivery confirmation." }
    ],
    bannerUrl: "https://i.ibb.co/tMFS9qJy/Whats-App-Image-2026-07-08-at-7-04-33-AM-1.jpg",
    ctaText: "Book a Dispatch Rider",
    bookingUrl: "/book/deliveries"
  },
  {
    slug: "luxury-rentals",
    title: "Luxury Rentals",
    subtitle: "Premium Vehicles, Chauffeur Services & Private Jet Charters",
    iconName: "Sparkles",
    shortCopy: "Premium transportation and luxury rental services tailored for executives, dignitaries, weddings, events, and corporate clients.",
    overviewCopy: "We offer premium transportation and luxury rental services tailored for executives, dignitaries, tourists, weddings, events, and corporate clients. Every vehicle is maintained to the highest standards, providing comfort, elegance, safety, and reliability. Whether you need a chauffeur-driven executive sedan, a luxury SUV for a wedding, or a private jet charter for your next business trip, Da Ollys delivers an unparalleled premium experience.",
    imageTheme: "Black luxury sedan/SUV with private jet tarmac background",
    imageUrl: "https://i.ibb.co/9fDM3V6/DA-OLLYS-10.jpg",
    videoUrl: "https://www.youtube.com/shorts/SWxf1JhktPA",
    whatsIncluded: [
      "Luxury SUVs & Executive Sedans",
      "Chauffeur-Driven Vehicles",
      "Wedding Car Rentals & Event Transportation",
      "Corporate Executive Transport",
      "Airport Executive Transfers & VIP Transportation",
      "Private Jet Charter Coordination",
      "Long-Term Executive Vehicle Leasing"
    ],
    processSteps: [
      { title: "Select Your Luxury Mode", description: "Choose between our elite ground fleet or private air charter options." },
      { title: "Customize Your Experience", description: "Specify vehicle type, aircraft category, duration, and any special protocol requests." },
      { title: "White-Glove Coordination", description: "Our concierge team arranges every detail — from chauffeur arrival to FBO lounge access." },
      { title: "Premium Experience", description: "Enjoy absolute comfort, privacy, and class from departure to destination." }
    ],
    bannerUrl: "https://i.ibb.co/TqwxxLHY/Whats-App-Image-2026-07-08-at-7-04-33-AM.jpg",
    ctaText: "Explore Luxury Rentals",
    bookingUrl: "/book/luxury-rentals",
    subServices: [
      {
        slug: "luxury-car-rentals",
        title: "Luxury Car Rentals",
        subtitle: "SUVs, Executive Sedans, Chauffeur Services",
        shortCopy: "Premium luxury vehicles with professional chauffeurs — perfect for weddings, executive transport, and VIP occasions.",
        iconName: "Car",
        overviewCopy: "Experience the pinnacle of ground transportation with our luxury rental fleet. From executive sedans and luxury SUVs to wedding cars and VIP transport, every vehicle is maintained to the highest standards. Our professional chauffeurs provide comfort, elegance, safety, and reliability for every occasion.",
        imageTheme: "Black luxury sedan/SUV, polished exterior shot",
        imageUrl: "https://i.ibb.co/9fDM3V6/DA-OLLYS-10.jpg",
        videoUrl: "https://www.youtube.com/shorts/SWxf1JhktPA",
        whatsIncluded: [
          "Executive Chauffeur-Driven Sedans & Luxury SUVs",
          "Pristine Wedding Fleet Vehicles with optional custom decor",
          "Highly Vetted, Security-Trained Chauffeurs",
          "VIP Convoys & Security Escort Vehicle Coordination",
          "Flexible Rental Plans (Hourly, Daily, or Long-term Lease)"
        ],
        processSteps: [
          { title: "Browse Fleet", description: "Select from executive SUVs, Prado TXL, Mercedes-Benz, or luxury sedans." },
          { title: "Book Duration", description: "Choose rental dates, durations, and specific security or chauffeur instructions." },
          { title: "Chauffeur Arrival", description: "A highly polite, polished driver arrives early with a fully detailed, clean vehicle." },
          { title: "VIP Experience", description: "Sit back and relax in comfort, enjoying a smooth, stress-free, and safe ride." }
        ],
        ctaText: "Book a Premium Ride",
        bookingUrl: "/book/luxury-rentals?sub=luxury-car-rentals"
      },
      {
        slug: "private-jet-charter",
        title: "Private Jet & VIP Charter Services",
        subtitle: "On-Demand Charters | VIP Aviation | Helicopter Transfers",
        shortCopy: "Exclusive private jet charters, helicopter transfers, and elite VIP aviation travel solutions for executives and dignitaries.",
        iconName: "Plane",
        overviewCopy: "Take to the skies with our private jet and VIP charter services. Bypass commercial airport crowds and fly on your own schedule with exceptional safety, complete privacy, and unparalleled cabin hospitality. From on-demand jet charters to helicopter transfers and VIP aviation solutions, we deliver the ultimate air travel experience.",
        imageTheme: "Elite private jet aircraft on tarmac / private aviation lounge",
        imageUrl: "https://i.ibb.co/fYF7SKtf/DA-OLLYS-11.jpg",
        videoUrl: "https://www.youtube.com/shorts/jOhbpDhacOc",
        whatsIncluded: [
          "On-Demand Private Jet Charters & VIP Flight Solutions",
          "Private Terminal / FBO Lounge Access with zero queues",
          "Gourmet Inflight Custom Catering & Premium Cabin Attendants",
          "VIP Helicopter Airport Shuttles & Intra-State Heli-Routes",
          "Complete Coordination with Ground Luxury Chauffeurs"
        ],
        processSteps: [
          { title: "Charter Request", description: "Provide routing parameters, passenger headcount, and preferred travel times." },
          { title: "Curated Quotes", description: "Our flight logistics team offers a select list of matched private jet models." },
          { title: "Swift Departure", description: "Arrive at the private lounge, enjoy express security, and board in 15 minutes." },
          { title: "Elite Flight", description: "Fly in absolute comfort and class, landing directly at your destination." }
        ],
        ctaText: "Request Jet Charter",
        bookingUrl: "/book/luxury-rentals?sub=private-jet-charter"
      }
    ]
  },
  {
    slug: "property-movement",
    title: "Property Movement & Relocation Services",
    subtitle: "Residential & Office Relocation | Interstate & International Moves",
    iconName: "Truck",
    shortCopy: "Professional relocation services for homes and offices — packing, loading, interstate moves, and international relocation support.",
    overviewCopy: "Moving valuable assets requires expertise, planning, and care. Da Ollys Integrated Services Limited offers professional relocation services for individuals, families, and businesses. Every move is executed with professionalism, ensuring maximum protection of clients' belongings — from residential and office relocation to commercial equipment movement, interstate and international relocation support.",
    imageTheme: "Professional movers packing and loading furniture into a moving truck",
    imageUrl: "https://i.ibb.co/v6c5GVZT/DA-OLLYS-12.jpg",
    videoUrl: "https://www.youtube.com/shorts/e0bX_wFk7Vg",
    whatsIncluded: [
      "Residential & Office Relocation",
      "Commercial Equipment Movement",
      "Furniture Moving, Packing & Unpacking",
      "Loading & Offloading Services",
      "Storage Coordination",
      "Interstate & International Relocation Support",
      "Fragile Item Handling & Equipment Transportation"
    ],
    processSteps: [
      { title: "Site Assessment", description: "We survey your property, assess item volumes, and map the optimal moving plan." },
      { title: "Packing & Protection", description: "All items are professionally packed with high-grade materials and clearly labeled." },
      { title: "Loading & Transport", description: "Our crew carefully loads and secures your items for damage-free transit." },
      { title: "Delivery & Setup", description: "Items are delivered, unpacked, and arranged exactly where you need them." }
    ],
    ctaText: "Book Property Move",
    bookingUrl: "/book/property-movement"
  },
  {
    slug: "haulage",
    title: "Haulage Services",
    subtitle: "Heavy-Duty Transport | Industrial Logistics | Bulk Cargo Movement",
    iconName: "Package",
    shortCopy: "Dependable haulage solutions for businesses — heavy-duty transportation, industrial equipment movement, and bulk cargo across Nigeria.",
    overviewCopy: "We provide dependable haulage solutions for businesses operating across various sectors. Our experienced drivers and logistics professionals ensure efficient transportation while maintaining the highest safety standards. From heavy-duty transportation and industrial equipment movement to construction material logistics, agricultural produce haulage, and container transportation — Da Ollys delivers your goods safely and on schedule.",
    imageTheme: "Heavy-duty haulage truck on highway / loading dock operations",
    imageUrl: "https://i.ibb.co/LfbB2rb/DA-OLLYS-13.jpg",
    whatsIncluded: [
      "Heavy-Duty Transportation & Industrial Equipment Movement",
      "Construction Material Transportation",
      "Agricultural Produce Haulage",
      "Manufacturing & Distribution Logistics",
      "Container Transportation & Bulk Cargo Movement",
      "Fleet Logistics Management",
      "Long-Distance Transportation"
    ],
    processSteps: [
      { title: "Cargo Assessment", description: "We evaluate your cargo type, volume, weight, and delivery route requirements." },
      { title: "Fleet Allocation", description: "The appropriate heavy-duty truck and experienced driver are assigned to your consignment." },
      { title: "Loading & Securement", description: "Cargo is professionally loaded, balanced, and secured for safe transit." },
      { title: "Delivery & Proof of Service", description: "Your goods arrive at the destination with full delivery documentation and confirmation." }
    ],
    bannerUrl: "https://i.ibb.co/tMFS9qJy/Whats-App-Image-2026-07-08-at-7-04-33-AM-1.jpg",
    ctaText: "Book Haulage Service",
    bookingUrl: "/book/haulage"
  }
];

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: "canada",
    title: "Canada Study & Work Program",
    flag: "🇨🇦",
    subtitle: "Guaranteed pathway to study, live, and work in Canada with partner institutions.",
    description: "Our premier immigration assistance program provides admission into top partner institutions in Canada for May, June, and September intakes, guiding you meticulously from letter of acceptance through to study permit issuance.",
    imageUrl: "https://i.ibb.co/h08yhRj/DA-OLLYS.jpg",
    steps: [
      "Official admission offer from a designated learning institution (DLI)",
      "Secure tuition deposit processing",
      "Proof of funds guidance (minimum ₦45,000,000 for a single applicant; higher for families)",
      "Immigration and application forms completed by a certified expert",
      "Strategic compiling of employment history, home-tie evidence, and supporting documents"
    ],
    timeline: "Approximately 6 weeks (from submission to visa decision)",
    fees: {
      application: "250 CAD",
      processing: "₦1,500,000",
      dependent: "₦1,000,000 each",
      proofOfFunds: "Minimum ₦45,000,000"
    }
  },
  {
    id: "qatar",
    title: "Qatar Trip Promo",
    flag: "🇶🇦",
    subtitle: "Exclusive all-in-one vacation getaway package tailored for pairs.",
    description: "Experience a seamless getaway with our exclusive Qatar travel package, tailored for pairs. This all-in-one promotion covers both your visa and hotel accommodation for two travelers.",
    inclusions: [
      "Visa processing for two people",
      "Hotel accommodation for two people"
    ],
    totalCost: "₦1,000,000",
    timeline: "7 days",
    howToBook: "Secure your spot by providing your preferred travel date and completing the payment process.",
    imageUrl: "https://i.ibb.co/dRnsvKQ/Da-Ollys-2.jpg"
  },
  {
    id: "oman",
    title: "Oman 2-Year Freelance Visa Program",
    flag: "🇴🇲",
    subtitle: "Two-year freelance residency visa with full work authorization.",
    description: "Live and work in Oman independently with our comprehensive 2-Year Freelance Visa program. This package handles your entry clearance, medical procedures, national ID registration, and administrative requirements.",
    inclusions: [
      "2-Year Freelance Visa",
      "Medical checkups and clearance support",
      "National ID card registration and issuance",
      "OK to Board clearance"
    ],
    totalCost: "₦3,800,000",
    timeline: "24 hours to 7 days",
    howToBook: "Submit a high-quality scan of your international passport's data page along with a white-background passport photograph.",
    imageUrl: "https://i.ibb.co/v6dHNJw4/Da-Ollys-3.jpg"
  },
  {
    id: "germany",
    title: "Germany Work Visa Program",
    flag: "🇩🇪",
    subtitle: "A professional gateway to secure employment opportunities in Germany.",
    description: "Our Germany Work Visa Program provides a structured, legal process with reliable support. Candidates are matched with qualified employers, obtaining an official employment letter within 8 weeks, with the entire processing completed in 5 months.",
    inclusions: [
      "Official Employment Letter (provided within 8 weeks)",
      "Available Roles: Warehouse, Factory Worker, Secretary, Clerk, and Warehouse Manager",
      "Work visa documentation compile & advisory support",
      "Legal and compliance processing support"
    ],
    timeline: "5 months total",
    howToBook: "Provide your international passport data page, detailed CV, normal passport, and educational/professional credentials.",
    imageUrl: "https://i.ibb.co/RpZGVrKJ/DA-OLLYS-1.jpg"
  },
  {
    id: "georgia",
    title: "Georgia 90-Day Entry Visa",
    flag: "🇬🇪",
    subtitle: "Explore the historic cities, rich culture, and stunning nature of Georgia.",
    description: "Discover the breathtaking beauty, historic wonders, and vibrant culture of Georgia. This package delivers standard visa advisory and application support for a 90-day entry visa.",
    inclusions: [
      "90-Day entry visa advisory support",
      "Travel routing and flight booking support",
      "Application review & package compilation"
    ],
    timeline: "Standard processing",
    howToBook: "Provide a clear scan of your international passport's data page and a white-background passport photograph.",
    imageUrl: "https://i.ibb.co/JWddXGVB/Da-Ollys-4.jpg"
  },
  {
    id: "serbia",
    title: "Serbia Work Visa Program",
    flag: "🇷🇸",
    subtitle: "Legal warehouse worker employment in Serbia with free accommodation.",
    description: "Our Serbia Work Visa Program is designed for men and women aged 18 to 55 years seeking warehouse worker roles. This program offers legal employment in a growing labor market with a low cost of living, free accommodation, a salary of up to 800 EUR, and a fast transition to a 1-year employment card.",
    inclusions: [
      "Legal Employment in Warehouse Operations",
      "Salary of up to 800 EUR",
      "Free Accommodation included",
      "Fast transition to a 1-year employment card",
      "Low cost of living & growing labor market"
    ],
    timeline: "2 to 3 months",
    howToBook: "Submit a high-quality scan of your passport's data page, normal passport photo, updated CV, and any educational or professional credentials.",
    imageUrl: "https://i.ibb.co/20ky1NZY/DA-OLLYS-6.jpg"
  }
];

export const OTHER_PACKAGES: TravelPackage[] = [
  {
    id: "finland",
    title: "Finland Study Package (Sept 2025 Intake)",
    flag: "🇫🇮",
    subtitle: "High-quality European tuition-free opportunities and work permits.",
    description: "Finland offers some of the most stable, high-quality educational environments in Europe. We secure admission into top universities and colleges, assisting you with residence permit logs, student housing registration, and part-time work rights processing.",
    steps: [
      "Secure admission offer in English-taught undergraduate or master programs",
      "Complete preparation for Finland student residence permit documentation",
      "Proof of funds structuring and bank account verification guidance",
      "On-arrival relocation planning, student hostel placement, and local integration briefings"
    ],
    timeline: "Standard processing (roughly 4-8 weeks from application logging)"
  },
  {
    id: "portugal",
    title: "Portugal Live, Work & Study Program",
    flag: "🇵🇹",
    subtitle: "Pathway to European residency via study or professional work visa streams.",
    description: "Relocate to Portugal smoothly via customized pathways tailored to professionals, remote workers, or students. We assist with D7/D8 Digital Nomad visas, student admissions, and local NIF registration.",
    steps: [
      "Select D7 Passive Income, D8 Digital Nomad, or Student Visa stream",
      "Acquire Portuguese NIF number and local bank account setup assistance",
      "Sourcing qualifying local accommodation lease agreements for visa submission",
      "Meticulous preparation of visa files for the SEF/AIMA interview"
    ],
    timeline: "Approximately 8 to 12 weeks for total processing"
  },
  {
    id: "usa",
    title: "USA 5-Year Multiple Entry Visa Support",
    flag: "🇺🇸",
    subtitle: "Expert visa interview prep and strategic document structure for long-term US travel.",
    description: "Maximize your chances of securing a long-term 5-Year Multiple Entry US B1/B2 tourist or business visa. We provide professional DS-160 filling, schedule earliest interview slots, and run high-touch mock interview prep.",
    steps: [
      "Strategic completion of the DS-160 application form",
      "Sourcing and securing of expedited or standard embassy interview appointments",
      "Compilation of robust financial ties, employment proofs, and travel histories",
      "Highly realistic face-to-face mock interview prep sessions with expert travel advisors"
    ],
    timeline: "Dependent on current US Embassy appointment queues"
  },
  {
    id: "kuwait",
    title: "Kuwait Urgent Work Visa",
    flag: "🇰🇼",
    subtitle: "Fast-track corporate clearance visa processing for professional placement.",
    description: "Accelerate your professional placement in Kuwait. Our dedicated agency coordinates directly with verified Kuwaiti employers to process and deliver urgent corporate work clearances and pre-approval papers.",
    steps: [
      "Coordination with authorized Kuwaiti employers for contract authentication",
      "Expedited processing of medical and police clearance logs",
      "Fast-track MOFA clearance and visa stamping support",
      "Pre-travel briefing and flight arrangements"
    ],
    timeline: "Rapid processing (typically 2 to 4 weeks)"
  }
];

// No testimonial copy was supplied in the brief. Standard placeholder component structure is built
// as per Section 6.5 and Section 15 of the PRD.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Client Testimonial Placeholder. Once real client reviews are gathered, they will be loaded into this section.",
    author: "Reviews Coming Soon",
    role: "Verified Client"
  }
];

export const LUXURY_FLEET = [
  "Toyota Prado TXL (Executive Edition)",
  "Lexus GX 460 / LX 570 (Luxury SUV)",
  "Mercedes-Benz G-Wagon (G63 AMG)",
  "Mercedes-Benz S-Class (VIP Chauffeur Sedan)",
  "Toyota Hilux (Escort/Utility Truck)",
  "Coaster Bus (Executive Group Transport)"
];
