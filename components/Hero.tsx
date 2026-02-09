import React from 'react';
import { ArrowRight, ChevronDown, Calculator } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden bg-neutral-950">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-0">
         {/* Base Image */}
        <div 
          className="absolute inset-0 opacity-40 bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2800&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />
        
        {/* Decorative Grid */}
        <div 
            className="absolute inset-0 opacity-10"
            style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-0">
        <div className="flex flex-col md:flex-row items-center">
            
            {/* Text Content */}
            <div className="w-full md:w-2/3 perspective-1000">
                <div className="transform rotate-y-6 md:rotate-y-12 transition-transform duration-700 hover:rotate-y-0 preserve-3d">
                    <div className="inline-block bg-orange-600 text-black font-bold px-3 py-1 mb-4 text-sm uppercase tracking-widest transform translate-z-10 shadow-lg">
                        Future of Construction
                    </div>
                    <h1 className="text-5xl md:text-8xl font-oswald font-bold leading-none mb-6 text-white uppercase drop-shadow-2xl">
                        Turning <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Ideas</span> <br />
                        To Reality
                    </h1>
                    <p className="text-lg md:text-xl capitalize text-neutral-300 mb-8 max-w-lg leading-relaxed border-l-4 border-orange-500 pl-6 bg-black/30 backdrop-blur-sm py-2">
                        “From planning and guidance to execution, we focus on clarity, coordination, and long-term value.”
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-5">
                        <button 
                        onClick={() => onNavigate(Page.PROJECTS)}
                        className="group relative bg-white text-black font-bold py-4 px-10 overflow-hidden uppercase tracking-wider"
                        >
                            <span className="relative z-10 flex items-center group-hover:text-white transition-colors">
                                View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                            </span>
                            <div className="absolute inset-0 bg-orange-600 transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                        </button>
                        
                        <button 
                        onClick={() => onNavigate(Page.PLANNING)}
                        className="group flex items-center justify-center border border-white/30 hover:border-orange-500 text-white hover:text-orange-500 font-bold py-4 px-10 uppercase tracking-wider backdrop-blur-sm transition-all"
                        >
                            <Calculator className="mr-2 h-5 w-5" />
                            Construction Planner
                        </button>
                    </div>
                </div>
            </div>

            {/* 3D Visual Element (Hidden on mobile mostly) */}
            <div className="hidden md:block w-1/3 perspective-1000">
                 <div className="relative w-64 h-80 bg-gradient-to-br from-neutral-800 to-black border border-neutral-700 transform rotate-y-[-20deg] rotate-x-[10deg] shadow-[20px_20px_60px_rgba(0,0,0,0.5)] flex items-center justify-center animate-float">
                    <div className="absolute inset-2 border border-orange-500/30"></div>
                    <div className="text-center p-6">
                        <div className="text-6xl font-bold text-neutral-800 select-none">3D</div>
                        <div className="text-orange-500 text-xs tracking-[0.3em] mt-2 uppercase">Blueprint</div>
                    </div>
                    {/* Floating layers */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-600/20 backdrop-blur-md border border-orange-500 transform translate-z-20 animate-float" style={{animationDelay: '1s'}}></div>
                    <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-neutral-800/80 backdrop-blur-md border border-neutral-600 transform translate-z-10 animate-float" style={{animationDelay: '2s'}}></div>
                 </div>
            </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-500">
        <ChevronDown className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Hero;