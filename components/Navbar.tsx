import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { Page } from '../types';
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_LOGO } from '../constants';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Services', value: Page.SERVICES },
    { label: 'Planner', value: Page.PLANNING, highlight: true }, 
    { label: 'Projects', value: Page.PROJECTS },
    { label: 'Contact', value: Page.CONTACT },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick(Page.HOME)}
          >
            <div className="bg-neutral-900/50 p-1.5 rounded-full mr-3 border border-orange-500/20 group-hover:border-orange-500/50 transition-colors">
                <img 
                  src={COMPANY_LOGO} 
                  alt={COMPANY_NAME} 
                  className="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
            </div>
            <span className="font-oswald font-bold text-2xl tracking-wide text-white">
                AVINYA <span className="text-orange-500">VENTURES</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`font-medium text-sm uppercase tracking-wider transition-all duration-200 relative group ${
                  item.highlight 
                    ? 'bg-orange-600 text-white px-5 py-2 clip-path-slant hover:bg-orange-500 shadow-[0_0_15px_rgba(234,88,12,0.5)]'
                    : currentPage === item.value 
                      ? 'text-orange-500' 
                      : 'text-neutral-400 hover:text-white'
                }`}
                style={item.highlight ? { clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' } : {}}
              >
                {item.label}
                {!item.highlight && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-500 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-xl border-b border-orange-500/30 h-screen absolute w-full top-20 left-0 animate-fade-in-down">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`flex items-center justify-between w-full text-left px-4 py-4 border-l-2 transition-all ${
                   item.highlight 
                    ? 'border-orange-500 bg-orange-500/10 text-orange-500 font-bold'
                    : currentPage === item.value 
                      ? 'border-orange-500 text-white bg-neutral-800' 
                      : 'border-transparent text-neutral-400 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                <span className="text-lg font-oswald uppercase tracking-wider">{item.label}</span>
                <ChevronRight className="h-5 w-5 opacity-50" />
              </button>
            ))}
             <div className="mt-8 px-4 py-4 border border-neutral-700 bg-neutral-800/50 flex items-center justify-center text-orange-500 font-bold tracking-widest uppercase">
               <Phone className="h-5 w-5 mr-3" />
               {COMPANY_PHONE}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;