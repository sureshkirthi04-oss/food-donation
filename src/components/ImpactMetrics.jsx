import React from 'react';
import { 
  Utensils, 
  Leaf, 
  Droplets, 
  Building2, 
  Users, 
  Bike, 
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export default function ImpactMetrics({ metrics }) {
  const statCards = [
    {
      label: "Meals Rescued & Served",
      value: metrics.totalMealsRescued.toLocaleString() + "+",
      sub: "Nutritious plates directly into plates, not bins",
      icon: Utensils,
      bg: "bg-emerald-500",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-700"
    },
    {
      label: "CO₂ Emissions Prevented",
      value: (metrics.co2PreventedKg / 1000).toFixed(1) + " Tons",
      sub: "Methane & greenhouse gases diverted from landfills",
      icon: Leaf,
      bg: "bg-teal-500",
      lightBg: "bg-teal-50",
      textColor: "text-teal-700"
    },
    {
      label: "Fresh Water Conserved",
      value: (metrics.waterSavedLiters / 100000).toFixed(1) + "M Liters",
      sub: "Virtual water embedded in food production saved",
      icon: Droplets,
      bg: "bg-blue-500",
      lightBg: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      label: "Verified Shelters & NGOs",
      value: metrics.verifiedNGOs.toString(),
      sub: "Orphanages, old age homes, and community kitchens",
      icon: Building2,
      bg: "bg-amber-500",
      lightBg: "bg-amber-50",
      textColor: "text-amber-700"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "List Surplus in 60s",
      desc: "Restaurants, caterers, or grocery stores upload surplus meal count, dietary tags, and pickup window.",
      icon: Clock,
      color: "border-emerald-500 text-emerald-600 bg-emerald-50"
    },
    {
      step: "02",
      title: "Instant Smart Match",
      desc: "Our automated dispatch notifies verified orphanages and nearest volunteer couriers within a 5 km radius.",
      icon: Sparkles,
      color: "border-teal-500 text-teal-600 bg-teal-50"
    },
    {
      step: "03",
      title: "Safe Pickup & Delivery",
      desc: "Food temperature is checked, packaged hygienically, and delivered to hungry individuals in under 45 mins.",
      icon: Bike,
      color: "border-amber-500 text-amber-600 bg-amber-50"
    },
    {
      step: "04",
      title: "Tax Exemption & Proof",
      desc: "Donors receive instant 80G tax benefit certificate, photo proof of delivery, and verified carbon offset ledger.",
      icon: ShieldCheck,
      color: "border-blue-500 text-blue-600 bg-blue-50"
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black tracking-wider uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Collective Community Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-['Outfit']">
            Measurable Change with Every Meal Rescued
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Every plate of food saved from the trash reduces carbon emissions and satisfies the hunger of someone in need.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {statCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="relative bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <div className={`w-12 h-12 rounded-2xl ${card.lightBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${card.textColor}`} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 font-['Outfit']">
                  {card.value}
                </h3>
                <p className="text-sm font-bold text-slate-800 mt-1">
                  {card.label}
                </p>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {card.sub}
                </p>
                {/* Accent line on bottom */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${card.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            );
          })}
        </div>

        {/* How It Works Flow */}
        <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Simple & Rapid Workflow
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              How Food Goes from Surplus to Table in 45 Mins
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, i) => {
              const StepIcon = st.icon;
              return (
                <div key={i} className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-slate-300 font-['Outfit']">
                        {st.step}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${st.color}`}>
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {st.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

