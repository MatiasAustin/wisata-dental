import React from 'react';
import { Phone } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-all transform hover:scale-110 flex items-center justify-center group"
      aria-label="Chat WhatsApp"
    >
      <Phone size={28} className="fill-white" />
      <span className="absolute right-full mr-4 bg-white text-stone-800 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat Admin
      </span>
    </a>
  );
};

export default FloatingWhatsApp;