import React from 'react';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Decorative */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-amber-50 to-stone-100 blur-[100px] -z-10 rounded-full opacity-60"></div>

      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-normal text-center text-stone-900 mb-16">Stories from Our Patients</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-stone-700 mb-8 text-lg font-light leading-relaxed font-serif italic">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-stone-200/50 pt-6">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 font-serif font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm tracking-wide">{review.name}</h4>
                  <p className="text-stone-400 text-xs font-sans mt-0.5">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;