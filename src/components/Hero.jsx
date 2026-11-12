import React from 'react';
import { 
  HeartHandshake, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Users, 
  Leaf, 
  Sparkles,
  Truck,
  CheckCircle2,
  Flame
} from 'lucide-react';

export default function Hero({ onOpenDonate, onExploreFood, onExploreShelters, onOpenVolunteer }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-200/30 to-amber-200/20 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-200/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission, Headings & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Urgent Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold tracking-wide shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>1.3 BILLION TONS OF FOOD IS WASTED YEARLY WHILE MILLIONS GO TO BED HUNGRY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Turn Surplus Food into <br className="hidden sm:inline" />
              <span className="gradient-text">Nutritious Smiles,</span> <br className="hidden sm:inline" />
              Not Landfill Waste.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong>NourishLink</strong> instantly bridges restaurants, banquet halls, and grocery donors with verified local shelters, orphanages, and community kitchens. Fresh food dispatched within <strong>45 minutes</strong> with real-time temperature and safety tracking.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenDonate}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>Donate Surplus Food Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreFood}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-base text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-sm hover:shadow transition"
              >
                <span>Find Free Food for NGO</span>
              </button>

              <button
                onClick={onOpenVolunteer}
                className="w-full sm:w-auto text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 px-2 py-2"
              >
                Deliver as Volunteer &rarr;
              </button>
            </div>

            {/* Trust and Compliance Badges */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Good Samaritan Legal Immunity</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>FSSAI Hygiene Verified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>100% Tax Deductible (80G)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Activity Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Glow backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-amber-500 opacity-20 blur-xl"></div>
              
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-5">
                
                {/* Card Header with Live Indicator */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-black tracking-wider uppercase text-emerald-700">
                      Live Food Dispatch Feed
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">Updated 2m ago</span>
                </div>

                {/* Sample Rescue Card in Transit */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50/40 rounded-2xl p-4 border border-emerald-100 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-emerald-600 text-white">
                        In Transit • 12 Mins Away
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-1">
                        65 Meals: Hot Veg Biryani & Salan
                      </h4>
                      <p className="text-xs text-slate-500">Royal Feast Banquets &rarr; Hope Children Home</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl overflow-hidden shadow-xs shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&auto=format&fit=crop&q=80" 
                        alt="Hot food" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Route Visualizer */}
                  <div className="bg-white/80 rounded-xl p-2.5 text-xs text-slate-600 space-y-2 border border-emerald-100">
                    <div className="flex items-center justify-between font-medium">
                      <span className="flex items-center gap-1 text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Koramangala
                      </span>
                      <span className="text-emerald-700 font-bold">1.8 km (12 mins)</span>
                      <span className="flex items-center gap-1 text-slate-700">
                        <HeartHandshake className="w-3.5 h-3.5 text-amber-600" /> Wilson Garden
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full w-2/3 animate-pulse" />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Courier: Arjun N. (Electric Bike)</span>
                      <span className="text-emerald-700 font-semibold">Temp: 64°C Safe</span>
                    </div>
                  </div>
                </div>

                {/* Instant Impact summary pill */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-2xl font-black text-emerald-600 font-['Outfit']">148,920+</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Meals Provided</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <p className="text-2xl font-black text-amber-600 font-['Outfit']">372,300 kg</p>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">CO₂ Offset</p>
                  </div>
                </div>

                {/* Hot hunger alert callout */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                  <Flame className="w-5 h-5 text-amber-600 shrink-0" />
                  <div className="flex-1">
                    <span className="font-bold">City Night Shelter</span> needs 40 dinner packets tonight.
                  </div>
                  <button 
                    onClick={onExploreShelters}
                    className="font-bold text-amber-800 underline text-xs shrink-0 hover:text-amber-950"
                  >
                    View Need
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

