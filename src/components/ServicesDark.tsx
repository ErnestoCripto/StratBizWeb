import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Check, Sparkles, Mail } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/stratbizData';

interface ServicesDarkProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesDark: React.FC<ServicesDarkProps> = ({ onSelectService }) => {
  // Default to keeping the first service expanded
  const [expandedId, setExpandedId] = useState<string>('ia-generativa');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#0D0D10] text-white border-b border-[#27272A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER (Matches Screenshot 2: WIE ICH DIR HELFEN KANN + SERVICE pill) */}
        <div className="mb-14 lg:mb-20">
          
          {/* Huge condensed title */}
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none">
              CÓMO TE PODEMOS AYUDAR
            </h2>
            <div className="w-3.5 h-3.5 bg-white rounded-xs hidden sm:block" />
          </div>

          {/* Subheader Grid: Service Tag + Problem/Solution Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-4 border-t border-[#27272A]">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#A1A1AA] bg-[#1E1E22] border border-[#2E2E33] rounded-md">
                SERVICIOS
              </span>
            </div>

            <div className="lg:col-span-10 max-w-3xl space-y-3">
              <p className="text-lg sm:text-xl text-[#E4E4E7] font-normal leading-relaxed">
                ¿Frustrado porque tu empresa pierde horas en tareas manuales repetitivas y tu tecnología no genera ventas?
              </p>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                Diseñamos e implementamos soluciones prácticas de Inteligencia Artificial y modelos de negocio que entusiasman a tu equipo, eliminan el trabajo tedioso y traen clientes de forma sostenible. Sin jerga técnica, con resultados medibles.
              </p>
            </div>
          </div>
        </div>

        {/* NUMBERED SERVICES LIST (Matches Screenshots 3 & 4: Huge Numbers + Clean Sub-item dividers) */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`border rounded-xl transition-all duration-300 ${
                  isExpanded
                    ? 'bg-[#141418] border-[#3F3F46] shadow-xl'
                    : 'bg-[#101014] border-[#222226] hover:border-[#38383E]'
                }`}
              >
                {/* Service Header Bar (Always Clickable) */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none group"
                >
                  <div className="flex items-start sm:items-center gap-5 sm:gap-8">
                    {/* Big condensed index number (Screenshot 3 & 4 style: "01.", "02.") */}
                    <span className="font-bebas text-4xl sm:text-6xl text-[#71717A] group-hover:text-white transition-colors leading-none">
                      {service.number}
                    </span>

                    <div>
                      <h3 className="font-bebas text-2xl sm:text-4xl text-white tracking-wide uppercase leading-tight group-hover:text-[#60A5FA] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1 max-w-2xl line-clamp-1">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Right: Metric badge & Expand arrow icon */}
                  <div className="flex items-center gap-4 self-end md:self-center">
                    <span className="text-[11px] font-mono text-[#0066CC] font-semibold bg-[#0066CC]/10 px-2.5 py-1 rounded border border-[#0066CC]/20 hidden sm:inline-block">
                      {service.impactMetric}
                    </span>
                    <div className={`w-9 h-9 rounded-lg bg-[#1E1E24] border border-[#2E2E36] flex items-center justify-center text-white transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 bg-[#0066CC]' : 'group-hover:bg-[#272730]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Content Drawer (Screenshot 3 & 4 sub-items: "01 Customer Journey", etc.) */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#222226] animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Detailed explanation and tags */}
                      <div className="lg:col-span-5 space-y-4">
                        <p className="text-sm text-[#D4D4D8] leading-relaxed">
                          {service.fullDesc}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {service.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#1C1C22] border border-[#2C2C34] text-[#A1A1AA]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => onSelectService(service.title)}
                            className="inline-flex items-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] text-white px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            Solicitar Plan para este Servicio
                          </button>
                        </div>
                      </div>

                      {/* Right: Numbered Capabilities with Horizontal Divider Lines (Screenshot 3 & 4 style) */}
                      <div className="lg:col-span-7">
                        <div className="divide-y divide-[#222226] border-y border-[#222226]">
                          {service.subCapabilities.map((sub, idx) => (
                            <div key={idx} className="py-3 sm:py-3.5 flex items-center gap-4 text-xs sm:text-sm">
                              <span className="font-mono text-[11px] text-[#71717A] font-bold">
                                0{idx + 1}
                              </span>
                              <span className="font-semibold text-white tracking-wide">
                                {sub}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
