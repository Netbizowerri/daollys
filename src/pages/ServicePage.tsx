import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Check, ArrowRight, ArrowLeft, Calendar, 
  DollarSign, Clock, HelpCircle, FileText, 
  Award, MapPin, Sparkles, ChevronRight, Briefcase,
  Plane, Hotel, Compass, Globe
} from "lucide-react";
import { SERVICES, TRAVEL_PACKAGES, OTHER_PACKAGES } from "../data/services";
import PageTransition from "../components/shared/PageTransition";
import GlassCard from "../components/shared/GlassCard";

export default function ServicePage() {
  const { serviceSlug } = useParams();
  const [activeTab, setActiveTab] = useState("visas"); // "visas" | "tours" | "hotels" | "flights"
  
  // Find current service
  const service = SERVICES.find(s => s.slug === serviceSlug);

  if (!service) {
    return (
      <PageTransition>
        <div className="max-w-md mx-auto text-center py-20 space-y-6">
          <HelpCircle className="w-16 h-16 text-rose-500 mx-auto" />
          <h2 className="text-2xl font-bold text-white">Service Not Found</h2>
          <p className="text-xs text-gray-400 font-semibold">
            The requested service portfolio does not exist in our corporate directories.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-gold-gradient text-navy-900 font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Return Home
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Related services (other 4)
  const relatedServices = SERVICES.filter(s => s.slug !== service.slug);

  return (
    <PageTransition>
      <div id={`service-page-${service.slug}`} className="space-y-16">
        
        {/* ================= 1. HERO BAND ================= */}
        <div className="relative bg-navy-900 text-white rounded-2xl overflow-hidden py-16 px-6 max-w-7xl mx-auto shadow-xl border border-white/10">
          <div className="absolute inset-0 z-0">
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-20 filter brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent" />
          </div>

          <div className="relative z-10 space-y-4 max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-300">
              <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-gold-300 font-bold">Services</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-white/60">{service.title}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              {service.title}
            </h1>
            <p className="text-sm md:text-lg text-gold-300 font-bold">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* ================= 2. OVERVIEW COPY BLOCK & 3. WHAT'S INCLUDED ================= */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Overview copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-lg font-extrabold text-white uppercase tracking-wide border-b border-white/10 pb-2">
              Portfolio Overview
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed font-semibold">
              {service.overviewCopy}
            </p>
            <p className="text-xs text-gray-400 leading-relaxed font-medium">
              Da Ollys Integrated Services Ltd holds certified clearances to handle this segment. Every team member assigned to your booking is fully verified, carrying deep logistical or professional expertise.
            </p>

            {/* If Travels, display Interactive Tabs and Sub-Services */}
            {service.slug === "travels" && (
              <div className="pt-8 space-y-8">
                {/* Dynamic Sub-Service Selector Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
                  <button
                    onClick={() => setActiveTab("visas")}
                    className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === "visas"
                        ? "bg-gold-gradient text-navy-900 shadow-md"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                    Visas Packages
                  </button>
                  <button
                    onClick={() => setActiveTab("tours")}
                    className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === "tours"
                        ? "bg-gold-gradient text-navy-900 shadow-md"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Compass className="w-4 h-4 shrink-0" />
                    Tour Packages
                  </button>
                  <button
                    onClick={() => setActiveTab("hotels")}
                    className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === "hotels"
                        ? "bg-gold-gradient text-navy-900 shadow-md"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Hotel className="w-4 h-4 shrink-0" />
                    Hotels Stay
                  </button>
                  <button
                    onClick={() => setActiveTab("flights")}
                    className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === "flights"
                        ? "bg-gold-gradient text-navy-900 shadow-md"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Plane className="w-4 h-4 shrink-0" />
                    Flight Tickets
                  </button>
                </div>

                {/* TAB CONTENT: VISA PACKAGES */}
                {activeTab === "visas" && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="border-l-4 border-gold-500 pl-4 py-1">
                      <h3 className="text-lg font-black text-white uppercase tracking-tight">
                        Elite Visa & Residency Packages
                      </h3>
                      <p className="text-xs text-gray-400 font-semibold mt-0.5">
                        Our verified pathways for study, work, exploration, and global migration.
                      </p>
                    </div>

                    <div id="canada-program-section" className="space-y-8">
                      <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-2xl space-y-6">
                        
                        {/* Title and Badge */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gold-500/15 pb-4">
                          <div>
                            <span className="text-[10px] text-white/80 font-black uppercase tracking-widest block mb-1">
                              Featured Visa Package
                            </span>
                            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                              Canada Study & Work Program 🇨🇦
                            </h3>
                          </div>
                          <span className="bg-white/5 border border-white/10 text-gold-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Intakes: May, June, Sept
                          </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                          {/* Left details: 8 cols on desktop */}
                          <div className="order-2 lg:order-1 lg:col-span-8 space-y-6">
                            <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                              Secure standard admissions into premium partner institutions in Canada. Our visa expert panel manages your files, logs tuition deposits, compiles proof of funds, and organizes robust employment files to assure a successful visa decision.
                            </p>

                            {/* Icon Labeled Stat Tiles per Section 8 of PRD */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Clock className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Processing Time</span>
                                <span className="text-xs font-black text-white block">~ 6 Weeks</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <DollarSign className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Application Fee</span>
                                <span className="text-xs font-black text-white block">250 CAD</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <FileText className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Visa Process</span>
                                <span className="text-xs font-black text-white block">₦1,500,000</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Award className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Proof of Funds</span>
                                <span className="text-xs font-black text-white block">₦45,000,000+</span>
                              </div>
                            </div>

                            {/* Steps list */}
                            <div className="space-y-3">
                              <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                <Check className="w-4 h-4 text-gold-500" />
                                Steps toward a guaranteed study visa
                              </h4>
                              
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-bold text-gray-300 pl-1">
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Admission offer from Designated DLI College
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Tuition deposit processing assistance
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Proof of funds structure (₦45M single / family)
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Expert completion of visa application logs
                                </li>
                                <li className="flex items-start gap-2 md:col-span-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Strategic employment documentation, letters of intent & home ties proof files
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Right column: Image display - 4 cols on desktop */}
                          <div className="order-1 lg:order-2 lg:col-span-4">
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B1A4A] relative group shadow-lg">
                              <img 
                                src="https://i.ibb.co/fVJVch90/DA-OLLYS.jpg" 
                                alt="Canada Study & Work Program" 
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <span className="text-[10px] text-gray-400 font-bold italic">
                            * Dependent processing visa fee: ₦1,000,000 per person.
                          </span>
                          <Link
                            id="canada-cta-start"
                            to="/book/travels?destination=Canada"
                            className="bg-gold-gradient text-navy-900 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider hover:brightness-105 transition-all text-center w-full sm:w-auto"
                          >
                            Contact Us Today to Get Started
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Qatar Trip Promo Section */}
                    <div id="qatar-program-section" className="space-y-8">
                      <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-2xl space-y-6">
                        
                        {/* Title and Badge */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gold-500/15 pb-4">
                          <div>
                            <span className="text-[10px] text-white/80 font-black uppercase tracking-widest block mb-1">
                              Special Getaway Promo
                            </span>
                            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                              Qatar Trip Promo 🇶🇦
                            </h3>
                          </div>
                          <span className="bg-white/5 border border-white/10 text-gold-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Tailored for Pairs
                          </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                          {/* Left details: 8 cols on desktop */}
                          <div className="order-2 lg:order-1 lg:col-span-8 space-y-6">
                            <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                              Experience a seamless getaway with our exclusive Qatar travel package, tailored for pairs. This all-in-one promotion covers both your visa and hotel accommodation for two travelers.
                            </p>

                            {/* Icon Labeled Stat Tiles */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Clock className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Processing Time</span>
                                <span className="text-xs font-black text-white block">7 Days</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <DollarSign className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Total Promo Cost</span>
                                <span className="text-xs font-black text-white block">₦1,000,000</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <FileText className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Inclusions</span>
                                <span className="text-xs font-black text-white block">Visa + Hotel</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Award className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Capacity Limit</span>
                                <span className="text-xs font-black text-white block">Covers 2 Persons</span>
                              </div>
                            </div>

                            {/* Steps / Booking Info */}
                            <div className="space-y-3">
                              <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                <Check className="w-4 h-4 text-gold-500" />
                                How to Book & Requirements
                              </h4>
                              
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-bold text-gray-300 pl-1">
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Provides complete visa processing for both travelers
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Covers pre-arranged hotel accommodation standard
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Provide preferred travel dates when submitting application
                                </li>
                                <li className="flex items-start gap-2 md:col-span-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  How to Book: Secure your spot by providing your preferred travel date and completing the payment process.
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Right column: Image display - 4 cols on desktop */}
                          <div className="order-1 lg:order-2 lg:col-span-4">
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B1A4A] relative group shadow-lg">
                              <img 
                                src="https://i.ibb.co/SwGXN4yD/Da-Ollys-2.jpg" 
                                alt="Qatar Trip Promo Flyer" 
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <span className="text-[10px] text-gray-400 font-bold italic">
                            * Promo price is fixed for two persons sharing a room.
                          </span>
                          <Link
                            id="qatar-cta-start"
                            to="/book/travels?destination=Qatar"
                            className="bg-gold-gradient text-navy-900 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider hover:brightness-105 transition-all text-center w-full sm:w-auto"
                          >
                            Book Qatar Promo Package
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Oman 2-Year Freelance Visa Section */}
                    <div id="oman-program-section" className="space-y-8">
                      <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-2xl space-y-6">
                        
                        {/* Title and Badge */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gold-500/15 pb-4">
                          <div>
                            <span className="text-[10px] text-white/80 font-black uppercase tracking-widest block mb-1">
                              Work & Residency Support
                            </span>
                            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                              Oman 2-Year Freelance Visa 🇴🇲
                            </h3>
                          </div>
                          <span className="bg-white/5 border border-white/10 text-gold-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Full Work Rights Included
                          </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                          {/* Left details: 8 cols on desktop */}
                          <div className="order-2 lg:order-1 lg:col-span-8 space-y-6">
                            <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                              Live and work in Oman independently with our comprehensive 2-Year Freelance Visa program. This package handles your entry clearance, medical procedures, national ID registration, and administrative requirements.
                            </p>

                            {/* Icon Labeled Stat Tiles */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Clock className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Processing Time</span>
                                <span className="text-xs font-black text-white block">24h - 7 Days</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <DollarSign className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Total Program Fee</span>
                                <span className="text-xs font-black text-white block">₦3,800,000</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <FileText className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Inclusions</span>
                                <span className="text-xs font-black text-white block">Medical + ID + Board</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Award className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Validity</span>
                                <span className="text-xs font-black text-white block">2-Year Residence</span>
                              </div>
                            </div>

                            {/* Requirements / Checklist */}
                            <div className="space-y-3">
                              <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                <Check className="w-4 h-4 text-gold-500" />
                                Required Application Documents
                              </h4>
                              
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-bold text-gray-300 pl-1">
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Data page of international passport (clear scan)
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Passport photograph with white background
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Medical checkups assistance and certificate
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  National ID card registration & issuance support
                                </li>
                                <li className="flex items-start gap-2 md:col-span-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  &quot;OK to Board&quot; clearance and pre-departure briefings included in total fee
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Right column: Image display - 4 cols on desktop */}
                          <div className="order-1 lg:order-2 lg:col-span-4">
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B1A4A] relative group shadow-lg">
                              <img 
                                src="https://i.ibb.co/JFyPgSfx/Da-Ollys-3.jpg" 
                                alt="Oman 2-Year Freelance Visa Flyer" 
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <span className="text-[10px] text-gray-400 font-bold italic">
                            * All-inclusive fee covers medical, national ID, and official clearance.
                          </span>
                          <Link
                            id="oman-cta-start"
                            to="/book/travels?destination=Oman"
                            className="bg-gold-gradient text-navy-900 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider hover:brightness-105 transition-all text-center w-full sm:w-auto"
                          >
                            Book Oman Visa Package
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Georgia 90-Day Entry Visa Section */}
                    <div id="georgia-program-section" className="space-y-8">
                      <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-2xl space-y-6">
                        
                        {/* Title and Badge */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gold-500/15 pb-4">
                          <div>
                            <span className="text-[10px] text-white/80 font-black uppercase tracking-widest block mb-1">
                              Tourism & Exploration
                            </span>
                            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                              Georgia 90-Day Entry Visa 🇬🇪
                            </h3>
                          </div>
                          <span className="bg-white/5 border border-white/10 text-gold-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                            90-Day Entry
                          </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                          {/* Left details: 8 cols on desktop */}
                          <div className="order-2 lg:order-1 lg:col-span-8 space-y-6">
                            <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                              Explore the history, culture, and nature of Georgia. Our dedicated team guides you through the application process for a standard 90-day entry visa to discover Georgia's scenic landmarks and vibrant urban centers.
                            </p>

                            {/* Icon Labeled Stat Tiles */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Clock className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Processing Time</span>
                                <span className="text-xs font-black text-white block">Standard</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <FileText className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Visa Validity</span>
                                <span className="text-xs font-black text-white block">90 Days</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Award className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Requirements</span>
                                <span className="text-xs font-black text-white block">Passport + Photo</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Sparkles className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Program Type</span>
                                <span className="text-xs font-black text-white block">Entry Visa</span>
                              </div>
                            </div>

                            {/* Requirements / Checklist */}
                            <div className="space-y-3">
                              <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                <Check className="w-4 h-4 text-gold-500" />
                                Application Guidelines & Requirements
                              </h4>
                              
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-bold text-gray-300 pl-1">
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  A valid international passport (clear scan of data page)
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Recent high-quality passport photograph
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Explore rich historical sites, ancient culture, and beautiful nature
                                </li>
                                <li className="flex items-start gap-2 md:col-span-2">
                                  <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                  Visa processing, expert consultation, and complete application advisory support are included
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Right column: Image display - 4 cols on desktop */}
                          <div className="order-1 lg:order-2 lg:col-span-4">
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B1A4A] relative group shadow-lg">
                              <img 
                                src="https://i.ibb.co/b5vR54Y7/Da-Ollys-4.jpg" 
                                alt="Georgia 90-Day Entry Visa Flyer" 
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <span className="text-[10px] text-gray-400 font-bold italic">
                            * Standard entry rules and conditions apply upon arrival.
                          </span>
                          <Link
                            id="georgia-cta-start"
                            to="/book/travels?destination=Georgia"
                            className="bg-gold-gradient text-navy-900 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider hover:brightness-105 transition-all text-center w-full sm:w-auto"
                          >
                            Book Georgia Visa Package
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Germany Work Visa Section */}
                    <div id="germany-program-section" className="space-y-8">
                      <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-2xl space-y-6">
                        
                        {/* Title and Badge */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gold-500/15 pb-4">
                          <div>
                            <span className="text-[10px] text-white/80 font-black uppercase tracking-widest block mb-1">
                              Employment & Migration
                            </span>
                            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                              Germany Work Visa Program 🇩🇪
                            </h3>
                          </div>
                          <span className="bg-white/5 border border-white/10 text-gold-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Full Work Visa Support
                          </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                          {/* Left details: 8 cols on desktop */}
                          <div className="order-2 lg:order-1 lg:col-span-8 space-y-6">
                            <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                              Our Germany Work Visa Program offers a reliable legal process, complete employer matching, and trusted relocation support to help you move toward a better future in Europe.
                            </p>

                            {/* Icon Labeled Stat Tiles */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Clock className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Total Timeline</span>
                                <span className="text-xs font-black text-white block">5 Months</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Calendar className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Job Letter</span>
                                <span className="text-xs font-black text-white block">Within 8 Weeks</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Briefcase className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Available Jobs</span>
                                <span className="text-[10px] font-black text-white block truncate">Warehouse, Clerk, etc.</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Award className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Program Type</span>
                                <span className="text-xs font-black text-white block">Work Residency</span>
                              </div>
                            </div>

                            {/* Available Jobs & Requirements */}
                            <div className="space-y-4">
                              <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-2">
                                <h4 className="text-xs font-bold text-gold-500 uppercase tracking-widest flex items-center gap-1.5">
                                  <Briefcase className="w-4 h-4" />
                                  Currently Available Job Positions
                                </h4>
                                <div className="flex flex-wrap gap-2 pt-1">
                                  {["Warehouse", "Factory Worker", "Secretary", "Clerk", "Warehouse Manager"].map((job, idx) => (
                                    <span key={idx} className="bg-[#0B1A4A]/60 border border-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-md">
                                      💼 {job}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="space-y-3">
                                <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                  <Check className="w-4 h-4 text-gold-500" />
                                  Required Application Documents
                                </h4>
                                
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-bold text-gray-300 pl-1">
                                  <li className="flex items-start gap-2">
                                    <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                    Data page of standard international passport
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                    Comprehensive CV / Resume updated
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                    Academic or professional credentials (where applicable)
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                    Official employment letter guaranteed in 8 weeks
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Right column: Image display - 4 cols on desktop */}
                          <div className="order-1 lg:order-2 lg:col-span-4">
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B1A4A] relative group shadow-lg">
                              <img 
                                src="https://i.ibb.co/wFf9gSwG/DA-OLLYS-5.jpg" 
                                alt="Germany Work Visa Program Flyer" 
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <span className="text-[10px] text-gray-400 font-bold italic">
                            * End-to-end support is provided for visa registration and employer alignment.
                          </span>
                          <Link
                            id="germany-cta-start"
                            to="/book/travels?destination=Germany"
                            className="bg-gold-gradient text-navy-900 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider hover:brightness-105 transition-all text-center w-full sm:w-auto"
                          >
                            Book Germany Work Package
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Serbia Work Visa Section */}
                    <div id="serbia-program-section" className="space-y-8">
                      <div className="p-6 bg-gold-500/10 border border-gold-500/20 rounded-2xl space-y-6">
                        
                        {/* Title and Badge */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gold-500/15 pb-4">
                          <div>
                            <span className="text-[10px] text-white/80 font-black uppercase tracking-widest block mb-1">
                              Employment & Logistics
                            </span>
                            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                              Serbia Work Visa Program 🇷🇸
                            </h3>
                          </div>
                          <span className="bg-white/5 border border-white/10 text-gold-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Warehouse Operations
                          </span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                          {/* Left details: 8 cols on desktop */}
                          <div className="order-2 lg:order-1 lg:col-span-8 space-y-6">
                            <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                              Our Serbia Work Visa Program offers a reliable process, fast transition to a 1-year employment card, legal employment as a Warehouse Worker, and a gateway to a growing European labor market with a low cost of living.
                            </p>

                            {/* Icon Labeled Stat Tiles */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Clock className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Processing Time</span>
                                <span className="text-xs font-black text-white block">2 - 3 Months</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <DollarSign className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Salary Range</span>
                                <span className="text-xs font-black text-white block">Up to €800 / mo</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <MapPin className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Accommodation</span>
                                <span className="text-xs font-black text-white block">Free Provided</span>
                              </div>

                              <div className="bg-white/5 p-4 rounded-xl border border-gold-500/10 text-center space-y-1">
                                <Award className="w-5 h-5 text-gold-500 mx-auto" />
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Age Limit</span>
                                <span className="text-xs font-black text-white block">18 - 55 Years</span>
                              </div>
                            </div>

                            {/* Position Details & Requirements */}
                            <div className="space-y-4">
                              <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-2">
                                <h4 className="text-xs font-bold text-gold-500 uppercase tracking-widest flex items-center gap-1.5">
                                  <Briefcase className="w-4 h-4" />
                                  Currently Recruiting Position
                                </h4>
                                <div className="flex flex-wrap gap-2 pt-1">
                                  <span className="bg-[#0B1A4A]/60 border border-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-md">
                                    💼 Warehouse Worker (Open to Men & Women)
                                  </span>
                                </div>
                              </div>

                              <div className="space-y-3">
                                <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                  <Check className="w-4 h-4 text-gold-500" />
                                  Required Application Documents
                                </h4>
                                
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-bold text-gray-300 pl-1">
                                  <li className="flex items-start gap-2">
                                    <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                    International passport clear data page scan
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                    Recent professional passport-sized photograph
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                    Up-to-date CV / Resume
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="p-1 bg-white/10 rounded-full text-emerald-400 shrink-0">✓</span>
                                    Academic or professional credentials (if any)
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Right column: Image display - 4 cols on desktop */}
                          <div className="order-1 lg:order-2 lg:col-span-4">
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B1A4A] relative group shadow-lg">
                              <img 
                                src="https://i.ibb.co/tMyRVczy/DA-OLLYS-6.jpg" 
                                alt="Serbia Work Visa Program Flyer" 
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <span className="text-[10px] text-gray-400 font-bold italic">
                            * Program covers fast transition to a 1-year residency card upon arrival.
                          </span>
                          <Link
                            id="serbia-cta-start"
                            to="/book/travels?destination=Serbia"
                            className="bg-gold-gradient text-navy-900 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider hover:brightness-105 transition-all text-center w-full sm:w-auto"
                          >
                            Book Serbia Work Package
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Sub-section: Other Travel & Visa Programs */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-white/10 pb-2">
                        Other Travel & Visa Programs
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {OTHER_PACKAGES.map(pkg => (
                          <div key={pkg.id} className="group p-5 bg-white/5 rounded-xl border border-white/10 space-y-3 hover:border-gold-500/30 hover:bg-white/[0.07] transition-all duration-300">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{pkg.flag}</span>
                              <h5 className="text-sm font-bold text-white leading-tight">{pkg.title}</h5>
                            </div>
                            <p className="text-[11px] text-gray-400 font-medium leading-relaxed min-h-[2.5rem]">
                              {pkg.subtitle}
                            </p>
                            {pkg.timeline && (
                              <div className="flex items-center gap-1.5 text-[10px] text-gold-400/80 font-semibold">
                                <Clock className="w-3 h-3" />
                                <span>{pkg.timeline}</span>
                              </div>
                            )}
                            <div className="pt-2 flex justify-end border-t border-white/10">
                              <Link
                                to={`/book/travels?destination=${pkg.title.split(' ')[0]}`}
                                className="text-[11px] font-black text-white hover:text-gold-300 flex items-center gap-1 group-hover:gap-1.5 transition-all duration-300"
                              >
                                Inquire <ChevronRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB CONTENT: TOUR PACKAGES */}
                {activeTab === "tours" && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="border-l-4 border-gold-500 pl-4 py-1">
                      <h3 className="text-lg font-black text-white uppercase tracking-tight">
                        Curated Holiday & Tour Packages
                      </h3>
                      <p className="text-xs text-gray-400 font-semibold mt-0.5">
                        Experience hassle-free travel with pre-planned routes, premium stays, local logistics, and unforgettable guided tours.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
                        <div className="p-3 bg-gold-500/10 text-gold-500 rounded-xl w-fit">
                          <Compass className="w-6 h-6" />
                        </div>
                        <h4 className="text-xs font-extrabold text-white uppercase">Curated Destinations</h4>
                        <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                          We plan hand-picked, premium tour itineraries across top-tier destinations worldwide (Zanzibar, Dubai, Mombasa, UK & Schengen), handling all entry tickets and local scheduling.
                        </p>
                      </div>

                      <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
                        <div className="p-3 bg-gold-500/10 text-gold-500 rounded-xl w-fit">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <h4 className="text-xs font-extrabold text-white uppercase">All-Inclusive Logistics</h4>
                        <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                          Our tour packages include premium flight bookings, luxury hotel stays, daily breakfast, dynamic sightseeing tours, and smooth airport transfers bundled under a single, direct payment.
                        </p>
                      </div>

                      <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
                        <div className="p-3 bg-[#0B1A4A]/50 text-gold-500 rounded-xl w-fit border border-gold-500/10">
                          <Globe className="w-6 h-6" />
                        </div>
                        <h4 className="text-xs font-extrabold text-white uppercase">Custom Tailored Routes</h4>
                        <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                          Whether you are booking a romantic honeymoon getaway, a large-group family holiday, or a strategic corporate retreat, our travel desk designs custom schedules to fit your criteria.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 bg-navy-900 border border-white/10 rounded-2xl space-y-4">
                      <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Top Tour & Holiday Destinations We Curate:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                        <div className="bg-white/5 py-2.5 px-3 rounded-lg border border-white/5 text-[10px] font-bold text-white">🇹🇿 Zanzibar Beach Escape</div>
                        <div className="bg-white/5 py-2.5 px-3 rounded-lg border border-white/5 text-[10px] font-bold text-white">🇦🇪 Dubai Luxury City Tour</div>
                        <div className="bg-white/5 py-2.5 px-3 rounded-lg border border-white/5 text-[10px] font-bold text-white">🇰🇪 Kenya Safari & Mombasa</div>
                        <div className="bg-white/5 py-2.5 px-3 rounded-lg border border-white/5 text-[10px] font-bold text-white">🇬🇧 London & Schengen Explorer</div>
                        <div className="bg-white/5 py-2.5 px-3 rounded-lg border border-white/5 text-[10px] font-bold text-white">🇶🇦 Doha Desert & Luxury Stay</div>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
                      <Link 
                        to="/book/travels?destination=Tour%20Package"
                        className="w-full sm:w-auto bg-gold-gradient text-navy-900 font-black px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest inline-flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all"
                      >
                        Book a Tour Package
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link 
                        to="/book/travels?destination=Custom%20Tour"
                        className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest inline-flex items-center justify-center gap-2 border border-white/10 transition-all"
                      >
                        Custom Tour Inquiry
                      </Link>
                    </div>
                  </div>
                )}

                {/* TAB CONTENT: HOTELS STAY */}
                {activeTab === "hotels" && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="border-l-4 border-gold-500 pl-4 py-1">
                      <h3 className="text-lg font-black text-white uppercase tracking-tight">
                        Premium & Luxury Hotel Bookings
                      </h3>
                      <p className="text-xs text-gray-400 font-semibold mt-0.5">
                        Guaranteed competitive rates and exclusive perks at the world's finest 5-star properties and boutique apartments.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
                        <div className="p-3 bg-gold-500/10 text-gold-500 rounded-xl w-fit">
                          <Hotel className="w-6 h-6" />
                        </div>
                        <h4 className="text-xs font-extrabold text-white uppercase">Pre-negotiated Rates</h4>
                        <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                          We utilize our tight network connections with premium chains (Marriott, Hilton, Radisson, Shangri-La) to secure lower pricing than standard online platforms.
                        </p>
                      </div>

                      <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
                        <div className="p-3 bg-gold-500/10 text-gold-500 rounded-xl w-fit">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <h4 className="text-xs font-extrabold text-white uppercase">VIP Perks Included</h4>
                        <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                          Enjoy room upgrades (where available), complimentary gourmet breakfasts, early check-in, late check-out, and welcome cocktails on us.
                        </p>
                      </div>

                      <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
                        <div className="p-3 bg-gold-500/10 text-gold-500 rounded-xl w-fit">
                          <Check className="w-6 h-6" />
                        </div>
                        <h4 className="text-xs font-extrabold text-white uppercase">Complete Coordination</h4>
                        <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                          Our officers manage special requests, corporate invoicing, security concerns, and seamless ground transportation from the airport directly to your hotel suite.
                        </p>
                      </div>
                    </div>

                    <div className="p-6 bg-navy-900 border border-white/10 rounded-2xl space-y-4">
                      <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Top Global Lodging Destinations We Manage:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                        <div className="bg-white/5 py-2.5 px-3 rounded-lg border border-white/5 text-[10px] font-bold text-white">🇳🇬 Abuja & Lagos</div>
                        <div className="bg-white/5 py-2.5 px-3 rounded-lg border border-white/5 text-[10px] font-bold text-white">🇦🇪 Dubai / Abu Dhabi</div>
                        <div className="bg-white/5 py-2.5 px-3 rounded-lg border border-white/5 text-[10px] font-bold text-white">🇬🇧 London Metro</div>
                        <div className="bg-white/5 py-2.5 px-3 rounded-lg border border-white/5 text-[10px] font-bold text-white">🇨🇦 Toronto & Vancouver</div>
                        <div className="bg-white/5 py-2.5 px-3 rounded-lg border border-white/5 text-[10px] font-bold text-white">🇶🇦 Doha Luxury Suites</div>
                      </div>
                    </div>

                    <div className="pt-2 text-center">
                      <Link 
                        to="/book/travels?destination=Hotel%20Booking"
                        className="bg-gold-gradient text-navy-900 font-black px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:brightness-105 active:scale-95 transition-all"
                      >
                        Request a Hotel Reservation
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* TAB CONTENT: FLIGHT TICKETS */}
                {activeTab === "flights" && (
                  <div className="space-y-8 animate-fade-in">
                    <div className="border-l-4 border-gold-500 pl-4 py-1">
                      <h3 className="text-lg font-black text-white uppercase tracking-tight">
                        Seamless Flight Booking Solutions
                      </h3>
                      <p className="text-xs text-gray-400 font-semibold mt-0.5">
                        International and domestic airline ticketing with guaranteed competitive rates, optimal routes, and flexible conditions.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                        <h4 className="text-sm font-extrabold text-gold-500 uppercase">International Air Ticketing</h4>
                        <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                          We interface directly with major global carrier reservation desks (Qatar Airways, Emirates, British Airways, Air Peace, Ethiopian Airlines, Lufthansa, Turkish Airlines, Delta) to lock in the absolute best rates.
                        </p>
                        <ul className="text-[11px] font-bold text-gray-400 space-y-2 pl-1">
                          <li className="flex items-center gap-1.5">✓ Economy, Business, & First Class booking catalogs</li>
                          <li className="flex items-center gap-1.5">✓ Strategic multi-city layovers & route optimization</li>
                          <li className="flex items-center gap-1.5">✓ Extended baggage allowances and check-in support</li>
                        </ul>
                      </div>

                      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                        <h4 className="text-sm font-extrabold text-gold-500 uppercase">Domestic & Regional Travel</h4>
                        <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                          Secure lightning-fast flight tickets across all commercial airports in Nigeria (Lagos, Abuja, Port Harcourt, Kano, Owerri, Enugu, Uyo). Avoid sudden price hikes with our pre-booked block seats.
                        </p>
                        <ul className="text-[11px] font-bold text-gray-400 space-y-2 pl-1">
                          <li className="flex items-center gap-1.5">✓ Same-day emergency domestic booking queues</li>
                          <li className="flex items-center gap-1.5">✓ Flexi-ticket options for hassle-free date changes</li>
                          <li className="flex items-center gap-1.5">✓ Specialized assistance for elderly or disabled passengers</li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 bg-gold-500/10 border border-gold-500/15 rounded-xl text-[10px] md:text-xs text-gray-300 font-bold flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-gold-500 shrink-0" />
                      Our dedicated travel desk offers 24/7 client rescue support for missed flights, sudden cancellations, or emergency rescheduling.
                    </div>

                    <div className="pt-2 text-center">
                      <Link 
                        to="/book/travels?destination=Flight%20Booking"
                        className="bg-gold-gradient text-navy-900 font-black px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:brightness-105 active:scale-95 transition-all"
                      >
                        Book or Inquire About a Flight
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: What's included (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-900 text-white rounded-2xl p-6 md:p-8 space-y-6 border border-white/10 shadow-lg">
              <h3 className="text-sm font-extrabold text-gold-500 uppercase tracking-wider border-b border-white/10 pb-3">
                Key Deliverables Included
              </h3>

              <ul className="space-y-4">
                {service.whatsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="p-1 bg-gold-500/10 rounded-full text-gold-500 mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-gray-300 font-bold leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {service.videoUrl && (
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-[10px] font-black text-gold-500 uppercase tracking-widest mb-3">
                    Service Spotlight
                  </h4>
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${service.videoUrl!.split("/").pop()!.split("?")[0]}?rel=0&modestbranding=1`}
                      title={`${service.title} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-white/10 text-center">
                <Link
                  id={`srv-cta-${service.slug}`}
                  to={service.bookingUrl}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold-gradient text-navy-900 font-black px-6 py-3.5 rounded-full text-xs uppercase tracking-widest hover:brightness-105 active:scale-95 transition-all"
                >
                  {service.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* ================= 4. PROCESS STRIP ("How it works") ================= */}
        <div className="bg-[#0B1A4A] py-16 px-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <h3 className="text-xs font-bold text-gold-500 uppercase tracking-widest">
                Operational Framework
              </h3>
              <p className="text-2xl font-extrabold text-white tracking-tight uppercase">
                How It Works
              </p>
            </div>

            {/* Horizontal Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="relative bg-[#0C1B4D] p-5 rounded-xl border border-white/10 space-y-3 shadow-sm">
                  <div className="absolute -top-4 left-5 bg-gold-500 text-navy-900 text-xs font-black w-8 h-8 rounded-full flex items-center justify-center border-4 border-[#0C1B4D] shadow-sm">
                    {idx + 1}
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider pt-2">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= 6. RELATED SERVICES ================= */}
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <h3 className="text-xs font-black text-white uppercase tracking-widest border-b border-white/10 pb-2">
            Cross-Link Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedServices.map(srv => (
              <Link
                key={srv.slug}
                to={`/services/${srv.slug}`}
                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-gold-500/30 shadow-sm flex flex-col gap-2 group transition-all"
              >
                <h4 className="text-xs font-black text-white group-hover:text-gold-500 uppercase tracking-wide">
                  {srv.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-bold truncate">
                  {srv.shortCopy}
                </p>
                <span className="text-[9px] text-white font-black flex items-center gap-0.5 mt-1 uppercase tracking-wider hover:text-gold-500">
                  Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
