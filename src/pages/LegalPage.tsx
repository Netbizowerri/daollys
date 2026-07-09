import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, FileText, ShieldCheck, AlertTriangle } from "lucide-react";
import PageTransition from "../components/shared/PageTransition";

export default function LegalPage() {
  const location = useLocation();
  const path = location.pathname;

  const getLegalContent = () => {
    if (path === "/privacy-policy") {
      return {
        title: "Privacy Policy",
        icon: <ShieldCheck className="w-8 h-8 text-gold-500" />,
        intro: "Da Ollys Integrated Services Ltd values your privacy. This policy details how we handle the customer logs, contact forms, and passport data uploads we receive.",
        sections: [
          {
            heading: "1. Information Collection",
            body: "We collect names, emails, phone numbers, pick-up coordinates, vehicle reservation requirements, and study program files submitted through our secure booking forms."
          },
          {
            heading: "2. Information Usage",
            body: "Your data is strictly utilized to process visa consultation profiles, coordinate dispatch logistics riders, calculate haulage rates, and reserve executive car hires."
          },
          {
            heading: "3. Secure Upload Storage",
            body: "All supporting passport uploads are routed through industry-standard encryption. We do not sell or lease your files to third-party advertising companies."
          },
          {
            heading: "4. Updates and Copy",
            body: "Our policy may be updated incrementally. For inquiries, reach out to info@daollysintegrated.com."
          }
        ]
      };
    } else if (path === "/terms-and-conditions") {
      return {
        title: "Terms & Conditions",
        icon: <FileText className="w-8 h-8 text-gold-500" />,
        intro: "By accessing Da Ollys Integrated Services Ltd websites or scheduling bookings, you agree to comply with our general operational terms of service.",
        sections: [
          {
            heading: "1. Logistics and Carriage Deliveries",
            body: "Clients must declare item value and fragile status before handover. We do not carry unauthorized, hazardous, or illegal packages."
          },
          {
            heading: "2. Heavy Haulage and Routes",
            body: "Our heavy-duty quotes are subject to road safety clearance, weight regulations, cargo dimensions, and secure route clearances."
          },
          {
            heading: "3. Travels & Visa Consulting Streams",
            body: "Da Ollys Integrated Services assists with admissions, document compiles, and file completion. The official immigration department holds final decision jurisdiction."
          },
          {
            heading: "4. Luxury Fleet Carriage",
            body: "All vehicle rental bookings come with our professional personal drivers. Fleet usage complies with local transport safety parameters."
          }
        ]
      };
    } else {
      return {
        title: "Disclaimer Policy",
        icon: <AlertTriangle className="w-8 h-8 text-gold-500" />,
        intro: "General risk and service exclusions for Da Ollys Integrated Services Ltd operations.",
        sections: [
          {
            heading: "1. Study Visa Decisions",
            body: "We optimize tuition, admission, and documentation success streams. Da Ollys is not a sovereign consulate body and does not grant visas directly."
          },
          {
            heading: "2. Transit Timelines",
            body: "Logistical and parcel delivery times are subject to local traffic, weather conditions, airline freight schedules, and force majeure parameters."
          },
          {
            heading: "3. Financial Proof of Funds",
            body: "Financial requirements (e.g. Canada min ₦45,000,000) are outlined as guideline mandates based on current immigration legislation."
          }
        ]
      };
    }
  };

  const content = getLegalContent();

  return (
    <PageTransition>
      <div id="legal-page-root" className="max-w-3xl mx-auto px-6 space-y-8">
        
        {/* ================= HEADER ================= */}
        <div className="space-y-4 border-b border-white/10 pb-6">
          <Link to="/" className="inline-flex items-center gap-1 text-xs font-bold text-gold-500 hover:underline uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Return Home
          </Link>
          
          <div className="flex items-center gap-3">
            {content.icon}
            <h1 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
              {content.title}
            </h1>
          </div>
          
          <p className="text-xs text-gray-400 font-semibold leading-relaxed italic">
            {content.intro}
          </p>
        </div>

        {/* ================= SECTIONS GRID ================= */}
        <div className="space-y-6">
          {content.sections.map((sec, idx) => (
            <div key={idx} className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-2">
              <h3 className="text-xs font-black text-white uppercase tracking-wider">
                {sec.heading}
              </h3>
              <p className="text-[11px] text-gray-400 font-bold leading-relaxed">
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        {/* ================= HELPER NOTICE ================= */}
        <div className="p-4 bg-gold-500/10 border border-gold-500/15 rounded-xl text-[10px] text-gray-300 font-bold">
          Note: This document acts as a verified template pending full corporate legal clearance. Final approved copies will be uploaded as supplied by the client.
        </div>

      </div>
    </PageTransition>
  );
}
