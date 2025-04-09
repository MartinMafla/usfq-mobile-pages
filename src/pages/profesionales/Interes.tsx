
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoBanner from '@/components/VideoBanner';
import { ArrowRight } from 'lucide-react';

const ProfesionalesInteres = () => {
  const navigate = useNavigate();
  
  return (
    <div className="usfq-container">
      <Header pageType="profesionales" />
      
      <main className="flex-1">
        <VideoBanner 
          title="REINVENTA TU CARRERA" 
          subtitle="Especialízate en Medios Interactivos" 
        />
        
        <section className="usfq-section">
          <h2 className="usfq-title text-center">Diseñado para profesionales</h2>
          <div className="bg-white p-6 rounded-xl shadow-md mb-6 relative overflow-hidden border-l-4 border-l-[#FF0000]">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#FF0000]"></div>
            <p className="text-[#4A4B4C]">
              Programa compatible con tu vida laboral. Convalida tu experiencia y conocimientos previos. 
              Horarios flexibles y modalidad híbrida disponible.
            </p>
          </div>
          
          <h3 className="usfq-subtitle text-center">Beneficios:</h3>
          
          <div className="space-y-3">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-50 hover:border-[#FF0000]/30 transition-all">
              <h4 className="font-medium text-[#231F20] mb-2 flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF0000] mr-2"></div>
                Actualiza tus habilidades
              </h4>
              <p className="text-sm text-[#4A4B4C] ml-5">Domina las tecnologías más demandadas</p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-50 hover:border-[#FF0000]/30 transition-all">
              <h4 className="font-medium text-[#231F20] mb-2 flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF0000] mr-2"></div>
                Networking estratégico
              </h4>
              <p className="text-sm text-[#4A4B4C] ml-5">Conecta con la industria creativa digital</p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-50 hover:border-[#FF0000]/30 transition-all">
              <h4 className="font-medium text-[#231F20] mb-2 flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF0000] mr-2"></div>
                Proyectos reales
              </h4>
              <p className="text-sm text-[#4A4B4C] ml-5">Construye un portafolio profesional</p>
            </div>
          </div>
        </section>
        
        <div className="px-6 pb-8">
          <button 
            className="modern-red-button w-full flex items-center justify-center"
            onClick={() => navigate('/profesionales/decision')}
          >
            <span>VER MODALIDADES</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfesionalesInteres;
