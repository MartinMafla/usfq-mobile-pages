
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Plus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EstudiantesDecision = () => {
  const navigate = useNavigate();
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  
  const toggleQuestion = (index: number) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };
  
  const frequentQuestions = [
    {
      question: '¿Necesito experiencia previa?',
      answer: 'No necesitas experiencia previa. Nuestro programa está diseñado para empezar desde los fundamentos y avanzar progresivamente a temas más complejos.'
    },
    {
      question: '¿Qué oportunidades laborales tendré?',
      answer: 'Nuestros graduados trabajan como diseñadores UX/UI, desarrolladores web, especialistas en animación digital, y más. La demanda de profesionales en medios interactivos crece constantemente.'
    }
  ];
  
  return (
    <div className="usfq-container">
      <Header pageType="estudiantes" />
      
      <main className="flex-1">
        <section className="usfq-section">
          <h2 className="usfq-title text-center">¿Por qué estudiar con nosotros?</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="usfq-stat-box">
              <div className="text-3xl font-bold text-[#FF0000]">95%</div>
              <div className="text-xs mt-1 text-[#4A4B4C]">Empleabilidad</div>
            </div>
            <div className="usfq-stat-box">
              <div className="text-3xl font-bold text-[#FF0000]">15+</div>
              <div className="text-xs mt-1 text-[#4A4B4C]">Convenios</div>
            </div>
          </div>
          
          <div className="usfq-card mb-8">
            <h3 className="usfq-subtitle">Inversión</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-1 border-b border-gray-100">
                <span className="text-[#4A4B4C]">Valor semestral:</span>
                <span className="font-semibold text-[#231F20]">$4,500</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#4A4B4C]">Duración:</span>
                <span className="font-semibold text-[#231F20]">8 semestres</span>
              </div>
            </div>
            <p className="text-xs mt-4 text-[#4A4B4C] bg-gray-50 p-2 rounded text-center">Opciones de financiamiento y becas disponibles</p>
          </div>
          
          <h3 className="usfq-subtitle text-center">Lo que dicen nuestros estudiantes</h3>
          
          <div className="usfq-testimonial">
            <div className="flex items-center mb-3">
              <div className="usfq-testimonial-avatar">
                <span className="text-[#4A4B4C] text-lg font-medium">CM</span>
              </div>
              <div>
                <div className="font-medium text-[#231F20]">Carolina M.</div>
                <div className="text-xs text-[#4A4B4C]">Estudiante de 4to semestre</div>
              </div>
            </div>
            <p className="text-sm text-[#4A4B4C] italic">
              "La mejor decisión que he tomado. Los proyectos son desafiantes y relevantes."
            </p>
          </div>
          
          <div className="usfq-testimonial">
            <div className="flex items-center mb-3">
              <div className="usfq-testimonial-avatar">
                <span className="text-[#4A4B4C] text-lg font-medium">JP</span>
              </div>
              <div>
                <div className="font-medium text-[#231F20]">Juan P.</div>
                <div className="text-xs text-[#4A4B4C]">Graduado 2024</div>
              </div>
            </div>
            <p className="text-sm text-[#4A4B4C] italic">
              "Conseguí trabajo antes de graduarme gracias a mi portafolio de proyectos."
            </p>
          </div>
          
          <h3 className="usfq-subtitle text-center mt-8">Preguntas frecuentes</h3>
          
          {frequentQuestions.map((item, index) => (
            <div key={index} className="usfq-accordion">
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-[#231F20]">{item.question}</span>
                {expandedQuestion === index ? 
                  <ChevronUp size={18} className="text-[#FF0000]" /> : 
                  <Plus size={18} className="text-[#FF0000]" />
                }
              </button>
              
              {expandedQuestion === index && (
                <div className="mt-3 text-sm text-[#4A4B4C] bg-gray-50 p-3 rounded-md">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </section>
        
        <div className="p-6">
          <button 
            className="usfq-button-primary"
            onClick={() => navigate('/estudiantes/accion')}
          >
            QUIERO APLICAR
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstudiantesDecision;
