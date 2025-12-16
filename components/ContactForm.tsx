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
    console.log("Form Submitted", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-neutral-950 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
              <div className="mb-10">
                 <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-2">Connect</h4>
                 <h2 className="text-5xl font-oswald font-bold text-white mb-6 uppercase">Start Your Project</h2>
                 <p className="text-neutral-400 text-lg leading-relaxed">
                     Ready to build the extraordinary? Our team is on standby to discuss your architectural vision.
                 </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-neutral-900 p-4 border border-neutral-800 group-hover:border-orange-500 transition-colors">
                     <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-6">
                    <p className="font-oswald text-lg text-white uppercase tracking-wide">Call Us</p>
                    <p className="text-neutral-400">{COMPANY_PHONE}</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-neutral-900 p-4 border border-neutral-800 group-hover:border-orange-500 transition-colors">
                     <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-6">
                    <p className="font-oswald text-lg text-white uppercase tracking-wide">Email Us</p>
                    <p className="text-neutral-400">{COMPANY_EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-neutral-900 p-4 border border-neutral-800 group-hover:border-orange-500 transition-colors">
                     <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-6">
                    <p className="font-oswald text-lg text-white uppercase tracking-wide">HQ Location</p>
                    <p className="text-neutral-400">{COMPANY_ADDRESS}</p>
                  </div>
                </div>
              </div>
          </div>

          {/* Form Side */}
          <div className="bg-neutral-900/50 backdrop-blur-md p-8 md:p-10 border border-neutral-800 relative">
             <div className="absolute top-0 left-0 w-2 h-20 bg-orange-600"></div>
            
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-enter">
                <div className="bg-green-500/20 p-6 rounded-full mb-6 border border-green-500/50">
                  <Send className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-3xl font-oswald font-bold text-white mb-2 uppercase">Transmission Sent</h3>
                <p className="text-neutral-400">Our engineers will analyze your request.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-orange-500 transition-colors">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-4 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-neutral-700"
                      placeholder="ENTER NAME"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-orange-500 transition-colors">Contact Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-4 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-neutral-700"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-orange-500 transition-colors">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-4 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-neutral-700"
                    placeholder="CONTACT@EXAMPLE.COM"
                  />
                </div>

                <div className="group">
                   <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-orange-500 transition-colors">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-4 focus:border-orange-500 outline-none transition-all"
                  >
                    <option value="">SELECT SERVICE TYPE...</option>
                    <option value="Residential">Residential Construction</option>
                    <option value="Commercial">Commercial Renovation</option>
                    <option value="Industrial">Industrial Project</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div className="group">
                   <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-orange-500 transition-colors">Project Brief</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-4 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all resize-none placeholder:text-neutral-700"
                    placeholder="DESCRIBE YOUR VISION..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-oswald font-bold text-lg py-4 uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center group"
                >
                  Initiate Request <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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