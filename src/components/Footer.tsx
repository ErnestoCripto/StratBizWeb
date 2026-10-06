import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#09090B] text-white py-16 text-xs border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-[#121214] rounded-md flex items-center justify-center p-1.5 shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#121214]" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 4h7v7H4z" fill="currentColor" stroke="none" />
                  <path d="M13 4h7v7h-7z" fill="none" stroke="currentColor" />
                  <path d="M4 13h7v7H4z" fill="none" stroke="currentColor" />
                  <path d="M13 13h7v7h-7z" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bebas text-2xl tracking-wider text-white leading-none">
                  STRAT<span className="text-[#0066CC]">BIZ</span>
                </span>
                <span className="text-[9px] font-semibold tracking-widest uppercase text-[#71717A]">
                  Estrategia & IA · PyMEs
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Consultoría especializada en estrategia de negocios, Inteligencia Artificial Generativa y modelos comerciales de alta conversión para empresas en México y Latinoamérica.
            </p>

            <div className="text-[11px] font-mono text-[#71717A]">
              Programa Embajadores · Tec de Monterrey
            </div>
          </div>

          {/* Col 2: Services & Navigation */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#71717A] mb-4">
              Navegación & Soluciones
            </h4>
            <ul className="space-y-2.5 text-[#D4D4D8]">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  01. Integración de IA Generativa
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  02. Modelos de Negocio & Crecimiento
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  03. Simulador de Impacto & ROI
                </a>
              </li>
              <li>
                <a href="#sectores" className="hover:text-white transition-colors">
                  04. Sectores & Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  05. Metodología de 5 Principios
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-white transition-colors">
                  06. Test de Madurez Digital
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Details */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#71717A] mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0066CC] flex-shrink-0" />
                <a
                  href="mailto:stratbiz@proton.me"
                  className="font-mono text-xs font-semibold text-white hover:text-[#60A5FA] transition-colors"
                >
                  stratbiz@proton.me
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0066CC] flex-shrink-0" />
                <a
                  href="tel:+525620096690"
                  className="font-mono text-xs font-semibold text-white hover:text-[#60A5FA] transition-colors"
                >
                  56.2009.6690
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[#A1A1AA]">
                <MapPin className="w-4 h-4 text-[#71717A] flex-shrink-0" />
                <span>Morelos · CDMX · Cobertura Remota en México</span>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-[#27272A]">
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#18181C] hover:bg-[#27272A] border border-[#2E2E36] text-white py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Agendar Cita Directa</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#60A5FA]" />
              </button>
            </div>
          </div>

          {/* Col 4: Slogan & Vision */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#71717A] mb-4">
              Visión & Dirección
            </h4>
            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
              <em>"Estrategia que transforma, tecnología que impulsa."</em>
            </p>
            <p className="text-xs text-[#71717A] leading-relaxed">
              Construimos la capacidad analítica y tecnológica en tu equipo para que lideres el mercado del mañana con herramientas que utilizas hoy.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between text-[#71717A] gap-4">
          <p>© 2026 StratBiz Consultores. Diseñado por Dr. Ernesto Juárez Rodríguez.</p>
          <div className="flex space-x-6 text-[11px]">
            <span className="hover:text-white cursor-pointer transition-colors">Aviso de Privacidad</span>
            <span className="hover:text-white cursor-pointer transition-colors">Términos de Servicio</span>
            <span className="hover:text-white cursor-pointer transition-colors">Código de Ética</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
