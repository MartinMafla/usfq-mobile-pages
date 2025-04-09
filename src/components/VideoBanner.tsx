
import { Play } from 'lucide-react';

interface VideoBannerProps {
  title: string;
  subtitle: string;
}

const VideoBanner: React.FC<VideoBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="relative h-64 overflow-hidden rounded-2xl mb-6 mx-4 shadow-lg">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000a1f] to-[#1f2937]"></div>
      
      {/* Animated pattern overlay */}
      <div className="absolute inset-0 opacity-15" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMCAxNSAzMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMCAxNSAzMCAxNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')",
          backgroundSize: "30px 30px"
        }}>
      </div>
      
      {/* Red accent elements */}
      <div className="absolute w-32 h-32 rounded-full bg-[#FF0000]/15 -top-10 -right-10 blur-2xl"></div>
      <div className="absolute w-24 h-24 rounded-full bg-[#FF0000]/15 bottom-10 -left-5 blur-xl"></div>
      
      {/* Content container for centering */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Modern play button with animation */}
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md 
                      shadow-xl hover:scale-105 transition-all z-10 border border-white/30 mb-6
                      animate-pulse">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF0000] to-[#ff3333] 
                        flex items-center justify-center shadow-lg hover:shadow-xl transition-all
                        transform hover:scale-95">
            <Play size={24} className="text-white ml-1" />
          </div>
        </div>
        
        {/* Title and subtitle with text shadow for better readability */}
        <div className="text-center px-6">
          <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{title}</h1>
          <p className="text-lg text-white/90 drop-shadow-sm">{subtitle}</p>
        </div>
      </div>
      
      {/* Overlay gradients for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>
    </div>
  );
};

export default VideoBanner;
