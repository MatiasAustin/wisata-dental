import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Main Footer CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-stone-800 p-8 rounded-3xl mb-12 border border-stone-700">
           <div className="text-center md:text-left mb-6 md:mb-0">
             <h3 className="text-2xl font-medium mb-2">Siap untuk Senyum Indahmu?</h3>
             <p className="text-stone-400">Jadwalkan konsultasi hari ini. Gratis via WhatsApp.</p>
           </div>
           <a 
             href={WHATSAPP_LINK}
             target="_blank"
             rel="noreferrer" 
             className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-bold transition-colors"
           >
             Chat WhatsApp Sekarang
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-stone-800 pt-12">
          
          <div>
            <h4 className="text-xl font-medium mb-4">Wisata Dental Care</h4>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Klinik gigi keluarga terpercaya di Cikampek dengan pelayanan ramah, profesional, dan harga terjangkau.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
             <h4 className="text-lg font-medium mb-4">Link Cepat</h4>
             <ul className="space-y-2 text-stone-400 text-sm">
               <li><a href="#features" className="hover:text-amber-500 transition-colors">Tentang Kami</a></li>
               <li><a href="#services" className="hover:text-amber-500 transition-colors">Layanan & Harga</a></li>
               <li><a href="#schedule" className="hover:text-amber-500 transition-colors">Jadwal Dokter</a></li>
               <li><a href="#location" className="hover:text-amber-500 transition-colors">Lokasi</a></li>
             </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Kontak</h4>
            <p className="text-stone-400 text-sm mb-2">0852-1921-3132 (WhatsApp)</p>
            <p className="text-stone-400 text-sm">Jl. Ir. H. Juanda, Cikampek, Karawang</p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Wisata Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;