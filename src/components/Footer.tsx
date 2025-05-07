
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="usfq-footer backdrop-blur-sm bg-white/80 border-t border-gray-100">
      <motion.div 
        className="flex flex-col items-center justify-center space-y-2 py-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <span className="text-xs text-[#4A4B4C] mr-1">Creado con</span>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <Heart size={12} className="text-[#FF0000] mx-1 fill-[#FF0000]" />
          </motion.div>
          <span className="text-xs text-[#4A4B4C]">en USFQ</span>
        </div>
        <span className="text-xs text-[#4A4B4C] opacity-75">© {new Date().getFullYear()} Universidad San Francisco de Quito</span>
      </motion.div>
    </footer>
  );
};

export default Footer;
