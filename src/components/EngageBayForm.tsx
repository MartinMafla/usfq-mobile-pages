// src/components/EngageBayForm.tsx
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
  
  // Cuando el componente se monte, asegúrate de que el script de EngageBay esté cargado
  useEffect(() => {
    // Verificar si necesitamos cargar el script de EngageBay nuevamente
    const loadEngageBayScript = () => {
      if (typeof window.EhAPI === 'undefined') {
        const script = document.createElement('script');
        script.src = '//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js?v' + new Date().getHours();
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          console.log('EngageBay script loaded');
          if (window.EhAPI && window.EhAPI.reload) {
            window.EhAPI.reload();
          }
        };
      } else if (window.EhAPI && window.EhAPI.reload) {
        window.EhAPI.reload();
      }
    };

    loadEngageBayScript();
    
    // Limpiar al desmontar
    return () => {
      // No es necesario hacer nada especial al desmontar
    };
  }, []);
  
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
        {/* El div donde se cargará el formulario de EngageBay */}
        <div 
          className="engage-hub-form-embed" 
          id={formId} 
          data-id={dataId}
        ></div>
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