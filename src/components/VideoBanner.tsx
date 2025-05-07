
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoBannerProps {
  title: string;
  subtitle: string;
}

const VideoBanner: React.FC<VideoBannerProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="relative h-72 overflow-hidden rounded-3xl mb-6 mx-4 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#231F20] via-[#231F20] to-[#4A4B4C]">
        {/* Red accent elements */}
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-[#FF0000]/20 bottom-0 -left-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.25, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute w-48 h-48 rounded-full bg-[#FF0000]/15 top-0 -right-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.2, 0.15]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 1
          }}
        />
        
        {/* Animated particles */}
        <div className="particles absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -Math.random() * 100 - 50],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Animated mesh grid overlay */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMCBMMTUgMzAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTAgMTUgMzAgMTUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')",
          backgroundSize: "30px 30px"
        }}>
      </div>
      
      {/* Content container with glass effect */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Modern play button with animation */}
        <motion.div 
          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md 
                      shadow-xl border border-white/30 mb-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
        >
          <motion.div 
            className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF0000] to-[#ff3333] 
                      flex items-center justify-center shadow-lg"
            animate={{
              boxShadow: ['0 0 0 0 rgba(255, 0, 0, 0)', '0 0 0 10px rgba(255, 0, 0, 0.1)', '0 0 0 0 rgba(255, 0, 0, 0)']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          >
            <Play size={24} className="text-white ml-1" />
          </motion.div>
        </motion.div>
        
        {/* Title and subtitle with glassmorphic card */}
        <motion.div 
          className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-4 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-2xl font-bold text-white mb-1 text-center">{title}</h1>
          <p className="text-lg text-white/90 text-center">{subtitle}</p>
        </motion.div>
      </div>
      
      {/* Overlay gradients for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>
    </motion.div>
  );
};

export default VideoBanner;
