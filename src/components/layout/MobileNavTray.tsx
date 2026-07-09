import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { 
  X, 
  Instagram, 
  Facebook, 
  Globe, 
  Calendar, 
  PhoneCall, 
  Briefcase,
  Home,
  Info,
  Package,
  Truck,
  Car,
  Plane,
  ChevronRight,
  Sparkles,
  Building2
} from "lucide-react";

interface MobileNavTrayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavTray({ isOpen, onClose }: MobileNavTrayProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const mainPages = [
    { label: "Home", path: "/", icon: <Home className="w-4 h-4" />, desc: "Back to main screen" },
    { label: "About Da Ollys", path: "/about", icon: <Info className="w-4 h-4" />, desc: "Our history & credentials" },
    { label: "Contact Us", path: "/contact", icon: <PhoneCall className="w-4 h-4" />, desc: "Get in touch & locations" },
  ];

  const services = [
    {
      id: "travels",
      title: "Travel Bookings",
      subtitle: "Flights, Visas, Hotels & Tours",
      path: "/services/travels",
      icon: <Globe className="w-4 h-4" />,
      badge: "Hot"
    },
    {
      id: "deliveries",
      title: "Dispatch Logistics",
      subtitle: "Same-day Port Harcourt courier",
      path: "/services/deliveries",
      icon: <Package className="w-4 h-4" />
    },
    {
      id: "luxury-car-rentals",
      title: "Luxury Car Rentals",
      subtitle: "Weddings, trips & VIP chauffeurs",
      path: "/services/luxury-car-rentals",
      icon: <Car className="w-4 h-4" />
    },
    {
      id: "private-jet-charter",
      title: "Private Jet Charters",
      subtitle: "Fly in style, fly with class",
      path: "/services/private-jet-charter",
      icon: <Plane className="w-4 h-4" />
    },
    {
      id: "property-movement",
      title: "Property Movement",
      subtitle: "Household & office relocation services",
      path: "/services/property-movement",
      icon: <Building2 className="w-4 h-4" />
    },
    {
      id: "haulage",
      title: "Haulage Services",
      subtitle: "Bulk cargo & equipment haulage",
      path: "/services/haulage",
      icon: <Truck className="w-4 h-4" />
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/daollysintegrated" },
    { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/profile.php?id=61563884841935" },
    { icon: <Globe className="w-4 h-4" />, href: "https://tiktok.com/@daollysintegrated" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dimmed Overlay */}
          <motion.div
            id="mobile-nav-overlay"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Tray Panel */}
          <motion.div
            id="mobile-nav-panel"
            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm h-full bg-[#0C1B4D] border-l border-white/10 z-[100] md:hidden flex flex-col shadow-2xl overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
          >
            {/* Header (Sticky at top) */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-navy-950">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/YF8s8wjX/DAOLLYS-1.png"
                  alt="DA OLLYS"
                  className="h-[46px] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button
                id="mobile-nav-close"
                onClick={onClose}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-grow overflow-y-auto px-5 py-6 space-y-6">
              {/* Category 1: Exploration */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block pl-1">
                  General Pages
                </span>
                <div className="space-y-1.5">
                  {mainPages.map((item, index) => {
                    const active = isActive(item.path);
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        <Link
                          to={item.path}
                          onClick={onClose}
                          className={`flex items-center gap-3.5 p-3 rounded-xl border transition-all duration-200 ${
                            active
                              ? "bg-gold-500/10 border-gold-500/20 text-white"
                              : "bg-white/5 border-transparent text-gray-300 hover:text-white hover:bg-white/10 active:bg-white/5"
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 ${
                            active 
                              ? "bg-gold-500 text-navy-900" 
                              : "bg-white/5 text-gold-500"
                          }`}>
                            {item.icon}
                          </div>
                          <div className="flex-grow text-left">
                            <span className={`text-xs font-bold block ${active ? "text-gold-400 font-black" : "text-white"}`}>
                              {item.label}
                            </span>
                            <span className="text-[10px] text-gray-400 block mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-gray-500 shrink-0 ${active ? "text-gold-500" : ""}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Category 2: Our Services */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block pl-1">
                  Our Service Portfolios
                </span>
                <div className="space-y-2">
                  {services.map((svc, index) => {
                    const active = isActive(svc.path);
                    return (
                      <motion.div
                        key={svc.id}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + 3) * 0.04 }}
                      >
                        <Link
                          to={svc.path}
                          onClick={onClose}
                          className={`flex gap-3.5 p-3 rounded-xl border transition-all duration-200 ${
                            active
                              ? "bg-gold-500/10 border-gold-500/20 text-white"
                              : "bg-white/5 border-transparent text-gray-300 hover:text-white hover:bg-white/10 active:bg-white/5"
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 ${
                            active 
                              ? "bg-gold-500 text-navy-900" 
                              : "bg-gold-500/10 border border-gold-500/20 text-gold-500"
                          }`}>
                            {svc.icon}
                          </div>

                          <div className="flex-grow text-left">
                            <div className="text-xs font-bold flex items-center gap-1.5">
                              <span className={active ? "text-gold-400 font-black" : "text-white"}>
                                {svc.title}
                              </span>
                              {svc.badge && (
                                <span className="text-[8px] bg-red-500/20 text-red-400 font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wide animate-pulse">
                                  {svc.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-gray-400 block mt-0.5">
                              {svc.subtitle}
                            </span>
                          </div>

                          <div className="flex items-center text-gray-500 shrink-0">
                            <ChevronRight className={`w-4 h-4 transition-transform ${active ? "text-gold-500" : ""}`} />
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer (Sticky at bottom) */}
            <div className="p-5 border-t border-white/10 bg-navy-950 flex flex-col gap-4">
              <Link
                to="/book/travels"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-gold-gradient text-navy-900 font-black py-3 px-4 rounded-xl shadow-lg hover:brightness-105 active:scale-95 transition-all text-xs uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </Link>

              {/* Social links row */}
              <div className="flex items-center justify-center gap-4 border-t border-white/5 pt-3.5">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 hover:bg-gold-500/10 text-white hover:text-gold-300 rounded-full border border-white/10 transition-all hover:scale-105"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <div className="text-center text-[9px] text-gray-500 font-semibold tracking-wide">
                &copy; 2026 Da Ollys Integrated Services.
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

