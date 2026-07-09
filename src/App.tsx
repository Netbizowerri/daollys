import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import BottomActionBar from "./components/layout/BottomActionBar";

// Page Views
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";
import BookingPage from "./pages/BookingPage";
import ThankYou from "./pages/ThankYou";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

// Scroll to top utility on route transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Dynamic service pages */}
        <Route path="/services/:serviceSlug" element={<ServicePage />} />
        
        {/* Dynamic booking forms switchers */}
        <Route path="/book/:serviceSlug" element={<BookingPage />} />
        
        {/* Confirmation personalized thank you page */}
        <Route path="/thank-you" element={<ThankYou />} />
        
        {/* Static Legal Disclosures */}
        <Route path="/privacy-policy" element={<LegalPage />} />
        <Route path="/terms-and-conditions" element={<LegalPage />} />
        <Route path="/disclaimer" element={<LegalPage />} />
        
        {/* Graceful 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* App wrapper shell with Poppins sans-serif */}
      <div className="flex flex-col min-h-screen font-sans bg-[#0C1B4D] text-white overflow-x-hidden antialiased">
        {/* Sticky global navigation header */}
        <Header />

        {/* Core page routes viewports */}
        <main className="flex-grow">
          <AppRoutes />
        </main>

        {/* Global floating WhatsApp button */}
        <WhatsAppButton />

        {/* Persistent App-like Bottom Action bar (Only triggers on Mobile viewport) */}
        <BottomActionBar />

        {/* Corporate legal footer info */}
        <Footer />
      </div>
    </Router>
  );
}
