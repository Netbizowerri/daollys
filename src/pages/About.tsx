import { motion } from "motion/react";
import PageTransition from "../components/shared/PageTransition";
import { Shield, Target, Users, MapPin, Award, CheckCircle } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Shield className="w-6 h-6 text-gold-500" />,
      title: "Integrity & Legal Compliance",
      desc: "All global travels, visa student profiles, and industrial cargo deliveries route through strict legal compliance channels to ensure secure outcomes."
    },
    {
      icon: <Target className="w-6 h-6 text-gold-500" />,
      title: "Swift Execution Standards",
      desc: "We deploy highly skilled drivers, optimized dispatch route schedules, and direct partnerships with college registrars to avoid delays."
    },
    {
      icon: <Users className="w-6 h-6 text-gold-500" />,
      title: "Client-First Care",
      desc: "Your files, properties, and parcels are managed with strict safety registers, protective packaging, and proactive client-desk updates."
    }
  ];

  return (
    <PageTransition>
      <div id="about-page" className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* ================= HERO BAND ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">
            About Our Brand
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Safe, Swift, & Professional <br />
            <span className="text-gold-gradient font-black">Integrated Solutions</span>
          </h1>
          <p className="text-sm text-gray-400 font-semibold leading-relaxed">
            Establishing absolute credibility and global logistics standards directly from Port Harcourt, Nigeria.
          </p>
        </div>

        {/* ================= DETAILED COPY BLOCK ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-xl font-extrabold text-white uppercase tracking-wide border-b border-white/10 pb-2">
              Our Corporate Foundation
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed font-semibold">
              Da Ollys Integrated Services Ltd was established to fill a crucial gap in the West African logistical and travels framework: the need for absolute operational integrity, swift dispatch, and certified, premium consulting.
            </p>
            <p className="text-xs text-gray-300 leading-relaxed font-semibold">
              Whether you are an executive requiring a luxury bulletproof-ready sedan in Rivers State, a corporate entity shipping freight, a household requiring careful property relocation, or a prospective student aiming to live and work in Canada or Finland—we deliver unified premium services.
            </p>

            <div className="flex flex-col gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <MapPin className="w-4 h-4 text-gold-500" />
                Headquarters
              </div>
              <p className="text-[11px] text-gray-400 font-bold">
                Port Harcourt, Nigeria — serving clients nationwide and facilitating global departures to Europe, North America, and the Middle East.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gold-500/5 rounded-2xl blur-2xl" />
            <div className="relative bg-navy-900 text-white rounded-2xl p-8 space-y-6 border border-white/10 shadow-xl">
              <h3 className="text-sm font-extrabold text-gold-500 uppercase tracking-wider">
                Da Ollys Core Mission Statement
              </h3>
              <p className="text-sm italic font-medium leading-relaxed text-gray-300">
                "To deliver unmatched value to our global clients by consolidating premium travel guidance, secure local and air cargo transport, professional heavy haulage, and high-end executive rentals under a single standard of absolute care and efficiency."
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-center">
                <div>
                  <div className="text-2xl font-black text-gold-500">100%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Secure Transit</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-gold-500">5 / 5</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Service Verticals</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= THREE CORES SECTION ================= */}
        <div className="space-y-8 bg-[#0B1A4A] p-8 md:p-12 rounded-2xl border border-white/5">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-xs font-bold text-gold-500 uppercase tracking-widest">
              Core Pillars
            </h3>
            <p className="text-2xl font-extrabold text-white">
              The Standards of Our Operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {pillars.map((p, idx) => (
              <div key={idx} className="bg-[#0C1B4D] p-6 rounded-xl border border-white/10 space-y-3 shadow-sm hover:border-gold-500/20 transition-all">
                <div className="p-3 bg-gold-500/10 rounded-lg w-fit">
                  {p.icon}
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {p.title}
                </h4>
                <p className="text-[11px] text-gray-400 font-semibold leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= QUALITY PLEDGE BANNER ================= */}
        <div className="p-8 bg-navy-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-sm font-bold text-gold-500 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-5 h-5 text-gold-500" />
              Da Ollys Corporate Pledge
            </h4>
            <p className="text-xs text-gray-300 font-semibold leading-relaxed">
              We pledge to provide reliable dispatch logs, careful property packing systems, professional heavy haulage drivers, and certified legal travel consultants for every single reservation we accept.
            </p>
          </div>
          
          <div className="flex items-center gap-2 shrink-0 bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Certified Logistical Flow</span>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
