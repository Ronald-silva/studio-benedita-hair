import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Instagram, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-primaryDark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
                <h3 className="font-heading font-bold text-2xl mb-6">
                    Studio <span className="text-studio-accent">Benedita</span> Hair
                </h3>
                <p className="text-gray-400 mb-6">
                    Especialistas em realçar sua beleza natural através de tratamentos capilares de alta performance.
                </p>
                <div className="flex gap-4">
                    <a href={CONTACT_INFO.instagramUrl} className="bg-white/10 p-2 rounded-full hover:bg-studio-primary transition-colors text-white">
                        <Instagram size={20} />
                    </a>
                    
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="font-bold text-lg mb-6 text-studio-accent">Links Rápidos</h4>
                <ul className="space-y-3">
                    <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                    <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
                    <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galeria</a></li>
                    <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
                    <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="font-bold text-lg mb-6 text-studio-accent">Contato</h4>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <MapPin size={20} className="text-studio-accent shrink-0 mt-1" />
                        <span className="text-gray-300">{CONTACT_INFO.address}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone size={20} className="text-studio-accent shrink-0" />
                        <span className="text-gray-300">{CONTACT_INFO.phone}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Clock size={20} className="text-studio-accent shrink-0 mt-1" />
                        <span className="text-gray-300">Seg - Sáb: 09:00 - 18:00<br/>Dom: Fechado</span>
                    </li>
                </ul>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden h-48 bg-gray-800 relative group">
                {/* Embed Google Map here in production */}
                <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop" 
                    alt="Mapa Localização" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                        href="https://www.google.com/maps/place/Espa%C3%A7o+Benedita+Hair/@-3.7690538,-38.5762238,17z/data=!3m1!4b1!4m6!3m5!1s0x7c74df77c215609:0x4060655d0ba40889!8m2!3d-3.7690592!4d-38.5736489!16s%2Fg%2F11sdzpzwbb?authuser=0&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-white text-studio-primaryDark px-4 py-2 rounded-full font-bold text-sm hover:bg-studio-primary hover:text-white transition-colors shadow-lg"
                    >
                        Ver no Google Maps
                    </a>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Studio Benedita Hair. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;