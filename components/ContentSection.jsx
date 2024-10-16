import React from 'react';

const ContentSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 bg-gray-100">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Bayangkan dan rasakan</h2>
        <p className="text-lg text-gray-600">Dengan render animasi 3D, Anda bisa "melihat" bangunan Anda bahkan sebelum dimulai. Lihat bagaimana cahaya alami masuk melalui jendela, rasakan luasnya ruang, dan lihat setiap detail dari berbagai sudut—semuanya dalam pengalaman visual yang luar biasa. Tak ada kejutan, hanya keindahan yang terwujud.</p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md">
          <iframe
            className="w-full h-64 md:h-80 relative z-10"  
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute left-0 bottom-0 w-full h-full transform -translate-x-4 translate-y-4 z-0 border-2 border-neutral-600">
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
