import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';
import WhatsAppQuoteForm from './components/WhatsAppQuoteForm';
import ConstructionPlanner from './components/ConstructionPlanner';
import ProjectScroller from './components/ProjectScroller';
import { Page } from './types';
import { SERVICES, PROJECTS, TESTIMONIALS, COMPANY_NAME } from './constants';
import { Quote, ArrowRight, Instagram, Linkedin, Facebook, Star, ArrowUpRight, Calculator } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <>
      <WhatsAppQuoteForm />
      <Hero onNavigate={handleNavigate} />
      
      {/* Horizontal Project Scroller */}
      <ProjectScroller />
      
      {/* Services Preview - Brutalist Grid */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 animate-enter">
             <div>
                <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Capabilities</span>
                <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mt-2 uppercase">Core Operations</h2>
             </div>
             <p className="text-neutral-400 max-w-md mt-4 md:mt-0 text-right md:text-left border-l-2 border-orange-500 pl-4">
                 Engineering precision meets architectural art. We handle complexities others can't.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="bg-neutral-900 border-y border-neutral-800 relative overflow-hidden">
        {/* Animated background lines */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #1a1a1a 25%, #1a1a1a 75%, #000 75%, #000)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <div className="text-5xl md:text-7xl font-oswald font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">15<span className="text-orange-500">+</span></div>
              <div className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Years Active</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-7xl font-oswald font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">300<span className="text-orange-500">+</span></div>
              <div className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Projects Live</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-7xl font-oswald font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">50<span className="text-orange-500">+</span></div>
              <div className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Elite Staff</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-7xl font-oswald font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">100<span className="text-orange-500">%</span></div>
              <div className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview - 3D Hover Cards */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
               <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Portfolio</span>
               <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mt-2 uppercase">Selected Works</h2>
            </div>
            <button onClick={() => handleNavigate(Page.PROJECTS)} className="hidden md:flex items-center text-white font-bold hover:text-orange-500 transition-colors uppercase tracking-wider">
              Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative h-96 perspective-1000 cursor-pointer" onClick={() => handleNavigate(Page.PROJECTS)}>
                {/* Image Layer */}
                <div className="absolute inset-0 bg-neutral-800 overflow-hidden rounded-none border border-neutral-800 transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity"></div>
                </div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2 flex items-center">
                            <span className="w-8 h-[2px] bg-orange-500 mr-2"></span>
                            {project.category}
                        </p>
                        <h3 className="text-2xl font-oswald font-bold text-white mb-2 uppercase leading-none">{project.title}</h3>
                        <p className="text-neutral-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                            {project.description}
                        </p>
                   </div>
                </div>
                
                {/* Hover Border */}
                <div className="absolute inset-0 border border-orange-500/0 group-hover:border-orange-500/50 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none"></div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <button onClick={() => handleNavigate(Page.PROJECTS)} className="inline-flex items-center text-white border border-neutral-700 px-6 py-3 uppercase tracking-widest font-bold hover:bg-neutral-800">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials - Dark Cards */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-center text-white mb-16 uppercase">Client Validations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-neutral-950 p-8 border border-neutral-800 relative group hover:border-orange-500/30 transition-colors">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-neutral-800 group-hover:text-orange-500/20 transition-colors" />
                <div className="flex mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-orange-500 fill-current" />)}
                </div>
                <p className="text-neutral-300 italic mb-8 relative z-10 font-light leading-relaxed">"{t.content}"</p>
                <div className="flex items-center border-t border-neutral-800 pt-6">
                  <img src={t.avatarUrl} alt={t.name} className="h-12 w-12 grayscale group-hover:grayscale-0 transition-all rounded-full object-cover mr-4 ring-2 ring-neutral-800" />
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm tracking-wide">{t.name}</h4>
                    <p className="text-neutral-500 text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-600 relative overflow-hidden">
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-oswald font-bold text-black mb-6 uppercase leading-tight">Construct The Impossible</h2>
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto font-medium">Initialize your project with industry-leading experts and data-driven planning.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => handleNavigate(Page.CONTACT)}
              className="bg-black text-white px-10 py-5 font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl"
            >
              Start Project
            </button>
            <button 
              onClick={() => handleNavigate(Page.PLANNING)}
              className="bg-white text-black px-10 py-5 font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl flex items-center justify-center"
            >
              Cost Estimator <ArrowUpRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );

  // Reusing components layout but adapting to dark theme logic where simple structural reuse isn't enough
  // For brevity in this big file, I'll inline the simple page renders with the new styles

  const renderServices = () => (
    <div className="pt-24 pb-20 bg-neutral-950 min-h-screen">
      <WhatsAppQuoteForm />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white mb-4 uppercase">Our Expertise</h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">Precision engineering across all sectors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-neutral-900 border border-neutral-800 p-8 hover:border-orange-500 transition-all group">
               <div className="text-orange-500 mb-6">
                 {/* Pseudo-icons */}
                 <div className="h-12 w-12 border-2 border-orange-500 flex items-center justify-center font-bold text-xl group-hover:bg-orange-500 group-hover:text-black transition-colors">
                    {service.id}
                 </div>
               </div>
               <h3 className="text-3xl font-oswald font-bold text-white mb-4 uppercase">{service.title}</h3>
               <p className="text-neutral-400 mb-6 leading-relaxed">{service.description}</p>
               <ul className="space-y-3 text-neutral-300 text-sm font-mono">
                    <li className="flex items-center"><span className="text-orange-500 mr-2">&gt;</span> ISO 9001 Certified</li>
                    <li className="flex items-center"><span className="text-orange-500 mr-2">&gt;</span> Sustainable Materials</li>
                    <li className="flex items-center"><span className="text-orange-500 mr-2">&gt;</span> Strategic Planning</li>
               </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="pt-24 pb-20 bg-neutral-950 min-h-screen">
        <WhatsAppQuoteForm />
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white mb-4 uppercase">Portfolio</h1>
            <p className="text-xl text-neutral-400">Engineering feats and architectural milestones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
               <div key={project.id} className="bg-neutral-900 border border-neutral-800 group overflow-hidden">
                 <div className="relative h-72 overflow-hidden">
                   <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                   <div className="absolute top-0 right-0 bg-orange-600 text-black text-xs font-bold px-4 py-2 uppercase tracking-widest">
                     {project.category}
                   </div>
                 </div>
                 <div className="p-8">
                   <h3 className="text-2xl font-oswald font-bold text-white mb-3 uppercase">{project.title}</h3>
                   <p className="text-neutral-400 text-sm mb-6 leading-relaxed border-l border-neutral-700 pl-4">{project.description}</p>
                   <button className="text-orange-500 font-bold text-sm hover:text-white uppercase tracking-widest flex items-center">
                       View Blueprint <ArrowRight className="ml-2 h-4 w-4" />
                   </button>
                 </div>
               </div>
            ))}
          </div>
       </div>
    </div>
  );

  const renderAbout = () => (
    <div className="pt-24 pb-20 bg-neutral-950 min-h-screen">
        <WhatsAppQuoteForm />
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-orange-500"></div>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-orange-500"></div>
               <img 
                 src="https://picsum.photos/800/800?random=team" 
                 alt="Our Team" 
                 className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
               />
            </div>
            <div>
               <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-2">Our DNA</h2>
               <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white mb-8 uppercase leading-none">{COMPANY_NAME}<br />Future Built</h1>
               <div className="space-y-6 text-neutral-400 text-lg leading-relaxed border-l-2 border-neutral-800 pl-6">
                 <p>
                   Established 2008. We didn't just join the construction industry; we re-engineered it. Avinya Ventures operates at the intersection of heavy industry and high technology.
                 </p>
                 <p>
                   <strong className="text-white">Mission Protocol:</strong> Absolute precision. We utilize drone topography, advanced schedule optimization, and modern materials to deliver projects 20% faster than industry standard.
                 </p>
               </div>
               
               <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="bg-neutral-900 p-6 border-l-4 border-orange-500">
                      <h4 className="text-white font-oswald font-bold text-xl uppercase">Safety First</h4>
                      <p className="text-neutral-500 text-sm mt-2">Zero-accident protocols active on all sites.</p>
                  </div>
                  <div className="bg-neutral-900 p-6 border-l-4 border-orange-500">
                      <h4 className="text-white font-oswald font-bold text-xl uppercase">Eco-Ready</h4>
                      <p className="text-neutral-500 text-sm mt-2">LEED certified sustainable building practices.</p>
                  </div>
               </div>
            </div>
         </div>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 font-sans text-white selection:bg-orange-500 selection:text-black">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentPage === Page.HOME && renderHome()}
        {currentPage === Page.SERVICES && renderServices()}
        {currentPage === Page.PROJECTS && renderProjects()}
        {currentPage === Page.ABOUT && renderAbout()}
        {currentPage === Page.CONTACT && (
            <>
                <WhatsAppQuoteForm />
                <ContactForm />
            </>
        )}
        {currentPage === Page.PLANNING && (
           <>
             <WhatsAppQuoteForm />
             <ConstructionPlanner />
           </>
        )}
      </main>

      <footer className="bg-black text-neutral-500 py-16 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
             <h3 className="text-white text-2xl font-oswald font-bold mb-6 uppercase tracking-wide">AVINYA <span className="text-orange-500">VENTURES</span></h3>
             <p className="mb-6 text-sm leading-relaxed">Defining the skyline of tomorrow. Precision. Strength. Innovation.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li onClick={() => handleNavigate(Page.SERVICES)} className="hover:text-orange-500 cursor-pointer transition-colors">Services</li>
              <li onClick={() => handleNavigate(Page.PROJECTS)} className="hover:text-orange-500 cursor-pointer transition-colors">Portfolio</li>
              <li onClick={() => handleNavigate(Page.ABOUT)} className="hover:text-orange-500 cursor-pointer transition-colors">Company</li>
              <li onClick={() => handleNavigate(Page.CONTACT)} className="hover:text-orange-500 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Sectors</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-orange-500 cursor-pointer">Residential High-Rise</li>
              <li className="hover:text-orange-500 cursor-pointer">Commercial Retail</li>
              <li className="hover:text-orange-500 cursor-pointer">Heavy Industrial</li>
              <li className="hover:text-orange-500 cursor-pointer">Smart Cities</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Network</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-orange-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
            <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} {COMPANY_NAME}. Building the Future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;