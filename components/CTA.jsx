import HeroImg from "@/public/image-hero.png";

const CTASection = () => {
  return (
    <div className="mx-8 p-4">
        <div
        className="relative w-full  bg-center bg-no-repeat p-12"
        style={{ backgroundImage: `url(${HeroImg.src})` }}
        >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative flex flex-col justify-center items-center h-full z-10 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
            </h2>
            <p className="text-white text-lg mb-8 max-w-lg">
            Let Natasae Studio bring your vision to life with expert design solutions
            that combine aesthetics, functionality, and your personal style.
            </p>
            <button className="bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-full shadow-lg">
            Get Started Now
            </button>
        </div>
        </div>
    </div>
    
  );
};

export default CTASection;
