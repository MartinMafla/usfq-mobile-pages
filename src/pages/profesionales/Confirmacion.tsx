
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const ProfesionalesConfirmacion = () => {
  const navigate = useNavigate();
  
  return (
    <div className="usfq-container">
      <Header pageType="profesionales" />
      
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center bg-white p-8 rounded-lg shadow-sm max-w-xs mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-full mb-6">
            <CheckCircle size={32} className="text-green-500" />
          </div>
          
          <h1 className="text-2xl font-bold mb-4 text-[#231F20]">¡Gracias por tu interés!</h1>
          
          <p className="mb-6 text-[#4A4B4C] text-sm">
            Tu solicitud ha sido recibida. Pronto recibirás un correo con tu guía y acceso al webinar.
          </p>
          
          <p className="mb-8 text-xs text-[#4A4B4C] bg-gray-50 p-3 rounded-md">
            Uno de nuestros asesores académicos se pondrá en contacto contigo en las próximas 24 horas para discutir opciones de convalidación.
          </p>
          
          <button 
            onClick={() => navigate('/profesionales')}
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

export default ProfesionalesConfirmacion;
