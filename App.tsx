import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import { MENU_DATA } from './constants';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toId = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const getShortTitle = (title: string) => {
    if (title.includes('SIGNATURE SHAKES')) return 'Shakes';
    if (title.includes('JUICES')) return 'Juices';
    if (title.includes('TIFFINS')) return 'Tiffins';
    return title
      .replace('NON-VEG', 'NV')
      .replace('VEG', 'Veg')
      .replace('FRIED RICE', 'Rice')
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans overflow-x-hidden">
      {/* Navigation - Glassmorphism */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl shadow-lg flex items-center justify-center text-white font-serif font-bold text-2xl transform group-hover:rotate-12 transition-transform duration-300 border-2 border-white/20">
                 A
               </div>
               <div>
                 <h1 className={`text-2xl font-bold font-serif tracking-tight leading-none transition-colors ${scrolled ? 'text-brand-900' : 'text-white drop-shadow-md'}`}>Anupama</h1>
                 <p className={`text-[10px] tracking-[0.2em] font-bold uppercase transition-colors ${scrolled ? 'text-brand-600' : 'text-stone-200'}`}>Multi Cuisine</p>
               </div>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
              {MENU_DATA.map((section) => (
                <a
                  key={section.title}
                  href={`#${toId(section.title)}`}
                  onClick={(e) => scrollToSection(e, toId(section.title))}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white/10 ${scrolled ? 'text-stone-600 hover:text-brand-600' : 'text-stone-200 hover:text-white hover:shadow-lg'}`}
                >
                  {getShortTitle(section.title)}
                </a>
              ))}
            </div>
            
            {/* Desktop Call Action */}
            <div className="hidden md:flex items-center">
              <a href="tel:9550454565" className="relative overflow-hidden group bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ml-4">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Order: 95504 54565
                </span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-brand-700/50"></div>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-stone-600' : 'text-white'} hover:bg-white/10 focus:outline-none`}
              >
                <svg className="block h-8 w-8 drop-shadow-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} bg-white shadow-xl absolute w-full top-full left-0 border-t border-stone-100`}>
          <div className="px-4 py-4 space-y-1">
            {MENU_DATA.map((section) => (
              <a
                key={section.title}
                href={`#${toId(section.title)}`}
                onClick={(e) => scrollToSection(e, toId(section.title))}
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
              >
                {getShortTitle(section.title)}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-stone-100">
              <a href="tel:+919550454565" className="block w-full text-center py-3 rounded-lg bg-brand-600 text-white font-bold shadow-lg">
                📞 Call: +91 9550454565
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 3D Hero Section */}
      <div className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-stone-900 perspective-1000">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover transform scale-110 animate-pulse" 
            style={{ animationDuration: '20s' }}
            src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2080&auto=format&fit=crop" 
            alt="Delicious Food"
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-500 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
           <div className="absolute top-3/4 left-1/3 w-6 h-6 bg-yellow-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
           <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-red-500 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* 3D Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto transform-style-3d">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 animate-slide-up text-3d tracking-tight leading-tight">
            A Warm and Welcoming Dining Experience,<br/>
            <span className="text-brand-500">Delivered Home to you</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-stone-200 font-light max-w-2xl mx-auto drop-shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Experience the finest <span className="font-bold text-white">Multi-Cuisine</span> dining in Visakhapatnam.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
             {/* 3D Badge 1 */}
             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-default group">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform">🛵</div>
                <div className="text-left">
                  <span className="block text-white font-bold text-lg">Free Delivery</span>
                  <span className="text-green-300 text-sm">20-40 Minutes</span>
                </div>
             </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 text-white/70">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>

      {/* Main Content with subtle gradient bg */}
      <main className="flex-grow bg-gradient-to-b from-stone-50 to-stone-200 relative z-10 -mt-8 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
        <Menu />
      </main>

      {/* 3D Footer */}
      <footer className="bg-stone-900 text-stone-300 relative z-10 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="transform hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-white text-2xl font-bold mb-6 font-serif border-l-4 border-brand-500 pl-4">Anupama</h3>
              <div className="bg-stone-800/50 p-4 rounded-lg backdrop-blur-sm border border-stone-700">
                <p className="font-semibold text-brand-400 mb-2">Kitchens:</p>
                <p className="text-sm leading-relaxed mb-2 flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Non Veg (1st Floor)</p>
                <p className="text-sm leading-relaxed flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Pure Veg (Ground Floor)</p>
              </div>
            </div>
            
            <div className="transform hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-white text-2xl font-bold mb-6 font-serif border-l-4 border-brand-500 pl-4">Contact</h3>
              <div className="space-y-4">
                 <a href="tel:+919550454565" className="flex items-center p-3 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors group">
                    <span className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-600 transition-colors">📞</span>
                    <div>
                      <p className="text-xs text-stone-500 uppercase font-bold">Main Line</p>
                      <p className="text-white font-mono text-lg">+91 95504 54565</p>
                    </div>
                 </a>
                 <a href="tel:+919573573123" className="flex items-center p-3 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors group">
                    <span className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-600 transition-colors">📱</span>
                    <div>
                      <p className="text-xs text-stone-500 uppercase font-bold">Secondary Line</p>
                      <p className="text-white font-mono text-lg">+91 95735 73123</p>
                    </div>
                 </a>
              </div>
            </div>
            
            <div className="transform hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-white text-2xl font-bold mb-6 font-serif border-l-4 border-brand-500 pl-4">Location</h3>
              <div className="bg-stone-800/50 p-4 rounded-lg border border-stone-700 h-full flex items-start">
                <span className="text-2xl mr-3">📍</span>
                <p className="text-sm leading-relaxed text-stone-300">
                  Opp. Three Town Police Station,<br/>
                  Waltair Main Road,<br/>
                  Chinna Waltair,<br/>
                  <span className="text-white font-bold">Visakhapatnam-530003</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-12 pt-8 text-center">
             <p className="text-stone-500 text-sm">
               &copy; {new Date().getFullYear()} Anupama Multi Cuisine Restaurant. <br className="sm:hidden"/> Designed with ❤️ for food lovers.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;