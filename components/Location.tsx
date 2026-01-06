import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl shadow-stone-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="lg:pr-12">
              <span className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-2 block">Visit Us</span>
              <h2 className="text-4xl font-serif font-normal text-stone-900 mb-8">Kunjungi Wisata Dental</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="bg-stone-100 p-4 rounded-2xl text-stone-800 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 text-lg mb-2">Alamat Klinik</h3>
                    <p className="text-stone-600 leading-relaxed font-light">
                      Jl. Ir. H. Juanda, Cikampek<br/>
                      (Sebelah Niceso Sukaseuri)<br/>
                      Karawang – Jawa Barat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-stone-100 p-4 rounded-2xl text-stone-800 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 text-lg mb-2">Jam Operasional</h3>
                    <p className="text-stone-600 mb-1 font-light"><span className="font-medium text-stone-800">Senin – Sabtu:</span> 09.00 – 20.00</p>
                    <p className="text-stone-600 font-light"><span className="font-medium text-stone-800">Minggu:</span> 09.00 – 17.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-inner border border-stone-200/50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5422830497576!2d107.4589!3d-6.4099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690e6045555555%3A0x1234567890abcdef!2sWisata%20Dental%20Care!5e0!3m2!1sid!2sid!4v1600000000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Wisata Dental Care"
                className="absolute inset-0 grayscale-[20%] contrast-[0.9]"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;