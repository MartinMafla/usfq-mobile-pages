// src/components/EmailPreview.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

interface EmailPreviewProps {
  buyerPersona: 'estudiantes' | 'profesionales';
}

const EmailPreview: React.FC<EmailPreviewProps> = ({ buyerPersona }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="mt-12 mb-8">
      <motion.div 
        className="bg-white/80 backdrop-blur-md rounded-xl border border-white/50 p-4 shadow-xl max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-bold text-center mb-4 text-[#231F20]">
          Previsualización de Correo Electrónico Automático
        </h3>
        
        <div className="bg-gray-100 rounded-lg p-3 mb-4">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-sm"><strong>De:</strong> USFQ Medios Interactivos &lt;info@usfq.edu.ec&gt;</p>
              <p className="text-sm"><strong>Para:</strong> usuario@example.com</p>
              <p className="text-sm"><strong>Asunto:</strong> {buyerPersona === 'estudiantes' 
                ? '¡Gracias por tu interés en USFQ Medios Interactivos!' 
                : 'Tu camino hacia la especialización en Medios Interactivos'}</p>
            </div>
            
            <button 
              className="bg-[#4A4B4C] hover:bg-[#231F20] text-white rounded-md px-3 py-1 text-sm"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Ocultar' : 'Ver correo'}
            </button>
          </div>
        </div>
        
        {expanded && (
          <motion.div 
            className="border rounded-lg overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={buyerPersona === 'estudiantes' 
                ? '/email-estudiantes.jpg' 
                : '/email-profesionales.jpg'} 
              alt={`Ejemplo de correo para ${buyerPersona}`} 
              className="w-full h-auto"
            />
            
            <div className="p-4 bg-gray-50 text-center">
              <p className="text-sm text-gray-500">
                <strong>Nota:</strong> Este es un ejemplo del correo electrónico que recibiría el usuario tras completar el formulario. 
                En un entorno de producción, este correo se enviaría automáticamente a través de EngageBay.
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default EmailPreview;