
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Award, Users, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoBanner from '@/components/VideoBanner';

const ProfesionalesInteres = () => {
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
    <div className="usfq-container bg-pattern">
      <Header pageType="profesionales" />
      
      <main className="flex-1">
        <VideoBanner 
          title="REINVENTA TU CARRERA" 
          subtitle="Especialízate en Medios Interactivos" 
        />
        
        <section className="usfq-section">
          <motion.h2 
            className="usfq-title text-center bg-clip-text text-transparent bg-gradient-to-r from-[#231F20] to-[#4A4B4C]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Diseñado para profesionales
          </motion.h2>
          
          <motion.div 
            className="glass-card p-6 rounded-3xl shadow-xl mb-6 relative overflow-hidden border-l-4 border-l-[#FF0000]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF0000]/10 to-transparent rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <p className="text-[#4A4B4C] relative z-10">
              Programa compatible con tu vida laboral. Convalida tu experiencia y conocimientos previos. 
              Horarios flexibles y modalidad híbrida disponible.
            </p>
          </motion.div>
          
          <motion.h3 
            className="usfq-subtitle text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Beneficios:
          </motion.h3>
          
          <motion.div 
            className="space-y-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div 
              className="glass-card p-5 rounded-3xl shadow-lg border border-white/50 hover:border-[#FF0000]/30 transition-all hover:shadow-xl"
              variants={item}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#ff3333] flex items-center justify-center mr-4 shadow-lg">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#231F20] mb-1">Actualiza tus habilidades</h4>
                  <p className="text-sm text-[#4A4B4C]">Domina las tecnologías más demandadas en el mercado actual</p>
                </div>
              </div>
              <div className="w-full h-1 mt-4 bg-gradient-to-r from-[#FF0000]/20 to-transparent rounded-full"></div>
            </motion.div>
            
            <motion.div 
              className="glass-card p-5 rounded-3xl shadow-lg border border-white/50 hover:border-[#FF0000]/30 transition-all hover:shadow-xl"
              variants={item}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#ff3333] flex items-center justify-center mr-4 shadow-lg">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#231F20] mb-1">Networking estratégico</h4>
                  <p className="text-sm text-[#4A4B4C]">Conecta con profesionales y empresas de la industria creativa digital</p>
                </div>
              </div>
              <div className="w-full h-1 mt-4 bg-gradient-to-r from-[#FF0000]/20 to-transparent rounded-full"></div>
            </motion.div>
            
            <motion.div 
              className="glass-card p-5 rounded-3xl shadow-lg border border-white/50 hover:border-[#FF0000]/30 transition-all hover:shadow-xl"
              variants={item}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF0000] to-[#ff3333] flex items-center justify-center mr-4 shadow-lg">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#231F20] mb-1">Proyectos reales</h4>
                  <p className="text-sm text-[#4A4B4C]">Construye un portafolio profesional con proyectos para clientes reales</p>
                </div>
              </div>
              <div className="w-full h-1 mt-4 bg-gradient-to-r from-[#FF0000]/20 to-transparent rounded-full"></div>
            </motion.div>
          </motion.div>
        </section>
        
        <div className="px-6 pb-8">
          <motion.button 
            className="modern-red-button w-full flex items-center justify-center group"
            onClick={() => navigate('/profesionales/decision')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span>VER MODALIDADES</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfesionalesInteres;
