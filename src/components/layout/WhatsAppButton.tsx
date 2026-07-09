import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // On desktop, keep it visible. On mobile, toggle visibility based on scroll direction.
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scrolling down - hide
          setVisible(false);
        } else {
          // Scrolling up - show
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/2348146497746?text=Hello%20Da%20Ollys%20Integrated%20Services%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          id="whatsapp-floating-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 md:bottom-8 left-6 z-40 flex items-center gap-2 group"
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: -20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Chat on WhatsApp"
        >
          {/* Pulsing Glow Rings */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-gold-500/30 animate-ping opacity-75"></span>
          
          <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:bg-[#128C7E]">
            <Phone className="w-6 h-6 fill-white stroke-none" />
          </div>

          <div className="hidden md:block bg-navy-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-16 shadow-md border border-white/10 whitespace-nowrap">
            Usually replies instantly
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
