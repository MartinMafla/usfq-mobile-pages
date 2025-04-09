
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Plus, ArrowRight } from 'lucide-react';
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
          <div className="mb-8">
            <h2 className="usfq-title text-center">¿Por qué estudiar con nosotros?</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="usfq-stat-box hover-scale">
                <div className="text-3xl font-bold text-[#FF0000]">95%</div>
                <div className="text-xs mt-1 text-[#4A4B4C]">Empleabilidad</div>
              </div>
              <div className="usfq-stat-box hover-scale">
                <div className="text-3xl font-bold text-[#FF0000]">15+</div>
                <div className="text-xs mt-1 text-[#4A4B4C]">Convenios</div>
              </div>
            </div>
          </div>
          
          <div className="usfq-card mb-8 hover:border-[#FF0000]/20 transition-all">
            <h3 className="usfq-subtitle">Inversión</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-[#4A4B4C]">Valor semestral:</span>
                <span className="font-bold text-[#231F20]">$4,500</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[#4A4B4C]">Duración:</span>
                <span className="font-bold text-[#231F20]">8 semestres</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <p className="text-xs text-[#4A4B4C] font-medium">Opciones de financiamiento y becas disponibles</p>
              </div>
            </div>
          </div>
          
          <h3 className="usfq-subtitle text-center mt-8">Lo que dicen nuestros estudiantes</h3>
          
          <div className="usfq-testimonial hover-scale">
            <div className="flex items-center mb-4">
              <div className="usfq-testimonial-avatar bg-[#FF0000]/10">
                <span className="text-[#FF0000] text-lg font-medium">CM</span>
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
          
          <div className="usfq-testimonial hover-scale">
            <div className="flex items-center mb-4">
              <div className="usfq-testimonial-avatar bg-[#FF0000]/10">
                <span className="text-[#FF0000] text-lg font-medium">JP</span>
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
                className="flex items-center justify-between w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-[#231F20]">{item.question}</span>
                {expandedQuestion === index ? 
                  <div className="w-6 h-6 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                    <ChevronUp size={16} className="text-[#FF0000]" />
                  </div> : 
                  <div className="w-6 h-6 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                    <Plus size={16} className="text-[#FF0000]" />
                  </div>
                }
              </button>
              
              {expandedQuestion === index && (
                <div className="mt-3 text-sm text-[#4A4B4C] bg-gray-50 p-4 rounded-xl ml-2 border-l-2 border-[#FF0000] scale-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </section>
        
        <div className="px-6 pb-8">
          <button 
            className="modern-red-button w-full flex items-center justify-center"
            onClick={() => navigate('/estudiantes/accion')}
          >
            <span>QUIERO APLICAR</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstudiantesDecision;
