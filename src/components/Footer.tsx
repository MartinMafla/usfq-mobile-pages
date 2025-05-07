
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-gradient-to-b from-white/70 to-white/90 border-t border-gray-200/50 shadow-inner">
      <motion.div 
        className="flex flex-col items-center justify-center space-y-2 py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bg-white/30 backdrop-blur-md border border-white/50 rounded-full px-5 py-2 shadow-lg"
          whileHover={{ scale: 1.05 }}
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
        </motion.div>
        <motion.div
          className="bg-gradient-to-r from-[#FF0000]/10 to-[#6a11cb]/10 rounded-full px-5 py-1"
          whileHover={{ 
            backgroundImage: "linear-gradient(to right, rgba(255, 0, 0, 0.2), rgba(106, 17, 203, 0.2))"
          }}
        >
          <span className="text-xs text-[#4A4B4C] opacity-75">© {new Date().getFullYear()} Universidad San Francisco de Quito</span>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
