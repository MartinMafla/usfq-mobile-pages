
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="usfq-footer">
      <div className="flex flex-col items-center justify-center space-y-2 py-3">
        <div className="flex items-center">
          <span className="text-xs text-[#4A4B4C] mr-1">Creado con</span>
          <Heart size={12} className="text-[#FF0000] mx-1 fill-[#FF0000]" />
          <span className="text-xs text-[#4A4B4C]">en USFQ</span>
        </div>
        <span className="text-xs text-[#4A4B4C] opacity-75">© {new Date().getFullYear()} Universidad San Francisco de Quito</span>
      </div>
    </footer>
  );
};

export default Footer;
