import PageTransition from "../components/shared/PageTransition";
import { Shield, Target, Eye, Heart, Award, CheckCircle, MapPin, Quote } from "lucide-react";

export default function About() {
  const coreValues = [
    "Integrity", "Professionalism", "Excellence", "Reliability",
    "Innovation", "Customer Satisfaction", "Accountability", "Safety", "Teamwork"
  ];

  const whyChoose = [
    "Professional and experienced team",
    "Reliable and timely service delivery",
    "Competitive pricing",
    "Secure logistics solutions",
    "Customer-focused approach",
    "Nationwide operational coverage",
    "International logistics network",
    "Modern logistics planning",
    "Transparent communication",
    "Flexible service packages",
    "Commitment to excellence",
    "Strong safety and quality standards"
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
            Nigeria's Trusted Logistics & <br />
            <span className="text-gold-gradient font-black">Integrated Services Partner</span>
          </h1>
          <p className="text-sm text-gray-400 font-semibold leading-relaxed">
            Delivering world-class logistics, transportation, travel, and mobility solutions across Nigeria and around the world.
          </p>
        </div>

        {/* ================= ABOUT US ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-xl font-extrabold text-white uppercase tracking-wide border-b border-white/10 pb-2">
              About Us
            </h2>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed font-semibold">
              Da Ollys Integrated Services Limited is a dynamic Nigerian-owned logistics and integrated service company committed to delivering world-class logistics, transportation, travel, and mobility solutions to individuals, businesses, government agencies, and corporate organizations.
            </p>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed font-semibold">
              Driven by professionalism, innovation, and customer satisfaction, we provide comprehensive logistics services that simplify the movement of people, goods, and assets across Nigeria and around the world. Our team combines industry expertise with modern technology to ensure every service is delivered efficiently, securely, and on schedule.
            </p>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed font-semibold">
              Whether moving cargo across continents, relocating valuable properties, arranging international travel, or providing premium transportation solutions, Da Ollys Integrated Services Limited is a trusted partner dedicated to excellence.
            </p>

            <div className="flex flex-col gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <MapPin className="w-4 h-4 text-gold-500" />
                Headquarters
              </div>
              <p className="text-sm md:text-base text-gray-400 font-bold">
                Port Harcourt, Nigeria — serving clients nationwide and facilitating global operations to Europe, North America, the Middle East, and beyond.
              </p>
            </div>
          </div>

          {/* Vision, Mission, Promise stacked */}
          <div className="space-y-6">
            <div className="bg-navy-900 text-white rounded-2xl p-8 space-y-4 border border-white/10 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gold-500/10 rounded-lg text-gold-500">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold text-gold-500 uppercase tracking-wider">Our Vision</h3>
              </div>
              <p className="text-sm italic font-medium leading-relaxed text-gray-300">
                To become Africa's most trusted and preferred integrated logistics and mobility solutions provider, recognized for reliability, innovation, and exceptional customer service.
              </p>
            </div>

            <div className="bg-navy-900 text-white rounded-2xl p-8 space-y-4 border border-white/10 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gold-500/10 rounded-lg text-gold-500">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold text-gold-500 uppercase tracking-wider">Our Mission</h3>
              </div>
              <p className="text-sm italic font-medium leading-relaxed text-gray-300">
                To provide seamless, secure, and cost-effective logistics, travel, transportation, and mobility solutions that connect people, businesses, and opportunities globally while exceeding customer expectations through professionalism, integrity, and innovation.
              </p>
            </div>

            <div className="bg-navy-900 text-white rounded-2xl p-8 space-y-4 border border-gold-500/20 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gold-500/10 rounded-lg text-gold-500">
                  <Quote className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-extrabold text-gold-500 uppercase tracking-wider">Our Promise</h3>
              </div>
              <div className="space-y-2 text-sm font-medium leading-relaxed text-gray-300">
                <p>We deliver <span className="text-white font-bold">confidence</span>.</p>
                <p>We deliver <span className="text-white font-bold">reliability</span>.</p>
                <p>We deliver <span className="text-white font-bold">excellence</span>.</p>
                <p className="italic text-sm md:text-base text-gold-400 pt-2">
                  Wherever you need to go, whatever you need to move, Da Ollys Integrated Services Limited is your trusted logistics and mobility partner.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CORE VALUES ================= */}
        <div className="space-y-8 bg-[#0B1A4A] p-8 md:p-12 rounded-2xl border border-white/5">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-xs font-bold text-gold-500 uppercase tracking-widest">
              Our Core Values
            </h3>
            <p className="text-2xl font-extrabold text-white">
              The Principles That Guide Us
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="px-5 py-3 bg-[#0C1B4D] rounded-xl border border-white/10 text-sm md:text-base font-bold text-white uppercase tracking-wider hover:border-gold-500/30 hover:text-gold-500 transition-all"
              >
                {val}
              </div>
            ))}
          </div>
        </div>

        {/* ================= COMMITMENT ================= */}
        <div className="p-8 bg-navy-900 text-white rounded-2xl border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-500/10 rounded-lg text-gold-500">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-extrabold text-gold-500 uppercase tracking-wider">Our Commitment</h3>
          </div>
          <p className="text-sm md:text-lg text-gray-300 font-semibold leading-relaxed max-w-3xl">
            At Da Ollys Integrated Services Limited, we believe logistics is more than moving goods—it is about connecting people, creating opportunities, and enabling businesses to thrive. We are committed to building lasting relationships through dependable service, operational excellence, and innovative logistics solutions.
          </p>
          <p className="text-sm md:text-lg text-gray-300 font-semibold leading-relaxed max-w-3xl">
            Every client is treated as a valued partner, and every assignment is handled with precision, professionalism, and dedication.
          </p>
          <div className="flex items-center gap-2 shrink-0 bg-white/5 border border-white/10 px-5 py-3 rounded-xl w-fit">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Certified Logistical Flow</span>
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="space-y-8 bg-[#0B1A4A] p-8 md:p-12 rounded-2xl border border-white/5">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-xs font-bold text-gold-500 uppercase tracking-widest">
              Why Choose Us
            </h3>
            <p className="text-2xl font-extrabold text-white">
              Why Da Ollys Integrated Services Limited?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-[#0C1B4D] rounded-xl border border-white/10 hover:border-gold-500/20 transition-all">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm md:text-lg font-semibold text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= INDUSTRIES WE SERVE ================= */}
        <div className="space-y-8 bg-navy-900 p-8 md:p-12 rounded-2xl border border-white/5">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-xs font-bold text-gold-500 uppercase tracking-widest">
              Industries We Serve
            </h3>
            <p className="text-2xl font-extrabold text-white">
              Trusted Across Sectors
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
              "Corporate Organizations", "Government Agencies", "Oil and Gas Companies",
              "Construction Companies", "Manufacturing Industries", "Small and Medium Enterprises (SMEs)",
              "Financial Institutions", "Educational Institutions", "Healthcare Organizations",
              "Hospitality Industry", "Retail Businesses", "Religious Organizations",
              "Individuals and Families"
            ].map((industry, idx) => (
              <div
                key={idx}
                className="px-5 py-3 bg-[#0C1B4D]/80 rounded-xl border border-white/10 text-sm md:text-base font-semibold text-gray-300 hover:border-gold-500/30 hover:text-gold-500 transition-all"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>

        {/* ================= CORPORATE PLEDGE BANNER ================= */}
        <div className="p-8 bg-navy-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-sm font-bold text-gold-500 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-5 h-5 text-gold-500" />
              Da Ollys Corporate Pledge
            </h4>
            <p className="text-sm md:text-lg text-gray-300 font-semibold leading-relaxed">
              We deliver confidence. We deliver reliability. We deliver excellence. Wherever you need to go, whatever you need to move, Da Ollys Integrated Services Limited is your trusted logistics and mobility partner.
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
