
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
          <h2 className="usfq-title">Diseñado para profesionales</h2>
          <p className="text-[#4A4B4C] bg-[#f0f0f0] p-3 rounded-md mb-4">
            Programa compatible con tu vida laboral. Convalida tu experiencia y conocimientos previos. 
            Horarios flexibles y modalidad híbrida disponible.
          </p>
          
          <h3 className="usfq-subtitle">Beneficios:</h3>
          
          <div className="space-y-3">
            <div className="bg-[#f0f0f0] p-3 rounded-md">
              <h4 className="font-medium">Actualiza tus habilidades</h4>
              <p className="text-sm text-[#4A4B4C]">Domina las tecnologías más demandadas</p>
            </div>
            
            <div className="bg-[#f0f0f0] p-3 rounded-md">
              <h4 className="font-medium">Networking estratégico</h4>
              <p className="text-sm text-[#4A4B4C]">Conecta con la industria creativa digital</p>
            </div>
            
            <div className="bg-[#f0f0f0] p-3 rounded-md">
              <h4 className="font-medium">Proyectos reales</h4>
              <p className="text-sm text-[#4A4B4C]">Construye un portafolio profesional</p>
            </div>
          </div>
        </section>
        
        <div className="p-4">
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
