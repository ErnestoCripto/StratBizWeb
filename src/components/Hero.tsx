import React, { useState } from 'react';
import { ArrowUpRight, Bot, Zap, TrendingUp, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToSimulator }) => {
  const [activeTab, setActiveTab] = useState<'agent' | 'leads' | 'roi'>('agent');
  const [simPrompt, setSimPrompt] = useState('Analizar flujo de atención en WhatsApp y cotizaciones manuales');
  const [simOutput, setSimOutput] = useState(
    'Agente de IA StratBiz configurado: 3 reglas de triaje automático, sincronización con CRM y tiempo de respuesta estimado en 10 segundos.'
  );
  const [isSimulating, setIsSimulating] = useState(false);

  const handleRunSimPrompt = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setSimOutput(
        `Optimización ejecutada para "${simPrompt}": Se reducen 14 hrs semanales de transcripción y se activan 2 secuencias de seguimiento comercial con Claude 3.7.`
      );
      setIsSimulating(false);
    }, 600);
  };

  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#D8D5CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status & Accreditation Marker */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2.5 h-2.5 bg-[#121214] rounded-xs" />
          <span className="text-xs uppercase font-bold tracking-widest text-[#71717A]">
            Programa Embajadores · Tecnológico de Monterrey
          </span>
        </div>

        {/* MASSIVE ALL-CAPS CONDENSED HEADLINE (Screenshot 1 Style) */}
        <div className="mb-8 lg:mb-12">
          <h1 className="font-bebas text-5xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] tracking-tight text-[#121214] leading-[0.92] uppercase">
            ESTRATEGIA & IA QUE HACEN <br className="hidden sm:inline" />
            <span className="text-[#121214] hover:text-[#0066CC] transition-colors">
              IMPOSIBLE IGNORAR TU NEGOCIO
            </span>
          </h1>
        </div>

        {/* Two-Column Layout: Left Narrative & CTA | Right Interactive Live Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg sm:text-xl text-[#3F3F46] font-normal leading-relaxed">
              Como consultor estratégico y docente con respaldo del <strong className="font-semibold text-[#121214]">Tecnológico de Monterrey</strong>, transformo PyMEs mediante Inteligencia Artificial Generativa, automatización de procesos y modelos comerciales de alta rentabilidad. Sin jerga técnica, con resultados medibles desde el primer mes.
            </p>

            {/* CTAs (Screenshot 1 Style: Dark avatar button + light button) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-3 bg-[#121214] hover:bg-[#27272A] text-white px-5 py-3.5 rounded-lg border border-[#27272A] transition-all transform active:scale-95 shadow-md group"
              >
                <div className="w-6 h-6 rounded bg-[#27272A] border border-[#3F3F46] flex items-center justify-center text-[10px] font-bold text-white">
                  EJ
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Agendar Consultoría
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </button>

              <button
                onClick={onScrollToSimulator}
                className="flex items-center justify-center gap-2 bg-[#E2DFD9] hover:bg-[#D5D2CB] text-[#121214] px-5 py-3.5 rounded-lg border border-[#CAC7BF] text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Zap className="w-4 h-4 text-[#0066CC]" />
                Probar Simulador ROI
              </button>
            </div>

            {/* Strategic KPI Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D8D5CE]">
              <div>
                <div className="font-bebas text-3xl sm:text-4xl text-[#121214] leading-none">+45%</div>
                <div className="text-[11px] text-[#71717A] mt-1 font-medium">Eficiencia operativa</div>
              </div>
              <div>
                <div className="font-bebas text-3xl sm:text-4xl text-[#0066CC] leading-none">100%</div>
                <div className="text-[11px] text-[#71717A] mt-1 font-medium">Enfoque en negocio</div>
              </div>
              <div>
                <div className="font-bebas text-3xl sm:text-4xl text-[#121214] leading-none">8+</div>
                <div className="text-[11px] text-[#71717A] mt-1 font-medium">Sectores atendidos</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Mockup Frame (Screenshot 1 visual card + "BY DR. ERNESTO JUÁREZ ───────") */}
          <div className="lg:col-span-7">
            <div className="bg-[#121214] text-white rounded-2xl border-2 border-[#27272A] p-4 sm:p-6 shadow-2xl overflow-hidden relative">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#27272A] mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="ml-2 text-xs font-mono text-[#A1A1AA]">stratbiz-cockpit.internal</span>
                </div>

                {/* Sub-tabs inside mockup */}
                <div className="flex items-center bg-[#1E1E22] rounded-md p-0.5 border border-[#2E2E33]">
                  <button
                    onClick={() => setActiveTab('agent')}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                      activeTab === 'agent' ? 'bg-[#2E2E33] text-white shadow-xs' : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    Agente IA
                  </button>
                  <button
                    onClick={() => setActiveTab('leads')}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                      activeTab === 'leads' ? 'bg-[#2E2E33] text-white shadow-xs' : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    Embudos
                  </button>
                  <button
                    onClick={() => setActiveTab('roi')}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                      activeTab === 'roi' ? 'bg-[#2E2E33] text-white shadow-xs' : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    Métricas
                  </button>
                </div>
              </div>

              {/* Dynamic Screen View */}
              {activeTab === 'agent' && (
                <div className="space-y-4">
                  <div className="bg-[#18181C] border border-[#27272A] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3 text-xs text-[#A1A1AA]">
                      <span className="flex items-center gap-1.5 font-semibold text-white">
                        <Bot className="w-4 h-4 text-[#0066CC]" />
                        Simulador de Flujo StratBiz (IA Generativa)
                      </span>
                      <span className="text-[10px] bg-[#0066CC]/20 text-[#60A5FA] px-2 py-0.5 rounded border border-[#0066CC]/30">
                        Claude 3.7 & n8n Live
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-[#121214] border border-[#27272A] rounded-lg p-2">
                      <input
                        type="text"
                        value={simPrompt}
                        onChange={(e) => setSimPrompt(e.target.value)}
                        placeholder="Escribe un reto de automatización..."
                        className="bg-transparent text-xs text-white focus:outline-none flex-1 px-2"
                      />
                      <button
                        onClick={handleRunSimPrompt}
                        disabled={isSimulating}
                        className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        {isSimulating ? <Sparkles className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                        Ejecutar
                      </button>
                    </div>

                    <div className="mt-3 p-3 bg-[#121214] rounded-lg border border-[#27272A]/70 text-xs text-[#D4D4D8] leading-relaxed">
                      <span className="text-[10px] text-[#A1A1AA] block uppercase font-mono mb-1">
                        Respuesta del Modelo & Arquitectura de Proceso:
                      </span>
                      {simOutput}
                    </div>
                  </div>

                  {/* Operational stats mini-grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-[#18181C] rounded-lg border border-[#27272A]">
                      <div className="text-[10px] text-[#A1A1AA] uppercase">Tiempo de Respuesta</div>
                      <div className="text-base font-bold text-[#10B981] mt-0.5">&lt; 15 seg en WhatsApp</div>
                      <div className="text-[10px] text-[#71717A] mt-0.5">Antes: 4.5 horas promedio</div>
                    </div>
                    <div className="p-3 bg-[#18181C] rounded-lg border border-[#27272A]">
                      <div className="text-[10px] text-[#A1A1AA] uppercase">Horas Manuales Ahorradas</div>
                      <div className="text-base font-bold text-white mt-0.5">24 hrs / semana por sucursal</div>
                      <div className="text-[10px] text-[#71717A] mt-0.5">En transcripción y cotizaciones</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'leads' && (
                <div className="space-y-3">
                  <div className="p-4 bg-[#18181C] rounded-xl border border-[#27272A]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-[#0066CC]" />
                        Embudo de Adquisición B2B / B2C
                      </span>
                      <span className="text-xs text-[#10B981] font-bold">ROAS 4.8x</span>
                    </div>
                    <div className="space-y-2 mt-3 text-xs">
                      <div className="flex justify-between items-center text-[#A1A1AA]">
                        <span>Leads en Meta & Google Ads</span>
                        <span className="font-bold text-white">1,240 prospectos</span>
                      </div>
                      <div className="w-full bg-[#27272A] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#0066CC] h-full" style={{ width: '85%' }} />
                      </div>

                      <div className="flex justify-between items-center text-[#A1A1AA] pt-1">
                        <span>Calificados por Agente IA</span>
                        <span className="font-bold text-white">418 citas listas</span>
                      </div>
                      <div className="w-full bg-[#27272A] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#10B981] h-full" style={{ width: '48%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#18181C] rounded-lg border border-[#27272A] flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                    <span className="text-xs text-[#D4D4D8]">
                      Integrado con WhatsApp Business API, HubSpot y Google Sheets en tiempo real.
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'roi' && (
                <div className="space-y-3">
                  <div className="p-4 bg-[#18181C] rounded-xl border border-[#27272A] text-center">
                    <span className="text-[11px] uppercase tracking-wider text-[#A1A1AA] block mb-1">
                      Retorno de Inversión Proyectado (3 Meses)
                    </span>
                    <span className="font-bebas text-4xl text-[#10B981] tracking-wide block">
                      + $380,000 MXN / AÑO
                    </span>
                    <span className="text-[11px] text-[#A1A1AA] mt-1 block">
                      En reducción de fugas comerciales y liberación de capacidad del equipo clave.
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-[#18181C] rounded-lg border border-[#27272A]">
                      <div className="text-[10px] text-[#A1A1AA]">Margen de Rentabilidad</div>
                      <div className="text-base font-bold text-white mt-1">+18.5%</div>
                    </div>
                    <div className="p-3 bg-[#18181C] rounded-lg border border-[#27272A]">
                      <div className="text-[10px] text-[#A1A1AA]">Ciclo de Venta</div>
                      <div className="text-base font-bold text-[#60A5FA] mt-1">De 12 a 3 días</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Author Badge & Divider (Exact layout from Screenshot 1: BY DARIO GRIGOLETTI ──────) */}
              <div className="mt-5 pt-3 border-t border-[#27272A] flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#71717A] uppercase">
                <span className="text-white font-bold">POR DR. ERNESTO JUÁREZ R.</span>
                <span className="flex-1 h-px bg-[#27272A]" />
                <span className="text-[10px] text-[#A1A1AA]">STRATBIZ 2026</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
