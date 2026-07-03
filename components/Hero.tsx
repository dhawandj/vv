import React from 'react';
import { ArrowRight, Calculator } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-[85vh] flex items-end overflow-hidden bg-slate-950 pb-8 pt-20 px-4">
      {/* Hero Background Canvas directly mimicking reference image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            // Beautiful twilight custom villa matching the design header element
            backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop")',
          }}
        />
        {/* Soft targeted edge overlays mirroring the UI chrome in WhatsApp Image 2026-06-22 at 12.46.57 PM_3.jpeg */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/50" />
      </div>

      {/* Main Glassmorphic Panel Overlay from image */}
      <div className="relative z-10 w-full max-w-md mx-auto bg-slate-950/40 backdrop-blur-md rounded-3xl p-6 border border-slate-800/40 shadow-2xl flex flex-col justify-between min-h-[320px]">
        
        {/* Exact Copy Text & Typography Framing from reference */}
        <div className="mt-2">
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-3">
            Building Your <br />
            <span className="text-white">Dream Home</span>
          </h1>
          <p className="text-slate-300 text-xs max-w-xs leading-relaxed opacity-90">
            From initial parameters to total key handover deployment, we maintain pristine architectural validation.
          </p>
        </div>

        {/* Action Blocks & Carousel Indicators stacked cleanly for thumbs */}
        <div className="mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => onNavigate(Page.PROJECTS)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold py-3 px-5 rounded-xl text-xs tracking-wide flex items-center justify-center transition-colors shadow-lg"
            >
              Explore Our Projects <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </button>
            
            <button 
              onClick={() => onNavigate(Page.PLANNING)}
              className="w-full bg-slate-900/80 hover:bg-slate-900 border border-slate-800 text-white font-bold py-3 px-5 rounded-xl text-xs tracking-wide flex items-center justify-center backdrop-blur-sm transition-all"
            >
              <Calculator className="mr-2 h-3.5 w-3.5 text-orange-500" />
              Cost Estimator
            </button>
          </div>

          {/* Micro Carousel Slide Marks centered exactly like image bottom center of hero block */}
          <div className="flex items-center justify-center space-x-1.5 pt-2">
            <span className="h-1 w-4 rounded-full bg-orange-500 transition-all duration-300"></span>
            <span className="h-1 w-1 rounded-full bg-slate-700 transition-all duration-300"></span>
            <span className="h-1 w-1 rounded-full bg-slate-700 transition-all duration-300"></span>
            <span className="h-1 w-1 rounded-full bg-slate-700 transition-all duration-300"></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;