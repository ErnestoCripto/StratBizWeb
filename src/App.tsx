import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesDark } from './components/ServicesDark';
import { Simulator } from './components/Simulator';
import { Principles } from './components/Principles';
import { ProjectsSectors } from './components/ProjectsSectors';
import { AboutSection } from './components/AboutSection';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [modalNotes, setModalNotes] = useState('');

  const handleOpenBooking = (initialNote: string = '') => {
    setModalNotes(initialNote);
    setIsBookingOpen(true);
  };

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#EAE8E4] text-[#121214] flex flex-col justify-between selection:bg-[#121214] selection:text-[#EAE8E4]">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking('')} />

      <main className="flex-1">
        {/* Hero Section (Warm Stone, Massive Condensed Headline, Interactive Live Cockpit) */}
        <Hero
          onOpenBooking={() => handleOpenBooking('')}
          onScrollToSimulator={handleScrollToSimulator}
        />

        {/* Deep Dark Services Section (Screenshots 2, 3, 4: CÓMO TE PODEMOS AYUDAR & 01-06 Services) */}
        <ServicesDark
          onSelectService={(serviceName) =>
            handleOpenBooking(`Interés en el servicio: ${serviceName}. Deseo conocer propuesta y tiempos de implementación.`)
          }
        />

        {/* High-Contrast Interactive ROI & Impact Simulator */}
        <Simulator
          onApplyData={(summary) => handleOpenBooking(summary)}
        />

        {/* Editorial Sectors & Case Studies (Screenshot 5 Style: Horizontal Index with Dividers) */}
        <ProjectsSectors
          onOpenBookingForSector={(sectorTitle) =>
            handleOpenBooking(`Interés en caso de éxito / sector: ${sectorTitle}.`)
          }
        />

        {/* 5 Non-Negotiable Principles */}
        <Principles />

        {/* About Dr. Ernesto Juárez Rodríguez & Tec de Monterrey Respaldo */}
        <AboutSection
          onOpenBooking={() => handleOpenBooking('Consulta directiva con Dr. Ernesto Juárez Rodríguez.')}
        />

        {/* Interactive Digital Maturity Quiz */}
        <DiagnosticQuiz
          onScheduleWithScore={(scoreSummary) => handleOpenBooking(scoreSummary)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('')} />

      {/* Consultation Booking & Contact Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialNotes={modalNotes}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/525620096690?text=Hola%20Dr.%20Ernesto%20Ju%C3%A1rez%20%2F%20StratBiz%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20IA%20y%20estrategia."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#10B981] hover:bg-[#059669] text-white p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white/20"
        title="Contactar por WhatsApp (+52 56 2009 6690)"
      >
        <MessageSquare className="w-5 h-5" />
      </a>
    </div>
  );
}
