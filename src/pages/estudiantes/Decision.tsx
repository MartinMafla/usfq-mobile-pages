
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Plus, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
            <motion.h2 
              className="usfq-title text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ¿Por qué estudiar con nosotros?
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="gradient-card p-4 hover-scale"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 20px 25px -5px rgba(255, 0, 0, 0.1), 0 10px 10px -5px rgba(255, 0, 0, 0.04)'
                }}
              >
                <div className="gradient-card-overlay"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#6a11cb]">95%</div>
                  <div className="text-xs mt-1 text-[#4A4B4C]">Empleabilidad</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="gradient-card p-4 hover-scale"
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 20px 25px -5px rgba(106, 17, 203, 0.1), 0 10px 10px -5px rgba(106, 17, 203, 0.04)'
                }}
              >
                <div className="gradient-card-overlay"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#6a11cb]">15+</div>
                  <div className="text-xs mt-1 text-[#4A4B4C]">Convenios</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="gradient-card mb-8 hover:border-[#FF0000]/20 transition-all p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="gradient-card-overlay"></div>
            <div className="relative z-10">
              <h3 className="usfq-subtitle">Inversión</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/30">
                  <span className="text-[#4A4B4C]">Valor semestral:</span>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#6a11cb]">$4,500</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#4A4B4C]">Duración:</span>
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#6a11cb]">8 semestres</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="bg-white/30 backdrop-blur-md p-3 rounded-2xl text-center border border-white/50">
                  <p className="text-xs text-[#4A4B4C] font-medium">Opciones de financiamiento y becas disponibles</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.h3 
            className="usfq-subtitle text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Lo que dicen nuestros estudiantes
          </motion.h3>
          
          <motion.div 
            className="gradient-card p-6 my-5 hover-scale"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="gradient-card-overlay"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF0000]/10 to-[#6a11cb]/10 flex items-center justify-center mr-4 border border-white/50 shadow-md">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#6a11cb] text-lg font-medium">CM</span>
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
          </motion.div>
          
          <motion.div 
            className="gradient-card p-6 my-5 hover-scale"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="gradient-card-overlay"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF0000]/10 to-[#6a11cb]/10 flex items-center justify-center mr-4 border border-white/50 shadow-md">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#6a11cb] text-lg font-medium">JP</span>
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
          </motion.div>
          
          <motion.h3 
            className="usfq-subtitle text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Preguntas frecuentes
          </motion.h3>
          
          {frequentQuestions.map((item, index) => (
            <motion.div 
              key={index} 
              className="usfq-accordion"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <button 
                className="flex items-center justify-between w-full text-left p-3 bg-white/40 backdrop-blur-md border border-white/30 rounded-lg transition-colors hover:bg-white/60"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-[#231F20]">{item.question}</span>
                {expandedQuestion === index ? 
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF0000]/20 to-[#6a11cb]/20 flex items-center justify-center">
                    <ChevronUp size={16} className="text-[#FF0000]" />
                  </div> : 
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF0000]/20 to-[#6a11cb]/20 flex items-center justify-center">
                    <Plus size={16} className="text-[#FF0000]" />
                  </div>
                }
              </button>
              
              {expandedQuestion === index && (
                <motion.div 
                  className="mt-3 text-sm text-[#4A4B4C] bg-white/30 backdrop-blur-md p-4 rounded-xl ml-2 border-l-2 border-gradient-to-r from-[#FF0000] to-[#6a11cb]"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </section>
        
        <div className="px-6 pb-8">
          <motion.button 
            className="bg-gradient-to-r from-[#FF0000] to-[#6a11cb] text-white rounded-full py-4 px-6 font-semibold 
                      w-full flex items-center justify-center shadow-lg shadow-purple-500/20"
            onClick={() => navigate('/estudiantes/accion')}
            whileHover={{ 
              boxShadow: '0 10px 15px -3px rgba(106, 17, 203, 0.3)',
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <span>QUIERO APLICAR</span>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 3, 0] }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut" 
              }}
            >
              <ArrowRight size={16} className="ml-2" />
            </motion.div>
          </motion.button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstudiantesDecision;
