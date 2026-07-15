import { Link } from "react-router-dom";
import { Instagram, Facebook, Globe, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/daollysintegrated" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=61563884841935" },
    { icon: <Globe className="w-5 h-5" />, href: "https://tiktok.com/@daollysintegrated" }
  ];

  return (
    <footer id="app-footer" className="bg-[#081235] text-white border-t border-white/10 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Mission */}
        <div className="flex flex-col gap-5">
          {/* New branding image logo */}
          <Link to="/" className="flex items-center group py-1">
            <img
              src="https://i.ibb.co/YF8s8wjX/DAOLLYS-1.png"
              alt="DA OLLYS Integrated Services Ltd"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <p className="text-xs text-gray-400 leading-relaxed font-medium">
            Da Ollys Integrated Services Limited is a dynamic Nigerian-owned logistics and integrated service company committed to delivering world-class logistics, transportation, travel, and mobility solutions across Nigeria and around the world.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-gold-500/15 text-gray-400 hover:text-gold-300 rounded-full border border-white/10 transition-all hover:scale-110"
                aria-label={s.href.includes("instagram") ? "Instagram" : s.href.includes("facebook") ? "Facebook" : "TikTok"}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-sm font-extrabold text-gold-500 tracking-wider uppercase mb-5">
            Quick Navigation
          </h3>
          <ul className="flex flex-col gap-3 text-xs font-semibold text-gray-400">
            <li>
              <Link to="/" className="hover:text-gold-300 transition-colors">Homepage</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold-300 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold-300 transition-colors">Contact Support</Link>
            </li>
            <li>
              <Link to="/book/travels" className="hover:text-gold-300 transition-colors">Schedule Booking</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services Directory */}
        <div>
          <h3 className="text-sm font-extrabold text-gold-500 tracking-wider uppercase mb-5">
            Our Portfolios
          </h3>
          <ul className="flex flex-col gap-3 text-xs font-semibold text-gray-400">
            <li>
              <Link to="/services/travels" className="hover:text-gold-300 transition-colors">Travel Logistics</Link>
            </li>
            <li>
              <Link to="/services/deliveries" className="hover:text-gold-300 transition-colors">Local & International Delivery</Link>
            </li>
            <li>
              <Link to="/services/property-movement" className="hover:text-gold-300 transition-colors">Property Movement & Relocation</Link>
            </li>
            <li>
              <Link to="/services/haulage" className="hover:text-gold-300 transition-colors">Haulage Services</Link>
            </li>
            <li>
              <Link to="/services/luxury-rentals" className="hover:text-gold-300 transition-colors">Luxury Rentals</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Base Location */}
        <div className="flex flex-col gap-4 text-xs text-gray-400 font-semibold">
          <h3 className="text-sm font-extrabold text-gold-500 tracking-wider uppercase">
            Head Office
          </h3>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
            <span>Hitoga Plaza, Plot 2 Pius Wuchendu Street off NTA Road beside Timeless Supermarket, Portharcourt, Rivers State</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-gold-500 shrink-0" />
            <a href="tel:+2348146497746" className="hover:text-gold-300 transition-colors">+234 (0) 814 649 7746</a>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-gold-500 shrink-0" />
            <a href="mailto:info@daollysintegratedservice.com" className="hover:text-gold-300 transition-colors">info@daollysintegratedservice.com</a>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-gold-500 shrink-0" />
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-[10px] font-bold text-gray-500 tracking-wide">
        <div>
          &copy; {currentYear} DA OLLYS INTEGRATED SERVICES LTD. All Rights Reserved.
        </div>
        <div className="flex items-center gap-5">
          <Link to="/privacy-policy" className="hover:text-gold-300 transition-colors uppercase">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-gold-300 transition-colors uppercase">Terms of Service</Link>
          <Link to="/disclaimer" className="hover:text-gold-300 transition-colors uppercase">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
