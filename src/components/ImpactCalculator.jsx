import React, { useState } from 'react';
import { 
  Calculator, 
  Utensils, 
  Leaf, 
  Droplets, 
  Coins, 
  Sparkles, 
  ArrowRight,
  Building
} from 'lucide-react';

export default function ImpactCalculator({ onOpenDonate }) {
  const [mealCount, setMealCount] = useState(150);

  // Formulas
  // 1 meal ≈ 0.4 kg of food
  // Diverting 1 kg of food waste saves ≈ 2.5 kg CO2e
  // 1 meal saves ≈ 240 liters of embedded virtual water
  // Estimated fair value ≈ ₹50 per meal for 80G CSR deduction
  const co2SavedKg = Math.round(mealCount * 0.4 * 2.5);
  const waterSavedLiters = Math.round(mealCount * 240);
  const foodWeightKg = Math.round(mealCount * 0.4);
  const csrTaxValue = mealCount * 45;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-emerald-50/40 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Slider */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black tracking-widest uppercase text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-300">
              Interactive Impact Estimator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
              Calculate Your Food Rescue Footprint
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are an individual hosting a banquet, a cafeteria manager, or a restaurant owner, see how much positive environmental and social impact your surplus can create.
            </p>

            {/* Slider Control Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Surplus Meals per Event or Month
                </label>
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-xl font-black text-lg border border-emerald-200">
                  <Utensils className="w-4 h-4 text-emerald-600" />
                  <span>{mealCount} Meals</span>
                </div>
              </div>

              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={mealCount}
                onChange={(e) => setMealCount(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />

              <div className="flex justify-between text-[11px] font-bold text-slate-400">
                <span>Small Cafe (20)</span>
                <span>Banquet Hall (300)</span>
                <span>Mega Corporate Hub (1,000+)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenDonate}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition"
              >
                <span>Schedule a Food Rescue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Calculated Impact Badges */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Utensils className="w-5 h-5" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
                  {mealCount}
                </p>
                <p className="text-xs font-bold text-slate-700">Hungry People Fed</p>
                <p className="text-[11px] text-slate-400">Direct nutritional security provided to children and seniors.</p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  <Leaf className="w-5 h-5" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-teal-600 font-['Outfit']">
                  {co2SavedKg} kg
                </p>
                <p className="text-xs font-bold text-slate-700">CO₂e Methane Diverted</p>
                <p className="text-[11px] text-slate-400">Prevents dangerous decomposition gases from municipal landfills.</p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Droplets className="w-5 h-5" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-blue-600 font-['Outfit']">
                  {(waterSavedLiters / 1000).toFixed(0)}k Liters
                </p>
                <p className="text-xs font-bold text-slate-700">Virtual Water Saved</p>
                <p className="text-[11px] text-slate-400">Irrigation & processing water embedded in the saved food.</p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Coins className="w-5 h-5" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-amber-600 font-['Outfit']">
                  ₹{csrTaxValue.toLocaleString()}
                </p>
                <p className="text-xs font-bold text-slate-700">80G CSR Valuation</p>
                <p className="text-[11px] text-slate-400">Official charitable contribution receipt for business accounts.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

