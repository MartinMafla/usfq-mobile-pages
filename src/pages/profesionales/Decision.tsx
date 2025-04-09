
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
          <h2 className="usfq-title text-center">Modalidades de estudio</h2>
          
          <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-full">
            <button 
              className={`flex-1 py-2 px-4 rounded-full transition-colors ${modalidad === 'regular' ? 'bg-[#FF0000] text-white shadow-sm' : 'bg-transparent text-[#4A4B4C]'}`}
              onClick={() => setModalidad('regular')}
            >
              REGULAR
            </button>
            <button 
              className={`flex-1 py-2 px-4 rounded-full transition-colors ${modalidad === 'ejecutiva' ? 'bg-[#FF0000] text-white shadow-sm' : 'bg-transparent text-[#4A4B4C]'}`}
              onClick={() => setModalidad('ejecutiva')}
            >
              EJECUTIVA
            </button>
          </div>
          
          {modalidad === 'regular' ? (
            <div className="bg-white p-5 rounded-lg shadow-sm mb-8 border border-gray-50">
              <h3 className="font-medium mb-4 text-center text-[#231F20] pb-2 border-b border-gray-100">Modalidad Regular</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-[#FF0000] mr-2">•</span>
                  <span className="text-[#4A4B4C]"><span className="font-medium text-[#231F20]">Duración:</span> 8 semestres</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF0000] mr-2">•</span>
                  <span className="text-[#4A4B4C]"><span className="font-medium text-[#231F20]">Horario:</span> Lunes a viernes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF0000] mr-2">•</span>
                  <span className="text-[#4A4B4C]"><span className="font-medium text-[#231F20]">Modalidad:</span> Presencial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF0000] mr-2">•</span>
                  <span className="text-[#4A4B4C]"><span className="font-medium text-[#231F20]">Convalidación:</span> 30%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF0000] mr-2">•</span>
                  <span className="text-[#4A4B4C]"><span className="font-medium text-[#231F20]">Valor:</span> $4,500 por semestre</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="bg-white p-5 rounded-lg shadow-sm mb-8 border border-gray-50">
              <h3 className="font-medium mb-4 text-center text-[#231F20] pb-2 border-b border-gray-100">Modalidad Ejecutiva</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-[#FF0000] mr-2">•</span>
                  <span className="text-[#4A4B4C]"><span className="font-medium text-[#231F20]">Duración:</span> 6 semestres</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF0000] mr-2">•</span>
                  <span className="text-[#4A4B4C]"><span className="font-medium text-[#231F20]">Horario:</span> Viernes y sábados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF0000] mr-2">•</span>
                  <span className="text-[#4A4B4C]"><span className="font-medium text-[#231F20]">Modalidad:</span> Híbrida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF0000] mr-2">•</span>
                  <span className="text-[#4A4B4C]"><span className="font-medium text-[#231F20]">Convalidación:</span> 45%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF0000] mr-2">•</span>
                  <span className="text-[#4A4B4C]"><span className="font-medium text-[#231F20]">Valor:</span> $5,200 por semestre</span>
                </li>
              </ul>
            </div>
          )}
          
          <h3 className="usfq-subtitle text-center mb-4">Habilidades que desarrollarás</h3>
          
          <div className="space-y-4 mb-8 bg-white p-5 rounded-lg shadow-sm border border-gray-50">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#231F20] font-medium">Diseño UX/UI</span>
                <span className="text-[#FF0000]">90%</span>
              </div>
              <div className="usfq-progress-bar">
                <div className="usfq-progress-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#231F20] font-medium">Desarrollo Web</span>
                <span className="text-[#FF0000]">85%</span>
              </div>
              <div className="usfq-progress-bar">
                <div className="usfq-progress-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#231F20] font-medium">Realidad Virtual/Aumentada</span>
                <span className="text-[#FF0000]">75%</span>
              </div>
              <div className="usfq-progress-bar">
                <div className="usfq-progress-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#231F20] font-medium">Motion Graphics</span>
                <span className="text-[#FF0000]">80%</span>
              </div>
              <div className="usfq-progress-bar">
                <div className="usfq-progress-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
          
          <h3 className="usfq-subtitle text-center">Salidas profesionales</h3>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-gray-50">
              <h4 className="font-medium text-[#231F20]">UX/UI Designer</h4>
              <p className="text-sm font-medium text-[#FF0000]">$1,200 - $2,500</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-gray-50">
              <h4 className="font-medium text-[#231F20]">Web Developer</h4>
              <p className="text-sm font-medium text-[#FF0000]">$1,400 - $3,000</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-gray-50">
              <h4 className="font-medium text-[#231F20]">Motion Designer</h4>
              <p className="text-sm font-medium text-[#FF0000]">$1,100 - $2,200</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-sm text-center border border-gray-50">
              <h4 className="font-medium text-[#231F20]">Director Creativo</h4>
              <p className="text-sm font-medium text-[#FF0000]">$2,000 - $4,000</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg text-center border-2 border-dashed border-[#FF0000]/20">
            <p className="text-sm">
              ¿Tienes experiencia previa? <br/>
              <strong className="text-[#FF0000]">Consulta sobre convalidaciones especiales</strong>
            </p>
          </div>
        </section>
        
        <div className="p-6">
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
