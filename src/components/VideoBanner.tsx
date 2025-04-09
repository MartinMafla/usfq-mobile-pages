
interface VideoBannerProps {
  title: string;
  subtitle: string;
}

const VideoBanner: React.FC<VideoBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="usfq-banner h-56">
      {/* En un caso real, aquí iría un video. Para este ejemplo, usamos un div con gradiente */}
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#231F20] to-[#4A4B4C]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0iI0ZGMDAwMCIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg hover:bg-white/30 transition-colors z-10">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      <div className="usfq-banner-content bg-white shadow-md rounded-t-2xl">
        <h1 className="text-xl font-bold text-[#231F20]">{title}</h1>
        <p className="text-sm text-[#4A4B4C] mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default VideoBanner;
