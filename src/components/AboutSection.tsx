import React from 'react';
import { ArrowUpRight, Award, CheckCircle, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#EAE8E4] text-[#121214] border-b border-[#D8D5CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#121214] uppercase leading-none">
              RESPALDO & TRAYECTORIA
            </h2>
            <div className="w-3.5 h-3.5 bg-[#121214] rounded-xs hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-4 border-t border-[#D8D5CE]">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#121214] bg-[#E2DFD9] border border-[#CAC7BF] rounded-md">
                SOBRE MÍ
              </span>
            </div>

            <div className="lg:col-span-10 max-w-3xl">
              <h3 className="text-xl sm:text-2xl font-bold text-[#121214] tracking-tight mb-2">
                No somos una agencia más de marketing. Somos tu equipo interno de Transformación Digital.
              </h3>
              <p className="text-sm sm:text-base text-[#3F3F46] leading-relaxed">
                StratBiz fue concebido bajo la convicción de que la Inteligencia Artificial y la consultoría estratégica de alto nivel no deben ser un privilegio exclusivo de las grandes corporaciones transnacionales.
              </p>
            </div>
          </div>
        </div>

        {/* Consultant Profile Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Credentials (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#E2DFD9] border border-[#CAC7BF] rounded-xl p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D5D2CB] text-xs font-mono font-bold text-[#121214]">
                <GraduationCap className="w-4 h-4 text-[#0066CC]" />
                Programa Embajadores · Tecnológico de Monterrey
              </div>

              <h4 className="font-bebas text-3xl sm:text-4xl text-[#121214] uppercase tracking-wide leading-tight">
                Ciencia aplicada a la rentabilidad real de tu empresa
              </h4>

              <p className="text-sm text-[#3F3F46] leading-relaxed">
                Formado bajo el programa <strong>"Embajadores" del Tecnológico de Monterrey</strong>, combinamos certificaciones internacionales de vanguardia con un profundo conocimiento de la idiosincrasia y los desafíos comerciales del mercado mexicano.
              </p>

              <p className="text-sm text-[#3F3F46] leading-relaxed">
                Nuestra meta es dotar a directores, gerentes y equipos de herramientas de IA Generativa para que dejen de operar en modo reactivo y tomen decisiones con base en datos concretos.
              </p>

              {/* Badges of mastery */}
              <div className="pt-4 border-t border-[#CAC7BF]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#71717A] mb-3">
                  Dominio Tecnológico & Certificaciones Acreditadas:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded bg-[#EAE8E4] border border-[#CAC7BF] text-[#121214] font-medium">
                    IA Generativa (CertiProf)
                  </span>
                  <span className="px-3 py-1.5 rounded bg-[#EAE8E4] border border-[#CAC7BF] text-[#121214] font-medium">
                    Claude & Anthropic Prompt Engineering
                  </span>
                  <span className="px-3 py-1.5 rounded bg-[#EAE8E4] border border-[#CAC7BF] text-[#121214] font-medium">
                    Google AI Certified
                  </span>
                  <span className="px-3 py-1.5 rounded bg-[#EAE8E4] border border-[#CAC7BF] text-[#121214] font-medium">
                    Meta Ads Partner
                  </span>
                  <span className="px-3 py-1.5 rounded bg-[#EAE8E4] border border-[#CAC7BF] text-[#121214] font-medium">
                    HubSpot Inbound Certified
                  </span>
                  <span className="px-3 py-1.5 rounded bg-[#EAE8E4] border border-[#CAC7BF] text-[#121214] font-medium">
                    Shopify Partner
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Consultant Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#121214] text-white border border-[#27272A] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              
              <div className="flex items-center gap-4">
                {/* Professional Avatar with assets/EJR.png */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#27272A] border-2 border-[#0066CC] flex items-center justify-center relative overflow-hidden flex-shrink-0 shadow-lg">
                  <img
                    src="assets/EJR.png"
                    alt="Dr. Ernesto Juárez Rodríguez"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith('/assets/EJR.png')) {
                        target.src = '/assets/EJR.png';
                      }
                    }}
                  />
                  <span className="absolute bottom-1 right-1 bg-[#0066CC] text-white font-bold text-[9px] px-1.5 py-0.5 rounded font-mono shadow">
                    DR
                  </span>
                </div>

                <div>
                  <h4 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase leading-none">
                    Dr. Ernesto Juárez Rodríguez
                  </h4>
                  <div className="text-xs font-mono text-[#60A5FA] mt-1 font-semibold">
                    Líder Consultor & Diseñador StratBiz
                  </div>
                  <div className="text-[11px] text-[#A1A1AA] mt-0.5">
                    15+ años impulsando PyMEs y educación superior
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                Especialista en estrategia de negocios, tecnologías disruptivas e IA aplicada a la competitividad. Docente, consultor y mentor con amplia experiencia en modelos comerciales sostenibles.
              </p>

              <div className="pt-4 border-t border-[#27272A] space-y-2.5 text-xs text-[#A1A1AA]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Sede principal en Morelos · Cobertura remota nacional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Consultoría personalizada uno a uno con directores</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Contacto directo: <strong>stratbiz@proton.me</strong></span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Agendar Diagnóstico con Dr. Ernesto Juárez</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
