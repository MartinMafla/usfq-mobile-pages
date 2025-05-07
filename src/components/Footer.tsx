
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md -z-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMCBMMTUgMzAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTAgMTUgMzAgMTUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-10 -z-10"></div>
      
      {/* Red accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF0000]/30"></div>

      <motion.div 
        className="flex flex-col items-center justify-center space-y-2 py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="glass-card px-5 py-2"
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
          className="bg-[#231F20]/10 rounded-full px-5 py-1 backdrop-blur-sm"
          whileHover={{ 
            backgroundColor: "rgba(35, 31, 32, 0.15)"
          }}
        >
          <span className="text-xs text-[#4A4B4C] opacity-75">© {new Date().getFullYear()} Universidad San Francisco de Quito</span>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
