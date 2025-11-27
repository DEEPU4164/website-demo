import React from 'react';
import { MENU_DATA, TIMINGS } from '../constants';

const Menu: React.FC = () => {
  const toId = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Timings Section - Glass Card */}
      <section className="mb-20 glass rounded-2xl shadow-2xl p-8 border-t-8 border-brand-500 transform hover:scale-[1.01] transition-transform duration-500 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-100 rounded-full opacity-50 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-orange-100 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-serif text-brand-900 mb-8 text-center drop-shadow-md">
            Opening Hours & <span className="text-brand-600">Special Offers</span>
          </h2>
          
          <div className="text-center mb-10 perspective-1000">
            <span className="inline-block bg-gradient-to-r from-brand-600 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-bold tracking-wide animate-pulse shadow-lg transform hover:rotate-2 transition-transform cursor-default">
              🎓 AU STUDENTS SPECIAL OFFERS AVAILABLE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMINGS.map((timing, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-12 h-1 bg-brand-500 mb-4 rounded-full group-hover:w-full transition-all duration-500"></div>
                <h3 className="font-bold text-brand-700 mb-3 uppercase text-sm tracking-wider">{timing.category}</h3>
                <div className="space-y-1">
                  {timing.times.map((time, tIdx) => (
                    <p key={tIdx} className="text-stone-700 font-medium text-sm flex items-center">
                      <svg className="w-4 h-4 mr-2 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {time}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <div className="space-y-24">
        {MENU_DATA.map((section, idx) => (
          <section 
            key={idx} 
            id={toId(section.title)}
            className="animate-flip-in scroll-mt-28" 
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className="flex items-center mb-10 relative">
               <div className="absolute -left-4 w-2 h-12 bg-brand-500 rounded-r-lg shadow-lg"></div>
               <h2 className="text-4xl font-serif text-stone-800 ml-6 relative z-10 font-bold">
                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-stone-800 to-stone-600">
                    {section.title}
                 </span>
               </h2>
               <div className="h-px bg-gradient-to-r from-brand-300 to-transparent flex-grow ml-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
              {section.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="card-3d rounded-2xl p-6 border border-white/60 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500 z-0"></div>
                  
                  <div className="relative z-10 flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-stone-800 group-hover:text-brand-600 transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-stone-500 mt-2 font-light italic">{item.description}</p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                       <span className="block px-3 py-1 bg-stone-100 text-brand-700 font-bold rounded-lg shadow-inner group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 group-hover:animate-scale-pulse">
                         {item.price}
                       </span>
                    </div>
                  </div>
                  
                  {/* Hover visual cue */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Menu;