
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const ProfesionalesConfirmacion = () => {
  const navigate = useNavigate();
  
  return (
    <div className="usfq-container">
      <Header pageType="profesionales" />
      
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-xs mx-auto border border-gray-50 scale-in">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            
            <h1 className="text-2xl font-bold mb-4 text-[#231F20]">¡Gracias por tu interés!</h1>
            
            <p className="mb-6 text-[#4A4B4C]">
              Tu solicitud ha sido recibida. Pronto recibirás un correo con tu guía y acceso al webinar.
            </p>
            
            <div className="w-full p-4 bg-gray-50 rounded-xl mb-8">
              <p className="text-xs text-[#4A4B4C] font-medium">
                Uno de nuestros asesores académicos se pondrá en contacto contigo en las próximas 24 horas para discutir opciones de convalidación.
              </p>
            </div>
            
            <button 
              onClick={() => navigate('/profesionales')}
              className="modern-red-button w-full flex items-center justify-center"
            >
              <ArrowLeft size={16} className="mr-2" />
              <span>VOLVER AL INICIO</span>
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfesionalesConfirmacion;
