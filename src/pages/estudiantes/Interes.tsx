
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoBanner from '@/components/VideoBanner';
import { ArrowRight } from 'lucide-react';

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
          <div className="mb-8">
            <h2 className="usfq-title text-center">¿Qué aprenderás?</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-50">
              <p className="text-[#4A4B4C]">
                Desarrollo de habilidades creativas y técnicas para diseñar experiencias 
                digitales innovadoras.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="usfq-subtitle">Áreas clave:</h3>
            <div className="space-y-3">
              <div className="usfq-area card-hover">
                <div className="usfq-area-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M12 8v8" /><path d="m8.5 14 7-4" /></svg>
                </div>
                <span className="text-[#231F20] font-medium">Diseño UX/UI</span>
              </div>
              
              <div className="usfq-area card-hover">
                <div className="usfq-area-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.79 1.1L21 9" /><path d="M12 3v6" /></svg>
                </div>
                <span className="text-[#231F20] font-medium">Animación Digital</span>
              </div>
              
              <div className="usfq-area card-hover">
                <div className="usfq-area-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                </div>
                <span className="text-[#231F20] font-medium">Desarrollo Web</span>
              </div>
              
              <div className="usfq-area card-hover">
                <div className="usfq-area-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z" /><path d="M12 22v-2" /><path d="M12 6V4" /><path d="m17 20.66-1-1.73" /><path d="M7 3.34l1 1.73" /><path d="m3.34 7 1.73 1" /><path d="M20.66 17l-1.73-1" /><path d="M3.34 17l1.73-1" /><path d="M20.66 7l-1.73 1" /></svg>
                </div>
                <span className="text-[#231F20] font-medium">Realidad Virtual/Aumentada</span>
              </div>
            </div>
          </div>
        </section>
        
        <div className="px-6 pb-8">
          <button 
            className="modern-red-button w-full flex items-center justify-center"
            onClick={() => navigate('/estudiantes/decision')}
          >
            <span>CONOCE MÁS</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstudiantesInteres;
