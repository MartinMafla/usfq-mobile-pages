
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirigir a la página de estudiantes por defecto
    navigate('/estudiantes');
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Cargando...</h1>
      </div>
    </div>
  );
};

export default Index;
