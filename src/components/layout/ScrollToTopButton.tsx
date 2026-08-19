import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Back to top"
          className="fixed bottom-24 md:bottom-8 right-6 z-40 group flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 260 }}
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-gold-500/30 animate-ping opacity-60" />

          <span className="relative bg-gold-gradient text-navy-900 p-3.5 rounded-full shadow-lg flex items-center justify-center border border-white/20 transition-shadow duration-300 group-hover:shadow-gold-500/30 group-hover:shadow-xl">
            <ArrowUp className="w-5 h-5 stroke-[3]" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
