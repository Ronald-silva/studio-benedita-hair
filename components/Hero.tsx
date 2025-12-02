import React from 'react';
import { Button } from './ui/Button';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop"
          alt="Cabelo liso e brilhante" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white max-w-4xl pt-20">
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight animate-fade-in-up">
          Transformação que vai além da beleza. <br />
          <span className="text-studio-gold">É autoconfiança.</span>
        </h1>
        <p className="font-sans text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto opacity-90 animate-fade-in-up delay-100">
          Alisamento progressivo e tratamentos capilares de excelência para você revelar a sua melhor versão.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={onOpenBooking}
            id="btn-agendar-hero"
            className="min-w-[200px]"
          >
            AGENDAR AGORA
          </Button>
          <Button 
            variant="white" 
            size="lg" 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="min-w-[200px]"
          >
            Conhecer Studio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;