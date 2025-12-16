import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { WHATSAPP_NUMBER, COMPANY_LOGO } from '../constants';

const WhatsAppQuoteForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [details, setDetails] = useState('');

  // Trigger modal after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !service) return;

    const message = `*New Quote Request*\n\n*Name:* ${name}\n*Service:* ${service}\n*Details:* ${details || 'N/A'}\n\nI would like a free quote.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
    setIsClosed(true);
  };

  const handleClose = () => {
    setIsClosed(true);
  };

  // Only render if visible, not closed, and on mobile (md:hidden handled by parent wrapper class usually, but since this is fixed, we apply it here)
  if (isClosed || !isVisible) return null;

  return (
    <div className="md:hidden fixed inset-0 z-[100] flex items-center justify-center px-4">
        {/* Backdrop */}
        <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-500 animate-[fadeIn_0.5s_ease-out]"
            onClick={handleClose}
        ></div>

        {/* Modal Container */}
        <div className="relative w-full max-w-sm bg-neutral-900 border border-neutral-800 shadow-[0_0_50px_rgba(249,115,22,0.4)] animate-pop-in overflow-hidden rounded-lg">
            
            {/* Animated Top Border */}
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 animate-glow"></div>
            
            {/* Close Button */}
            <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-20 bg-neutral-800/50 p-1 rounded-full"
            >
                <X className="h-5 w-5" />
            </button>

            <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                             <img src={COMPANY_LOGO} alt="Logo" className="h-6 w-6 object-contain" />
                             <span className="font-oswald font-bold text-white uppercase tracking-wider">Avinya Ventures</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-wide uppercase font-oswald leading-none">
                            Get Instant Quote
                        </h2>
                        <p className="text-xs text-neutral-400 mt-1">Direct to WhatsApp Engineer</p>
                    </div>
                    <div className="bg-green-500/10 p-2.5 rounded-xl border border-green-500/20 animate-pulse">
                        <MessageCircle className="text-green-500 h-6 w-6" />
                    </div>
                </div>
        
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-neutral-950 border border-neutral-700 text-white px-4 py-3.5 rounded-md focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-neutral-600 font-medium"
                            required
                        />
                    </div>
                    
                    <div className="relative">
                        <select
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="w-full bg-neutral-950 border border-neutral-700 text-white px-4 py-3.5 rounded-md focus:border-orange-500 outline-none transition-all appearance-none"
                            required
                        >
                            <option value="" disabled className="text-neutral-600">Select Project Type</option>
                            <option value="Residential">Residential Build</option>
                            <option value="Commercial">Commercial Hub</option>
                            <option value="Industrial">Industrial Complex</option>
                            <option value="Renovation">Modern Renovation</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-orange-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>

                    <textarea
                        placeholder="Project Details (Optional)"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-700 text-white px-4 py-3.5 rounded-md focus:border-orange-500 outline-none transition-all resize-none placeholder:text-neutral-600"
                        rows={3}
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-md uppercase tracking-wider flex items-center justify-center transition-all shadow-lg shadow-green-900/20 active:scale-[0.98] mt-2"
                    >
                        <Send className="h-4 w-4 mr-2" />
                        Launch Request
                    </button>
                </form>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        </div>
    </div>
  );
};

export default WhatsAppQuoteForm;