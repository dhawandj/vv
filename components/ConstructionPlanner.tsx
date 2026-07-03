import React, { useState } from 'react';
import { 
  Calculator, 
  BrickWall, 
  PaintBucket, 
  Component, 
  Shovel, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Box,
  PenTool,
  Cuboid
} from 'lucide-react';

const ConstructionPlanner: React.FC = () => {
  const [area, setArea] = useState<number>(1000);
  const [quality, setQuality] = useState<'standard' | 'premium' | 'luxury'>('standard');

  // Rates per sq ft in INR
  const rates = {
    standard: 1800,
    premium: 2500,
    luxury: 3500
  };

  const totalCost = area * rates[quality];

  // Material Breakdown Estimates (Approximate percentages in Indian Context)
  const breakdown = [
    { name: 'Bricks & Blocks', percent: 0.12, icon: BrickWall, color: 'text-red-500', bg: 'bg-red-50' },
    { name: 'Cement', percent: 0.15, icon: Cuboid, color: 'text-neutral-600', bg: 'bg-neutral-100' },
    { name: 'Steel (TMT)', percent: 0.13, icon: Component, color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Sand & Agg.', percent: 0.08, icon: Shovel, color: 'text-amber-700', bg: 'bg-amber-50' },
    { name: 'Finishing', percent: 0.20, icon: PaintBucket, color: 'text-purple-600', bg: 'bg-purple-50' },
    { name: 'Labor', percent: 0.25, icon: Layers, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-enter">
          <div className="inline-flex items-center justify-center p-3 bg-neutral-50 border border-neutral-200 rounded-full mb-4">
             <Calculator className="h-6 w-6 text-orange-600 mr-2" />
             <span className="text-neutral-800 font-oswald uppercase tracking-widest font-bold text-xs">Construction Planner</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-oswald font-black text-neutral-900 mb-4 uppercase tracking-tight">Estimate & Design</h1>
          <p className="text-neutral-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Calculate estimated material costs for your dream project and browse our premium design services.
          </p>
        </div>

        {/* --- CALCULATOR SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-600/5 rounded-bl-full"></div>
                
                <h3 className="text-xl font-oswald font-bold text-neutral-900 mb-6 uppercase flex items-center">
                    <span className="w-1 h-6 bg-orange-600 mr-3"></span>
                    Project Inputs
                </h3>

                <div className="space-y-6">
                    <div>
                        <label className="block text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-3">Total Built-up Area (Sq. Ft)</label>
                        <input 
                            type="number" 
                            value={area}
                            onChange={(e) => setArea(Number(e.target.value))}
                            className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 text-xl p-4 rounded-xl focus:border-orange-600 focus:ring-1 focus:ring-orange-600 outline-none font-mono font-bold"
                        />
                    </div>

                    <div>
                        <label className="block text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-3">Construction Quality</label>
                        <div className="grid grid-cols-3 gap-2">
                            {(['standard', 'premium', 'luxury'] as const).map((q) => (
                                <button
                                    key={q}
                                    onClick={() => setQuality(q)}
                                    className={`py-3 px-2 rounded-xl text-xs font-bold uppercase transition-all ${
                                        quality === q 
                                        ? 'bg-orange-600 text-white shadow-md shadow-orange-600/10' 
                                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                    }`}
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 border-t border-neutral-100">
                        <p className="text-neutral-400 text-xs mb-1 uppercase tracking-wider font-bold">Estimated Total Cost</p>
                        <p className="text-3xl font-oswald font-black text-orange-600">
                            {formatCurrency(totalCost)}
                        </p>
                        <p className="text-[11px] text-neutral-400 mt-2 italic">*Estimates based on current market rates in India.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Breakdown Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {breakdown.map((item) => {
                    const cost = totalCost * item.percent;
                    const Icon = item.icon;
                    return (
                        <div key={item.name} className="bg-neutral-50/60 border border-neutral-200 p-6 rounded-2xl hover:border-orange-600/40 transition-all hover:-translate-y-1 group shadow-sm bg-white">
                            <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                                <Icon className={`h-5 w-5 ${item.color}`} />
                            </div>
                            <h4 className="text-neutral-500 font-bold uppercase tracking-wide text-[11px] mb-1">{item.name}</h4>
                            <p className="text-lg font-mono text-neutral-900 font-black">{formatCurrency(cost)}</p>
                            
                            <div className="w-full bg-neutral-200 h-1.5 mt-4 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full ${item.color.replace('text', 'bg')}`} 
                                    style={{ width: `${item.percent * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
          </div>
        </div>

        {/* --- 2D & 3D PLANS SERVICES --- */}
        <div className="relative">
            {/* Background Divider */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-200 -z-10"></div>
            <div className="flex justify-center mb-12">
                <span className="bg-white px-6 text-lg font-oswald font-black text-neutral-900 uppercase border border-neutral-200 py-2 rounded-full shadow-sm tracking-wider">
                    Design Services
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
                
                {/* 2D Plan Card */}
                <div className="group">
                    <div className="relative bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-600/30">
                        <div className="h-64 overflow-hidden relative bg-neutral-100">
                             <img 
                                src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=800&auto=format&fit=crop" 
                                alt="2D Blueprint" 
                                className="w-full h-full object-cover filter contrast-125 group-hover:scale-105 transition-transform duration-500"
                             />
                             <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-neutral-900 px-3 py-1 text-xs font-black uppercase rounded-lg border border-neutral-200 shadow-sm">
                                Starting @ ₹12,000
                             </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <PenTool className="text-orange-600 h-5 w-5 mr-3" />
                                <h3 className="text-lg font-oswald font-bold text-neutral-900 uppercase">2D Floor Plans</h3>
                            </div>
                            <ul className="space-y-2 mb-6 text-neutral-600 text-xs">
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2"/> Vastu Compliant</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2"/> Furniture Layout</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2"/> Electrical Points</li>
                            </ul>
                            <button className="w-full py-3 bg-neutral-100 hover:bg-orange-600 hover:text-white text-neutral-800 font-bold uppercase text-xs tracking-widest transition-colors rounded-xl">
                                View Samples
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3D Elevation Card (Premium Accent Focal Point) */}
                <div className="group md:-mt-4 z-10">
                    <div className="relative bg-white border-2 border-orange-600 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.01]">
                        <div className="h-68 overflow-hidden relative bg-neutral-100">
                             <img 
                                src="https://www.buildahome.in/images/landing-page/manoranjan-dream-home.webp" 
                                alt="3D Elevation" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                             />
                             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                                <div className="inline-block bg-orange-600 text-white px-3 py-1 text-xs font-black uppercase rounded-md shadow-md">
                                    Bestseller
                                </div>
                             </div>
                        </div>
                        <div className="p-6 bg-orange-50/30">
                            <div className="flex items-center mb-3">
                                <Box className="text-orange-600 h-5 w-5 mr-3" />
                                <h3 className="text-lg font-oswald font-bold text-neutral-900 uppercase">3D Elevations</h3>
                            </div>
                            <p className="text-2xl font-black text-neutral-900 mb-1">₹25,000 <span className="text-xs font-normal text-neutral-500">/ design</span></p>
                            <p className="text-[10px] text-neutral-400 mb-4 uppercase tracking-wider font-bold">For G+1 Structure</p>
                            
                            <ul className="space-y-2 mb-6 text-neutral-700 text-xs">
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2"/> Photorealistic Renders</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2"/> Day & Night View</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2"/> Material Details</li>
                            </ul>
                            <button className="w-full py-3.5 bg-orange-600 text-white hover:bg-orange-700 font-bold uppercase text-xs tracking-widest transition-all rounded-xl shadow-md shadow-orange-600/10">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>

                 {/* Structural Card */}
                 <div className="group">
                    <div className="relative bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-600/30">
                        <div className="h-64 overflow-hidden relative bg-neutral-100">
                             <img 
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" 
                                alt="Structural" 
                                className="w-full h-full object-cover filter contrast-125 group-hover:scale-105 transition-transform duration-500"
                             />
                             <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-neutral-900 px-3 py-1 text-xs font-black uppercase rounded-lg border border-neutral-200 shadow-sm">
                                ₹8 / Sq.ft
                             </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <Component className="text-orange-600 h-5 w-5 mr-3" />
                                <h3 className="text-lg font-oswald font-bold text-neutral-900 uppercase">Structural</h3>
                            </div>
                            <ul className="space-y-2 mb-6 text-neutral-600 text-xs">
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2"/> Column & Beam Details</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2"/> Foundation Design</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-600 mr-2"/> Steel Reinforcement</li>
                            </ul>
                            <button className="w-full py-3 bg-neutral-100 hover:bg-orange-600 hover:text-white text-neutral-800 font-bold uppercase text-xs tracking-widest transition-colors rounded-xl">
                                View Samples
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default ConstructionPlanner;