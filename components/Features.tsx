import React from 'react';
import { Heart, Star, Wallet, ShieldCheck } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="glass-card p-8 rounded-3xl hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 transform hover:-translate-y-1">
    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-stone-100 text-stone-800">
      {icon}
    </div>
    <h3 className="text-xl font-normal text-stone-900 mb-3 font-serif">{title}</h3>
    <p className="text-stone-600 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-stone-50/50 -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-normal text-stone-900 mb-6 font-serif leading-tight">
              Kenapa Memilih <br/> Wisata Dental?
            </h2>
            <p className="text-stone-600 text-lg font-light">
              Standar baru perawatan gigi keluarga yang mengutamakan kenyamanan dan hasil estetika terbaik.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Heart size={28} strokeWidth={1.5} />}
            title="Pelayanan Ramah"
            desc="Kami melayani dengan hati, memastikan Anda merasa seperti di rumah sendiri."
          />
          <FeatureCard 
            icon={<ShieldCheck size={28} strokeWidth={1.5} />}
            title="Dokter Profesional"
            desc="Tim dokter berpengalaman yang siap memberikan solusi terbaik untuk senyum Anda."
          />
          <FeatureCard 
            icon={<Wallet size={28} strokeWidth={1.5} />}
            title="Harga Transparan"
            desc="Tidak ada biaya tersembunyi. Promo menarik dan opsi cicilan tersedia."
          />
          <FeatureCard 
            icon={<Star size={28} strokeWidth={1.5} />}
            title="Kenyamanan Premium"
            desc="Ruang tunggu dan ruang periksa yang didesain estetik untuk ketenangan Anda."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;