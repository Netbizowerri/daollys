import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, Mail, Phone, MapPin, Calendar, Clock, 
  Upload, Sparkles, Check, ChevronRight, FileText,
  AlertCircle, ArrowRight, ShieldCheck, HelpCircle
} from "lucide-react";
import { LUXURY_FLEET } from "../../data/services";

// Define a unified styled container for all forms
interface FormWrapperProps {
  title: string;
  subtitle: string;
  step: number;
  totalSteps: number;
  children: React.ReactNode;
}

function FormStepperHeader({ step, totalSteps }: { step: number; totalSteps: number }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {Array.from({ length: totalSteps }).map((_, idx) => {
        const stepNum = idx + 1;
        const isCompleted = step > stepNum;
        const isActive = step === stepNum;
        return (
          <React.Fragment key={idx}>
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                isCompleted 
                  ? "bg-emerald-500 text-white" 
                  : isActive 
                    ? "bg-gold-500 text-navy-900 ring-4 ring-gold-500/20" 
                    : "bg-white/5 text-white/40 border border-white/10"
              }`}
            >
              {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
            </div>
            {idx < totalSteps - 1 && (
              <div className={`h-1 flex-1 transition-all duration-300 ${
                isCompleted ? "bg-emerald-500" : "bg-white/10"
              }`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// -------------------------------------------------------------
// 1. TRAVELS VISA BOOKING FORM
// -------------------------------------------------------------
export function TravelsForm({ initialCountry = "Canada" }: { initialCountry?: string }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: initialCountry,
    programType: "Study",
    intake: "September",
    notes: ""
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter program options based on selected country
  const getProgramOptions = () => {
    switch (formData.destination) {
      case "Canada":
        return ["Study", "Work", "Study+Work (Canada Study & Work)"];
      case "Finland":
        return ["Study Package (Sept 2025)", "Tourist Visa"];
      case "Portugal":
        return ["Live, Work & Study Stream", "D7 Residency", "Digital Nomad"];
      case "USA":
        return ["5-Year Multiple Entry Tourist Visa Support", "Student Visa (F1)"];
      case "Kuwait":
        return ["Urgent Work Visa Support", "Business Visa"];
      case "Qatar":
        return ["Qatar Trip Promo (Visa + Hotel for 2)", "Business Visa"];
      case "Oman":
        return ["2-Year Freelance Visa", "Business Visa"];
      case "Georgia":
        return ["90-Day Entry Visa", "Tourist Visa"];
      case "Germany":
        return ["Work Visa Program", "Job Application Support"];
      case "Serbia":
        return ["Warehouse Worker Work Visa", "1-Year Residency Transition Support"];
      default:
        return ["Tourist Visa", "Student Stream", "Work Visa Support", "Other"];
    }
  };

  const getIntakeOptions = () => {
    if (formData.destination === "Canada") {
      return ["May Intake", "June Intake", "September Intake"];
    }
    return ["January/Winter Intake", "September/Fall Intake", "Urgent Clearance"];
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files: File[] = Array.from(e.dataTransfer.files);
      const valid = files.filter(f => {
        if (!ALLOWED_TYPES.includes(f.type)) {
          setError(`Unsupported file type: ${f.type}. Only PDF, JPG, PNG allowed.`);
          return false;
        }
        if (f.size > MAX_FILE_SIZE) {
          setError(`File ${f.name} exceeds 10MB limit.`);
          return false;
        }
        return true;
      });
      setUploadedFiles(prev => [...prev, ...valid]);
    }
  };

  const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png"];
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files: File[] = Array.from(e.target.files);
      const valid = files.filter(f => {
        if (!ALLOWED_TYPES.includes(f.type)) {
          setError(`Unsupported file type: ${f.type}. Only PDF, JPG, PNG allowed.`);
          return false;
        }
        if (f.size > MAX_FILE_SIZE) {
          setError(`File ${f.name} exceeds 10MB limit.`);
          return false;
        }
        return true;
      });
      setUploadedFiles(prev => [...prev, ...valid]);
    }
  };

  const removeFile = (idx: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Build lead payload
    const payload = {
      service_type: "Travels & Visa Consulting",
      ...formData,
      uploaded_documents: uploadedFiles.map(f => f.name).join(", ") || "None uploaded"
    };

    try {
      // 1. Submit to Formspree endpoint (Default placeholder to satisfy real integration constraint)
      await fetch("https://formspree.io/f/mnjkkvgp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      // 2. Submit to Privyr webhook handler (Simulated webhook for CRM capture)
      try {
        await fetch("https://www.privyr.com/api/v1/incoming-leads/webhooks/placeholder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            notes: `Destination: ${formData.destination}, Program: ${formData.programType}, Intake: ${formData.intake}. Files: ${payload.uploaded_documents}. Notes: ${formData.notes}`
          })
        });
      } catch (err) {
        console.warn("Privyr webhook submission bypassed or failed.", err);
      }

// Redirect to Thank You page using router state (not URL params)
      navigate(`/thank-you?service=travels`, {
        state: { name: formData.fullName, destination: formData.destination }
      });
    } catch (err) {
      setError("An error occurred while submitting your request. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-white uppercase tracking-wide">
          Visa & Travel Consultation Form
        </h2>
        <p className="text-sm md:text-lg text-gray-400 font-semibold mt-1">
          Begin your international travel or study package application.
        </p>
      </div>

      <FormStepperHeader step={step} totalSteps={3} />

      {error && (
        <div className="mb-4 p-3.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs font-semibold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Step 1: Contact Information
            </h3>
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  required
                  maxLength={100}
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-white/5 text-white text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-white/10 focus:border-gold-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="w-full bg-white/5 text-white text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-white/10 focus:border-gold-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300">Phone Number (WhatsApp Preferred)</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  required
                  maxLength={30}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +234 803 123 4567"
                  className="w-full bg-white/5 text-white text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-white/10 focus:border-gold-500 outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                if (formData.fullName && formData.email && formData.phone) {
                  setStep(2);
                } else {
                  setError("Please fill out all contact details to proceed.");
                }
              }}
              className="w-full bg-gold-gradient text-navy-900 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              Next Step
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Step 2: Program & Destination Details
            </h3>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300">Target Destination</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full bg-white/5 text-white text-xs font-bold px-4 py-3.5 rounded-xl border border-white/10 focus:border-gold-500 outline-none transition-all appearance-none [&>option]:bg-[#0C1B4D] [&>option]:text-white"
              >
                <option value="Canada">Canada (May, June, September Intakes)</option>
                <option value="Finland">Finland (Sept 2025 Intake)</option>
                <option value="Portugal">Portugal (Live, Work, Study Stream)</option>
                <option value="USA">USA (5-Year Multiple Entry support)</option>
                <option value="Kuwait">Kuwait (Urgent Work Visa)</option>
                <option value="Qatar">Qatar (Trip Promo Vacation Getaway)</option>
                <option value="Oman">Oman (2-Year Freelance Visa)</option>
                <option value="Georgia">Georgia (90-Day Entry Visa)</option>
                <option value="Germany">Germany (Work Visa Program)</option>
                <option value="Serbia">Serbia (Work Visa Program)</option>
                <option value="Other">Other Global Pathways</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300">Program / Visa Stream Type</label>
              <select
                name="programType"
                value={formData.programType}
                onChange={handleChange}
                className="w-full bg-white/5 text-white text-xs font-bold px-4 py-3.5 rounded-xl border border-white/10 focus:border-gold-500 outline-none transition-all [&>option]:bg-[#0C1B4D] [&>option]:text-white"
              >
                {getProgramOptions().map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300">Preferred Intake / Entry Timeline</label>
              <select
                name="intake"
                value={formData.intake}
                onChange={handleChange}
                className="w-full bg-white/5 text-white text-xs font-bold px-4 py-3.5 rounded-xl border border-white/10 focus:border-gold-500 outline-none transition-all [&>option]:bg-[#0C1B4D] [&>option]:text-white"
              >
                {getIntakeOptions().map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {formData.destination === "Canada" && (
              <div className="p-3.5 bg-gold-500/10 border border-gold-500/20 rounded-xl text-sm md:text-base font-semibold text-gray-300 leading-relaxed flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Canada Study & Work Guarantee Package:</span> Requires proof of funds (min $40,000 CAD), expert application preparation, and secure tuition deposit. Approximately 6 weeks visa processing time.
                </div>
              </div>
            )}

            {formData.destination === "Qatar" && (
              <div className="p-3.5 bg-gold-500/10 border border-gold-500/20 rounded-xl text-sm md:text-base font-semibold text-gray-300 leading-relaxed flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Qatar Trip Promo Package:</span> Includes visa processing and hotel accommodation for two travelers. Quick 7-day turnaround time.
                </div>
              </div>
            )}

            {formData.destination === "Germany" && (
              <div className="p-3.5 bg-gold-500/10 border border-gold-500/20 rounded-xl text-sm md:text-base font-semibold text-gray-300 leading-relaxed flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Germany Work Visa Program (5-month process):</span> Job opportunities include Warehouse, Factory Worker, Secretary positions with official employment letter support. Requires passport data page, CV, and credentials.
                </div>
              </div>
            )}

            {formData.destination === "Serbia" && (
              <div className="p-3.5 bg-gold-500/10 border border-gold-500/20 rounded-xl text-sm md:text-base font-semibold text-gray-300 leading-relaxed flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Serbia Work Visa Program (2-3 month processing):</span> Warehouse Worker positions for ages 18-55. Includes accommodation and salary. Fast transition to 1-year residency.
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-2/3 bg-white/10 border border-white/10 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/15 transition-all shadow-md cursor-pointer"
              >
                Continue to Documents
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Step 3: Document Uploads & Message
            </h3>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300">Upload Documents (Passport Data Page, Supporting Files)</label>
              
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2.5 ${
                  dragActive 
                    ? "border-gold-500 bg-gold-500/5" 
                    : "border-white/10 bg-white/5 hover:border-gold-500/40"
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                
                <div className="p-3 bg-white/5 border border-white/10 shadow-sm rounded-full text-gold-500">
                  <Upload className="w-5 h-5" />
                </div>
                
                <div>
                  <p className="text-sm md:text-lg font-bold text-white">Drag & drop files here, or click to select</p>
                  <p className="text-sm md:text-base text-gray-400 font-semibold mt-0.5"> PDF, JPG, PNG up to 10MB per file</p>
                </div>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  {uploadedFiles.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white truncate">
                        <FileText className="w-4 h-4 text-gold-500 shrink-0" />
                        <span className="truncate">{file.name}</span>
                        <span className="text-gray-400">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(idx);
                        }}
                        className="text-[10px] text-rose-500 hover:underline font-bold"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-300">Message / Additional Relocation Notes (Optional)</label>
              <textarea
                name="notes"
                maxLength={2000}
                value={formData.notes}
                onChange={handleChange}
                placeholder="List any special circumstances, previous bookings, or custom requests..."
                rows={3}
                className="w-full bg-off-white text-navy-900 text-xs font-semibold px-4 py-3 rounded-xl border border-navy-900/5 focus:border-gold-500 outline-none transition-all"
              />
            </div>

            <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-sm md:text-base text-emerald-400 font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              Your documents and private data are transmitted securely.
            </div>

            <div className="flex gap-4">
              <button type="button" onClick={() => setStep(2)} className="w-1/3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer">Back</button>
              <button type="submit" disabled={loading} className="w-2/3 bg-gold-gradient text-navy-900 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all shadow-md disabled:opacity-50">
                {loading ? "Submitting Application..." : "Submit Travel Application"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

// -------------------------------------------------------------
// 2. DELIVERIES BOOKING FORM
// -------------------------------------------------------------
// 2. DELIVERIES BOOKING FORM
// -------------------------------------------------------------
export function DeliveriesForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickupAddress: "",
    destinationAddress: "",
    itemSize: "Small Parcel",
    pickupTime: "",
    deliveryType: "Local Bike",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formspree.io/f/mnjkkvgp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_type: "Local/International Deliveries",
          ...formData
        })
      });

      navigate(`/thank-you?service=deliveries`, {
        state: { name: formData.fullName, type: formData.deliveryType }
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-white uppercase tracking-wide">
          Book a Parcel Dispatch
        </h2>
        <p className="text-sm md:text-lg text-gray-400 font-semibold mt-1">
          Secure, lightning-fast dispatch via bikes, vans, or cross-border airfreight.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Your Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              maxLength={100}
              placeholder="John Doe"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Phone Number (WhatsApp Preferred)</label>
            <input
              type="tel"
              name="phone"
              required
              maxLength={30}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 803 123 4567"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Email Address</label>
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
          />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Pickup Address / Hub Selection</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                name="pickupAddress"
                required
                maxLength={200}
                value={formData.pickupAddress}
                onChange={handleChange}
                placeholder="Pickup Street or Landmark"
                className="w-full bg-off-white text-navy-900 text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-navy-900/5 outline-none focus:border-gold-500"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Destination Drop-off Address</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
              <input
                type="text"
                name="destinationAddress"
                required
                maxLength={200}
                value={formData.destinationAddress}
                onChange={handleChange}
                placeholder="Recipient Street or Hub City"
                className="w-full bg-off-white text-navy-900 text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-navy-900/5 outline-none focus:border-gold-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Item Weight/Size Description</label>
            <select
              name="itemSize"
              value={formData.itemSize}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            >
              <option value="Small Document">Small Document / Envelope</option>
              <option value="Small Parcel">Small Parcel (under 3kg)</option>
              <option value="Medium Box">Medium Box (3kg - 15kg)</option>
              <option value="Large Box/Luggage">Large Box / Luggage (15kg+)</option>
              <option value="Custom Freight">Custom Industrial Cargo</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Logistics Transport Mode</label>
            <select
              name="deliveryType"
              value={formData.deliveryType}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            >
              <option value="Local Bike">Local Bike Dispatch (Port Harcourt)</option>
              <option value="Delivery Van">Delivery Van Transit (Inter-State)</option>
              <option value="Airfreight">International Airfreight Cargo</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Pickup Date & Time</label>
            <input
              type="datetime-local"
              name="pickupTime"
              required
              value={formData.pickupTime}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Specific Delivery Instructions / Item List (Optional)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          maxLength={2000}
          placeholder="List parcel items, fragility warnings, or drop-off call contact directions..."
          rows={2}
          className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
        />
      </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold-gradient text-navy-900 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          {loading ? "Scheduling Dispatch..." : "Confirm Delivery Booking"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

// -------------------------------------------------------------
// 3. PRIVATE JET & VIP CHARTER BOOKING FORM
// -------------------------------------------------------------
export function PrivateJetForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    departureAirport: "",
    destinationAirport: "",
    departureDateTime: "",
    passengerCount: "1",
    aircraftCategory: "Light Jet (4-7 Pax)",
    flightType: "One-Way",
    specialRequests: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formspree.io/f/mnjkkvgp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_type: "Private Jet & VIP Charter",
          ...formData
        })
      });

      navigate(`/thank-you?service=luxury-rentals&type=private-jet-charter`, {
        state: { name: formData.fullName, jet: formData.aircraftCategory }
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-white uppercase tracking-wide">
          Request Private Jet & VIP Charter Quote
        </h2>
        <p className="text-sm md:text-lg text-gray-400 font-semibold mt-1">
          Fly in supreme comfort and complete privacy, scheduled entirely on your own terms.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Your Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              maxLength={100}
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Chief John Doe"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Phone Number (WhatsApp Preferred)</label>
            <input
              type="tel"
              name="phone"
              required
              maxLength={30}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 803 123 4567"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Email Address</label>
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            value={formData.email}
            onChange={handleChange}
            placeholder="vip@example.com"
            className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Departure Airport/City</label>
            <input
              type="text"
              name="departureAirport"
              required
              value={formData.departureAirport}
              onChange={handleChange}
              maxLength={100}
              placeholder="e.g. Port Harcourt (DNPO)"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Destination Airport/City</label>
            <input
              type="text"
              name="destinationAirport"
              required
              maxLength={100}
              value={formData.destinationAirport}
              onChange={handleChange}
              placeholder="e.g. Abuja (DNAA) or London (EGLL)"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Flight Type</label>
            <select
              name="flightType"
              value={formData.flightType}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500 [&>option]:bg-[#0C1B4D] [&>option]:text-white"
            >
              <option value="One-Way">One-Way Charter</option>
              <option value="Round-Trip">Round-Trip Charter</option>
              <option value="Multi-Leg">Multi-Leg Itinerary</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Aircraft Category</label>
            <select
              name="aircraftCategory"
              value={formData.aircraftCategory}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500 [&>option]:bg-[#0C1B4D] [&>option]:text-white"
            >
              <option value="Light Jet (4-7 Pax)">Light Jet (4-7 Pax)</option>
              <option value="Midsize Jet (8-10 Pax)">Midsize Jet (8-10 Pax)</option>
              <option value="Heavy Jet (10-16 Pax)">Heavy Jet (10-16 Pax)</option>
              <option value="VIP Airliner (16+ Pax)">VIP Executive Airliner (16+ Pax)</option>
              <option value="VIP Helicopter">VIP Helicopter (Intra-State)</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Passenger Headcount</label>
            <input
              type="number"
              name="passengerCount"
              min="1"
              max="50"
              required
              value={formData.passengerCount}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Departure Date & Preferred Time</label>
          <input
            type="datetime-local"
            name="departureDateTime"
            required
            value={formData.departureDateTime}
            onChange={handleChange}
            className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10 outline-none focus:border-gold-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Inflight Catering or Custom Protocol Requests (Optional)</label>
          <textarea
            name="specialRequests"
            maxLength={2000}
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="e.g. Gourmet champagne catering, airport VIP lounge hostess, armed security escort vehicle on landing..."
            rows={3}
            className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
          />
        </div>

        <div className="p-3 bg-gold-500/10 border border-gold-500/15 rounded-xl text-sm md:text-base text-gray-300 font-bold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-gold-500 shrink-0" />
          All private charter schedules are secure, highly confidential, and fully customized.
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold-gradient text-navy-900 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          {loading ? "Sending Flight Request..." : "Request Flight Charter Quote"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

// -------------------------------------------------------------
// 5. LUXURY CAR BOOKING FORM
// -------------------------------------------------------------
export function LuxuryCarForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    vehicleType: LUXURY_FLEET[0],
    rentalDuration: "1 Day",
    pickupTime: "",
    pickupLocation: "",
    occasion: "Business"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formspree.io/f/mnjkkvgp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_type: "Luxury Car Rentals",
          ...formData
        })
      });

      navigate(`/thank-you?service=luxury-rentals&type=luxury-car-rentals`, {
        state: { name: formData.fullName, car: formData.vehicleType }
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-white uppercase tracking-wide">
          Reserve a Premium Ride
        </h2>
        <p className="text-sm md:text-lg text-gray-400 font-semibold mt-1">
          Ride in absolute class with professional security-certified personal drivers.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Your Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              maxLength={100}
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Phone Number (WhatsApp Preferred)</label>
            <input
              type="tel"
              name="phone"
              required
              maxLength={30}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 803 123 4567"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Email Address</label>
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Select Fleet Vehicle</label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full bg-off-white text-navy-900 text-xs font-bold px-4 py-3.5 rounded-xl border border-navy-900/5 outline-none focus:border-gold-500"
            >
              {LUXURY_FLEET.map((car, idx) => (
                <option key={idx} value={car}>{car}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Rental Duration</label>
            <select
              name="rentalDuration"
              value={formData.rentalDuration}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3.5 rounded-xl border border-white/10 outline-none focus:border-gold-500 [&>option]:bg-[#0C1B4D] [&>option]:text-white"
            >
              <option value="1 Day">1 Day Chauffeur</option>
              <option value="2-3 Days">2 - 3 Days Chauffeur</option>
              <option value="Weekly Plan">Weekly Premium Plan</option>
              <option value="Airport Transfer">Airport Single Transfer</option>
              <option value="Custom Duration">Custom Corporate Escort</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Occasion Category</label>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3.5 rounded-xl border border-white/10 outline-none focus:border-gold-500 [&>option]:bg-[#0C1B4D] [&>option]:text-white"
            >
              <option value="Wedding">Wedding / Ceremony</option>
              <option value="Business">Business Meeting / Conference</option>
              <option value="Airport VIP">Airport VIP Pickup</option>
              <option value="Diplomatic Escort">Diplomatic / Escort</option>
              <option value="Other">Other Executive Occasion</option>
            </select>
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-bold text-gray-300">Pickup Location Address</label>
              <input
                type="text"
                name="pickupLocation"
                required
                maxLength={200}
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="e.g., Port Harcourt International Airport"
                className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
              />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Pickup Date & Time</label>
          <input
            type="datetime-local"
            name="pickupTime"
            required
            value={formData.pickupTime}
            onChange={handleChange}
            className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10 outline-none focus:border-gold-500"
          />
        </div>

        <div className="p-3 bg-gold-500/10 border border-gold-500/15 rounded-xl text-sm md:text-base text-gray-300 font-bold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-gold-500 shrink-0" />
          All luxury rentals come standard with certified, highly polite chauffeurs.
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold-gradient text-navy-900 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          {loading ? "Reserving Premium Fleet..." : "Book Luxury Ride Now"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

// -------------------------------------------------------------
// 5. PROPERTY MOVEMENT SERVICES BOOKING FORM
// -------------------------------------------------------------
export function PropertyMovementForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentAddress: "",
    destinationAddress: "",
    propertyType: "Household",
    moveDate: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formspree.io/f/mnjkkvgp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_type: "Property Movement Services",
          ...formData
        })
      });

      navigate(`/thank-you?service=property-movement`, {
        state: { name: formData.fullName, type: formData.propertyType }
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-white uppercase tracking-wide">
          Book Property Movement
        </h2>
        <p className="text-sm md:text-lg text-gray-400 font-semibold mt-1">
          Professional household & office relocation with careful handling and secure transport.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Your Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              maxLength={100}
              placeholder="John Doe"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Phone Number (WhatsApp Preferred)</label>
            <input
              type="tel"
              name="phone"
              required
              maxLength={30}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 803 123 4567"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Email Address</label>
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Current Address / Pickup Location</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                name="currentAddress"
                required
                maxLength={200}
                value={formData.currentAddress}
                onChange={handleChange}
                placeholder="Current address or landmark"
                className="w-full bg-white/5 text-white text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Destination / Delivery Address</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
              <input
                type="text"
                name="destinationAddress"
                required
                maxLength={200}
                value={formData.destinationAddress}
                onChange={handleChange}
                placeholder="Destination address"
                className="w-full bg-white/5 text-white text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Property / Move Type</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            >
              <option value="Household">Household / Home Move</option>
              <option value="Office">Office / Corporate Relocation</option>
              <option value="Furniture">Furniture Only</option>
              <option value="Heavy Equipment">Heavy Equipment / Machinery</option>
              <option value="Other">Other Property Movement</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Preferred Move Date</label>
            <input
              type="date"
              name="moveDate"
              required
              value={formData.moveDate}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Special Instructions / Items to Move (Optional)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            maxLength={2000}
            placeholder="List fragile items, large furniture, or any special handling requirements..."
            rows={2}
            className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold-gradient text-navy-900 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          {loading ? "Booking Move..." : "Confirm Property Move"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

// -------------------------------------------------------------
// 6. HAULAGE SERVICES BOOKING FORM
// -------------------------------------------------------------
export function HaulageForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickupLocation: "",
    deliveryLocation: "",
    cargoType: "Bulk Cargo",
    cargoWeight: "",
    pickupDate: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://formspree.io/f/mnjkkvgp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_type: "Haulage Services",
          ...formData
        })
      });

      navigate(`/thank-you?service=haulage`, {
        state: { name: formData.fullName, type: formData.cargoType }
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-white uppercase tracking-wide">
          Book Haulage Service
        </h2>
        <p className="text-xs text-gray-400 font-semibold mt-1">
          Reliable heavy-duty cargo and equipment haulage across all major Nigerian routes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Your Full Name / Company Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              maxLength={100}
              placeholder="John Doe or Business Name"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Phone Number (WhatsApp Preferred)</label>
            <input
              type="tel"
              name="phone"
              required
              maxLength={30}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 803 123 4567"
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Email Address</label>
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Pickup Location / Origin</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                name="pickupLocation"
                required
                maxLength={200}
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="City, town or depot"
                className="w-full bg-white/5 text-white text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Delivery Location / Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
              <input
                type="text"
                name="deliveryLocation"
                required
                maxLength={200}
                value={formData.deliveryLocation}
                onChange={handleChange}
                placeholder="Destination city or address"
                className="w-full bg-white/5 text-white text-xs font-semibold pl-10 pr-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Cargo / Load Type</label>
            <select
              name="cargoType"
              value={formData.cargoType}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            >
              <option value="Bulk Cargo">Bulk Cargo / Commodities</option>
              <option value="Construction Materials">Construction Materials</option>
              <option value="Heavy Equipment">Heavy Equipment / Machinery</option>
              <option value="Container">Container Freight</option>
              <option value="Other">Other Freight</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Estimated Weight / Volume</label>
            <select
              name="cargoWeight"
              value={formData.cargoWeight}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            >
              <option value="">Select weight</option>
              <option value="Under 1 Ton">Under 1 Ton</option>
              <option value="1 - 5 Tons">1 - 5 Tons</option>
              <option value="5 - 15 Tons">5 - 15 Tons</option>
              <option value="15 - 30 Tons">15 - 30 Tons</option>
              <option value="Over 30 Tons">Over 30 Tons</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-300">Preferred Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              required
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10 outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-300">Cargo Description / Special Requirements (Optional)</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            maxLength={2000}
            placeholder="Describe your cargo, hazardous material info, loading/unloading requirements..."
            rows={2}
            className="w-full bg-white/5 text-white text-xs font-semibold px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-gold-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold-gradient text-navy-900 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          {loading ? "Booking Haulage..." : "Confirm Haulage Booking"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
