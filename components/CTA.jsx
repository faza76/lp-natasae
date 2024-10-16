import HeroImg from "@/public/image-hero.png";

const CTASection = () => {
  return (
    <div className="mx-0 md:mx-8 md:p-4">
        <div
        className="relative w-full bg-center bg-no-repeat p-4 py-8 md:p-12 "
        style={{ backgroundImage: `url(${HeroImg.src})` }}
        >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm	" />

        <div className="relative flex flex-col justify-center items-center h-full w-full z-10 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            konsultasi online maupun offline
            </h2>
            <p className="text-white text-sm md:text-lg mb-8 max-w-3xl">
            Anda dapat berkonsultasi langsung dengan mengunjungi kantor kami atau memesan jasa survei lokasi yang tersedia untuk daerah Jabodetabek, Bandung, dan Priangan Timur. Bagi Anda yang sibuk atau tidak dapat bertemu secara langsung, kami juga menyediakan layanan konsultasi 100% secara online melalui WhatsApp atau pertemuan daring menggunakan Zoom atau Google Meet.
            </p>
            <button className="bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-full shadow-lg">
            Hubungi Whatsapp
            </button>
        </div>
        </div>
    </div>
    
  );
};

export default CTASection;
