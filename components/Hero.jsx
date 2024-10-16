import HeroImg from "@/public/image-hero.png";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-full p-12 mx-8 overflow-visible"
      style={{ backgroundImage: `url(${HeroImg.src})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative grid grid-cols-3 gap-4">
        <div className="md:col-span-2" /> {/* Empty column for layout */}

        {/* Floating content */}
        <div className=" col-span-3 md:col-span-1 bg-primary-foreground p-6 shadow-lg z-10 relative -mt-20 overflow-visible">
          <div className="space-y-6">
            <h1 className="text-primary text-3xl font-bold">
              MENGAPA HARUS NATASAE STUDIO
            </h1>
            <p className="text-white">
              Setiap ruang & bangunan punya cerita, dan kami di Natasae Studio siap untuk mewujudkan cerita Anda melalui desain arsitektur yang tak hanya enak dilihat, tapi juga nyaman dirasakan.
            </p>
            <p className="text-white">
              Kami lebih dari sekadar konsultan arsitektur, kami adalah mitra Anda dalam menciptakan ruang dan bangunan yang mencerminkan kepribadian, gaya hidup, dan aspirasi Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
