import React from 'react';
import { Section } from './ui/Section';
import { SPECIALTIES } from '../constants';
import { Sparkles, Droplets, Waves, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={32} />,
  Droplets: <Droplets size={32} />,
  Waves: <Waves size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
};

const Specialties: React.FC = () => {
  return (
    <Section id="specialties">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-studio-gold uppercase tracking-widest mb-2">Especialidades</h2>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-studio-black">O que oferecemos</h3>
        <div className="w-16 h-1 bg-studio-gold mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SPECIALTIES.map((item) => (
          <div 
            key={item.id}
            className="group p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-gold hover:-translate-y-1 hover:bg-studio-pink/10"
          >
            <div className="mb-6 text-studio-black group-hover:text-studio-gold transition-colors duration-300">
              {iconMap[item.icon]}
            </div>
            <h4 className="font-heading font-bold text-xl mb-3 text-studio-black group-hover:text-studio-gold transition-colors duration-300">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Specialties;