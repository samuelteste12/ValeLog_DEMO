import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppHref } from '../constants/company';

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 min-h-[52px] min-w-[52px] bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center group touch-manipulation"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium py-2 px-4 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Precisa de ajuda? Fale conosco!
      </span>
    </a>
  );
}
