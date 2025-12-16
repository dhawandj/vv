import React from 'react';
import { Home, Briefcase, Factory, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="h-8 w-8" />;
      case 'Briefcase': return <Briefcase className="h-8 w-8" />;
      case 'Factory': return <Factory className="h-8 w-8" />;
      case 'ClipboardCheck': return <ClipboardCheck className="h-8 w-8" />;
      default: return <Home className="h-8 w-8" />;
    }
  };

  return (
    <div className="group relative perspective-1000 h-full">
      <div className="h-full bg-neutral-900 border border-neutral-800 p-8 transition-all duration-500 transform group-hover:translate-y-[-10px] group-hover:border-orange-500/50 shadow-2xl relative overflow-hidden">
        
        {/* Hover Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon Box */}
        <div className="relative z-10 w-16 h-16 bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:border-orange-500 transition-colors duration-300 text-white">
           {getIcon(service.icon)}
        </div>

        {/* Text */}
        <h3 className="relative z-10 text-2xl font-oswald font-bold text-white mb-4 uppercase tracking-wide group-hover:text-orange-500 transition-colors">
            {service.title}
        </h3>
        <p className="relative z-10 text-neutral-400 leading-relaxed mb-6 group-hover:text-neutral-300">
            {service.description}
        </p>

        {/* Action */}
        <div className="relative z-10 flex items-center text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
            Explore <ArrowUpRight className="ml-2 h-4 w-4 text-orange-500" />
        </div>

        {/* Decorative Lines */}
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-neutral-700 group-hover:border-orange-500 transition-colors duration-500"></div>
      </div>
    </div>
  );
};

export default ServiceCard;