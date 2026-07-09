import { useParams, Link, useNavigate, useSearchParams } from "react-router-dom";
import { 
  TravelsForm, DeliveriesForm, 
  PrivateJetForm, LuxuryCarForm 
} from "../components/forms/BookingForms";
import PageTransition from "../components/shared/PageTransition";
import { Globe, Send, Car, Plane, Calendar, ArrowLeft } from "lucide-react";

export default function BookingPage() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedCountry = searchParams.get("destination") || "Canada";

  const switcherItems = [
    { slug: "travels", label: "Travels", icon: <Globe className="w-4 h-4" /> },
    { slug: "deliveries", label: "Deliveries", icon: <Send className="w-4 h-4" /> },
    { slug: "luxury-car-rentals", label: "Luxury Cars", icon: <Car className="w-4 h-4" /> },
    { slug: "private-jet-charter", label: "Private Jet", icon: <Plane className="w-4 h-4" /> }
  ];

  // Render correct form component
  const renderBookingForm = () => {
    switch (serviceSlug) {
      case "travels":
        return <TravelsForm initialCountry={preselectedCountry} />;
      case "deliveries":
        return <DeliveriesForm />;
      case "luxury-car-rentals":
        return <LuxuryCarForm />;
      case "private-jet-charter":
        return <PrivateJetForm />;
      default:
        return <TravelsForm initialCountry={preselectedCountry} />;
    }
  };

  return (
    <PageTransition>
      <div id="booking-page-root" className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* ================= BACK & TITLE ================= */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-500 hover:underline uppercase tracking-wider">
              <ArrowLeft className="w-4 h-4" /> Return to Home
            </Link>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase flex items-center gap-2">
              <Calendar className="w-7 h-7 text-gold-500" />
              Secure Booking Terminal
            </h1>
          </div>
          
          <div className="text-left md:text-right">
            <span className="text-[10px] text-white/40 uppercase font-black tracking-widest block">Service Route</span>
            <span className="text-xs font-extrabold text-gray-300 uppercase">
              Port Harcourt Desk &bull; Live Submit
            </span>
          </div>
        </div>

        {/* ================= SERVICE QUICK-SWITCHER PILLS (PRD 12.2) ================= */}
        <div className="bg-white/5 p-2 rounded-2xl flex flex-wrap items-center gap-2 border border-white/10">
          <span className="text-[9px] font-black text-white/40 uppercase tracking-widest pl-3 pr-2 hidden md:inline-block">
            Quick Switcher:
          </span>
          {switcherItems.map((item) => {
            const active = serviceSlug === item.slug;
            return (
              <button
                key={item.slug}
                id={`switcher-pill-${item.slug}`}
                onClick={() => navigate(`/book/${item.slug}`)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  active 
                    ? "bg-white/10 text-gold-500 border border-gold-500/30 shadow-md scale-105" 
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* ================= ACTIVE DYNAMIC FORM CONTAINER ================= */}
        <div className="relative">
          {renderBookingForm()}
        </div>

      </div>
    </PageTransition>
  );
}
