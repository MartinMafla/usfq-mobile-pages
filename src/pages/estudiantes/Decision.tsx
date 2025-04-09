
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
          <h2 className="usfq-title">¿Por qué estudiar con nosotros?</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="usfq-stat-box">
              <div className="text-2xl font-bold text-[#FF0000]">95%</div>
              <div className="text-xs">Empleabilidad</div>
            </div>
            <div className="usfq-stat-box">
              <div className="text-2xl font-bold text-[#FF0000]">15+</div>
              <div className="text-xs">Convenios</div>
            </div>
          </div>
          
          <div className="usfq-card mb-6">
            <h3 className="usfq-subtitle">Inversión</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="py-1">Valor semestral:</td>
                  <td className="py-1 font-semibold">$4,500</td>
                </tr>
                <tr>
                  <td className="py-1">Duración:</td>
                  <td className="py-1 font-semibold">8 semestres</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs mt-2">Opciones de financiamiento y becas disponibles</p>
          </div>
          
          <h3 className="usfq-subtitle">Lo que dicen nuestros estudiantes</h3>
          
          <div className="usfq-testimonial">
            <div className="flex items-center mb-2">
              <div className="usfq-testimonial-avatar"></div>
              <div>
                <div className="font-medium">Carolina M.</div>
                <div className="text-xs text-[#4A4B4C]">Estudiante de 4to semestre</div>
              </div>
            </div>
            <p className="text-sm">
              "La mejor decisión que he tomado. Los proyectos son desafiantes y relevantes."
            </p>
          </div>
          
          <div className="usfq-testimonial">
            <div className="flex items-center mb-2">
              <div className="usfq-testimonial-avatar"></div>
              <div>
                <div className="font-medium">Juan P.</div>
                <div className="text-xs text-[#4A4B4C]">Graduado 2024</div>
              </div>
            </div>
            <p className="text-sm">
              "Conseguí trabajo antes de graduarme gracias a mi portafolio de proyectos."
            </p>
          </div>
          
          <h3 className="usfq-subtitle mt-6">Preguntas frecuentes</h3>
          
          {frequentQuestions.map((item, index) => (
            <div key={index} className="usfq-accordion">
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleQuestion(index)}
              >
                <span>{item.question}</span>
                {expandedQuestion === index ? <ChevronUp size={18} /> : <Plus size={18} />}
              </button>
              
              {expandedQuestion === index && (
                <div className="mt-2 text-sm text-[#4A4B4C]">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </section>
        
        <div className="p-4">
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
