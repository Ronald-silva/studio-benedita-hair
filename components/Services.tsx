import React from 'react';
import { Section } from './ui/Section';
import { DETAILED_SERVICES } from '../constants';
import { Button } from './ui/Button';
import { Check, Clock } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <Section id="services" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-studio-secondary uppercase tracking-widest mb-2">Menu de Serviços</h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-studio-primaryDark">Invista em Você</h3>
        <div className="w-16 h-1 bg-studio-primary mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DETAILED_SERVICES.map((service, index) => (
          <div 
            key={service.id}
            className={`
              relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2
              ${index === 1 ? 'bg-studio-primaryDark text-white border-studio-primaryDark shadow-xl ring-4 ring-studio-primary/20' : 'bg-white text-studio-text border-gray-100 shadow-soft hover:shadow-glow'}
            `}
          >
            {index === 1 && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-studio-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Mais Popular
              </span>
            )}

            <div className="mb-6">
                <h4 className="font-heading font-bold text-2xl mb-2">{service.title}</h4>
                <p className={`text-sm ${index === 1 ? 'text-gray-300' : 'text-gray-500'}`}>{service.description}</p>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-200/20">
                <p className="text-sm opacity-80 mb-1">A partir de</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold">R$</span>
                    <span className={`text-4xl font-heading font-bold ${index === 1 ? 'text-studio-secondary' : 'text-studio-primaryDark'}`}>
                        {service.price}
                    </span>
                </div>
            </div>

            <ul className="space-y-4 mb-8">
                {service.benefits?.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Check size={18} className={index === 1 ? 'text-studio-secondary mt-1' : 'text-green-500 mt-1'} />
                        <span className={`text-sm ${index === 1 ? 'text-gray-200' : 'text-gray-600'}`}>{benefit}</span>
                    </li>
                ))}
                <li className="flex items-center gap-3 pt-2">
                    <Clock size={18} className="opacity-50" />
                    <span className={`text-xs font-medium ${index === 1 ? 'text-gray-400' : 'text-gray-400'}`}>Duração: {service.duration}</span>
                </li>
            </ul>

            <Button 
                variant={index === 1 ? 'primary' : 'outline'} 
                fullWidth
                onClick={onOpenBooking}
            >
                Agendar Horário
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;