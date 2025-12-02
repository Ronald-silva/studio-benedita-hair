import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Award, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Content Side - Order 1 on Mobile, Order 2 on Desktop */}
        <div className="order-1 lg:order-2">
          <h2 className="text-sm font-bold text-studio-gold uppercase tracking-widest mb-2">Sobre a Especialista</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-studio-black mb-6">
            Excelência técnica e paixão por elevar sua autoestima
          </h3>
          
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
            <p>
              Com mais de uma década de dedicação exclusiva ao universo da beleza, Benedita consolidou-se como referência em alisamentos progressivos e tratamentos capilares de alta performance em Fortaleza.
            </p>
            <p>
              Sua trajetória é marcada pela especialização contínua. Dominando técnicas avançadas de química capilar e tricologia básica, Benedita desenvolveu uma metodologia própria que garante o liso perfeito sem abrir mão da saúde dos fios. Sua filosofia é clara: beleza e saúde capilar devem caminhar juntas.
            </p>
            <p>
              "Meu objetivo vai além de transformar cabelos; é sobre entregar liberdade e praticidade para a mulher moderna, fazendo com que ela se sinta poderosa e confiante todos os dias," afirma a especialista.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-4">
              <div className="bg-studio-pink/20 p-2 rounded-lg text-studio-black"><Award size={24} /></div>
              <span className="font-medium text-gray-800">Certificação Especializada em Alisamentos</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-studio-pink/20 p-2 rounded-lg text-studio-black"><Heart size={24} /></div>
              <span className="font-medium text-gray-800">Atendimento Humanizado e Personalizado</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-studio-pink/20 p-2 rounded-lg text-studio-black"><Sparkles size={24} /></div>
              <span className="font-medium text-gray-800">Produtos Premium e Tecnologia Segura</span>
            </div>
          </div>

          <Button variant="secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            Conhecer Nossos Serviços
          </Button>
        </div>

        {/* Image Side - Order 2 on Mobile, Order 1 on Desktop */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute top-0 -left-4 w-2/3 h-full bg-studio-pink/20 rounded-l-3xl -z-10"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1587&auto=format&fit=crop" 
              alt="Benedita Especialista" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-gold max-w-[200px] hidden md:block">
            <p className="font-heading font-bold text-4xl text-studio-gold mb-1">10+</p>
            <p className="text-gray-600 text-sm font-medium">Anos transformando autoestimas</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;