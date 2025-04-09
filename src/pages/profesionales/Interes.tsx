
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoBanner from '@/components/VideoBanner';

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
          <div className="bg-white p-5 rounded-lg shadow-sm mb-6 border-l-4 border-l-[#FF0000]">
            <p className="text-[#4A4B4C]">
              Programa compatible con tu vida laboral. Convalida tu experiencia y conocimientos previos. 
              Horarios flexibles y modalidad híbrida disponible.
            </p>
          </div>
          
          <h3 className="usfq-subtitle text-center">Beneficios:</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-50">
              <h4 className="font-medium text-[#231F20] mb-1 flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF0000] mr-2"></div>
                Actualiza tus habilidades
              </h4>
              <p className="text-sm text-[#4A4B4C] ml-5">Domina las tecnologías más demandadas</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-50">
              <h4 className="font-medium text-[#231F20] mb-1 flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF0000] mr-2"></div>
                Networking estratégico
              </h4>
              <p className="text-sm text-[#4A4B4C] ml-5">Conecta con la industria creativa digital</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-50">
              <h4 className="font-medium text-[#231F20] mb-1 flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF0000] mr-2"></div>
                Proyectos reales
              </h4>
              <p className="text-sm text-[#4A4B4C] ml-5">Construye un portafolio profesional</p>
            </div>
          </div>
        </section>
        
        <div className="p-6">
          <button 
            className="usfq-button-primary"
            onClick={() => navigate('/profesionales/decision')}
          >
            VER MODALIDADES
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfesionalesInteres;
