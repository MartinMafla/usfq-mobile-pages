
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProfesionalesDecision = () => {
  const navigate = useNavigate();
  const [modalidad, setModalidad] = useState<'regular' | 'ejecutiva'>('regular');
  
  return (
    <div className="usfq-container">
      <Header pageType="profesionales" />
      
      <main className="flex-1">
        <section className="usfq-section">
          <h2 className="usfq-title">Modalidades de estudio</h2>
          
          <div className="flex gap-1 mb-4">
            <button 
              className={`flex-1 py-2 ${modalidad === 'regular' ? 'bg-[#4A4B4C] text-white' : 'bg-[#e0e0e0] text-[#4A4B4C]'}`}
              onClick={() => setModalidad('regular')}
            >
              REGULAR
            </button>
            <button 
              className={`flex-1 py-2 ${modalidad === 'ejecutiva' ? 'bg-[#4A4B4C] text-white' : 'bg-[#e0e0e0] text-[#4A4B4C]'}`}
              onClick={() => setModalidad('ejecutiva')}
            >
              EJECUTIVA
            </button>
          </div>
          
          {modalidad === 'regular' ? (
            <div className="bg-[#f0f0f0] p-4 rounded-md mb-6">
              <h3 className="font-medium mb-2">Modalidad Regular</h3>
              <ul className="text-sm space-y-1">
                <li>• Duración: 8 semestres</li>
                <li>• Horario: Lunes a viernes</li>
                <li>• Modalidad: Presencial</li>
                <li>• Posibilidad de convalidación: 30%</li>
                <li>• Valor: $4,500 por semestre</li>
              </ul>
            </div>
          ) : (
            <div className="bg-[#f0f0f0] p-4 rounded-md mb-6">
              <h3 className="font-medium mb-2">Modalidad Ejecutiva</h3>
              <ul className="text-sm space-y-1">
                <li>• Duración: 6 semestres</li>
                <li>• Horario: Viernes y sábados</li>
                <li>• Modalidad: Híbrida</li>
                <li>• Posibilidad de convalidación: 45%</li>
                <li>• Valor: $5,200 por semestre</li>
              </ul>
            </div>
          )}
          
          <h3 className="usfq-subtitle">Habilidades que desarrollarás</h3>
          
          <div className="space-y-3 mb-6">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Diseño UX/UI</span>
                <span>90%</span>
              </div>
              <div className="usfq-progress-bar">
                <div className="usfq-progress-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Desarrollo Web</span>
                <span>85%</span>
              </div>
              <div className="usfq-progress-bar">
                <div className="usfq-progress-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Realidad Virtual/Aumentada</span>
                <span>75%</span>
              </div>
              <div className="usfq-progress-bar">
                <div className="usfq-progress-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Motion Graphics</span>
                <span>80%</span>
              </div>
              <div className="usfq-progress-bar">
                <div className="usfq-progress-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
          
          <h3 className="usfq-subtitle">Salidas profesionales</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="usfq-card p-3">
              <h4 className="font-medium">UX/UI Designer</h4>
              <p className="text-sm text-[#FF0000]">$1,200 - $2,500</p>
            </div>
            
            <div className="usfq-card p-3">
              <h4 className="font-medium">Web Developer</h4>
              <p className="text-sm text-[#FF0000]">$1,400 - $3,000</p>
            </div>
            
            <div className="usfq-card p-3">
              <h4 className="font-medium">Motion Designer</h4>
              <p className="text-sm text-[#FF0000]">$1,100 - $2,200</p>
            </div>
            
            <div className="usfq-card p-3">
              <h4 className="font-medium">Director Creativo</h4>
              <p className="text-sm text-[#FF0000]">$2,000 - $4,000</p>
            </div>
          </div>
          
          <div className="bg-[#f0f0f0] p-3 rounded-md text-center">
            <p className="text-sm">
              ¿Tienes experiencia previa? <br/>
              <strong>Consulta sobre convalidaciones especiales</strong>
            </p>
          </div>
        </section>
        
        <div className="p-4">
          <button 
            className="usfq-button-primary"
            onClick={() => navigate('/profesionales/accion')}
          >
            SOLICITAR INFO
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfesionalesDecision;
