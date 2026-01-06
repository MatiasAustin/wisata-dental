import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      
      {/* Background Blobs for Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-stone-200/50 text-stone-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Klinik Gigi Premium Cikampek
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-stone-900 leading-[1.1] mb-8 font-serif">
            Designed for Smiles, <br/>
            <span className="text-stone-500 italic">Built for Comfort.</span>
          </h1>
          
          <p className="text-stone-600 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-light">
            Temukan pengalaman perawatan gigi yang menenangkan dengan sentuhan modern. Kami memprioritaskan kenyamanan dan kepercayaan Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-stone-900/10 flex items-center justify-center gap-2 min-w-[200px]"
            >
              Reservasi
              <ArrowRight size={18} />
            </a>
            <a 
              href="#services"
              className="w-full sm:w-auto bg-white/50 hover:bg-white text-stone-800 px-8 py-4 rounded-full font-medium text-lg transition-all border border-stone-200/50 hover:shadow-lg backdrop-blur-sm flex items-center justify-center min-w-[200px]"
            >
              Lihat Layanan
            </a>
          </div>
        </div>

        {/* Hero Image Section with Glass Effect */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-200">
             {/* Dental Image */}
             <img 
               src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop" 
               alt="Modern bright dental clinic interior" 
               className="w-full h-[400px] md:h-[600px] object-cover"
             />
             
             {/* Glass Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent pointer-events-none"></div>

             {/* Floating Glass Card */}
             <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 glass-card p-6 rounded-3xl max-w-xs animate-fade-in-up">
                <div className="flex gap-1 mb-2 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-stone-800 font-serif text-lg leading-snug mb-2">"Pelayanan terbaik yang pernah saya rasakan."</p>
                <p className="text-stone-500 text-xs font-sans tracking-wide uppercase">— Pasien Bahagia</p>
             </div>
          </div>
          
          {/* Decorative blurred circle behind image */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-100/50 rounded-full blur-[80px] -z-10"></div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-stone-200/50 rounded-full blur-[80px] -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;