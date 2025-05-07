
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";

const ProfesionalesAccion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    profesion: '',
    areaInteres: '',
    experiencia: '',
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
    if (!formData.nombre || !formData.correo || !formData.telefono || !formData.profesion || 
        !formData.areaInteres || !formData.experiencia || !formData.aceptaInfo) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive"
      });
      return;
    }
    
    // Simulamos envío exitoso
    navigate('/profesionales/confirmacion');
  };
  
  return (
    <div className="usfq-container bg-gradient-pattern">
      <Header pageType="profesionales" />
      
      <main className="flex-1">
        {/* Background gradient layers and design elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] via-white to-[#f8f9fa] -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-[#FF0000]/10 to-[#6a11cb]/5 -z-10"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-[#FF0000]/5 to-transparent blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#6a11cb]/5 to-transparent blur-3xl -z-10"></div>
        
        <section className="usfq-section relative">
          <motion.div 
            className="glass-card p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="usfq-title text-center">Solicita información personalizada</h2>
            <p className="text-sm text-[#4A4B4C] mb-4 text-center">
              Obtén detalles sobre convalidaciones y modalidades.
            </p>
          </motion.div>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="mt-6 glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Label htmlFor="nombre" className="text-sm font-medium text-[#231F20] block mb-2">
                  Nombres completos*
                </Label>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Label htmlFor="correo" className="text-sm font-medium text-[#231F20] block mb-2">
                  Correo electrónico*
                </Label>
                <Input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Label htmlFor="telefono" className="text-sm font-medium text-[#231F20] block mb-2">
                  Número de teléfono*
                </Label>
                <Input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Label htmlFor="profesion" className="text-sm font-medium text-[#231F20] block mb-2">
                  Profesión actual*
                </Label>
                <Input
                  type="text"
                  id="profesion"
                  name="profesion"
                  value={formData.profesion}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Label htmlFor="areaInteres" className="text-sm font-medium text-[#231F20] block mb-2">
                  Área de interés principal*
                </Label>
                <select
                  id="areaInteres"
                  name="areaInteres"
                  value={formData.areaInteres}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="ux">Diseño UX/UI</option>
                  <option value="desarrollo">Desarrollo Web</option>
                  <option value="realidad">Realidad Virtual/Aumentada</option>
                  <option value="motion">Motion Graphics</option>
                </select>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <Label htmlFor="experiencia" className="text-sm font-medium text-[#231F20] block mb-2">
                  ¿Tienes experiencia en diseño?*
                </Label>
                <select
                  id="experiencia"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="ninguna">Sin experiencia</option>
                  <option value="basica">Experiencia básica</option>
                  <option value="intermedia">Experiencia intermedia</option>
                  <option value="avanzada">Experiencia avanzada</option>
                </select>
              </motion.div>
              
              <motion.div 
                className="flex items-start py-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <div className="flex h-5 items-center">
                  <input
                    type="checkbox"
                    id="aceptaInfo"
                    name="aceptaInfo"
                    checked={formData.aceptaInfo}
                    onChange={handleCheckboxChange}
                    className="usfq-checkbox"
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
              className="gradient-card mt-6 mb-6 p-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="gradient-card-overlay"></div>
              <h4 className="font-medium mb-3 text-center text-[#231F20]">Al enviar, recibirás GRATIS:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FF0000] to-[#ff5757] text-white flex items-center justify-center mr-2 text-xs shadow-sm">✓</span>
                  <span className="text-[#4A4B4C]">"Guía de Transición a Diseño Digital"</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FF0000] to-[#ff5757] text-white flex items-center justify-center mr-2 text-xs shadow-sm">✓</span>
                  <span className="text-[#4A4B4C]">Webinar "Diseño UX/UI para profesionales"</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.button 
              type="submit" 
              className="modern-red-button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              ENVIAR AHORA
            </motion.button>
          </motion.form>
          
          <motion.div 
            className="mt-6 p-4 glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h5 className="text-sm font-medium text-center">¿Por qué necesitamos tus datos?</h5>
            <p className="text-xs text-[#4A4B4C] mt-2 text-center">
              Utilizamos tu información para personalizar la comunicación y brindarte detalles específicos sobre el programa.
              Nunca compartiremos tus datos con terceros.
            </p>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfesionalesAccion;
