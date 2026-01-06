import React from 'react';
import { PROMO_BEHEL, GENERAL_SERVICES, WHATSAPP_LINK } from '../constants';
import { Check, Sparkles, ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Text & Main Promo */}
          <div className="lg:w-1/2">
            <span className="text-amber-600 font-bold tracking-widest text-xs uppercase mb-4 block">Layanan Kami</span>
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-stone-900 mb-8 leading-tight">
              Investasi Terbaik <br/> Untuk Senyum Anda
            </h2>
            <p className="text-stone-600 text-lg font-light mb-12 leading-relaxed">
              Kami menawarkan berbagai perawatan gigi estetika dan kesehatan dengan harga yang jujur dan transparan.
            </p>

            {/* Promo Card - Dark Glass Effect */}
            <div className="relative rounded-[2.5rem] overflow-hidden p-8 md:p-10 shadow-2xl shadow-stone-300 group">
              {/* Background Image/Color */}
              <div className="absolute inset-0 bg-stone-900 transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-black opacity-90"></div>
              
              <div className="relative z-10 text-white">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-serif font-normal mb-2 flex items-center gap-3">
                      {PROMO_BEHEL.title}
                      <Sparkles className="text-amber-400 animate-pulse" size={20} />
                    </h3>
                    <p className="text-stone-400 text-sm max-w-xs font-light">
                      {PROMO_BEHEL.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-10">
                  {PROMO_BEHEL.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                      <span className="font-light text-stone-300">{item.name}</span>
                      <span className="text-white font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={WHATSAPP_LINK}
                  className="inline-flex w-full items-center justify-center bg-white text-stone-900 hover:bg-amber-50 px-8 py-4 rounded-2xl font-bold transition-all gap-2 group-hover:gap-4"
                >
                  Klaim Promo
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: General Services List */}
          <div className="lg:w-1/2 lg:pt-20">
             <div className="glass-card rounded-[3rem] p-8 md:p-12 h-full">
                <h3 className="text-2xl font-serif font-normal text-stone-900 mb-8">Perawatan Lainnya</h3>
                
                <div className="grid gap-6">
                  {GENERAL_SERVICES.map((service, index) => (
                    <div key={index} className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default border border-transparent hover:border-stone-100">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
                          <Check size={16} />
                        </div>
                        <span className="text-lg text-stone-700 font-medium group-hover:text-stone-900">{service.name}</span>
                      </div>
                      {service.price && (
                        <span className="text-xs font-bold bg-stone-900 text-white px-3 py-1.5 rounded-full">
                          {service.price.replace('Rp ', '')}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-amber-50 rounded-3xl border border-amber-100 text-center">
                   <p className="text-amber-900 font-serif text-lg italic mb-4">"Kesehatan gigi adalah investasi jangka panjang."</p>
                   <a href={WHATSAPP_LINK} className="text-stone-900 font-bold underline decoration-2 decoration-amber-400 hover:decoration-stone-900 transition-all">
                     Konsultasi Gratis Sekarang
                   </a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;