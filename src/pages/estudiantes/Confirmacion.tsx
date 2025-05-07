
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useScrollToTop } from '@/utils/navigation';

const EstudiantesConfirmacion = () => {
  useScrollToTop();
  const navigate = useNavigate();
  
  return (
    <div className="usfq-container relative overflow-hidden bg-white/40 backdrop-blur-md">
      <Header pageType="estudiantes" />
      
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative">
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
        
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 max-w-xs mx-auto p-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-[#FF0000]/10 rounded-full mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <CheckCircle size={40} className="text-[#FF0000]" />
            </motion.div>
            
            <h1 className="text-2xl font-bold mb-4 text-[#231F20]">¡Gracias por tu interés!</h1>
            
            <p className="mb-6 text-[#4A4B4C]">
              Tu solicitud ha sido recibida. Pronto recibirás un correo con tu guía y acceso al tour virtual.
            </p>
            
            <div className="w-full p-4 bg-[#231F20]/5 rounded-xl mb-8">
              <p className="text-xs text-[#4A4B4C] font-medium">
                Uno de nuestros asesores se pondrá en contacto contigo en las próximas 24 horas.
              </p>
            </div>
            
            <motion.button 
              onClick={() => navigate('/estudiantes')}
              className="bg-[#FF0000] text-white rounded-full py-4 px-6 w-full font-semibold text-sm shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(255, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <ArrowLeft size={16} className="mr-2" />
              <span>VOLVER AL INICIO</span>
            </motion.button>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstudiantesConfirmacion;
