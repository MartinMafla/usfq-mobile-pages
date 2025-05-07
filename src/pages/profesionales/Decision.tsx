
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Calendar, Clock, Laptop, School, CreditCard } from 'lucide-react';

const ProfesionalesDecision = () => {
  const navigate = useNavigate();
  const [modalidad, setModalidad] = useState<'regular' | 'ejecutiva'>('regular');
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="usfq-container bg-pattern">
      <Header pageType="profesionales" />
      
      <main className="flex-1">
        <motion.section 
          className="usfq-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="usfq-title text-center bg-clip-text text-transparent bg-gradient-to-r from-[#231F20] to-[#4A4B4C]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Modalidades de estudio
          </motion.h2>
          
          <motion.div 
            className="flex gap-1 mb-6 glass p-1 rounded-full shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button 
              className={`flex-1 py-2 px-4 rounded-full transition-all duration-300 ${modalidad === 'regular' ? 
                'bg-gradient-to-r from-[#FF0000] to-[#ff3333] text-white shadow-md' : 
                'bg-transparent text-[#4A4B4C] hover:bg-white/50'}`}
              onClick={() => setModalidad('regular')}
              whileTap={{ scale: 0.98 }}
            >
              REGULAR
            </motion.button>
            <motion.button 
              className={`flex-1 py-2 px-4 rounded-full transition-all duration-300 ${modalidad === 'ejecutiva' ? 
                'bg-gradient-to-r from-[#FF0000] to-[#ff3333] text-white shadow-md' : 
                'bg-transparent text-[#4A4B4C] hover:bg-white/50'}`}
              onClick={() => setModalidad('ejecutiva')}
              whileTap={{ scale: 0.98 }}
            >
              EJECUTIVA
            </motion.button>
          </motion.div>
          
          <AnimatePresence mode="wait">
            {modalidad === 'regular' ? (
              <motion.div 
                key="regular"
                className="glass-card p-6 rounded-3xl shadow-xl mb-8 border border-white/40"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-semibold mb-5 text-center text-[#231F20] pb-2 border-b border-gray-100">
                  Modalidad Regular
                </h3>
                <motion.ul className="space-y-4" variants={container} initial="hidden" animate="show">
                  <motion.li variants={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000]/90 to-[#ff3333] flex items-center justify-center">
                      <Calendar size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#4A4B4C]">
                        <span className="font-medium text-[#231F20]">Duración:</span> 8 semestres
                      </span>
                    </div>
                  </motion.li>
                  
                  <motion.li variants={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000]/90 to-[#ff3333] flex items-center justify-center">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#4A4B4C]">
                        <span className="font-medium text-[#231F20]">Horario:</span> Lunes a viernes
                      </span>
                    </div>
                  </motion.li>
                  
                  <motion.li variants={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000]/90 to-[#ff3333] flex items-center justify-center">
                      <Laptop size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#4A4B4C]">
                        <span className="font-medium text-[#231F20]">Modalidad:</span> Presencial
                      </span>
                    </div>
                  </motion.li>
                  
                  <motion.li variants={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000]/90 to-[#ff3333] flex items-center justify-center">
                      <School size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#4A4B4C]">
                        <span className="font-medium text-[#231F20]">Convalidación:</span> 30%
                      </span>
                    </div>
                  </motion.li>
                  
                  <motion.li variants={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000]/90 to-[#ff3333] flex items-center justify-center">
                      <CreditCard size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#4A4B4C]">
                        <span className="font-medium text-[#231F20]">Valor:</span> $4,500 por semestre
                      </span>
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.div>
            ) : (
              <motion.div 
                key="ejecutiva"
                className="glass-card p-6 rounded-3xl shadow-xl mb-8 border border-white/40"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-semibold mb-5 text-center text-[#231F20] pb-2 border-b border-gray-100">
                  Modalidad Ejecutiva
                </h3>
                <motion.ul className="space-y-4" variants={container} initial="hidden" animate="show">
                  <motion.li variants={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000]/90 to-[#ff3333] flex items-center justify-center">
                      <Calendar size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#4A4B4C]">
                        <span className="font-medium text-[#231F20]">Duración:</span> 6 semestres
                      </span>
                    </div>
                  </motion.li>
                  
                  <motion.li variants={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000]/90 to-[#ff3333] flex items-center justify-center">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#4A4B4C]">
                        <span className="font-medium text-[#231F20]">Horario:</span> Viernes y sábados
                      </span>
                    </div>
                  </motion.li>
                  
                  <motion.li variants={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000]/90 to-[#ff3333] flex items-center justify-center">
                      <Laptop size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#4A4B4C]">
                        <span className="font-medium text-[#231F20]">Modalidad:</span> Híbrida
                      </span>
                    </div>
                  </motion.li>
                  
                  <motion.li variants={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000]/90 to-[#ff3333] flex items-center justify-center">
                      <School size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#4A4B4C]">
                        <span className="font-medium text-[#231F20]">Convalidación:</span> 45%
                      </span>
                    </div>
                  </motion.li>
                  
                  <motion.li variants={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000]/90 to-[#ff3333] flex items-center justify-center">
                      <CreditCard size={18} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#4A4B4C]">
                        <span className="font-medium text-[#231F20]">Valor:</span> $5,200 por semestre
                      </span>
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.h3 
            className="usfq-subtitle text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Habilidades que desarrollarás
          </motion.h3>
          
          <motion.div 
            className="space-y-5 mb-8 glass-card p-6 rounded-3xl shadow-xl border border-white/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#231F20] font-medium flex items-center">
                  Diseño UX/UI
                  <motion.span 
                    className="inline-block ml-2 text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-[#FF0000] to-[#ff3333] text-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    90%
                  </motion.span>
                </span>
                <span className="text-[#FF0000]">Experto</span>
              </div>
              <div className="usfq-progress-bar">
                <motion.div 
                  className="usfq-progress-fill" 
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#231F20] font-medium flex items-center">
                  Desarrollo Web
                  <motion.span 
                    className="inline-block ml-2 text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-[#FF0000] to-[#ff3333] text-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    85%
                  </motion.span>
                </span>
                <span className="text-[#FF0000]">Avanzado</span>
              </div>
              <div className="usfq-progress-bar">
                <motion.div 
                  className="usfq-progress-fill" 
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#231F20] font-medium flex items-center">
                  Realidad Virtual/Aumentada
                  <motion.span 
                    className="inline-block ml-2 text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-[#FF0000] to-[#ff3333] text-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    75%
                  </motion.span>
                </span>
                <span className="text-[#FF0000]">Intermedio</span>
              </div>
              <div className="usfq-progress-bar">
                <motion.div 
                  className="usfq-progress-fill" 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#231F20] font-medium flex items-center">
                  Motion Graphics
                  <motion.span 
                    className="inline-block ml-2 text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-[#FF0000] to-[#ff3333] text-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                  >
                    80%
                  </motion.span>
                </span>
                <span className="text-[#FF0000]">Avanzado</span>
              </div>
              <div className="usfq-progress-bar">
                <motion.div 
                  className="usfq-progress-fill" 
                  initial={{ width: 0 }}
                  animate={{ width: '80%' }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.h3 
            className="usfq-subtitle text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Salidas profesionales
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 gap-3 mb-6"
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 1 }}
          >
            <motion.div 
              variants={item}
              className="glass-card p-4 rounded-3xl shadow-lg text-center border border-white/40 hover:border-[#FF0000]/30 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <h4 className="font-medium text-[#231F20]">UX/UI Designer</h4>
              <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#ff3333]">$1,200 - $2,500</p>
              <div className="w-10 h-1 mx-auto mt-2 bg-gradient-to-r from-[#FF0000] to-transparent rounded-full"></div>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="glass-card p-4 rounded-3xl shadow-lg text-center border border-white/40 hover:border-[#FF0000]/30 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <h4 className="font-medium text-[#231F20]">Web Developer</h4>
              <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#ff3333]">$1,400 - $3,000</p>
              <div className="w-10 h-1 mx-auto mt-2 bg-gradient-to-r from-[#FF0000] to-transparent rounded-full"></div>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="glass-card p-4 rounded-3xl shadow-lg text-center border border-white/40 hover:border-[#FF0000]/30 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <h4 className="font-medium text-[#231F20]">Motion Designer</h4>
              <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#ff3333]">$1,100 - $2,200</p>
              <div className="w-10 h-1 mx-auto mt-2 bg-gradient-to-r from-[#FF0000] to-transparent rounded-full"></div>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="glass-card p-4 rounded-3xl shadow-lg text-center border border-white/40 hover:border-[#FF0000]/30 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <h4 className="font-medium text-[#231F20]">Director Creativo</h4>
              <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#FF0000] to-[#ff3333]">$2,000 - $4,000</p>
              <div className="w-10 h-1 mx-auto mt-2 bg-gradient-to-r from-[#FF0000] to-transparent rounded-full"></div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-5 rounded-3xl text-center border-2 border-dashed border-[#FF0000]/30 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/5 to-transparent"></div>
            <motion.div 
              className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#FF0000]/10 to-transparent blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
            <p className="text-sm relative z-10">
              ¿Tienes experiencia previa? <br/>
              <strong className="text-[#FF0000] font-semibold">Consulta sobre convalidaciones especiales</strong>
            </p>
          </motion.div>
        </motion.section>
        
        <div className="p-6">
          <motion.button 
            className="usfq-button-primary"
            onClick={() => navigate('/profesionales/accion')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            SOLICITAR INFO
          </motion.button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfesionalesDecision;
