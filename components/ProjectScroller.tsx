import React from 'react';
import { PROJECTS } from '../constants';

const ProjectScroller: React.FC = () => {
  // Duplicate the projects array to ensure seamless looping
  // The animation translates -50% (the width of one set), instantly snapping back to 0
  const loopProjects = [...PROJECTS, ...PROJECTS];

  return (
    <div className="w-full bg-neutral-950 border-b border-neutral-800 overflow-hidden relative group">
      {/* 
         The container for the moving items.
         animate-marquee: handles the translation
         group-hover: pauses animation (defined in global css)
      */}
      <div className="animate-marquee">
        {loopProjects.map((project, index) => (
          <div 
            // Using index in key because we have duplicate IDs
            key={`${project.id}-${index}`} 
            className="flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] h-[300px] md:h-[400px] relative cursor-pointer border-r border-neutral-900"
          >
            {/* Loading placeholder/skeleton effect */}
            <div className="absolute inset-0 bg-neutral-900" />
            
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-80 hover:opacity-100"
              loading="eager"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none">
                <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="inline-block bg-orange-600 text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-2 shadow-lg">
                        {project.category}
                    </span>
                    <h3 className="text-white font-oswald text-xl md:text-2xl uppercase font-bold leading-none mb-1 drop-shadow-md">
                        {project.title}
                    </h3>
                </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Optional: Vignette effect to soften edges */}
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default ProjectScroller;