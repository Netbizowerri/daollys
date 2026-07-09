import { useSearchParams, useLocation, Link } from "react-router-dom";
import { CheckCircle, MessageSquare, ArrowRight, Home } from "lucide-react";
import PageTransition from "../components/shared/PageTransition";

interface ThankYouState {
  name?: string;
  destination?: string;
  type?: string;
  car?: string;
  jet?: string;
  truck?: string;
}

export default function ThankYou() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const routeState = (location.state as ThankYouState) || {};
  const service = searchParams.get("service") || "general";
  const name = routeState.name || "Valued Client";

  const getServiceCopy = () => {
    switch (service) {
      case "travels":
        const dest = routeState.destination || "your destination";
        return {
          title: `Thanks ${name}, Your Travel & Visa Application is Logged!`,
          desc: `Our dedicated travels visa desk is compiling your inquiry for ${dest}. An immigration specialist will verify your supporting uploads shortly.`
        };
      case "deliveries":
        const type = routeState.type || "Dispatch";
        return {
          title: `Dispatch Confirmed, ${name}!`,
          desc: `We have scheduled your ${type} pickup. A dispatch rider or logistics agent is mapping out the route right now.`
        };
      case "property-movement":
        return {
          title: `Relocation Request Received, ${name}!`,
          desc: "Our moving supervisor is reviewing your bedroom/office volume checklist to construct an optimal packing plan."
        };
      case "haulage":
        const truck = routeState.truck || "Truck";
        return {
          title: `Heavy Haulage Quote Requested, ${name}!`,
          desc: `Our logistics manager is calculating distance, customs, and escort parameters for your ${truck} payload.`
        };
      case "luxury-car-rentals":
        const car = routeState.car || "Luxury Ride";
        return {
          title: `Fleet Reservation Pending, ${name}!`,
          desc: `We have logged your reservation for the ${car}. A chauffeur coordinator will verify fleet availability for your requested pickup time.`
        };
      default:
        return {
          title: "Thank You, Your Message is Dispatched!",
          desc: "We have received your general inquiry details. A representative from our Port Harcourt help desk will call you shortly."
        };
    }
  };

  const content = getServiceCopy();
  const whatsappUrl = "https://wa.me/2348146497746?text=Hello%20Da%20Ollys%20Integrated%20Services%2C%20I%20just%20submitted%20my%20booking%20and%20would%20like%20to%20speed%20up%20feedback.";

  return (
    <PageTransition>
      <div id="thank-you-view" className="max-w-2xl mx-auto px-6 py-12 text-center space-y-10">
        
        {/* ================= SUCCESS BANNER ================= */}
        <div className="space-y-4">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mx-auto border border-emerald-500/20">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">
            {content.title}
          </h1>
          <p className="text-xs text-gray-400 font-semibold leading-relaxed max-w-lg mx-auto">
            {content.desc}
          </p>
        </div>

        {/* ================= PRESENTATIONAL TRACKER STEPPER (PRD 12.7) ================= */}
        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
          <h3 className="text-[10px] font-black text-white/40 uppercase tracking-widest text-center">
            Booking Progress Tracker
          </h3>
          
          <div className="flex items-center justify-between gap-2 max-w-md mx-auto pt-2">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black">
                1
              </div>
              <span className="text-[9px] font-black text-gray-300 uppercase mt-1">Submitted</span>
            </div>

            <div className="h-0.5 flex-1 bg-emerald-500" />

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-[10px] font-black animate-pulse">
                2
              </div>
              <span className="text-[9px] font-black text-gold-500 uppercase mt-1">In Review</span>
            </div>

            <div className="h-0.5 flex-1 bg-white/10" />

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-white/5 text-white/40 border border-white/10 flex items-center justify-center text-[10px] font-black">
                3
              </div>
              <span className="text-[9px] font-black text-white/40 uppercase mt-1">Cleared</span>
            </div>
          </div>

          <p className="text-[10px] text-gray-400 font-bold italic">
            Usually updates within 2 to 4 hours. No manual refresh needed.
          </p>
        </div>

        {/* ================= SUPPORT ACTIONS ================= */}
        <div className="space-y-4 max-w-md mx-auto pt-2">
          <div className="text-xs font-bold text-gray-300 uppercase tracking-widest">
            Want to Expedite Clearance?
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-extrabold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider hover:bg-[#128C7E] transition-all cursor-pointer animate-pulse"
            >
              <MessageSquare className="w-4 h-4 fill-white stroke-none" />
              Notify WhatsApp Desk
            </a>

            <Link
              id="back-home-btn"
              to="/"
              className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white hover:bg-white/10 font-extrabold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <Home className="w-4 h-4" />
              Return to Home
            </Link>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
