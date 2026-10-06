import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#EAE8E4]/90 backdrop-blur-md border-b border-[#D8D5CE] shadow-xs py-3' 
        : 'bg-[#EAE8E4] border-b border-[#D8D5CE] py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with StratBiz logo from assets/LogoSB_black2.png */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-[#121214] rounded-lg overflow-hidden flex items-center justify-center p-1 transition-transform group-hover:scale-105 shadow-xs border border-[#27272A]">
            <img
              src="assets/LogoSB_black2.png"
              alt="StratBiz Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith('/assets/LogoSB_black2.png')) {
                  target.src = '/assets/LogoSB_black2.png';
                }
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-2xl tracking-wider text-[#121214] leading-none">
              STRAT<span className="text-[#0066CC]">BIZ</span>
            </span>
            <span className="text-[9px] font-semibold tracking-widest uppercase text-[#71717A] mt-0.5">
              Estrategia & IA · PyMEs
            </span>
          </div>
        </a>

        {/* Center Pill Navigation Buttons (Screenshot 1 Style: Segmented Badges) */}
        <nav className="hidden lg:flex items-center gap-2">
          {/* Services with subtle dropdown */}
          <div className="relative" onMouseLeave={() => setServicesDropdown(false)}>
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              onMouseEnter={() => setServicesDropdown(true)}
              className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#121214] bg-[#E2DFD9] hover:bg-[#D5D2CB] border border-[#CAC7BF] rounded-md transition-colors"
            >
              Servicios
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full left-0 mt-1.5 w-64 bg-[#121214] text-white border border-[#27272A] rounded-lg shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <a 
                  href="#servicios" 
                  onClick={() => setServicesDropdown(false)}
                  className="block p-2 text-xs hover:bg-[#202024] rounded transition-colors"
                >
                  <div className="font-bold text-[#EAE8E4]">01. IA Generativa</div>
                  <div className="text-[10px] text-[#A1A1AA]">Asistentes virtuales y agentes de prospección</div>
                </a>
                <a 
                  href="#servicios" 
                  onClick={() => setServicesDropdown(false)}
                  className="block p-2 text-xs hover:bg-[#202024] rounded transition-colors"
                >
                  <div className="font-bold text-[#EAE8E4]">02. Modelos de Negocio</div>
                  <div className="text-[10px] text-[#A1A1AA]">Viabilidad y escalamiento de ingresos</div>
                </a>
                <a 
                  href="#servicios" 
                  onClick={() => setServicesDropdown(false)}
                  className="block p-2 text-xs hover:bg-[#202024] rounded transition-colors"
                >
                  <div className="font-bold text-[#EAE8E4]">03. Capacitación Directiva</div>
                  <div className="text-[10px] text-[#A1A1AA]">Estándar Tec de Monterrey Embajadores</div>
                </a>
                <a 
                  href="#servicios" 
                  onClick={() => setServicesDropdown(false)}
                  className="block p-2 text-xs hover:bg-[#202024] rounded transition-colors"
                >
                  <div className="font-bold text-[#EAE8E4]">04. Marketing de Performance</div>
                  <div className="text-[10px] text-[#A1A1AA]">Meta Ads, Google Ads & Inbound</div>
                </a>
              </div>
            )}
          </div>

          <a
            href="#sectores"
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#121214] bg-[#E2DFD9] hover:bg-[#D5D2CB] border border-[#CAC7BF] rounded-md transition-colors"
          >
            Proyectos
          </a>

          <a
            href="#metodologia"
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#121214] bg-[#E2DFD9] hover:bg-[#D5D2CB] border border-[#CAC7BF] rounded-md transition-colors"
          >
            Metodología
          </a>

          <a
            href="#simulador"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#121214] bg-[#E2DFD9] hover:bg-[#D5D2CB] border border-[#CAC7BF] rounded-md transition-colors group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC] animate-ping" />
            Simulador ROI
          </a>

          <a
            href="#nosotros"
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#121214] bg-[#E2DFD9] hover:bg-[#D5D2CB] border border-[#CAC7BF] rounded-md transition-colors"
          >
            Sobre Mí
          </a>

          <a
            href="#diagnostico"
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#121214] bg-[#E2DFD9] hover:bg-[#D5D2CB] border border-[#CAC7BF] rounded-md transition-colors"
          >
            Test Digital
          </a>
        </nav>

        {/* Right Action: Dark Pill with Avatar (Screenshot 1 Style: `[ (avatar) KONTAKT ]`) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2.5 bg-[#121214] hover:bg-[#27272A] text-white px-3.5 py-1.5 rounded-lg border border-[#27272A] transition-all transform active:scale-95 shadow-sm group"
          >
            {/* Miniature consultant avatar */}
            <div className="w-6 h-6 rounded-md bg-[#27272A] border border-[#3F3F46] flex items-center justify-center overflow-hidden">
              <img
                src="assets/EJR.png"
                alt="Dr. Ernesto Juárez"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/assets/EJR.png')) {
                    target.src = '/assets/EJR.png';
                  }
                }}
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider">
              Contacto
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#121214] hover:bg-[#DCD8D2] rounded-md transition-colors"
            aria-label="Abrir menú de navegación"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#EAE8E4] border-b border-[#D8D5CE] px-4 pt-3 pb-6 space-y-2 mt-2 animate-in slide-in-from-top-2">
          <a
            href="#servicios"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wide text-[#121214] py-2 border-b border-[#D8D5CE]"
          >
            01. Servicios & IA
          </a>
          <a
            href="#sectores"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wide text-[#121214] py-2 border-b border-[#D8D5CE]"
          >
            02. Proyectos & Sectores
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wide text-[#0066CC] py-2 border-b border-[#D8D5CE]"
          >
            03. Simulador de Impacto IA
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wide text-[#121214] py-2 border-b border-[#D8D5CE]"
          >
            04. Metodología & 5 Principios
          </a>
          <a
            href="#nosotros"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wide text-[#121214] py-2 border-b border-[#D8D5CE]"
          >
            05. Dr. Ernesto Juárez R.
          </a>
          <a
            href="#diagnostico"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wide text-[#121214] py-2"
          >
            06. Test de Madurez Digital
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#121214] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Agendar Consultoría Gratuita
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
