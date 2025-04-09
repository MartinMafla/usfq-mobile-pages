
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="usfq-container">
      <Header pageType="profesionales" />
      
      <main className="flex-1 bg-[#f8f9fa]">
        <section className="usfq-section">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="usfq-title text-center">Solicita información personalizada</h2>
            <p className="text-sm text-[#4A4B4C] mb-4 text-center">
              Obtén detalles sobre convalidaciones y modalidades.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-2xl shadow-lg">
            <div className="space-y-5">
              <div>
                <Label htmlFor="nombre" className="text-sm font-medium text-[#231F20] block mb-2">
                  Nombres completos*
                </Label>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="bg-[#f8f9fa] border border-gray-100 rounded-xl h-12 focus:border-[#FF0000] focus:ring-2 focus:ring-[#FF0000]/20 shadow-sm"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="correo" className="text-sm font-medium text-[#231F20] block mb-2">
                  Correo electrónico*
                </Label>
                <Input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="bg-[#f8f9fa] border border-gray-100 rounded-xl h-12 focus:border-[#FF0000] focus:ring-2 focus:ring-[#FF0000]/20 shadow-sm"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="telefono" className="text-sm font-medium text-[#231F20] block mb-2">
                  Número de teléfono*
                </Label>
                <Input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="bg-[#f8f9fa] border border-gray-100 rounded-xl h-12 focus:border-[#FF0000] focus:ring-2 focus:ring-[#FF0000]/20 shadow-sm"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="profesion" className="text-sm font-medium text-[#231F20] block mb-2">
                  Profesión actual*
                </Label>
                <Input
                  type="text"
                  id="profesion"
                  name="profesion"
                  value={formData.profesion}
                  onChange={handleChange}
                  className="bg-[#f8f9fa] border border-gray-100 rounded-xl h-12 focus:border-[#FF0000] focus:ring-2 focus:ring-[#FF0000]/20 shadow-sm"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="areaInteres" className="text-sm font-medium text-[#231F20] block mb-2">
                  Área de interés principal*
                </Label>
                <select
                  id="areaInteres"
                  name="areaInteres"
                  value={formData.areaInteres}
                  onChange={handleChange}
                  className="w-full bg-[#f8f9fa] border border-gray-100 rounded-xl h-12 px-3 focus:border-[#FF0000] focus:ring-2 focus:ring-[#FF0000]/20 shadow-sm"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="ux">Diseño UX/UI</option>
                  <option value="desarrollo">Desarrollo Web</option>
                  <option value="realidad">Realidad Virtual/Aumentada</option>
                  <option value="motion">Motion Graphics</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="experiencia" className="text-sm font-medium text-[#231F20] block mb-2">
                  ¿Tienes experiencia en diseño?*
                </Label>
                <select
                  id="experiencia"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleChange}
                  className="w-full bg-[#f8f9fa] border border-gray-100 rounded-xl h-12 px-3 focus:border-[#FF0000] focus:ring-2 focus:ring-[#FF0000]/20 shadow-sm"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="ninguna">Sin experiencia</option>
                  <option value="basica">Experiencia básica</option>
                  <option value="intermedia">Experiencia intermedia</option>
                  <option value="avanzada">Experiencia avanzada</option>
                </select>
              </div>
              
              <div className="flex items-start py-2">
                <div className="flex h-5 items-center">
                  <input
                    type="checkbox"
                    id="aceptaInfo"
                    name="aceptaInfo"
                    checked={formData.aceptaInfo}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-gray-300 text-[#FF0000] focus:ring-[#FF0000]/20"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="aceptaInfo" className="font-medium text-gray-700">
                    Acepto recibir información de la USFQ*
                  </label>
                </div>
              </div>
            </div>
            
            <div className="bg-[#f8f9fa] p-5 rounded-xl mt-6 mb-6 shadow-inner border border-gray-100">
              <h4 className="font-medium mb-3 text-center text-[#231F20]">Al enviar, recibirás GRATIS:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#FF0000] text-white flex items-center justify-center mr-2 text-xs shadow-sm">✓</span>
                  <span className="text-[#4A4B4C]">"Guía de Transición a Diseño Digital"</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#FF0000] text-white flex items-center justify-center mr-2 text-xs shadow-sm">✓</span>
                  <span className="text-[#4A4B4C]">Webinar "Diseño UX/UI para profesionales"</span>
                </li>
              </ul>
            </div>
            
            <button type="submit" className="modern-red-button">
              ENVIAR AHORA
            </button>
          </form>
          
          <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
            <h5 className="text-sm font-medium text-center">¿Por qué necesitamos tus datos?</h5>
            <p className="text-xs text-[#4A4B4C] mt-2 text-center">
              Utilizamos tu información para personalizar la comunicación y brindarte detalles específicos sobre el programa.
              Nunca compartiremos tus datos con terceros.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfesionalesAccion;
