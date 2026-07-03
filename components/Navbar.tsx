import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, HelpCircle, MessageSquare } from 'lucide-react';
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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Services', value: Page.SERVICES },
    { label: 'Planner', value: Page.PLANNING }, 
    { label: 'Projects', value: Page.PROJECTS },
    { label: 'Contact', value: Page.CONTACT },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  // Standardizing clean telephone formatting for link handling
  const cleanPhoneDigits = COMPANY_PHONE.replace(/[^0-9]/g, '');

  return (
    <>
      {/* Top Header Bar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/80 py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            
            {/* Branding Name & Company Logo */}
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => handleNavClick(Page.HOME)}
            >
              <div className="bg-gray-900 p-1.5 rounded-full mr-3 border border-orange-500/20 group-hover:border-orange-500/50 transition-colors">
                <img 
                  src={COMPANY_LOGO} 
                  alt={COMPANY_NAME} 
                  className="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <span className="font-bold text-lg tracking-wide text-orange-600 uppercase">
                AVINYA <span className="text-neutral-800">VENTURES</span>
              </span>
            </div>

            {/* Desktop Navbar Row */}
            <div className="hidden md:flex items-center space-x-6 bg-gray-50 border border-gray-200/60 px-6 py-2 rounded-full shadow-sm">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors ${
                    currentPage === item.value ? 'text-orange-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Action Trigger */}
            <div className="hidden md:block">
              <button 
                onClick={() => handleNavClick(Page.CONTACT)}
                className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Sidebar Hamburger Trigger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-700 hover:text-orange-600 transition-colors focus:outline-none p-1.5"
              >
                <Menu className="h-5 w-5 text-gray-500" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Light Side Panel Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Premium White and Orange Sidebar Navigation Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-white border-l border-gray-200 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header Container */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center">
            <img src={COMPANY_LOGO} alt={COMPANY_NAME} className="h-5 w-5 mr-2 object-contain" />
            <div>
              <div className="font-black text-xs text-gray-900 tracking-wider uppercase">AVINYA</div>
              <div className="text-[8px] font-bold text-gray-400 tracking-wider uppercase">NAVIGATION MENU</div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-900 p-1 rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Sidebar Middle Navigation Layer */}
        <div className="flex-grow py-4 overflow-y-auto px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.value;
            return (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-left group ${
                  isActive 
                    ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-600/10' 
                    : 'bg-gray-50 border border-gray-100 text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className="text-xs uppercase font-bold tracking-wider">{item.label}</span>
                <ArrowRight className={`h-3.5 w-3.5 transition-transform ${isActive ? 'translate-x-0 text-white' : 'opacity-40 group-hover:translate-x-1 text-gray-900'}`} />
              </button>
            );
          })}
          
          {/* Divider line before direct communications */}
          <div className="h-px bg-gray-100 my-4" />

          {/* Direct Communication Shortcut Actions */}
          <a
            href={`tel:${cleanPhoneDigits}`}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-orange-50 border border-orange-100/60 text-orange-700 hover:bg-orange-100 transition-all text-left font-bold"
          >
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-3 text-orange-600" />
              <span className="text-xs uppercase tracking-wider"> Call Now</span>
            </div>
            <ArrowRight className="h-3.5 w-3.5 opacity-50" />
          </a>

          <a
            href={`https://wa.me/${cleanPhoneDigits}?text=Hello%20Avinya%20Ventures%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20your%20team.`}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-green-50 border border-green-100/60 text-green-700 hover:bg-green-100 transition-all text-left font-bold"
          >
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-3 text-green-600" />
              <span className="text-xs uppercase tracking-wider">WhatsApp Chat</span>
            </div>
            <ArrowRight className="h-3.5 w-3.5 opacity-50" />
          </a>
        </div>

        {/* Sidebar Footer Block */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3">
          <button 
            onClick={() => handleNavClick(Page.CONTACT)}
            className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center transition-colors shadow-sm"
          >
            <HelpCircle className="h-3.5 w-3.5 mr-2 text-orange-600" />
            Request Live Quote
          </button>
          
          <div className="text-center text-[10px] text-gray-500 font-medium">
             Call Line: <span className="text-gray-700 font-mono font-bold">{COMPANY_PHONE}</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;