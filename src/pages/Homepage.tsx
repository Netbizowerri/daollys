import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Globe, Send, Truck, Package, Car, Plane,
  Shield, CheckCircle, Zap, MessageCircle, 
  ArrowRight, Phone, Instagram, Facebook, Share2, Star
} from "lucide-react";
import { SERVICES, TRAVEL_PACKAGES } from "../data/services";
import GlassCard from "../components/shared/GlassCard";
import PageTransition from "../components/shared/PageTransition";

export default function Homepage() {
  // Map icons dynamically
  const getIcon = (name: string) => {
    switch (name) {
      case "Globe": return <Globe className="w-6 h-6" />;
      case "Send": return <Send className="w-6 h-6" />;
      case "Truck": return <Truck className="w-6 h-6" />;
      case "Container": return <Package className="w-6 h-6" />;
      case "Car": return <Car className="w-6 h-6" />;
      case "Plane": return <Plane className="w-6 h-6" />;
      default: return <Package className="w-6 h-6" />;
    }
  };

  const whatsappUrl = "https://wa.me/2348146497746?text=Hello%20Da%20Ollys%20Integrated%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <PageTransition>
      <div id="homepage-root">
        {/* ================= HERO SECTION ================= */}
        <section 
          id="hero-section" 
          className="relative min-h-[90vh] flex items-center justify-center bg-navy-900 overflow-hidden -mt-24 px-6 pt-32 pb-20"
        >
          {/* Background Hero Image with Referrer Policy */}
          <img 
            src="https://i.ibb.co/ccmNKHr4/DA-OLLYS.jpg" 
            alt="Da Ollys Cargo & Travels Background" 
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-55"
            referrerPolicy="no-referrer"
          />

          {/* Dark Overlay for accessible text contrast */}
          <div className="absolute inset-0 bg-[#060F30]/45 z-0" />

          {/* Animated Gold/Navy particles backplate */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy-700/30 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4A537_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
            {/* Short upper tag */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-gold-500"
            >
              <SparklesIcon className="w-3.5 h-3.5 animate-spin" />
              Da Ollys Integrated Services Ltd
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl"
            >
              Your Global Logistics & <br className="hidden md:block"/>
              <span className="text-gold-gradient font-black">Travel Partner</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-lg text-gray-300 font-medium max-w-2xl leading-relaxed"
            >
              Safe, Swift, and Professional Delivery & Travel Services You Can Trust. Anchored in Port Harcourt, serving clients across the globe.
            </motion.p>

            {/* CTA Group */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto"
            >
              <Link
                id="hero-book-cta"
                to="/book/travels"
                className="w-full sm:w-auto bg-gold-gradient text-navy-900 font-black px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-lg hover:shadow-gold-500/20 hover:brightness-105 active:scale-95 transition-all"
              >
                Book a Service
              </Link>
              <Link
                id="hero-explore-cta"
                to="/services/travels"
                className="w-full sm:w-auto border border-white/25 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-white/5 hover:border-white/40 active:scale-95 transition-all"
              >
                Explore Travel Packages
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ================= MINI OVERVIEW SECTION ================= */}
        <section id="mini-overview" className="bg-[#0C1B4D] py-16 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest">
              Who We Are
            </h2>
            <p className="text-lg md:text-2xl font-bold text-white leading-relaxed tracking-tight">
              Da Ollys Integrated Services Limited is a global logistics and travel company delivering value across four specialized services—from swift local dispatch to elite private jet charters and study abroad programs, combining absolute professionalism, reliability, and care.
            </p>
            <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full mt-4" />
          </div>
        </section>

        {/* ================= SERVICES OVERVIEW SECTION ================= */}
        <section id="services-grid-section" className="bg-[#0B1A4A] py-20 px-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest">
                Our Services
              </h2>
              <p className="text-3xl font-black text-white tracking-tight">
                Our Core Service Portfolios
              </p>
              <p className="text-xs text-gray-400 font-semibold max-w-xl mx-auto leading-relaxed">
                Experience high-performance operations tailored meticulously to your international travels, swift dispatch logistics, luxury car rentals, and elite private jet charters.
              </p>
            </div>

            {/* Glassmorphic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((srv) => (
                <GlassCard 
                  key={srv.slug} 
                  variant="light"
                  className="flex flex-col h-full justify-between overflow-hidden relative group"
                >
                  <div className="space-y-4">
                    {/* Visual Card Image Cover */}
                    <div className="w-full h-44 rounded-xl overflow-hidden relative border border-white/10">
                      <img 
                        src={srv.imageUrl} 
                        alt={srv.title} 
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B4D]/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                        <div className="p-1.5 bg-gold-500 rounded-lg text-navy-900 font-bold">
                          {getIcon(srv.iconName)}
                        </div>
                        <span className="text-xs uppercase font-extrabold tracking-wider">{srv.title}</span>
                      </div>
                    </div>

                    <div className="space-y-2 px-1">
                      <h3 className="text-base font-extrabold text-white tracking-tight mt-2">
                        {srv.subtitle}
                      </h3>
                      <p className="text-xs font-medium text-gray-300 leading-relaxed">
                        {srv.shortCopy}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 px-1 flex flex-col gap-3">
                    <Link
                      id={`srv-learn-${srv.slug}`}
                      to={`/services/${srv.slug}`}
                      className="w-full py-3 bg-white/5 border border-white/10 text-white hover:bg-gold-gradient hover:text-navy-900 hover:border-transparent text-center text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
                    >
                      Explore Service Options
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ELITE VISA & RELOCATION PACKAGES ================= */}
        <section id="travels-preview" className="bg-navy-900 text-white py-20 px-6 border-b border-white/5">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">
                Elite Travel Opportunities
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Our Updated Visa & Relocation Packages
              </h2>
              <p className="text-xs text-gray-400 font-semibold max-w-2xl mx-auto leading-relaxed">
                Expert document compilation, secure tuition deposit processing, and strategic filing support for high-success-rate international pathways.
              </p>
            </div>

            {/* Responsive Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {TRAVEL_PACKAGES.slice(0, 4).map((pkg) => (
                <div 
                  key={pkg.id} 
                  className="bg-[#0B1A4A]/70 border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-gold-500/30 transition-all duration-300 shadow-xl"
                >
                  {/* Card Banner Image with Overlay */}
                  <div className="relative h-48 overflow-hidden border-b border-white/5">
                    {pkg.imageUrl ? (
                      <img 
                        src={pkg.imageUrl} 
                        alt={pkg.title} 
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center text-4xl text-white/25 font-black">
                        {pkg.flag}
                      </div>
                    )}
                    {/* Dark gradient shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B4D]/90 via-[#0C1B4D]/30 to-transparent" />
                    
                    {/* Timeline Badge */}
                    {pkg.timeline && (
                      <div className="absolute top-3 right-3 bg-gold-gradient text-navy-900 text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {pkg.timeline}
                      </div>
                    )}

                    {/* Flag circle */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-lg">
                        {pkg.flag}
                      </div>
                      <span className="text-[10px] uppercase font-black tracking-wider text-gold-300">
                        {pkg.id} Pathway
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-black text-white tracking-tight leading-snug group-hover:text-gold-300 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-[11px] text-gray-300 font-medium leading-relaxed line-clamp-3">
                        {pkg.subtitle}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
                      <Link 
                        to={`/book/travels?destination=${encodeURIComponent(pkg.title)}`}
                        className="w-full py-2.5 bg-gold-gradient text-navy-900 hover:brightness-105 font-black text-center text-[10px] uppercase tracking-wider rounded-xl transition-all"
                      >
                        Inquire & Book
                      </Link>
                      <Link 
                        to="/services/travels"
                        className="w-full py-2 bg-white/5 hover:bg-white/10 text-white font-bold text-center text-[10px] uppercase tracking-wider rounded-xl border border-white/10 transition-all"
                      >
                        Full Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* View More CTA — fills remaining columns (col-span-2 on xl) */}
              <Link
                to="/services/travels"
                className="col-span-full lg:col-span-1 xl:col-span-2 bg-gradient-to-br from-gold-500/10 to-gold-500/5 border-2 border-dashed border-gold-500/30 rounded-2xl flex flex-col items-center justify-center p-8 gap-3 group hover:border-gold-500/60 hover:from-gold-500/15 hover:to-gold-500/10 transition-all duration-300 min-h-[24rem]"
              >
                <div className="w-14 h-14 rounded-full bg-gold-gradient/20 border border-gold-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-black text-white text-center">
                  View More Visa <br />& Travel Packages
                </h3>
                <p className="text-[11px] text-gray-400 font-medium text-center max-w-xs">
                  Explore all 6 elite visa and relocation packages including Canada, Qatar, Oman, Germany, Georgia & Serbia
                </p>
                <span className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 bg-gold-gradient text-navy-900 font-black text-[11px] uppercase tracking-wider rounded-xl group-hover:brightness-105 transition-all">
                  View All Packages <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>

          </div>
        </section>

        {/* ================= WHY CHOOSE US SECTION ================= */}
        <section id="why-choose-us" className="bg-[#0C1B4D] py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest">
                Our Guarantee
              </h2>
              <p className="text-3xl font-black text-white tracking-tight">
                Why Professional Clients Trust Da Ollys
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-500">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Swift Local Deliveries
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  We deploy specialized logistics bikes and vans custom-tailored to bypass Port Harcourt traffic, ensuring prompt arrival and secure handovers.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-500">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Global Reach & Service
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  From international cargo freight channels to certified student admission programs, we secure seamless, expert borders transition solutions.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-500">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Secure & Reliable
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  We operate with strict transit logs, high-density secure packing, protective wrapping, and background-checked, security-certified handlers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS SECTION (EMPTY STATE) ================= */}
        <section id="testimonials-section" className="bg-[#0B1A4A] py-16 px-6 border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-gold-500 uppercase tracking-widest">
                Client Testimonials
              </h2>
              <p className="text-2xl font-extrabold text-white tracking-tight">
                What Our Clients Say
              </p>
            </div>

            {/* Premium, clean empty/placeholder state component as required by Section 6.5 and Section 15 of PRD */}
            <div className="p-8 md:p-12 bg-white/5 rounded-2xl border border-white/10 shadow-lg max-w-xl mx-auto flex flex-col items-center gap-4">
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-gray-300 italic font-semibold leading-relaxed">
                "Our client reviews portfolio is currently being consolidated. Once verified, real testimonials from our logistics, heavy haulage, property movement, and immigration clients will be displayed here."
              </p>
              <div className="mt-2 text-center">
                <div className="text-xs font-black text-white uppercase tracking-wider">
                  Da Ollys Integrated Services
                </div>
                <div className="text-[10px] text-gold-500 font-bold uppercase tracking-widest mt-0.5">
                  Verified Reviews Coming Soon
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHATSAPP + SOCIAL CTA BAND ================= */}
        <section id="cta-band" className="bg-navy-900 text-white py-16 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Have an Instant Question? Chat Directly With Our Desk
            </h2>
            <p className="text-xs text-gray-300 font-semibold max-w-md mx-auto leading-relaxed">
              Our team operates a dedicated WhatsApp desk to guide you with instant delivery rates, haulage clearances, and active study visas inquiries.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="cta-whatsapp-desk"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current stroke-none" />
                Chat Instantly (WhatsApp)
              </a>
              <Link
                id="cta-contact-desk"
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all"
              >
                Go to Contact Form
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

// Reusable micro icon helper
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}
