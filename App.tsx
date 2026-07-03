import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import WhatsAppQuoteForm from './components/WhatsAppQuoteForm';
import ConstructionPlanner from './components/ConstructionPlanner';
import { Page, Project } from './types';
import { SERVICES, PROJECTS, TESTIMONIALS, COMPANY_NAME } from './constants';
import { Quote, ArrowRight, Instagram, Linkedin, Facebook, Star, ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage(Page.PROJECT_DETAIL);
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <>
      {/* <WhatsAppQuoteForm /> */}
      <Hero onNavigate={handleNavigate} />
      
      {/* Why Choose Us - Inline Flat Grid */}
      <section className="bg-white py-12 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-6 tracking-wide">Why Choose Us</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-orange-50/40 p-4 rounded-xl border border-orange-100 text-center flex flex-col justify-center">
              <div className="text-lg md:text-2xl font-black text-orange-600">20+</div>
              <div className="text-[10px] uppercase font-bold text-gray-500 tracking-tight mt-1">Years Exp</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center flex flex-col justify-center">
              <div className="text-lg md:text-2xl font-black text-gray-900">1000+</div>
              <div className="text-[10px] uppercase font-bold text-gray-500 tracking-tight mt-1">Built</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center flex flex-col justify-center">
              <div className="text-lg md:text-2xl font-black text-gray-900">100%</div>
              <div className="text-[10px] uppercase font-bold text-gray-500 tracking-tight mt-1">Happy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Pure Horizontal Touch Carousel */}
      <section className="py-14 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="px-4 mb-6 flex justify-between items-end">
             <h2 className="text-xl font-bold text-gray-900 tracking-wide">Featured Projects</h2>
             <span className="text-xs text-gray-400 font-medium">Swipe →</span>
          </div>
          
          {/* Snap-scrolling Carousel Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 px-4 pb-4 scrollbar-none">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="min-w-[280px] sm:min-w-[340px] max-w-[340px] bg-white border border-gray-200/80 rounded-2xl overflow-hidden snap-start flex-shrink-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleNavigate(Page.PROJECTS)}
              >
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-orange-600 px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm border border-orange-100">
                    {project.category}
                  </div>
                </div>
                <div className="p-4">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Updated to clean 2-Column Balanced Grid */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 tracking-wide">Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.slice(0, 3).map((service, index) => {
              // Third card receives unique layout styling rules matching the theme accent configuration
              const isThird = index === 2;
              return (
                <div 
                  key={service.id} 
                  className={`p-6 rounded-2xl flex flex-col justify-between min-h-[190px] border transition-all ${
                    isThird 
                      ? 'bg-orange-600 border-orange-700 text-white shadow-lg shadow-orange-600/10 md:col-span-2' 
                      : 'bg-gray-50 border-gray-200 text-gray-900'
                  }`}
                >
                  <div>
                    <h3 className={`text-base font-bold mb-2 flex items-center justify-between ${isThird ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-xs line-clamp-3 leading-relaxed ${isThird ? 'text-orange-50' : 'text-gray-500'}`}>
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 flex justify-between items-center">
                    <button className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-sm ${
                      isThird ? 'bg-white text-orange-600 hover:bg-orange-50' : 'bg-orange-600 text-white hover:bg-orange-700'
                    }`}>
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>  
      </section>

      {/* Testimonials - Styled Carousel Rows */}
      <section className="py-14 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-wide">Reality</h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-4 scrollbar-none">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="min-w-[290px] max-w-[290px] bg-white p-5 rounded-2xl border border-gray-200 snap-start flex-shrink-0 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex mb-3">
                      {/* {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 text-orange-500 fill-current" />)} */}
                    <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>

                  </div>
                  <p className="text-gray-600 italic text-xs leading-relaxed">"{t.content}"</p>
                </div>
                <div className="flex items-center border-t border-gray-100 mt-4 pt-3">
                  {/* <img src={t.avatarUrl} alt={t.name} className="h-8 w-8 rounded-full object-cover mr-3 ring-1 ring-gray-200" /> */}
                  <div>
                    {/* <p className="text-gray-400 text-[10px]">{t.role}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light-Optimized CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 text-gray-900 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-black mb-3 tracking-tight">Construct Your Space</h2>
          <p className="text-gray-500 text-xs mb-8 max-w-xs mx-auto leading-relaxed">Initialize parameters directly via verified structural frameworks.</p>
          <div className="flex flex-col gap-3">
            {/* <button 
              onClick={() => handleNavigate(Page.CONTACT)}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-orange-600/10 transition-colors"
            >
              Start Project
            </button> */}
            <a 
              href="tel:+919986633447"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-orange-600/10 transition-colors flex items-center justify-center"
            >
              Call Now <ArrowUpRight className="ml-1.5 h-4 w-4 text-white" />
            </a>
            <button 
              onClick={() => handleNavigate(Page.PLANNING)}
              className="w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center transition-colors"
            >
              Cost Estimator <ArrowUpRight className="ml-1.5 h-4 w-4 text-orange-600" />
            </button>
          </div>
        </div>
      </section>
    </>
  );

  const renderServices = () => (
    <div className="pt-24 pb-16 bg-white min-h-screen px-4">
      {/* <WhatsAppQuoteForm /> */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Our Expertise</h1>
          <p className="text-xs text-gray-500">Precision systems across all architectural options.</p>
        </div>
        <div className="space-y-4">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="bg-gray-50 border border-gray-200 p-5 rounded-2xl shadow-sm">
              <div className="text-orange-600 mb-2 font-mono text-sm font-bold">
                {String(index + 1).padStart(2, '0')}.
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-1.5 text-gray-700 text-xs">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
  <div className="pt-24 pb-16 bg-white min-h-screen px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Portfolio</h1>
        <p className="text-xs text-gray-500">Engineering milestones and architecture layout pipelines.</p>
      </div>
      
      {/* Responsive Grid: 1 Column on Mobile, 2 Columns on Tablets, 3 Columns on PC */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
           <div 
             key={project.id} 
             className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md hover:border-gray-300/80 transition-all duration-300"
           >
             <div>
               {/* Fixed layout height for desktop consistency */}
               <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                 <img 
                   src={project.imageUrl} 
                   alt={project.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                 />
                 <div className="absolute top-3 right-3 bg-orange-600 text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                   {project.category}
                 </div>
               </div>
               <div className="p-5">
                 <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                   {project.title}
                 </h3>
                 <p className="text-gray-500 text-xs mb-4 leading-relaxed line-clamp-3">
                   {project.description}
                 </p>
               </div>
             </div>
             
             {/* Dynamic action footer aligned perfectly across grids */}
             <div className="px-5 pb-5 pt-0">
               <button 
                 onClick={() => handleOpenProject(project)}
                 className="text-orange-600 font-bold text-xs tracking-wide flex items-center hover:text-orange-700 transition-colors"
               >
                   View Blueprint <ArrowRight className="ml-1.5 h-3 w-3 group-hover:translate-x-1 transition-transform" />
               </button>
             </div>
           </div>
        ))}
      </div>
    </div>
  </div>
);

  const renderProjectDetail = () => {
    if (!selectedProject) return null;

    return (
      <div className="pt-24 pb-16 bg-white min-h-screen px-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => handleNavigate(Page.PROJECTS)}
            className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            ← Back to Portfolio
          </button>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm bg-gray-100">
              <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-600">{selectedProject.category}</p>
                <h1 className="mt-2 text-3xl font-black text-gray-900">{selectedProject.title}</h1>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{selectedProject.description}</p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-gray-900">Project Details</h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  {selectedProject.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <span className="mt-1 mr-2 text-orange-600">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleNavigate(Page.CONTACT)}
                className="w-full rounded-2xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-700"
              >
                Discuss This Project
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAbout = () => (
    <div className="pt-24 pb-16 bg-white min-h-screen px-4">
      {/* <WhatsAppQuoteForm /> */}
      <div className="max-w-4xl mx-auto space-y-8">
         <div className="relative shadow-sm rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
            <img src="https://picsum.photos/800/600?random=team" alt="Our Team" className="w-full rounded-2xl object-cover h-64" />
         </div>
         <div>
            <span className="text-orange-600 font-mono text-xs uppercase tracking-widest font-bold">Corporate Architecture</span>
            <h1 className="text-2xl font-black text-gray-900 mt-1 mb-4">{COMPANY_NAME}<br />Systems Blueprint</h1>
            <div className="space-y-3 text-gray-600 text-xs leading-relaxed">
              <p>
                We manage structural execution models from planning phases up through total handover deployment protocols.
              </p>
              <p>
                Our structural units utilize premium grade workflow configurations to execute timelines up to 20% cleaner than basic architectural approaches.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
               <div className="bg-gray-50 p-3 rounded-xl border-l-2 border-orange-600 border-y border-r border-gray-200/60">
                   <h4 className="text-gray-900 font-bold text-xs">Certified Secure</h4>
                   <p className="text-gray-400 text-[10px] mt-0.5">Absolute protocol match.</p>
               </div>
               <div className="bg-gray-50 p-3 rounded-xl border-l-2 border-orange-600 border-y border-r border-gray-200/60">
                   <h4 className="text-gray-900 font-bold text-xs">Eco Framework</h4>
                   <p className="text-gray-400 text-[10px] mt-0.5">LEED structural strategy.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-800 antialiased selection:bg-orange-600 selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentPage === Page.HOME && renderHome()}
        {currentPage === Page.SERVICES && renderServices()}
        {currentPage === Page.PROJECTS && renderProjects()}
        {currentPage === Page.PROJECT_DETAIL && renderProjectDetail()}
        {currentPage === Page.ABOUT && renderAbout()}
        {currentPage === Page.CONTACT && (
            <div className="pt-16">
              <ContactForm />
            </div>
        )}
        {currentPage === Page.PLANNING && (
           <div className="pt-16">{/* <WhatsAppQuoteForm /> */}<ConstructionPlanner /></div>
        )}
      </main>

      {/* Styled Light-Premium Mobile-First Footer */}
      <footer className="bg-gray-50 text-gray-500 py-10 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
             <h3 className="text-gray-900 text-base font-black tracking-wider">SUMMIT <span className="text-orange-600">VENTURES</span></h3>
             <p className="text-xs text-gray-500 mt-2 leading-relaxed">Defining structural deployment layers. Quality parameters. Scale implementation.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wide mb-3">Index</h4>
              <ul className="space-y-2 text-xs">
                <li onClick={() => handleNavigate(Page.SERVICES)} className="hover:text-orange-600 text-gray-600 cursor-pointer transition-colors">Services</li>
                <li onClick={() => handleNavigate(Page.PROJECTS)} className="hover:text-orange-600 text-gray-600 cursor-pointer transition-colors">Portfolio</li>
                <li onClick={() => handleNavigate(Page.ABOUT)} className="hover:text-orange-600 text-gray-600 cursor-pointer transition-colors">Company</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wide mb-3">Sectors</h4>
              <ul className="space-y-2 text-xs text-gray-500">
                <li>V Villas</li>
                <li>High Rises</li>
                <li>Eco Frameworks</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors"><Facebook className="h-4 w-4" /></a>
            </div>
            <p className="text-[10px] text-gray-400">&copy; {new Date().getFullYear()} {COMPANY_NAME}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;