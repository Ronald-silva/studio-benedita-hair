import React, { useState } from "react";
import { Section } from "./ui/Section";
import { X } from "lucide-react";

// Gallery items - Pares de antes/depois usando imagens reais
const GALLERY_ITEMS = [
  {
    id: 1,
    before: "/1.png", // Imagem 1 = ANTES
    after: "/2.png", // Imagem 2 = DEPOIS
    coverImage: "/2.png", // Mostra a imagem 2 na galeria (resultado)
    serviceName: "Alisamento Progressivo",
    description: "Transformação completa com resultado natural",
  },
  {
    id: 2,
    before: "/3.png", // Imagem 3 = ANTES
    after: "/4.png", // Imagem 4 = DEPOIS
    coverImage: "/4.png", // Mostra a imagem 4 na galeria (resultado)
    serviceName: "Botox Capilar",
    description: "Redução de volume e brilho intenso",
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <Section id="gallery" className="bg-white">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-xs md:text-sm font-bold text-studio-secondary uppercase tracking-widest mb-2">
          Portfolio
        </h2>
        <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-studio-black px-4">
          Resultados que falam
        </h3>
        <div className="w-12 md:w-16 h-1 bg-studio-primary mx-auto mt-3 md:mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto px-4 md:px-6">
        {GALLERY_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl shadow-soft hover:shadow-gold transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-[3/4] md:aspect-[4/5] relative">
              <img
                src={item.coverImage}
                alt={`Resultado ${item.serviceName}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 lg:p-8">
                <span className="text-studio-primary font-bold text-xs md:text-sm tracking-wider uppercase mb-1 md:mb-2">
                  Ver Transformação
                </span>
                <p className="text-white font-heading font-semibold text-lg md:text-xl mb-1 md:mb-2">
                  {item.serviceName}
                </p>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal - Antes e Depois */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 md:p-4 lg:p-6"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-studio-primary transition-colors z-10"
          >
            <X size={28} className="md:hidden" />
            <X size={40} className="hidden md:block" />
          </button>

          <div
            className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-2 md:px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagem Antes */}
            <div className="relative">
              <span className="absolute top-3 left-3 md:top-4 md:left-4 lg:top-6 lg:left-6 bg-black/80 text-white px-3 py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider z-10 shadow-lg">
                Antes
              </span>
              <div className="aspect-[3/4] md:aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={GALLERY_ITEMS[selectedImage].before}
                  alt="Antes do tratamento"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Imagem Depois */}
            <div className="relative">
              <span className="absolute top-3 left-3 md:top-4 md:left-4 lg:top-6 lg:left-6 bg-studio-primary text-white px-3 py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider z-10 shadow-lg">
                Depois
              </span>
              <div className="aspect-[3/4] md:aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={GALLERY_ITEMS[selectedImage].after}
                  alt="Depois do tratamento"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Informações do Serviço */}
            <div className="col-span-1 lg:col-span-2 text-center text-white mt-4 md:mt-6 lg:mt-8 px-2 md:px-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold mb-2 md:mb-3 lg:mb-4">
                {GALLERY_ITEMS[selectedImage].serviceName}
              </h3>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg xl:text-xl max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
                {GALLERY_ITEMS[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Gallery;
