import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <Section id="testimonials" className="bg-studio-pink/10">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-studio-secondary uppercase tracking-widest mb-2">Depoimentos</h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-studio-black">O que dizem nossas clientes</h3>
      </div>

      <div 
        className="max-w-4xl mx-auto relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Buttons */}
        <button 
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-white shadow-md text-studio-primaryDark hover:text-studio-primary transition-colors z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-white shadow-md text-studio-primaryDark hover:text-studio-primary transition-colors z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center relative overflow-hidden">
            <Quote className="absolute top-6 left-6 text-studio-primary/20 w-16 h-16" />
            
            <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-studio-pink/30">
                    <img 
                        src={TESTIMONIALS[currentIndex].image} 
                        alt={TESTIMONIALS[currentIndex].name}
                        className="w-full h-full object-cover" 
                    />
                </div>
                
                <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="fill-studio-primary text-studio-primary" />
                    ))}
                </div>

                <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "{TESTIMONIALS[currentIndex].text}"
                </p>

                <h4 className="font-heading font-bold text-lg text-studio-black">
                    {TESTIMONIALS[currentIndex].name}
                </h4>
            </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-studio-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;