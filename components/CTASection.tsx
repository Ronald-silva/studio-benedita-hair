import React from 'react';
import { Button } from './ui/Button';
import { Phone, Instagram, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface CTASectionProps {
  onOpenBooking: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-studio-pinkHover to-studio-goldLight text-studio-black relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
            Pronta para sua transformação?
        </h2>
        <p className="font-sans text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Agende sua sessão agora mesmo e descubra o poder de um cabelo saudável e radiante.
        </p>

        <Button 
            variant="secondary" 
            size="lg" 
            onClick={onOpenBooking}
            id="btn-agendar-cta"
            className="mb-12 shadow-xl hover:shadow-2xl scale-110"
        >
            AGENDAR AGORA
        </Button>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-8">
            <div className="flex items-center gap-3">
                <div className="bg-white/30 p-3 rounded-full">
                    <Phone size={24} className="text-studio-black" />
                </div>
                <span className="font-semibold text-lg">{CONTACT_INFO.phone}</span>
            </div>
            
            <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
                <div className="bg-white/30 p-3 rounded-full">
                    <Instagram size={24} className="text-studio-black" />
                </div>
                <span className="font-semibold text-lg">{CONTACT_INFO.instagram}</span>
            </a>

            <div className="flex items-center gap-3">
                <div className="bg-white/30 p-3 rounded-full">
                    <MapPin size={24} className="text-studio-black" />
                </div>
                <span className="font-semibold text-lg">Fortaleza, CE</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;