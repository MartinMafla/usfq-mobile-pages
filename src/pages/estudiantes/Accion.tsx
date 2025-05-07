// src/pages/estudiantes/Accion.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/utils/navigation';
import EngageBayForm from '@/components/EngageBayForm';

const EstudiantesAccion = () => {
  // Use the scroll to top hook
  useScrollToTop();
  
  return (
    <div className="usfq-container relative overflow-hidden bg-white/40 backdrop-blur-md">
      <Header pageType="estudiantes" />
      
      <main className="flex-1 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-full h-64 bg-[#231F20]/5 -z-10"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#FF0000]/5 blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#4A4B4C]/5 blur-3xl -z-10"></div>

          {/* Accent lines */}
          <div className="absolute left-0 top-1/4 w-full h-px bg-[#FF0000]/10"></div>
          <div className="absolute right-0 top-2/3 w-full h-px bg-[#4A4B4C]/10"></div>

          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: "radial-gradient(#231F20 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }}>
          </div>
        </div>
        
        <EngageBayForm
          formId="eh_form_4706681736134656"
          dataId="4706681736134656"
          buyerPersona="estudiantes"
          title="Da el primer paso hacia tu futuro"
          subtitle="Completa este formulario y recibe información personalizada."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default EstudiantesAccion;