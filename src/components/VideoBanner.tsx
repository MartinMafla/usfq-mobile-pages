
interface VideoBannerProps {
  title: string;
  subtitle: string;
}

const VideoBanner: React.FC<VideoBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="usfq-banner h-56 overflow-hidden">
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        {/* Fancy gradient background with pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#10131F] to-[#2A2E43]"></div>
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMCAxNSAzMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMCAxNSAzMCAxNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')",
          backgroundSize: "30px 30px"
        }}></div>
        
        {/* Red accent elements */}
        <div className="absolute w-20 h-20 rounded-full bg-[#FF0000]/10 top-12 left-12 blur-xl"></div>
        <div className="absolute w-16 h-16 rounded-full bg-[#FF0000]/10 bottom-10 right-16 blur-lg"></div>
        
        {/* Modern play button */}
        <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-lg shadow-xl hover:bg-white/40 transition-colors z-10 border border-white/50 group">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF0000] to-[#ff3333] flex items-center justify-center shadow-md group-hover:scale-95 transition-transform">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
          </div>
        </div>
        
        {/* Overlay gradients for better text readability */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div className="usfq-banner-content">
        <h1 className="text-xl font-bold text-[#231F20]">{title}</h1>
        <p className="text-sm text-[#4A4B4C] mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default VideoBanner;
