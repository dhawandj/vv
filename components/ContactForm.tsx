import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message template with clean formatting
    const line1 = `*New Project Inquiry*`;
    const line2 = `*Name:* ${formData.name}`;
    const line3 = `*Phone:* ${formData.phone}`;
    const line4 = `*Email:* ${formData.email}`;
    const line5 = `*Service:* ${formData.service || 'Not Specified'}`;
    const line6 = `*Brief:* ${formData.message}`;
    
    const fullText = `${line1}\n\n${line2}\n${line3}\n${line4}\n${line5}\n\n${line6}`;
    
    // Clean phone constant format to numeric digits for URL processing
    const cleanWhatsAppNumber = COMPANY_PHONE.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(fullText)}`;
    
    setIsSubmitted(true);
    
    // Open the WhatsApp redirection pipeline
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
    }, 1200);

    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white py-20 relative overflow-hidden">
      {/* Premium background decoration glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
              <div className="mb-10">
                 <h4 className="text-orange-600 font-bold uppercase tracking-widest mb-2 text-xs">Connect</h4>
                 <h2 className="text-4xl md:text-5xl font-oswald font-black text-neutral-900 mb-6 uppercase tracking-tight">Start Your Project</h2>
                 <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                     Ready to build the extraordinary? Our team is on standby to discuss your architectural vision.
                 </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-xl group-hover:border-orange-600 group-hover:bg-orange-50/30 transition-all duration-300">
                     <Phone className="h-5 w-5 text-neutral-800 group-hover:text-orange-600" />
                  </div>
                  <div className="ml-5">
                    <p className="font-oswald text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Call Us</p>
                    <p className="text-neutral-800 font-bold text-sm mt-0.5">{COMPANY_PHONE}</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-xl group-hover:border-orange-600 group-hover:bg-orange-50/30 transition-all duration-300">
                     <Mail className="h-5 w-5 text-neutral-800 group-hover:text-orange-600" />
                  </div>
                  <div className="ml-5">
                    <p className="font-oswald text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-neutral-800 font-bold text-sm mt-0.5">{COMPANY_EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-xl group-hover:border-orange-600 group-hover:bg-orange-50/30 transition-all duration-300">
                     <MapPin className="h-5 w-5 text-neutral-800 group-hover:text-orange-600" />
                  </div>
                  <div className="ml-5">
                    <p className="font-oswald text-[10px] font-bold text-neutral-400 uppercase tracking-widest">HQ Location</p>
                    <p className="text-neutral-800 font-bold text-sm mt-0.5">{COMPANY_ADDRESS}</p>
                  </div>
                </div>
              </div>
          </div>

          {/* Form Side */}
          <div className="bg-neutral-50/60 backdrop-blur-md p-8 md:p-10 border border-neutral-200 rounded-2xl relative shadow-sm">
             <div className="absolute top-0 left-0 w-2 h-20 bg-orange-600 rounded-tl-2xl"></div>
            
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                <div className="bg-orange-50 p-5 rounded-full mb-4 border border-orange-200 shadow-sm">
                  <Send className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-oswald font-black text-neutral-900 mb-1 uppercase tracking-wide">Routing to WhatsApp</h3>
                <p className="text-neutral-500 text-xs">Opening secure transmission channel...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 group-focus-within:text-orange-600 transition-colors">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-neutral-200 text-neutral-900 px-4 py-3.5 rounded-xl focus:border-orange-600 focus:ring-1 focus:ring-orange-600 outline-none transition-all placeholder:text-neutral-300 text-sm font-medium"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 group-focus-within:text-orange-600 transition-colors">Contact Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-neutral-200 text-neutral-900 px-4 py-3.5 rounded-xl focus:border-orange-600 focus:ring-1 focus:ring-orange-600 outline-none transition-all placeholder:text-neutral-300 text-sm font-medium"
                      placeholder="Mobile number"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 group-focus-within:text-orange-600 transition-colors">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-neutral-200 text-neutral-900 px-4 py-3.5 rounded-xl focus:border-orange-600 focus:ring-1 focus:ring-orange-600 outline-none transition-all placeholder:text-neutral-300 text-sm font-medium"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="group">
                   <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 group-focus-within:text-orange-600 transition-colors">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-neutral-200 text-neutral-800 px-4 py-3.5 rounded-xl focus:border-orange-600 outline-none transition-all text-sm font-medium"
                  >
                    <option value="">Select service type...</option>
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Commercial Renovation">Commercial Renovation</option>
                    <option value="Industrial Blueprint">Industrial Project</option>
                    <option value="Custom Design Plans">Other Design Inquiry</option>
                  </select>
                </div>

                <div className="group">
                   <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2 group-focus-within:text-orange-600 transition-colors">Project Brief</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-neutral-200 text-neutral-900 px-4 py-3.5 rounded-xl focus:border-orange-600 focus:ring-1 focus:ring-orange-600 outline-none transition-all resize-none placeholder:text-neutral-300 text-sm font-medium"
                    placeholder="Describe your vision..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-oswald font-bold text-sm py-4 uppercase tracking-wider hover:bg-orange-700 transition-all flex items-center justify-center rounded-xl shadow-md shadow-orange-600/10 group"
                >
                  Initiate via WhatsApp <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;