
import { useState } from 'react';
import { User } from 'lucide-react';

interface HeaderProps {
  pageType: 'estudiantes' | 'profesionales';
}

const Header: React.FC<HeaderProps> = ({ pageType }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="flex items-center justify-between p-5 bg-white/90 backdrop-blur-lg sticky top-0 z-30 border-b border-white/50 shadow-lg">
      <div className="flex items-center">
        <div className="h-8">
          {/* USFQ Logo */}
          <div className="flex items-center">
            <div className="text-[#231F20] font-bold text-xl mr-1">USFQ</div>
            <div className="w-1 h-6 bg-[#FF0000] mx-1"></div>
            <div className="text-[#4A4B4C] text-sm">Medios Interactivos</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="p-2 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center"
          aria-label="Perfil"
        >
          <div className="w-8 h-8 bg-[#F5F5F5] rounded-full flex items-center justify-center shadow-sm">
            <User size={18} className="text-[#4A4B4C]" />
          </div>
        </button>
        
        {showProfile && (
          <div className="absolute right-0 mt-2 w-56 bg-white text-[#231F20] rounded-xl shadow-lg z-10 p-4 border border-gray-100 scale-in">
            <div className="font-medium border-b pb-3 mb-3">Portal USFQ</div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center text-sm text-[#4A4B4C] hover:text-[#FF0000] transition-colors">
                  Iniciar sesión
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-sm text-[#4A4B4C] hover:text-[#FF0000] transition-colors">
                  Admisiones
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-sm text-[#4A4B4C] hover:text-[#FF0000] transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a 
                  href={pageType === 'estudiantes' ? '/profesionales' : '/estudiantes'} 
                  className="flex items-center text-sm text-[#4A4B4C] hover:text-[#FF0000] transition-colors"
                >
                  Ver {pageType === 'estudiantes' ? 'profesionales' : 'estudiantes'}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
