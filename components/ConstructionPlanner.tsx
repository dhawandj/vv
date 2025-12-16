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
    { name: 'Bricks & Blocks', percent: 0.12, icon: BrickWall, color: 'text-red-400', bg: 'bg-red-900/20' },
    { name: 'Cement', percent: 0.15, icon: Cuboid, color: 'text-gray-300', bg: 'bg-gray-800/40' },
    { name: 'Steel (TMT)', percent: 0.13, icon: Component, color: 'text-blue-400', bg: 'bg-blue-900/20' },
    { name: 'Sand & Agg.', percent: 0.08, icon: Shovel, color: 'text-yellow-600', bg: 'bg-yellow-900/20' },
    { name: 'Finishing', percent: 0.20, icon: PaintBucket, color: 'text-purple-400', bg: 'bg-purple-900/20' },
    { name: 'Labor', percent: 0.25, icon: Layers, color: 'text-orange-500', bg: 'bg-orange-900/20' },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 animate-enter">
          <div className="inline-flex items-center justify-center p-3 bg-neutral-900 border border-neutral-800 rounded-full mb-4">
             <Calculator className="h-6 w-6 text-orange-500 mr-2" />
             <span className="text-white font-oswald uppercase tracking-widest">Construction Planner</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-4 uppercase">Estimate & Design</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Calculate estimated material costs for your dream project and browse our premium design services.
          </p>
        </div>

        {/* --- CALCULATOR SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-600/10 rounded-bl-full"></div>
                
                <h3 className="text-2xl font-oswald font-bold text-white mb-6 uppercase flex items-center">
                    <span className="w-1 h-6 bg-orange-500 mr-3"></span>
                    Project Inputs
                </h3>

                <div className="space-y-6">
                    <div>
                        <label className="block text-neutral-400 text-xs font-bold uppercase tracking-widest mb-3">Total Built-up Area (Sq. Ft)</label>
                        <input 
                            type="number" 
                            value={area}
                            onChange={(e) => setArea(Number(e.target.value))}
                            className="w-full bg-black border border-neutral-700 text-white text-xl p-4 rounded focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none font-mono"
                        />
                    </div>

                    <div>
                        <label className="block text-neutral-400 text-xs font-bold uppercase tracking-widest mb-3">Construction Quality</label>
                        <div className="grid grid-cols-3 gap-2">
                            {(['standard', 'premium', 'luxury'] as const).map((q) => (
                                <button
                                    key={q}
                                    onClick={() => setQuality(q)}
                                    className={`py-3 px-2 rounded text-xs font-bold uppercase transition-all ${
                                        quality === q 
                                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/50' 
                                        : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                                    }`}
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 border-t border-neutral-800">
                        <p className="text-neutral-500 text-sm mb-1 uppercase tracking-wider">Estimated Total Cost</p>
                        <p className="text-3xl md:text-4xl font-oswald font-bold text-white">
                            {formatCurrency(totalCost)}
                        </p>
                        <p className="text-xs text-neutral-500 mt-2 italic">*Estimates based on current market rates in India.</p>
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
                        <div key={item.name} className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-orange-500/30 transition-all hover:-translate-y-1 group">
                            <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <Icon className={`h-6 w-6 ${item.color}`} />
                            </div>
                            <h4 className="text-neutral-300 font-bold uppercase tracking-wide text-sm mb-1">{item.name}</h4>
                            <p className="text-xl font-mono text-white font-bold">{formatCurrency(cost)}</p>
                            <div className="w-full bg-neutral-800 h-1.5 mt-4 rounded-full overflow-hidden">
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
            <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-800 -z-10"></div>
            <div className="flex justify-center mb-12">
                <span className="bg-neutral-950 px-6 text-2xl font-oswald font-bold text-white uppercase border border-neutral-800 py-2 rounded-full shadow-2xl">
                    Design Services
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
                
                {/* 2D Plan Card */}
                <div className="group perspective-1000">
                    <div className="relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden transform transition-all duration-500 hover:rotate-y-12 preserve-3d shadow-2xl hover:shadow-orange-500/10">
                        <div className="h-64 overflow-hidden relative">
                             <img 
                                src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=800&auto=format&fit=crop" 
                                alt="2D Blueprint" 
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                             />
                             <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white px-3 py-1 text-xs font-bold uppercase rounded border border-neutral-700">
                                Starting @ ₹12,000
                             </div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <PenTool className="text-orange-500 h-6 w-6 mr-3" />
                                <h3 className="text-2xl font-oswald font-bold text-white uppercase">2D Floor Plans</h3>
                            </div>
                            <ul className="space-y-2 mb-6 text-neutral-400 text-sm">
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2"/> Vastu Compliant</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2"/> Furniture Layout</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2"/> Electrical Points</li>
                            </ul>
                            <button className="w-full py-3 bg-neutral-800 hover:bg-orange-600 text-white font-bold uppercase text-xs tracking-widest transition-colors rounded">
                                View Samples
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3D Elevation Card (Center POP) */}
                <div className="group perspective-1000 md:-mt-8 z-10">
                    <div className="relative bg-neutral-900 border border-orange-500/30 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(234,88,12,0.15)]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
                        <div className="h-72 overflow-hidden relative">
                             <img 
                                src="https://www.buildahome.in/images/landing-page/manoranjan-dream-home.webp" 
                                alt="3D Elevation" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                             />
                             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                                <div className="inline-block bg-orange-600 text-white px-4 py-1 text-sm font-bold uppercase rounded mb-2 shadow-lg">
                                    Bestseller
                                </div>
                             </div>
                        </div>
                        <div className="p-8 bg-neutral-800/50">
                            <div className="flex items-center mb-4">
                                <Box className="text-orange-500 h-6 w-6 mr-3" />
                                <h3 className="text-2xl font-oswald font-bold text-white uppercase">3D Elevations</h3>
                            </div>
                            <p className="text-3xl font-bold text-white mb-1">₹25,000 <span className="text-sm font-normal text-neutral-400">/ design</span></p>
                            <p className="text-xs text-neutral-500 mb-6 uppercase tracking-wider">For G+1 Structure</p>
                            
                            <ul className="space-y-2 mb-8 text-neutral-300 text-sm">
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-500 mr-2"/> Photorealistic Renders</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-500 mr-2"/> Day & Night View</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-orange-500 mr-2"/> Material Details</li>
                            </ul>
                            <button className="w-full py-4 bg-white text-black hover:bg-orange-500 hover:text-white font-bold uppercase text-sm tracking-widest transition-all rounded shadow-xl">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>

                 {/* Structural Card */}
                 <div className="group perspective-1000">
                    <div className="relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden transform transition-all duration-500 hover:rotate-y-[-12deg] preserve-3d shadow-2xl hover:shadow-orange-500/10">
                        <div className="h-64 overflow-hidden relative">
                             <img 
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" 
                                alt="Structural" 
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                             />
                             <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white px-3 py-1 text-xs font-bold uppercase rounded border border-neutral-700">
                                ₹8 / Sq.ft
                             </div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <Component className="text-orange-500 h-6 w-6 mr-3" />
                                <h3 className="text-2xl font-oswald font-bold text-white uppercase">Structural</h3>
                            </div>
                            <ul className="space-y-2 mb-6 text-neutral-400 text-sm">
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2"/> Column & Beam Details</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2"/> Foundation Design</li>
                                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2"/> Steel Reinforcement</li>
                            </ul>
                            <button className="w-full py-3 bg-neutral-800 hover:bg-orange-600 text-white font-bold uppercase text-xs tracking-widest transition-colors rounded">
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