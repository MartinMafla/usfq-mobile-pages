
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from "@/components/ui/use-toast";

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
      
      <main className="flex-1">
        <section className="usfq-section">
          <h2 className="usfq-title">Solicita información personalizada</h2>
          <p className="text-sm text-[#4A4B4C] mb-4">
            Obtén detalles sobre convalidaciones y modalidades.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm mb-1">
                Nombres completos*
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="usfq-input"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="correo" className="block text-sm mb-1">
                Correo electrónico*
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="usfq-input"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="telefono" className="block text-sm mb-1">
                Número de teléfono*
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="usfq-input"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="profesion" className="block text-sm mb-1">
                Profesión actual*
              </label>
              <input
                type="text"
                id="profesion"
                name="profesion"
                value={formData.profesion}
                onChange={handleChange}
                className="usfq-input"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="areaInteres" className="block text-sm mb-1">
                Área de interés principal*
              </label>
              <select
                id="areaInteres"
                name="areaInteres"
                value={formData.areaInteres}
                onChange={handleChange}
                className="usfq-input"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="ux">Diseño UX/UI</option>
                <option value="desarrollo">Desarrollo Web</option>
                <option value="realidad">Realidad Virtual/Aumentada</option>
                <option value="motion">Motion Graphics</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label htmlFor="experiencia" className="block text-sm mb-1">
                ¿Tienes experiencia en diseño?*
              </label>
              <select
                id="experiencia"
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
                className="usfq-input"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="ninguna">Sin experiencia</option>
                <option value="basica">Experiencia básica</option>
                <option value="intermedia">Experiencia intermedia</option>
                <option value="avanzada">Experiencia avanzada</option>
              </select>
            </div>
            
            <div className="mb-6 flex items-start">
              <input
                type="checkbox"
                id="aceptaInfo"
                name="aceptaInfo"
                checked={formData.aceptaInfo}
                onChange={handleCheckboxChange}
                className="usfq-checkbox mt-1"
                required
              />
              <label htmlFor="aceptaInfo" className="text-sm">
                Acepto recibir información de la USFQ*
              </label>
            </div>
            
            <div className="bg-[#e0e0e0] p-3 rounded-md mb-6">
              <h4 className="font-medium mb-2">Al enviar, recibirás GRATIS:</h4>
              <ul className="text-sm space-y-1">
                <li>• "Guía de Transición a Diseño Digital"</li>
                <li>• Acceso a webinar exclusivo "Diseño UX/UI para profesionales en transición"</li>
              </ul>
            </div>
            
            <button type="submit" className="usfq-button-primary">
              ENVIAR AHORA
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <h5 className="text-sm font-medium">¿Por qué necesitamos tus datos?</h5>
            <p className="text-xs text-[#4A4B4C]">
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
