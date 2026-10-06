import React, { useState } from 'react';
import { ArrowUpRight, X, CheckCircle2, Building2, TrendingUp, Sparkles } from 'lucide-react';
import { SECTORS_CASES, SectorCase } from '../data/stratbizData';

interface ProjectsSectorsProps {
  onOpenBookingForSector: (sectorTitle: string) => void;
}

export const ProjectsSectors: React.FC<ProjectsSectorsProps> = ({ onOpenBookingForSector }) => {
  const [selectedCase, setSelectedCase] = useState<SectorCase | null>(null);

  return (
    <section id="sectores" className="py-20 lg:py-28 bg-[#EAE8E4] text-[#121214] border-b border-[#D8D5CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER (Exact layout from Screenshot 5: PROJEKTE + PORTFOLIO pill + subtext) */}
        <div className="mb-14 lg:mb-20">
          
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#121214] uppercase leading-none">
              SECTORES & CASOS
            </h2>
            <div className="w-3.5 h-3.5 bg-[#121214] rounded-xs hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-4 border-t border-[#D8D5CE]">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#121214] bg-[#E2DFD9] border border-[#CAC7BF] rounded-md">
                PORTAFOLIO
              </span>
            </div>

            <div className="lg:col-span-10 max-w-3xl">
              <p className="text-base sm:text-lg text-[#3F3F46] leading-relaxed">
                Hemos acompañado a empresas líderes de diversos sectores en México y Latinoamérica a modernizar sus operaciones, automatizar la atención y aumentar su rentabilidad con IA y estrategia directa.
              </p>
            </div>
          </div>

        </div>

        {/* EDITORIAL HORIZONTAL LIST (Screenshot 5 Style: Rows with horizontal divider lines) */}
        <div className="border-t border-[#D8D5CE]">
          {SECTORS_CASES.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCase(item)}
              className="group py-6 sm:py-8 border-b border-[#D8D5CE] cursor-pointer hover:bg-[#E2DFD9]/60 transition-all px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Left: Year & Category (Quiet metadata) */}
              <div className="md:w-1/4">
                <span className="font-mono text-xs text-[#71717A] tracking-wider font-semibold uppercase">
                  {item.year},&nbsp;&nbsp;{item.category}
                </span>
              </div>

              {/* Center: HUGE Condensed Project Title (Screenshot 5 style) */}
              <div className="md:w-2/3">
                <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#121214] group-hover:text-[#0066CC] transition-colors leading-none tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-[#71717A] mt-1 font-medium line-clamp-1">
                  {item.clients}
                </p>
              </div>

              {/* Right: External Link Arrow icon */}
              <div className="self-end md:self-center flex-shrink-0">
                <div className="w-9 h-9 rounded-md bg-[#E2DFD9] group-hover:bg-[#121214] group-hover:text-white border border-[#CAC7BF] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#121214] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121214] text-white border border-[#27272A] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-lg bg-[#1E1E22] hover:bg-[#27272A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              
              <div>
                <span className="text-[11px] font-mono text-[#0066CC] font-bold uppercase tracking-wider block mb-1">
                  {selectedCase.year} · {selectedCase.category}
                </span>
                <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase leading-tight">
                  {selectedCase.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Empresas involucradas: {selectedCase.clients}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                <div>
                  <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-1">
                    El Desafío Operativo:
                  </h4>
                  <p className="bg-[#18181C] p-3 rounded-lg border border-[#27272A] text-[#A1A1AA]">
                    {selectedCase.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-1">
                    La Solución StratBiz & IA:
                  </h4>
                  <p className="bg-[#18181C] p-3 rounded-lg border border-[#27272A] text-[#E4E4E7]">
                    {selectedCase.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#60A5FA] uppercase text-[11px] tracking-wider mb-2">
                    Resultados & Impacto Cuantitativo:
                  </h4>
                  <div className="space-y-2">
                    {selectedCase.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-[#18181C] p-2.5 rounded-lg border border-[#0066CC]/30">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-white font-medium">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-[#71717A]">
                  Metodología respaldada por Dr. Ernesto Juárez R.
                </span>
                <button
                  onClick={() => {
                    const caseTitle = selectedCase.title;
                    setSelectedCase(null);
                    onOpenBookingForSector(caseTitle);
                  }}
                  className="w-full sm:w-auto bg-[#0066CC] hover:bg-[#0052A3] text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Solicitar Caso para mi Empresa</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
