import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Calendar, ChevronDown, Globe, Package, Home, Truck, Car, Plane, Sparkles, ArrowRight, Warehouse } from "lucide-react";
import MobileNavTray from "./MobileNavTray";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Render the new high-quality image logo as requested
  const renderLogo = () => (
    <Link id="header-logo-link" to="/" className="flex items-center group py-1">
      <img
        src="https://i.ibb.co/YF8s8wjX/DAOLLYS-1.png"
        alt="DA OLLYS Integrated Services Ltd"
        className="h-[58px] sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </Link>
  );

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 ${mobileOpen ? "z-[100]" : "z-40"} transition-all duration-350 border-b ${
          scrolled
            ? "bg-[#0C1B4D]/85 backdrop-blur-md shadow-md border-white/10 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          {renderLogo()}

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              id="nav-home"
              to="/"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                isActive("/") ? "text-[#D4A537]" : "text-[#8A8FA3] hover:text-[#D4A537]"
              }`}
            >
              Home
            </Link>
            <Link
              id="nav-about"
              to="/about"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                isActive("/about") ? "text-[#D4A537]" : "text-[#8A8FA3] hover:text-[#D4A537]"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown/Links */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span
                id="nav-services-trigger"
                className={`text-sm font-semibold tracking-wide cursor-pointer transition-colors flex items-center gap-1 py-2 ${
                  isActive("/services") || servicesOpen ? "text-[#D4A537]" : "text-[#8A8FA3] hover:text-[#D4A537]"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 text-gray-400 group-hover:text-[#D4A537] ${servicesOpen ? "rotate-180 text-[#D4A537]" : ""}`} />
              </span>
              
              {/* Cool Mega Menu Dropdown */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[760px] bg-[#0A1640]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-6 transition-all duration-300 ease-out grid grid-cols-12 gap-6 z-50 ${
                  servicesOpen 
                    ? "opacity-100 scale-100 pointer-events-auto" 
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
                onClick={() => setServicesOpen(false)}
              >
                {/* Left: Services Listings (8 cols) */}
                <div className="col-span-8 space-y-4 text-left">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-[10px] font-extrabold text-gold-500 uppercase tracking-widest">
                      Our Core Portfolios
                    </span>
                    <span className="text-[10px] text-gray-400 font-semibold">
                      Select a service to view full details
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Item 1 */}
                    <Link
                      to="/services/travels"
                      className="group/item flex gap-3 p-2.5 rounded-xl border border-transparent hover:border-gold-500/20 hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="p-2 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-lg shrink-0 group-hover/item:bg-[#D4A537] group-hover/item:text-navy-900 transition-colors">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white group-hover/item:text-[#D4A537] transition-colors uppercase tracking-wider flex items-center gap-1.5">
                          Travel Bookings
                          <span className="text-[8px] bg-gold-500/20 text-gold-400 font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wide">
                            Hot
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                          Flights, trusted visa consulting, hotels, and customized holiday tour packages.
                        </p>
                      </div>
                    </Link>

                    {/* Item 2 */}
                    <Link
                      to="/services/deliveries"
                      className="group/item flex gap-3 p-2.5 rounded-xl border border-transparent hover:border-gold-500/20 hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="p-2 bg-white/5 border border-white/10 text-white rounded-lg shrink-0 group-hover/item:bg-[#D4A537] group-hover/item:text-navy-900 transition-colors">
                        <Package className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white group-hover/item:text-[#D4A537] transition-colors uppercase tracking-wider">
                          Dispatch Logistics
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                          Rapid same-day parcel courier and business deliveries in Port Harcourt metro.
                        </p>
                      </div>
                    </Link>

                    {/* Item 3 */}
                    <Link
                      to="/services/luxury-car-rentals"
                      className="group/item flex gap-3 p-2.5 rounded-xl border border-transparent hover:border-gold-500/20 hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="p-2 bg-white/5 border border-white/10 text-white rounded-lg shrink-0 group-hover/item:bg-[#D4A537] group-hover/item:text-navy-900 transition-colors">
                        <Car className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white group-hover/item:text-[#D4A537] transition-colors uppercase tracking-wider">
                          Luxury Car Rentals
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                          Premium VIP chauffeured security escorts, event protocols, & luxury wedding fleets.
                        </p>
                      </div>
                    </Link>

                    {/* Item 4 */}
                    <Link
                      to="/services/private-jet-charter"
                      className="group/item flex gap-3 p-2.5 rounded-xl border border-transparent hover:border-gold-500/20 hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="p-2 bg-white/5 border border-white/10 text-white rounded-lg shrink-0 group-hover/item:bg-[#D4A537] group-hover/item:text-navy-900 transition-colors">
                        <Plane className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white group-hover/item:text-[#D4A537] transition-colors uppercase tracking-wider">
                          Private Jet Charters
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                          Exclusive private jet hires, luxury helicopter shuttles, & VIP custom flights.
                        </p>
                      </div>
                    </Link>

                    {/* Item 5 */}
                    <Link
                      to="/services/property-movement"
                      className="group/item flex gap-3 p-2.5 rounded-xl border border-transparent hover:border-gold-500/20 hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="p-2 bg-white/5 border border-white/10 text-white rounded-lg shrink-0 group-hover/item:bg-[#D4A537] group-hover/item:text-navy-900 transition-colors">
                        <Home className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white group-hover/item:text-[#D4A537] transition-colors uppercase tracking-wider">
                          Property Movement
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                          Household & office relocation, heavy lifting, and asset transport logistics.
                        </p>
                      </div>
                    </Link>

                    {/* Item 6 */}
                    <Link
                      to="/services/haulage"
                      className="group/item flex gap-3 p-2.5 rounded-xl border border-transparent hover:border-gold-500/20 hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="p-2 bg-white/5 border border-white/10 text-white rounded-lg shrink-0 group-hover/item:bg-[#D4A537] group-hover/item:text-navy-900 transition-colors">
                        <Truck className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-white group-hover/item:text-[#D4A537] transition-colors uppercase tracking-wider">
                          Haulage Services
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                          Bulk cargo, heavy equipment & construction material haulage across Nigeria.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Right: Featured Callout / Quick Link (4 cols) */}
                <div className="col-span-4 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between space-y-3 text-left overflow-hidden relative group/featured">
                  <div className="space-y-2">
                    {/* Flyer Image Thumbnail */}
                    <div className="h-24 rounded-lg overflow-hidden relative border border-white/10">
                      <img 
                        src="https://i.ibb.co/fVJVch90/DA-OLLYS.jpg" 
                        alt="Canada Program Flyer" 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/featured:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-2 left-2 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-gold-500" />
                        <span className="text-[8px] font-black text-white uppercase tracking-widest">
                          Featured Package
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-extrabold text-white uppercase">
                        Canada Study & Work Program 🇨🇦
                      </div>
                      <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                        Secure Design DLI admissions. Expert proof of funds structure (₦45M+) & direct tuition deposit processing.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <div className="text-[9px] text-gold-500 font-black uppercase tracking-wider">
                      Intakes Open: May, Sept
                    </div>
                    <Link
                      to="/services/travels#canada-program-section"
                      className="inline-flex items-center gap-1.5 text-[10px] font-black text-white hover:text-[#D4A537] uppercase tracking-wider group/link transition-colors"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              id="nav-contact"
              to="/contact"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                isActive("/contact") ? "text-[#D4A537]" : "text-[#8A8FA3] hover:text-[#D4A537]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              id="nav-cta-book"
              to="/book/travels"
              className="hidden md:flex items-center gap-2 bg-gold-gradient text-navy-900 font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:brightness-105 active:scale-95 hover:shadow-gold-500/10 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              Book a Service
            </Link>

            {/* Mobile Nav Toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in Mobile Drawer */}
      <MobileNavTray isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
