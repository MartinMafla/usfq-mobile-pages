
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoBanner from '@/components/VideoBanner';

const EstudiantesInteres = () => {
  const navigate = useNavigate();
  
  return (
    <div className="usfq-container">
      <Header pageType="estudiantes" />
      
      <main className="flex-1">
        <VideoBanner 
          title="DISEÑA EL FUTURO DIGITAL" 
          subtitle="Carrera de Diseño en Medios Interactivos" 
        />
        
        <section className="usfq-section">
          <h2 className="usfq-title">¿Qué aprenderás?</h2>
          <p className="text-[#4A4B4C] mb-4">
            Desarrollo de habilidades creativas y técnicas para diseñar experiencias 
            digitales innovadoras.
          </p>
          
          <h3 className="usfq-subtitle">Áreas clave:</h3>
          <div className="space-y-3">
            <div className="usfq-area">
              <div className="usfq-area-icon"></div>
              <span>Diseño UX/UI</span>
            </div>
            <div className="usfq-area">
              <div className="usfq-area-icon"></div>
              <span>Animación Digital</span>
            </div>
            <div className="usfq-area">
              <div className="usfq-area-icon"></div>
              <span>Desarrollo Web</span>
            </div>
            <div className="usfq-area">
              <div className="usfq-area-icon"></div>
              <span>Realidad Virtual/Aumentada</span>
            </div>
          </div>
        </section>
        
        <div className="p-4">
          <button 
            className="usfq-button-primary"
            onClick={() => navigate('/estudiantes/decision')}
          >
            CONOCE MÁS
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstudiantesInteres;
