
interface VideoBannerProps {
  title: string;
  subtitle: string;
}

const VideoBanner: React.FC<VideoBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="usfq-banner h-60">
      {/* En un caso real, aquí iría un video. Para este ejemplo, usamos un div con gradiente */}
      <div className="w-full h-full bg-gradient-to-b from-[#4A4B4C] to-[#231F20] flex items-center justify-center">
        <span className="text-white text-sm">Video promocional</span>
      </div>
      
      <div className="usfq-banner-content">
        <h1 className="text-xl font-bold text-[#231F20]">{title}</h1>
        <p className="text-sm text-[#4A4B4C]">{subtitle}</p>
      </div>
    </div>
  );
};

export default VideoBanner;
