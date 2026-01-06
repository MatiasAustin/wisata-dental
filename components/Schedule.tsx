import React from 'react';
import { DOCTORS } from '../constants';
import { Calendar, Clock } from 'lucide-react';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <span className="text-stone-500 text-xs font-bold tracking-widest uppercase mb-4 block">Tim Kami</span>
           <h2 className="text-4xl md:text-5xl font-serif font-normal text-stone-900 mb-6">Jadwal Praktik Dokter</h2>
           <p className="text-stone-600 font-light">
             Pilih waktu yang paling sesuai untuk Anda. Kami buka setiap hari untuk melayani kebutuhan gigi keluarga.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doctor) => (
            <div key={doctor.id} className="glass-card rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-stone-200/60 transition-all duration-300 group">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 bg-stone-200 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                  <img src={`https://picsum.photos/seed/${doctor.id}/200/200`} alt={doctor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-normal text-stone-900 mb-1">{doctor.name}</h3>
                  <p className="text-amber-600 text-xs font-bold uppercase tracking-wider">Dokter Gigi Umum</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {doctor.schedules.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm border-b border-stone-200/60 last:border-0 pb-3 last:pb-0">
                    <div className="flex items-center gap-3 text-stone-600 font-medium">
                      <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">
                         <Calendar size={14} className="text-stone-500" />
                      </div>
                      {schedule.day}
                    </div>
                    <div className="text-stone-800 font-semibold bg-white/80 px-4 py-1.5 rounded-full shadow-sm border border-stone-100">
                      {schedule.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;