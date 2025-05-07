
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from "@/components/ui/use-toast";
import { useScrollToTop } from '@/utils/navigation';

const EstudiantesAccion = () => {
  // Use the scroll to top hook
  useScrollToTop();
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    colegio: '',
    ingreso: '',
    aceptaInfo: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.correo || !formData.telefono || !formData.colegio || !formData.ingreso || !formData.aceptaInfo) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive"
      });
      return;
    }
    
    // Simulamos envío exitoso
    navigate('/estudiantes/confirmacion');
  };
  
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
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="usfq-container relative overflow-hidden bg-white/40 backdrop-blur-md">
      <Header pageType="estudiantes" />
      
      <main className="flex-1 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-full h-64 bg-[#231F20]/5 -z-10"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-[#FF0000]/5 blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#4A4B4C]/5 blur-3xl -z-10"></div>

          {/* Accent lines */}
          <div className="absolute left-0 top-1/4 w-full h-px bg-[#FF0000]/10"></div>
          <div className="absolute right-0 top-2/3 w-full h-px bg-[#4A4B4C]/10"></div>

          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: "radial-gradient(#231F20 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }}>
          </div>
        </div>
        
        <section className="usfq-section">
          <motion.div 
            className="bg-white/60 backdrop-blur-md border-l-4 border-l-[#FF0000] border-t border-r border-b border-white/50 p-6 rounded-xl mb-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#231F20] text-center">Da el primer paso hacia tu futuro</h2>
            <p className="text-sm text-[#4A4B4C] text-center mb-2">
              Completa este formulario y recibe información personalizada.
            </p>
            
            {/* Divider line */}
            <div className="w-20 h-1 mx-auto mt-3 bg-[#FF0000] rounded-full"></div>
          </motion.div>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="mt-8 bg-white/70 backdrop-blur-md rounded-xl border border-white/50 shadow-xl p-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="space-y-5">
              <motion.div variants={item}>
                <label htmlFor="nombre" className="text-sm font-medium text-[#231F20] block mb-2">
                  Nombres completos*
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#FF0000]/30 focus:border-[#FF0000]"
                  placeholder="Ingresa tu nombre completo"
                  required
                />
              </motion.div>
              
              <motion.div variants={item}>
                <label htmlFor="correo" className="text-sm font-medium text-[#231F20] block mb-2">
                  Correo electrónico*
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#FF0000]/30 focus:border-[#FF0000]"
                  placeholder="ejemplo@email.com"
                  required
                />
              </motion.div>
              
              <motion.div variants={item}>
                <label htmlFor="telefono" className="text-sm font-medium text-[#231F20] block mb-2">
                  Número de teléfono*
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#FF0000]/30 focus:border-[#FF0000]"
                  placeholder="099 123 4567"
                  required
                />
              </motion.div>
              
              <motion.div variants={item}>
                <label htmlFor="colegio" className="text-sm font-medium text-[#231F20] block mb-2">
                  Colegio actual*
                </label>
                <input
                  type="text"
                  id="colegio"
                  name="colegio"
                  value={formData.colegio}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#FF0000]/30 focus:border-[#FF0000]"
                  placeholder="Nombre de tu colegio"
                  required
                />
              </motion.div>
              
              <motion.div variants={item}>
                <label htmlFor="ingreso" className="text-sm font-medium text-[#231F20] block mb-2">
                  ¿Cuándo planeas ingresar?*
                </label>
                <select
                  id="ingreso"
                  name="ingreso"
                  value={formData.ingreso}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#FF0000]/30 focus:border-[#FF0000]"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="proximo">Próximo semestre</option>
                  <option value="siguiente">Siguiente año</option>
                  <option value="futuro">En 2 años o más</option>
                </select>
              </motion.div>
              
              <motion.div 
                className="flex items-start py-2"
                variants={item}
              >
                <div className="flex h-5 items-center">
                  <input
                    type="checkbox"
                    id="aceptaInfo"
                    name="aceptaInfo"
                    checked={formData.aceptaInfo}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-gray-300 text-[#FF0000] focus:ring-[#FF0000]"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="aceptaInfo" className="font-medium text-[#231F20]">
                    Acepto recibir información de la USFQ*
                  </label>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="bg-white/80 backdrop-blur-md border border-[#FF0000]/10 rounded-xl p-5 mt-8 mb-6 shadow-md"
              variants={item}
            >
              <h4 className="font-medium mb-3 text-[#231F20] text-center">Al enviar, recibirás GRATIS:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#FF0000] text-white flex items-center justify-center mr-2 text-xs shadow-sm">✓</span>
                  <span className="text-[#4A4B4C]">"Guía de Portafolio para Creativos Digitales"</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#FF0000] text-white flex items-center justify-center mr-2 text-xs shadow-sm">✓</span>
                  <span className="text-[#4A4B4C]">Tour virtual exclusivo de nuestros laboratorios</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.button 
              type="submit" 
              className="bg-[#FF0000] text-white rounded-full py-4 px-6 w-full font-semibold text-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 active:translate-y-0 uppercase"
              whileTap={{ scale: 0.97 }}
              variants={item}
            >
              ENVIAR AHORA
            </motion.button>
          </motion.form>
          
          <motion.div 
            className="mt-6 p-4 bg-white/50 backdrop-blur-md rounded-xl border border-white/50 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h5 className="text-sm font-medium text-center">¿Por qué necesitamos tus datos?</h5>
            <p className="text-xs text-[#4A4B4C] mt-2 text-center">
              Utilizamos tu información para personalizar la comunicación y brindarte detalles específicos sobre la carrera.
              Nunca compartiremos tus datos con terceros.
            </p>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstudiantesAccion;
