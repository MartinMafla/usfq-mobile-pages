
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from "@/components/ui/use-toast";

const EstudiantesAccion = () => {
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
  
  return (
    <div className="usfq-container">
      <Header pageType="estudiantes" />
      
      <main className="flex-1">
        <section className="usfq-section">
          <h2 className="usfq-title">Da el primer paso hacia tu futuro</h2>
          <p className="text-sm text-[#4A4B4C] mb-4">
            Completa este formulario y recibe información personalizada.
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
              <label htmlFor="colegio" className="block text-sm mb-1">
                Colegio actual*
              </label>
              <input
                type="text"
                id="colegio"
                name="colegio"
                value={formData.colegio}
                onChange={handleChange}
                className="usfq-input"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="ingreso" className="block text-sm mb-1">
                ¿Cuándo planeas ingresar?*
              </label>
              <select
                id="ingreso"
                name="ingreso"
                value={formData.ingreso}
                onChange={handleChange}
                className="usfq-input"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="proximo">Próximo semestre</option>
                <option value="siguiente">Siguiente año</option>
                <option value="futuro">En 2 años o más</option>
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
                <li>• "Guía de Portafolio para Creativos Digitales"</li>
                <li>• Tour virtual exclusivo de nuestros laboratorios</li>
              </ul>
            </div>
            
            <button type="submit" className="usfq-button-primary">
              ENVIAR AHORA
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <h5 className="text-sm font-medium">¿Por qué necesitamos tus datos?</h5>
            <p className="text-xs text-[#4A4B4C]">
              Utilizamos tu información para personalizar la comunicación y brindarte detalles específicos sobre la carrera.
              Nunca compartiremos tus datos con terceros.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstudiantesAccion;
