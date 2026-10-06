import React, { useState, useId } from 'react';
import { ArrowUpRight, Calculator, Clock, DollarSign, Sparkles, CheckCircle2 } from 'lucide-react';

interface SimulatorProps {
  onApplyData: (summary: string) => void;
}

export const Simulator: React.FC<SimulatorProps> = ({ onApplyData }) => {
  const [teamSize, setTeamSize] = useState<number>(15);
  const [manualHours, setManualHours] = useState<number>(10);
  const [digitalLevel, setDigitalLevel] = useState<'basic' | 'intermediate' | 'advanced'>('intermediate');

  const teamSizeId = useId();
  const manualHoursId = useId();
  const digitalLevelId = useId();

  // Efficiency factor depending on level
  const efficiencyMultipliers = {
    basic: 0.65, // 65% of manual time can be reclaimed
    intermediate: 0.60,
    advanced: 0.50
  };

  const hourlyCostMXN = 120; // Average cost / value of 1 hour in Mexican PyME operations (salary + overhead)
  const annualWeeks = 48; // Working weeks

  const totalAnnualManualHours = teamSize * manualHours * annualWeeks;
  const hoursSavedAnnual = Math.round(totalAnnualManualHours * efficiencyMultipliers[digitalLevel]);
  const economicValueMXN = hoursSavedAnnual * hourlyCostMXN;

  // Manual hours as percentage of typical 40hr week
  const manualPercent = Math.min(Math.round((manualHours / 40) * 100), 100);
  const optimizationPercent = Math.round(efficiencyMultipliers[digitalLevel] * 100);

  const handleTransferToPlan = () => {
    const summary = `Simulación de IA StratBiz: Equipo de ${teamSize} personas, ${manualHours} hrs/sem de tareas manuales repetitivas (${digitalLevel}). Impacto proyectado: ${hoursSavedAnnual.toLocaleString()} horas anuales liberadas y valor económico recuperable de $${economicValueMXN.toLocaleString()} MXN / año.`;
    onApplyData(summary);
  };

  return (
    <section id="simulador" className="py-20 lg:py-28 bg-[#09090B] text-white border-b border-[#27272A] relative overflow-hidden">
      
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066CC]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#18181C] border border-[#27272A] text-xs font-mono uppercase tracking-widest text-[#60A5FA] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Herramienta Interactiva de Estimación ROI
          </div>
          <h2 className="font-bebas text-5xl sm:text-7xl tracking-tight text-white uppercase leading-none">
            SIMULADOR DE IMPACTO DIGITAL & IA
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Calcula las horas hombre liberadas, la ganancia en productividad y el incremento estimado en ventas para tu empresa con StratBiz.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="bg-[#121215] border border-[#27272A] rounded-2xl p-6 sm:p-10 max-w-5xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Interactive Controls (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="border-b border-[#27272A] pb-3 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wider text-white">
                  Variables de tu Operación
                </span>
                <span className="text-[11px] text-[#71717A] font-mono">
                  Parámetros editables
                </span>
              </div>

              {/* Slider 1: Team Size */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <label htmlFor={teamSizeId} className="text-[#D4D4D8] font-medium">Tamaño del Equipo (Colaboradores)</label>
                  <span className="text-[#60A5FA] font-bold text-base font-mono">
                    {teamSize} personas
                  </span>
                </div>
                <input
                  id={teamSizeId}
                  type="range"
                  min="2"
                  max="100"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] text-[#71717A] mt-1 font-mono">
                  <span>2 pers.</span>
                  <span>50 pers.</span>
                  <span>100+ pers.</span>
                </div>
              </div>

              {/* Slider 2: Manual hours */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2">
                  <label htmlFor={manualHoursId} className="text-[#D4D4D8] font-medium">Horas/semana por persona en tareas manuales</label>
                  <span className="text-white font-bold text-base font-mono">
                    {manualHours} hrs / sem
                  </span>
                </div>
                <input
                  id={manualHoursId}
                  type="range"
                  min="3"
                  max="25"
                  step="1"
                  value={manualHours}
                  onChange={(e) => setManualHours(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] text-[#71717A] mt-1 font-mono">
                  <span>3 hrs (Mínimo)</span>
                  <span>12 hrs (Promedio)</span>
                  <span>25 hrs (Crítico)</span>
                </div>
              </div>

              {/* Select 3: Digital level */}
              <div>
                <label htmlFor={digitalLevelId} className="block text-xs text-[#D4D4D8] font-medium mb-2">
                  Nivel Actual de Adopción Tecnológica
                </label>
                <select
                  id={digitalLevelId}
                  value={digitalLevel}
                  onChange={(e) => setDigitalLevel(e.target.value as any)}
                  className="w-full bg-[#18181C] border border-[#2E2E36] rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#0066CC] transition-colors"
                >
                  <option value="basic">Uso elemental (Solo WhatsApp personal y Excel manual)</option>
                  <option value="intermediate">Intermedio (Redes sociales y software disperso)</option>
                  <option value="advanced">Avanzado (Sistemas integrados sin IA Generativa)</option>
                </select>
              </div>

              {/* Methodology card */}
              <div className="p-4 bg-[#18181C] rounded-xl border border-[#27272A] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">
                    Estándar Metodológico StratBiz
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#0066CC]/20 text-[#60A5FA] font-mono font-bold">
                    Tec de Mty Embajador
                  </span>
                </div>
                <p className="text-[11px] text-[#A1A1AA] leading-relaxed">
                  Combinamos agentes de IA, automatización sin código (Make/n8n) y optimización de embudos comerciales para lograr adopción inmediata.
                </p>
              </div>
            </div>

            {/* Right: Results Dashboard (6 Cols) */}
            <div className="lg:col-span-6 bg-[#16161A] border border-[#27272A] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="border-b border-[#27272A] pb-3 mb-6">
                  <span className="text-sm font-semibold uppercase tracking-wider text-white">
                    Impacto Estimado en tu Empresa
                  </span>
                </div>

                {/* Metric Cards Comparison */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  
                  {/* Without IA */}
                  <div className="bg-[#1C1C22] p-4 rounded-lg border border-[#EF4444]/20">
                    <div className="text-[10px] text-[#A1A1AA] uppercase font-mono tracking-wider">
                      Sin IA (Tiempo Perdido)
                    </div>
                    <div className="font-bebas text-2xl sm:text-3xl text-[#F87171] mt-1 leading-none">
                      {totalAnnualManualHours.toLocaleString()} hrs
                    </div>
                    <div className="text-[10px] text-[#71717A] mt-1">
                      En tareas repetitivas / año
                    </div>
                  </div>

                  {/* With StratBiz */}
                  <div className="bg-[#1C1C22] p-4 rounded-lg border border-[#0066CC]/40">
                    <div className="text-[10px] text-[#60A5FA] uppercase font-mono tracking-wider font-semibold">
                      Con StratBiz & IA
                    </div>
                    <div className="font-bebas text-2xl sm:text-3xl text-white mt-1 leading-none">
                      {hoursSavedAnnual.toLocaleString()} hrs
                    </div>
                    <div className="text-[10px] text-[#60A5FA] mt-1">
                      Liberadas anualmente
                    </div>
                  </div>

                </div>

                {/* Visual Progress Comparison */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-[11px] text-[#A1A1AA] mb-1 font-mono">
                      <span>Carga Manual en la Jornada</span>
                      <span className="text-white font-bold">{manualPercent}% del tiempo</span>
                    </div>
                    <div className="w-full bg-[#27272A] h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#71717A] h-full transition-all duration-500"
                        style={{ width: `${manualPercent}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-[#60A5FA] mb-1 font-mono">
                      <span>Eficiencia Operativa Recuperada</span>
                      <span className="font-bold">{optimizationPercent}% optimizado</span>
                    </div>
                    <div className="w-full bg-[#27272A] h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#0066CC] h-full transition-all duration-500"
                        style={{ width: `${optimizationPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Highlight Economic Gain */}
                <div className="bg-[#0066CC]/10 border border-[#0066CC]/30 rounded-xl p-4 text-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA] block">
                    Valor Económico Recuperado Estimado
                  </span>
                  <span className="font-bebas text-3xl sm:text-4xl text-[#60A5FA] tracking-wide block mt-1">
                    ${economicValueMXN.toLocaleString()} MXN / AÑO
                  </span>
                  <span className="text-[10px] text-[#A1A1AA] block mt-1">
                    Horas reinvertibles en ventas, retención de clientes e innovación
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-[#27272A]">
                <button
                  onClick={handleTransferToPlan}
                  className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white py-3.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0066CC]/20"
                >
                  <span>Solicitar Plan de Implementación con estos Datos</span>
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
