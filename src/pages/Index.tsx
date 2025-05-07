// src/pages/Index.tsx (versión mejorada)
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="usfq-container relative overflow-hidden bg-white/40 backdrop-blur-md">
      <Header pageType="estudiantes" />
      
      <main className="flex-1 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-full h-64 bg-[#231F20]/5 -z-10"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#FF0000]/5 blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#4A4B4C]/5 blur-3xl -z-10"></div>

          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: "radial-gradient(#231F20 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }}>
          </div>
        </div>
        
        <section className="py-12 px-6 flex flex-col items-center">
          <motion.div
            className="w-32 h-32 rounded-full bg-white/70 backdrop-blur-md shadow-xl flex items-center justify-center mb-8 border border-white/50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="text-2xl font-bold text-center">
              <span className="text-[#FF0000]">USFQ</span>
              <br />
              <span className="text-[#4A4B4C] text-sm">Medios Interactivos</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#231F20] to-[#4A4B4C] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Diseño en Medios Interactivos
          </motion.h1>
          
          <motion.p 
            className="text-center text-[#4A4B4C] max-w-md mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Programa de formación en diseño y desarrollo digital de la Universidad San Francisco de Quito.
            ¿Qué perfil se adapta más a ti?
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
            <motion.div 
              className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-6 overflow-hidden relative hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#FF0000]/10 rounded-full blur-xl"></div>
              
              <h2 className="text-xl font-bold text-[#231F20] mb-3">Para Estudiantes</h2>
              <p className="text-sm text-[#4A4B4C] mb-6">
                ¿Estás por graduarte o recién comenzando tu carrera académica? 
                Descubre cómo nuestro programa puede potenciar tu futuro.
              </p>
              
              <motion.button 
                className="bg-[#FF0000] text-white w-full py-3 px-4 rounded-full flex items-center justify-center gap-2 font-medium text-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
                onClick={() => navigate('/estudiantes')}
                whileTap={{ scale: 0.98 }}
              >
                <span>EXPLORAR COMO ESTUDIANTE</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-6 overflow-hidden relative hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#6a11cb]/10 rounded-full blur-xl"></div>
              
              <h2 className="text-xl font-bold text-[#231F20] mb-3">Para Profesionales</h2>
              <p className="text-sm text-[#4A4B4C] mb-6">
                ¿Ya tienes experiencia profesional y buscas especializarte en diseño digital?
                Descubre nuestras opciones flexibles para profesionales.
              </p>
              
              <motion.button 
                className="bg-gradient-to-r from-[#FF0000] to-[#6a11cb] text-white w-full py-3 px-4 rounded-full flex items-center justify-center gap-2 font-medium text-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
                onClick={() => navigate('/profesionales')}
                whileTap={{ scale: 0.98 }}
              >
                <span>EXPLORAR COMO PROFESIONAL</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-16 bg-white/50 backdrop-blur-md rounded-xl p-4 max-w-md mx-auto border border-white/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-sm text-center text-[#4A4B4C]">
              <span className="font-medium">USFQ Medios Interactivos</span> es un programa acreditado por el Consejo de Educación Superior (CES).
              <br />Únete a más de 500 estudiantes y profesionales que ya forman parte de nuestra comunidad.
            </p>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;