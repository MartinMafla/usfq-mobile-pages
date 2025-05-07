
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Layers, Monitor, Code, Glasses } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoBanner from '@/components/VideoBanner';

const EstudiantesInteres = () => {
  const navigate = useNavigate();
  
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
    <div className="usfq-container">
      <Header pageType="estudiantes" />
      
      <main className="flex-1">
        <VideoBanner 
          title="DISEÑA EL FUTURO DIGITAL" 
          subtitle="Carrera de Diseño en Medios Interactivos" 
        />
        
        <section className="usfq-section">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="usfq-title text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ¿Qué aprenderás?
            </motion.h2>
            
            <motion.div 
              className="gradient-card p-6 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="gradient-card-overlay"></div>
              <motion.div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF0000]/10 to-[#6a11cb]/10 rounded-full -mr-16 -mt-16 blur-2xl"></motion.div>
              <motion.p 
                className="text-[#4A4B4C] relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Desarrollo de habilidades creativas y técnicas para diseñar experiencias 
                digitales innovadoras en un mercado en constante evolución.
              </motion.p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.h3 
              className="usfq-subtitle mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Áreas clave:
            </motion.h3>
            
            <motion.div 
              className="space-y-4"
              variants={container}
              initial="hidden"
              animate="show"
              transition={{ delayChildren: 0.6, staggerChildren: 0.1 }}
            >
              <motion.div 
                variants={item}
                className="gradient-card p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="gradient-card-overlay"></div>
                <div className="flex items-center relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#6a11cb] flex items-center justify-center mr-4 shadow-lg">
                    <Layers size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#231F20]">Diseño UX/UI</h4>
                    <div className="w-20 h-1 mt-1 bg-gradient-to-r from-[#FF0000]/50 to-[#6a11cb]/50 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={item}
                className="gradient-card p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="gradient-card-overlay"></div>
                <div className="flex items-center relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#6a11cb] flex items-center justify-center mr-4 shadow-lg">
                    <Monitor size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#231F20]">Animación Digital</h4>
                    <div className="w-20 h-1 mt-1 bg-gradient-to-r from-[#FF0000]/50 to-[#6a11cb]/50 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={item}
                className="gradient-card p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="gradient-card-overlay"></div>
                <div className="flex items-center relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#6a11cb] flex items-center justify-center mr-4 shadow-lg">
                    <Code size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#231F20]">Desarrollo Web</h4>
                    <div className="w-20 h-1 mt-1 bg-gradient-to-r from-[#FF0000]/50 to-[#6a11cb]/50 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={item}
                className="gradient-card p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="gradient-card-overlay"></div>
                <div className="flex items-center relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#6a11cb] flex items-center justify-center mr-4 shadow-lg">
                    <Glasses size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#231F20]">Realidad Virtual/Aumentada</h4>
                    <div className="w-20 h-1 mt-1 bg-gradient-to-r from-[#FF0000]/50 to-[#6a11cb]/50 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        
        <div className="px-6 pb-8">
          <motion.button 
            className="bg-gradient-to-r from-[#FF0000] to-[#6a11cb] text-white rounded-full py-4 px-6 font-semibold
                       w-full flex items-center justify-center shadow-lg shadow-purple-500/20 group"
            onClick={() => navigate('/estudiantes/decision')}
            whileHover={{ 
              boxShadow: '0 10px 15px -3px rgba(106, 17, 203, 0.3)',
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <span className="mr-1">CONOCE MÁS</span>
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

export default EstudiantesInteres;
