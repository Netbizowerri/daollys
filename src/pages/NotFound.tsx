import { Link } from "react-router-dom";
import { HelpCircle, ArrowLeft } from "lucide-react";
import PageTransition from "../components/shared/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div id="not-found-view" className="max-w-md mx-auto text-center py-16 space-y-6">
        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white mx-auto">
          <HelpCircle className="w-8 h-8 text-gold-500" />
        </div>
        <h1 className="text-2xl font-black text-white uppercase tracking-tight">
          Page Not Located
        </h1>
        <p className="text-xs text-gray-400 font-semibold leading-relaxed">
          The requested page route does not exist in our corporate directory structure.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white hover:bg-white/10 font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer">
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </Link>
      </div>
    </PageTransition>
  );
}
