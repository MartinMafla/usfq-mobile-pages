
import { useState } from 'react';
import { User } from 'lucide-react';

interface HeaderProps {
  pageType: 'estudiantes' | 'profesionales';
}

const Header: React.FC<HeaderProps> = ({ pageType }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="usfq-header">
      <div className="flex items-center">
        <span className="font-medium text-sm text-[#231F20]">USFQ - Medios Interactivos</span>
      </div>
      <div className="relative">
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <User size={20} className="text-[#231F20]" />
        </button>
        
        {showProfile && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-[#231F20] rounded-lg shadow-lg z-10 p-3 border border-gray-100">
            <div className="font-medium border-b pb-2 mb-2 text-sm">Portal USFQ</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#FF0000] transition-colors">Iniciar sesión</a></li>
              <li><a href="#" className="hover:text-[#FF0000] transition-colors">Admisiones</a></li>
              <li><a href="#" className="hover:text-[#FF0000] transition-colors">Contacto</a></li>
              <li>
                <a 
                  href={pageType === 'estudiantes' ? '/profesionales' : '/estudiantes'} 
                  className="hover:text-[#FF0000] transition-colors"
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
