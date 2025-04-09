
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const EstudiantesConfirmacion = () => {
  const navigate = useNavigate();
  
  return (
    <div className="usfq-container">
      <Header pageType="estudiantes" />
      
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center">
          <CheckCircle size={64} className="mx-auto mb-4 text-green-500" />
          
          <h1 className="text-2xl font-bold mb-4">¡Gracias por tu interés!</h1>
          
          <p className="mb-6 text-[#4A4B4C]">
            Tu solicitud ha sido recibida. Pronto recibirás un correo con tu guía y acceso al tour virtual.
          </p>
          
          <p className="mb-8 text-sm">
            Uno de nuestros asesores se pondrá en contacto contigo en las próximas 24 horas.
          </p>
          
          <button 
            onClick={() => navigate('/estudiantes')}
            className="usfq-button-primary"
          >
            VOLVER AL INICIO
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstudiantesConfirmacion;
