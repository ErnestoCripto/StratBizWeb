import React, { useState } from 'react';
import { ArrowUpRight, HelpCircle, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

interface DiagnosticQuizProps {
  onScheduleWithScore: (scoreText: string) => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({ onScheduleWithScore }) => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  const handleSelect = (questionId: number, points: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: points }));
  };

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === 3;
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

  const getDiagnosis = () => {
    if (totalScore === 30) {
      return {
        level: 'Madurez Digital Avanzada',
        desc: 'Tu empresa cuenta con bases sólidas. El siguiente paso es desplegar agentes autónomos y afinar la rentabilidad unitaria para consolidar ventajas competitivas.',
        color: 'text-[#10B981]'
      };
    } else if (totalScore >= 20) {
      return {
        level: 'Madurez Digital Intermedia',
        desc: 'Cuentas con iniciativas valiosas pero aisladas. Necesitas conectar la IA con tus procesos comerciales para evitar fugas de prospectos y reducir horas manuales.',
        color: 'text-[#60A5FA]'
      };
    } else {
      return {
        level: 'Oportunidad Crítica de Transformación',
        desc: 'Tu operación depende excesivamente de esfuerzo humano repetitivo. Implementar asistentes y automatizaciones básicas liberará inmediatamente decenas de horas al mes.',
        color: 'text-[#F59E0B]'
      };
    }
  };

  const diagnosis = getDiagnosis();

  const handleTransferToSchedule = () => {
    const summary = `Test de Madurez Digital completado: Puntaje de ${totalScore}/30 pts (${diagnosis.level}). Requiere evaluación de arquitectura operativa con StratBiz.`;
    onScheduleWithScore(summary);
  };

  return (
    <section id="diagnostico" className="py-20 lg:py-28 bg-[#0D0D10] text-white border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none">
              TEST DE MADUREZ DIGITAL
            </h2>
            <div className="w-3.5 h-3.5 bg-white rounded-xs hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-4 border-t border-[#27272A]">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#A1A1AA] bg-[#1E1E22] border border-[#2E2E33] rounded-md">
                DIAGNÓSTICO
              </span>
            </div>

            <div className="lg:col-span-10 max-w-3xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                ¿Por qué la Transformación Digital no puede esperar?
              </h3>
              <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                En el mercado actual, la aceleración tecnológica no es un lujo: es la barrera que divide a las empresas que crecen con márgenes saludables de las que quedan rezagadas. Responde 3 preguntas para evaluar tu situación.
              </p>
            </div>
          </div>
        </div>

        {/* Quiz Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Questions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Question 1 */}
            <div className="bg-[#141418] border border-[#27272A] rounded-xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>PREGUNTA 01 DE 03</span>
                <span>IA & OPERACIONES</span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-white">
                ¿Tu equipo utiliza Inteligencia Artificial (Claude, ChatGPT, etc.) de forma estructurada en sus tareas diarias?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleSelect(1, 10)}
                  className={`p-3 text-xs text-left rounded-lg border transition-all ${
                    answers[1] === 10
                      ? 'bg-[#0066CC] border-[#0066CC] text-white font-bold'
                      : 'bg-[#1C1C22] border-[#2E2E36] text-[#D4D4D8] hover:border-[#4B4B55]'
                  }`}
                >
                  Sí, con flujos y prompts definidos (10 pts)
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect(1, 0)}
                  className={`p-3 text-xs text-left rounded-lg border transition-all ${
                    answers[1] === 0
                      ? 'bg-[#27272A] border-[#3F3F46] text-white font-bold'
                      : 'bg-[#1C1C22] border-[#2E2E36] text-[#D4D4D8] hover:border-[#4B4B55]'
                  }`}
                >
                  No o de manera muy esporádica (0 pts)
                </button>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-[#141418] border border-[#27272A] rounded-xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>PREGUNTA 02 DE 03</span>
                <span>CAPTACIÓN & MARKETING</span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-white">
                ¿Cuentas con un sistema de captación de clientes con métricas claras (costo por lead, retorno de inversión publicitaria)?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleSelect(2, 10)}
                  className={`p-3 text-xs text-left rounded-lg border transition-all ${
                    answers[2] === 10
                      ? 'bg-[#0066CC] border-[#0066CC] text-white font-bold'
                      : 'bg-[#1C1C22] border-[#2E2E36] text-[#D4D4D8] hover:border-[#4B4B55]'
                  }`}
                >
                  Sí, medimos cada peso y canal (10 pts)
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect(2, 0)}
                  className={`p-3 text-xs text-left rounded-lg border transition-all ${
                    answers[2] === 0
                      ? 'bg-[#27272A] border-[#3F3F46] text-white font-bold'
                      : 'bg-[#1C1C22] border-[#2E2E36] text-[#D4D4D8] hover:border-[#4B4B55]'
                  }`}
                >
                  No medimos el costo con precisión (0 pts)
                </button>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-[#141418] border border-[#27272A] rounded-xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>PREGUNTA 03 DE 03</span>
                <span>PROCESOS & AUTOMATIZACIÓN</span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-white">
                ¿Tus procesos administrativos clave están automatizados o dependen de pasos manuales y transcripciones repetitivas?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleSelect(3, 10)}
                  className={`p-3 text-xs text-left rounded-lg border transition-all ${
                    answers[3] === 10
                      ? 'bg-[#0066CC] border-[#0066CC] text-white font-bold'
                      : 'bg-[#1C1C22] border-[#2E2E36] text-[#D4D4D8] hover:border-[#4B4B55]'
                  }`}
                >
                  Automatizados e integrados (10 pts)
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect(3, 0)}
                  className={`p-3 text-xs text-left rounded-lg border transition-all ${
                    answers[3] === 0
                      ? 'bg-[#27272A] border-[#3F3F46] text-white font-bold'
                      : 'bg-[#1C1C22] border-[#2E2E36] text-[#D4D4D8] hover:border-[#4B4B55]'
                  }`}
                >
                  Mucha carga manual y WhatsApp disperso (0 pts)
                </button>
              </div>
            </div>

          </div>

          {/* Diagnosis Score Box (5 Cols) */}
          <div className="lg:col-span-5 bg-[#141418] border border-[#27272A] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#27272A] pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
                Resultado del Diagnóstico
              </span>
            </div>

            {isComplete ? (
              <div className="space-y-4">
                <div className="text-center py-4 bg-[#1C1C22] rounded-xl border border-[#2E2E36]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] block">
                    Puntaje Obtenido
                  </span>
                  <span className={`font-bebas text-5xl sm:text-6xl ${diagnosis.color} tracking-wide block mt-1`}>
                    {totalScore} / 30 PTS
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white mt-1 block">
                    {diagnosis.level}
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed bg-[#18181C] p-4 rounded-xl border border-[#27272A]">
                  {diagnosis.desc}
                </div>

                <button
                  onClick={handleTransferToSchedule}
                  className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white py-3.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Agendar Sesión Directiva con este Puntaje</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="text-center py-10 space-y-3">
                <HelpCircle className="w-10 h-10 text-[#71717A] mx-auto" />
                <h4 className="font-bebas text-2xl text-white uppercase tracking-wide">
                  Responde las 3 Preguntas
                </h4>
                <p className="text-xs text-[#A1A1AA] max-w-xs mx-auto leading-relaxed">
                  Has completado {answeredCount} de 3 preguntas. Selecciona tus respuestas para calcular tu nivel de madurez digital.
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-[#27272A] text-[11px] text-[#71717A] space-y-1">
              <div>✓ Evaluación confidencial y sin compromiso</div>
              <div>✓ Asesoría personalizada por Dr. Ernesto Juárez R.</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
