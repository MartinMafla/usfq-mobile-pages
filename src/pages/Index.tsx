
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirigir a la página de estudiantes por defecto
    navigate('/estudiantes');
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-6">
        <div className="w-16 h-16 border-4 border-t-[#FF0000] border-r-[#FF0000] border-b-[#4A4B4C] border-l-[#4A4B4C] rounded-full animate-spin mx-auto mb-4"></div>
        <h1 className="text-xl font-bold mb-2 text-[#231F20]">Cargando...</h1>
        <p className="text-sm text-[#4A4B4C]">Redirigiendo a USFQ Medios Interactivos</p>
      </div>
    </div>
  );
};

export default Index;
