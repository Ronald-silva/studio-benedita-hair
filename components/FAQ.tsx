import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section id="faq" className="bg-studio-offWhite">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
            <h2 className="text-sm font-bold text-studio-gold uppercase tracking-widest mb-2">Tira Dúvidas</h2>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-studio-black mb-6">Perguntas Frequentes</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
                Separamos as principais dúvidas de nossas clientes para você se sentir segura antes de agendar sua transformação.
            </p>
            <div className="p-6 bg-studio-pink/20 rounded-xl">
                <h4 className="font-bold text-studio-black mb-2">Ainda tem dúvidas?</h4>
                <p className="text-sm text-gray-700 mb-4">Entre em contato direto pelo WhatsApp.</p>
                <a 
                    href="#" 
                    className="inline-flex items-center font-semibold text-studio-black hover:text-studio-gold transition-colors"
                >
                    Falar com Benedita &rarr;
                </a>
            </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq) => (
                <div 
                    key={faq.id} 
                    className={`bg-white rounded-lg transition-all duration-300 ${openId === faq.id ? 'shadow-md border-l-4 border-studio-gold' : 'shadow-sm border border-gray-100'}`}
                >
                    <button 
                        onClick={() => toggle(faq.id)}
                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    >
                        <span className={`font-heading font-semibold text-lg ${openId === faq.id ? 'text-studio-black' : 'text-gray-600'}`}>
                            {faq.question}
                        </span>
                        {openId === faq.id ? 
                            <Minus className="text-studio-gold flex-shrink-0" /> : 
                            <Plus className="text-gray-400 flex-shrink-0" />
                        }
                    </button>
                    
                    <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;