import React, { useState } from "react";
import PageTransition from "../components/shared/PageTransition";
import { 
  Mail, Phone, MapPin, Clock, 
  Send, CheckCircle, MessageCircle, AlertCircle 
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Formspree action
      await fetch("https://formspree.io/f/mqakpeoz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_type: "General Contact Inquiry",
          ...formData
        })
      });

      // Simulated Privyr webhook
      try {
        await fetch("https://www.privyr.com/api/v1/incoming-leads/webhooks/placeholder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            notes: `Subject: ${formData.subject}, Message: ${formData.message}`
          })
        });
      } catch (err) {
        console.warn(err);
      }

      setSubmitted(true);
    } catch (err) {
      setError("An error occurred while transmitting your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = "https://wa.me/2348146497746?text=Hello%20Da%20Ollys%20Integrated%20Services%2C%20I%20have%20a%20question%20regarding%20your%20services.";

  return (
    <PageTransition>
      <div id="contact-page" className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* ================= HERO BAND ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-gold-500 uppercase tracking-widest block">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Contact Our <br />
            <span className="text-gold-gradient font-black">Help Desk</span>
          </h1>
          <p className="text-sm text-gray-400 font-semibold leading-relaxed">
            Get prompt feedback, custom hauling estimates, and immediate visa eligibility reviews.
          </p>
        </div>

        {/* ================= CONTACT SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Details column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-extrabold text-white uppercase tracking-wide">
                Direct Contact Points
              </h2>
              <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                Reach out via email, telephone, or drop by our head office in Port Harcourt. Our desk is open Monday to Saturday.
              </p>
            </div>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-3.5 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="p-2.5 bg-white/5 border border-white/10 text-white rounded-lg shrink-0">
                  <MapPin className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Corporate Headquarters</h3>
                  <p className="text-[11px] text-gray-400 font-bold mt-1">Port Harcourt, Rivers State, Nigeria</p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-3.5 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="p-2.5 bg-white/5 border border-white/10 text-white rounded-lg shrink-0">
                  <Phone className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Direct Telephone Hotline</h3>
                  <a href="tel:+2348146497746" className="text-[11px] text-gold-500 font-black mt-1 hover:underline block">
                    +234 (0) 814 649 7746
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="p-2.5 bg-white/5 border border-white/10 text-white rounded-lg shrink-0">
                  <Mail className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">General Inquiry Desk</h3>
                  <a href="mailto:info@daollysintegrated.com" className="text-[11px] text-gold-500 font-black mt-1 hover:underline block">
                    info@daollysintegrated.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="p-2.5 bg-white/5 border border-white/10 text-white rounded-lg shrink-0">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Office Hours</h3>
                  <p className="text-[11px] text-gray-400 font-bold mt-1">Monday - Saturday: 8:00 AM - 6:00 PM (GMT +1)</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Support Callout */}
            <div className="p-5 bg-gold-500/10 rounded-2xl border border-gold-500/20 text-center space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Need an Instant Rate Quote?</h4>
              <p className="text-[10px] text-gray-400 font-bold leading-relaxed">
                Connect directly with a cargo router or travels desk specialist on WhatsApp for quick estimates.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-extrabold py-3.5 rounded-full text-xs uppercase tracking-wider hover:bg-[#128C7E] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                Chat Instantly (WhatsApp)
              </a>
            </div>
          </div>

          {/* Contact Form column (7 cols) */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-extrabold text-white uppercase tracking-wide">
                  Message Dispatched!
                </h3>
                <p className="text-xs text-gray-400 font-semibold max-w-sm mx-auto leading-relaxed">
                  Thanks for reaching out! A specialist from our Port Harcourt desk has received your details and will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 border border-white/20 hover:bg-white/5 text-white font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-lg font-extrabold text-white uppercase tracking-wide">
                    Email Inquiry Form
                  </h2>
                  <p className="text-xs text-gray-400 font-semibold">
                    Submit your general inquiries or customized business requests.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={100}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={30}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +234 803 123 4567"
                      className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={254}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-300">Subject Category</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3.5 rounded-xl border border-white/10 outline-none focus:border-gold-500 [&>option]:bg-[#0C1B4D] [&>option]:text-white"
                    >
                      <option value="General Inquiry">General Corporate Inquiry</option>
                      <option value="Travels Option">Travels / Visa Program</option>
                      <option value="Deliveries Rate">Delivery / Parcel Dispatch</option>
                      <option value="Haulage Quote">Haulage Cargo Quotation</option>
                      <option value="Property Movement">Household Relocation</option>
                      <option value="Luxury Car Booking">Luxury Vehicle Rentals</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-300">Your Message</label>
                  <textarea
                    name="message"
                    required
                    maxLength={5000}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide detailed context regarding your request..."
                    rows={5}
                    className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold-gradient text-navy-900 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all shadow-md disabled:opacity-50"
                >
                  {loading ? "Transmitting message..." : "Transmit Message"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </PageTransition>
  );
}
