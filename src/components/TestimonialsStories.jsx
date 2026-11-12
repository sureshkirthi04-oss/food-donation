import React from 'react';
import { Quote, Heart, Sparkles } from 'lucide-react';
import { IMPACT_STORIES } from '../data/mockData';

export default function TestimonialsStories() {
  return (
    <section className="py-16 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black tracking-widest uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Voices of Compassion
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-['Outfit']">
            Stories from the Food Rescue Frontline
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Real stories from the people who cook, transport, and share surplus meals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMPACT_STORIES.map((story, i) => (
            <div
              key={i}
              className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 relative group"
            >
              <Quote className="w-8 h-8 text-emerald-300 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                "{story.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <img
                  src={story.image}
                  alt={story.author}
                  className="w-11 h-11 rounded-full object-cover shadow-xs border border-emerald-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{story.author}</h4>
                  <p className="text-xs text-slate-500">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

