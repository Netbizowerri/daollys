import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home as HomeIcon, 
  Briefcase, 
  Calendar, 
  MessageSquare, 
  X, 
  Globe, 
  Package, 
  Truck, 
  Car, 
  Plane,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BottomActionBar() {
  const [isServicesTrayOpen, setIsServicesTrayOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    setIsServicesTrayOpen(false);
  }, [currentPath]);

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const whatsappUrl = "https://wa.me/2348146497746?text=Hello%20Da%20Ollys%20Integrated%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  const services = [
    {
      id: "travels",
      title: "Travel Bookings",
      subtitle: "Flights, Visas, Hotels, and customized holiday Tour Packages globally.",
      path: "/services/travels",
      icon: <Globe className="w-5 h-5" />,
      badge: "Hot"
    },
    {
      id: "deliveries",
      title: "Logistics & Dispatch",
      subtitle: "Lightning-fast same-day parcel delivery courier services in Port Harcourt.",
      path: "/services/deliveries",
      icon: <Package className="w-5 h-5" />
    },
    {
      id: "luxury-car-rentals",
      title: "Luxury Car Rentals",
      subtitle: "Premium chauffeur-driven rides, wedding fleets, and business trips.",
      path: "/services/luxury-car-rentals",
      icon: <Car className="w-5 h-5" />
    },
    {
      id: "private-jet-charter",
      title: "Private Jet & VIP Charter",
      subtitle: "Exclusive private jet hire, helicopter transit, and premium VIP aviation.",
      path: "/services/private-jet-charter",
      icon: <Plane className="w-5 h-5" />
    }
  ];

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-navy-900 border-t border-white/10 z-50 h-16 px-4 flex items-center justify-around shadow-2xl backdrop-blur-lg bg-opacity-95">
        {/* Home Tab */}
        <Link
          id="mobile-tab-home"
          to="/"
          className={`flex flex-col items-center justify-center w-16 h-full transition-colors ${
            isActive("/") ? "text-gold-500" : "text-gray-400"
          }`}
        >
          <HomeIcon className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-wide">Home</span>
        </Link>

        {/* Services Tab */}
        <button
          id="mobile-tab-services"
          onClick={() => setIsServicesTrayOpen(true)}
          className={`flex flex-col items-center justify-center w-16 h-full transition-colors focus:outline-none ${
            isActive("/services") || isServicesTrayOpen ? "text-gold-500" : "text-gray-400"
          }`}
        >
          <Briefcase className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-wide">Services</span>
        </button>

        {/* Book Tab */}
        <Link
          id="mobile-tab-book"
          to="/book/travels"
          className={`flex flex-col items-center justify-center w-16 h-full transition-colors ${
            isActive("/book") ? "text-gold-500" : "text-gray-400"
          }`}
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-wide">Book</span>
        </Link>

        {/* WhatsApp Chat Tab */}
        <a
          id="mobile-tab-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-16 h-full text-gray-400 active:text-[#25D366]"
        >
          <MessageSquare className="w-5 h-5 mb-0.5 text-emerald-400" />
          <span className="text-[10px] font-medium tracking-wide text-emerald-400">Chat</span>
        </a>
      </div>

      <AnimatePresence>
        {isServicesTrayOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              id="services-tray-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsServicesTrayOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Bottom Drawer Tray */}
            <motion.div
              id="services-tray-panel"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed bottom-0 left-0 right-0 bg-[#0C1B4D] border-t-2 border-gold-500/30 rounded-t-3xl z-50 md:hidden flex flex-col max-h-[85vh] overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-navy-950">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  <span className="text-xs font-black uppercase tracking-widest text-gold-500">
                    Our Core Portfolios
                  </span>
                </div>
                <button
                  id="services-tray-close"
                  onClick={() => setIsServicesTrayOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white focus:outline-none"
                  aria-label="Close Tray"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Service List */}
              <div className="p-5 overflow-y-auto space-y-3.5 pb-24">
                {services.map((svc) => {
                  const isSvcActive = currentPath === svc.path;
                  return (
                    <Link
                      key={svc.id}
                      to={svc.path}
                      className={`flex gap-3.5 p-3.5 rounded-2xl border transition-all duration-200 ${
                        isSvcActive
                          ? "bg-gold-500/10 border-gold-500/30 text-white"
                          : "bg-white/5 border-white/5 hover:border-white/15 text-white active:bg-white/10"
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                        isSvcActive
                          ? "bg-gold-500 text-navy-900"
                          : "bg-gold-500/10 border border-gold-500/20 text-gold-500"
                      }`}>
                        {svc.icon}
                      </div>

                      <div className="space-y-1 flex-grow text-left">
                        <div className="text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                          <span className={isSvcActive ? "text-gold-400 font-black" : "text-white"}>
                            {svc.title}
                          </span>
                          {svc.badge && (
                            <span className="text-[8px] bg-red-500/20 text-red-400 font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wide animate-pulse">
                              {svc.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-gray-400 font-semibold leading-relaxed">
                          {svc.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center text-gray-500 shrink-0">
                        <ChevronRight className={`w-4 h-4 transition-transform ${isSvcActive ? "text-gold-500" : ""}`} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
