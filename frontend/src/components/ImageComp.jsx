import React from "react";

const ImageComp = () => {
  return (
    <div className="hidden md:flex relative p-3 md:w-1/2">
      <h2 className="font-major absolute top-6 left-6 text-4xl text-gray-300 cursor-pointer z-10">
        Knock
      </h2>

      <img
        src="fotoFundo.png"
        alt="Imagem decorativa"
        className="w-full h-full rounded-md object-cover"
      />
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <p className="text-gray-500 text-lg text-center font-tilt mb-5 leading-snug">
          Conectando ideias, pessoas e oportunidades.
        </p>
      </div>
    </div>
  );
};

export default ImageComp;
