import React, { useState, useEffect } from 'react';
import { X, Check, Copy, Send, MessageSquare, Phone, Mail, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialNotes = ''
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialNotes) {
      setNotes(initialNotes);
    }
  }, [initialNotes]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);

    const payload = {
      nombre: name,
      email: email,
      telefono: phone,
      empresa_sector: company || 'No especificada',
      detalles: notes || 'Sin notas adicionales',
      _subject: `Nueva Solicitud StratBiz - ${name}`,
      _template: 'table'
    };

    try {
      await fetch('https://formsubmit.co/ajax/stratbiz@proton.me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch {
      // Fallback
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleCopyClipboard = () => {
    const text = `SOLICITUD STRATBIZ:\nNombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nEmpresa: ${company}\nNotas: ${notes}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const waMessage = encodeURIComponent(
    `Hola Dr. Ernesto Juárez / StratBiz, deseo agendar una sesión directiva:\n\n*Nombre:* ${name || 'N/A'}\n*Correo:* ${email || 'N/A'}\n*Tel:* ${phone || 'N/A'}\n*Empresa:* ${company || 'N/A'}\n*Detalles:* ${notes || 'Consulta general'}`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#121214] text-white border border-[#27272A] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-lg bg-[#1E1E22] hover:bg-[#27272A] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0066CC]" />
              <span className="text-[11px] font-mono font-bold uppercase text-[#60A5FA] tracking-wider">
                Sesión Estratégica Sin Costo
              </span>
            </div>

            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase leading-tight mb-2">
              Agendar Diagnóstico con StratBiz
            </h3>
            
            <p className="text-xs text-[#A1A1AA] mb-6 leading-relaxed">
              Déjanos tus datos y el <strong className="text-white">Dr. Ernesto Juárez Rodríguez</strong> analizará la viabilidad de aceleración e IA para tu negocio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Ing. Carlos Mendoza"
                  className="w-full bg-[#18181C] border border-[#2E2E36] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#0066CC] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-1">
                    Correo Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="carlos@empresa.com"
                    className="w-full bg-[#18181C] border border-[#2E2E36] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#0066CC] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-1">
                    Teléfono Directo *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="56.2009.6690"
                    className="w-full bg-[#18181C] border border-[#2E2E36] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#0066CC] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-1">
                  Empresa / Sector
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Ej. Hotel / Hospitalidad / Vivero / Servicios"
                  className="w-full bg-[#18181C] border border-[#2E2E36] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#0066CC] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-1">
                  Notas / Datos del Simulador o Reto
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe brevemente el principal reto de tu negocio en procesos o ventas..."
                  className="w-full bg-[#18181C] border border-[#2E2E36] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#0066CC] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0066CC]/20"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>Procesando Solicitud...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitud a stratbiz@proton.me</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href={`https://wa.me/525620096690?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#60A5FA] hover:underline inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  ¿Prefieres contacto directo? Escríbenos por WhatsApp (+52 56 2009 6690)
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#10B981]/20 text-[#10B981] rounded-full flex items-center justify-center mx-auto border border-[#10B981]/40">
              <Check className="w-8 h-8" />
            </div>

            <h4 className="font-bebas text-3xl text-white uppercase tracking-wide">
              ¡Solicitud Enviada con Éxito!
            </h4>

            <p className="text-xs text-[#A1A1AA] max-w-sm mx-auto leading-relaxed">
              Hemos registrado tu solicitud para el correo <strong className="text-white">stratbiz@proton.me</strong>. El Dr. Ernesto Juárez Rodríguez o un consultor senior se comunicará contigo a la brevedad.
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <a
                href={`https://wa.me/525620096690?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Confirmar por WhatsApp (+52 56 2009 6690)
              </a>

              <button
                onClick={handleCopyClipboard}
                className="w-full bg-[#1E1E22] hover:bg-[#27272A] border border-[#2E2E36] text-white py-2.5 px-4 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copiado al Portapapeles' : 'Copiar Datos al Portapapeles'}</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-[#71717A] hover:text-white underline pt-2 block mx-auto"
            >
              Cerrar Ventana
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
