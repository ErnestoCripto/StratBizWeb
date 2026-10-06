import React from 'react';
import { PRINCIPLES_DATA } from '../data/stratbizData';

export const Principles: React.FC = () => {
  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-[#EAE8E4] text-[#121214] border-b border-[#D8D5CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#121214] uppercase leading-none">
              FILOSOFÍA DE TRABAJO
            </h2>
            <div className="w-3.5 h-3.5 bg-[#121214] rounded-xs hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-4 border-t border-[#D8D5CE]">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#121214] bg-[#E2DFD9] border border-[#CAC7BF] rounded-md">
                METODOLOGÍA
              </span>
            </div>

            <div className="lg:col-span-10 max-w-3xl">
              <h3 className="text-xl sm:text-2xl font-bold text-[#121214] tracking-tight mb-2">
                Los 5 Principios No Negociables de StratBiz.
              </h3>
              <p className="text-sm sm:text-base text-[#3F3F46] leading-relaxed">
                Entendemos la realidad del empresario mexicano y latinoamericano: no necesitas teorías complejas de pizarrón, necesitas herramientas operativas que funcionen desde el primer día.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {PRINCIPLES_DATA.map((principle) => (
            <div
              key={principle.number}
              className="bg-[#E2DFD9] border border-[#CAC7BF] rounded-xl p-6 flex flex-col justify-between hover:border-[#121214] transition-all duration-200 group"
            >
              <div>
                <span className="font-bebas text-4xl sm:text-5xl text-[#71717A] group-hover:text-[#0066CC] transition-colors leading-none block mb-4">
                  {principle.number}.
                </span>
                
                <h4 className="font-bebas text-2xl text-[#121214] uppercase tracking-wide leading-tight mb-1">
                  {principle.title}
                </h4>
                
                <div className="text-[11px] font-bold text-[#71717A] uppercase tracking-wider mb-3">
                  {principle.subtitle}
                </div>

                <p className="text-xs text-[#3F3F46] leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CAC7BF] text-[10px] font-mono uppercase text-[#71717A] group-hover:text-[#121214]">
                Compromiso StratBiz
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
