import React, { useState } from 'react';
import { X, Calendar, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    // Here you would integrate with the actual backend
    setTimeout(() => {
        // Reset after success message
    }, 3000);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({ name: '', phone: '', service: '', date: '' });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-studio-primaryDark text-white p-6 flex justify-between items-center">
            <h3 className="font-heading font-bold text-xl">Agendar Horário</h3>
            <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
            </button>
        </div>

        {/* Body */}
        <div className="p-8">
            {step === 1 ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                        <input 
                            required
                            type="text" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-studio-primary focus:border-transparent outline-none"
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                        <input 
                            required
                            type="tel" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-studio-primary focus:border-transparent outline-none"
                            placeholder="(00) 00000-0000"
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Serviço de Interesse</label>
                        <select 
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-studio-primary focus:border-transparent outline-none bg-white"
                            value={formData.service}
                            onChange={e => setFormData({...formData, service: e.target.value})}
                        >
                            <option value="">Selecione...</option>
                            <option value="alisamento">Alisamento Progressivo</option>
                            <option value="botox">Botox Capilar</option>
                            <option value="hidratacao">Hidratação/Tratamento</option>
                            <option value="avaliacao">Avaliação Gratuita</option>
                        </select>
                    </div>
                    <div className="pt-2">
                        <Button fullWidth variant="primary" type="submit">
                            Confirmar Pré-Agendamento
                        </Button>
                        <p className="text-xs text-center text-gray-500 mt-3">
                            Entraremos em contato pelo WhatsApp para confirmar o horário.
                        </p>
                    </div>
                </form>
            ) : (
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={32} />
                    </div>
                    <h4 className="font-bold text-2xl text-studio-primaryDark mb-2">Recebemos seu pedido!</h4>
                    <p className="text-gray-600 mb-6">
                        Obrigado, {formData.name}. Nossa equipe entrará em contato pelo WhatsApp em instantes para finalizar o agendamento.
                    </p>
                    <Button variant="outline" onClick={handleClose}>Fechar</Button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;