import React from 'react';
import { 
  ShieldCheck, 
  Thermometer, 
  Clock, 
  PackageCheck, 
  AlertTriangle, 
  CheckCircle,
  FileText,
  Info
} from 'lucide-react';

export default function FoodSafetyGuide() {
  const rules = [
    {
      title: "The 4-Hour Cooked Window",
      desc: "Cooked food must be claimed and consumed within 4 hours if kept ambient, or rapidly chilled to under 4°C within 2 hours.",
      icon: Clock,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      title: "Temperature Chain Control",
      desc: "Keep hot foods steaming above 60°C and cold perishable items (dairy, salads) strictly below 4°C to halt bacterial growth.",
      icon: Thermometer,
      color: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      title: "Clean Packaging & Labeling",
      desc: "Surplus must be packed in clean food-grade foil, containers, or boxes, with preparation time and major allergen tags.",
      icon: PackageCheck,
      color: "text-amber-600 bg-amber-50 border-amber-200"
    },
    {
      title: "Good Samaritan Immunity",
      desc: "Under Good Samaritan provisions, donors and volunteers acting in good faith without negligence are 100% legally shielded.",
      icon: ShieldCheck,
      color: "text-teal-600 bg-teal-50 border-teal-200"
    }
  ];

  return (
    <section id="safety-section" className="py-16 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black tracking-widest uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            FSSAI & Hygiene Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-['Outfit']">
            Food Safety & Legal Protection Standards
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            We follow strict food safety procedures so donors give with confidence and beneficiaries receive fresh, dignified meals.
          </p>
        </div>

        {/* 4 Golden Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-4 ${rule.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 font-['Outfit']">
                    {rule.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Temperature Danger Zone Visual Bar */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="text-lg font-bold text-white font-['Outfit']">
                Temperature Safety Spectrum for Cooked Food
              </h4>
              <p className="text-xs text-slate-400">
                Bacteria multiplies fastest between 5°C and 60°C. Food must never sit in the Danger Zone.
              </p>
            </div>
            <span className="text-xs font-bold bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-slate-300">
              Standardized FSSAI Guidelines
            </span>
          </div>

          <div className="space-y-3">
            {/* Visual Bar */}
            <div className="h-6 rounded-full overflow-hidden flex text-[10px] font-black text-center shadow-inner">
              <div className="bg-blue-500 w-1/4 flex items-center justify-center text-white" title="Cold Chilled Safe Zone">
                &lt; 4°C SAFE COLD
              </div>
              <div className="bg-rose-500 w-2/4 flex items-center justify-center text-white animate-pulse" title="Bacterial Growth Danger Zone">
                ⚠️ 5°C to 60°C DANGER ZONE (Do not leave &gt; 2 hrs)
              </div>
              <div className="bg-amber-500 w-1/4 flex items-center justify-center text-slate-950 font-extrabold" title="Hot Insulated Safe Zone">
                &gt; 60°C SAFE HOT
              </div>
            </div>

            <div className="flex justify-between text-[11px] text-slate-400 font-semibold px-1">
              <span>0°C (Freezer/Fridge)</span>
              <span>25°C (Room Ambient)</span>
              <span>65°C+ (Fresh Buffet Steam)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

