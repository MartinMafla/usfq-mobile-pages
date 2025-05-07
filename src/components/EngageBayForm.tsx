// src/components/EngageBayForm.tsx (versión modificada)
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface EngageBayFormProps {
  formId: string;  // ID del formulario de EngageBay
  dataId: string;  // Data ID del formulario
  buyerPersona: 'estudiantes' | 'profesionales';
  title: string;
  subtitle: string;
}

const EngageBayForm: React.FC<EngageBayFormProps> = ({ 
  formId, 
  dataId, 
  buyerPersona,
  title,
  subtitle
}) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  
  // Cargamos manualmente el script para cada formulario
  useEffect(() => {
    if (formContainerRef.current) {
      // Limpiar cualquier formulario existente
      formContainerRef.current.innerHTML = '';
      
      // Crear el div para el formulario
      const formDiv = document.createElement('div');
      formDiv.className = 'engage-hub-form-embed';
      formDiv.id = formId;
      formDiv.setAttribute('data-id', dataId);
      
      // Añadir el div al contenedor
      formContainerRef.current.appendChild(formDiv);
      
      // Cargar el script de EngageBay específicamente para este formulario
      const script = document.createElement('script');
      script.async = true;
      script.src = `//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js?v=${new Date().getHours()}`;
      
      // Añadir el script al documento
      document.body.appendChild(script);
    }
    
    // Limpiar al desmontar
    return () => {
      // Eliminar scripts que pudimos haber añadido
      const scripts = document.querySelectorAll('script[src*="ehform.js"]');
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [formId, dataId]);
  
  return (
    <section className="usfq-section">
      <motion.div 
        className="bg-white/60 backdrop-blur-md border-l-4 border-l-[#FF0000] border-t border-r border-b border-white/50 p-6 rounded-xl mb-8 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#231F20] text-center">{title}</h2>
        <p className="text-sm text-[#4A4B4C] text-center mb-2">
          {subtitle}
        </p>
        
        {/* Divider line */}
        <div className="w-20 h-1 mx-auto mt-3 bg-[#FF0000] rounded-full"></div>
      </motion.div>
      
      <motion.div 
        className="mt-6 bg-white/70 backdrop-blur-md rounded-xl border border-white/50 shadow-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        ref={formContainerRef}
      >
        {/* El formulario se cargará aquí */}
      </motion.div>
      
      <motion.div 
        className="mt-6 p-4 bg-white/50 backdrop-blur-md rounded-xl border border-white/50 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <h5 className="text-sm font-medium text-center">¿Por qué necesitamos tus datos?</h5>
        <p className="text-xs text-[#4A4B4C] mt-2 text-center">
          Utilizamos tu información para personalizar la comunicación y brindarte detalles específicos sobre {buyerPersona === 'estudiantes' ? 'la carrera' : 'el programa'}.
          Nunca compartiremos tus datos con terceros.
        </p>
      </motion.div>
      
      {/* Formulario alternativo si EngageBay no carga */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Si el formulario no se carga correctamente, puedes contactarnos directamente a <a href="mailto:info@usfq.edu.ec" className="text-[#FF0000]">info@usfq.edu.ec</a>
        </p>
      </div>
    </section>
  );
};

// Declaración global para TypeScript
declare global {
  interface Window {
    EhAPI?: any;
  }
}

export default EngageBayForm;