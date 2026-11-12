import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Utensils, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Flame, 
  FileCheck,
  Building,
  Phone,
  Image as ImageIcon
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DonateWizardModal({ isOpen, onClose, onAddDonation }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Cooked Meals',
    servings: 50,
    quantityKg: 20,
    dietary: ['Pure Veg'],
    temperature: 'Hot Insulated Containers',
    preparedTime: '1 hour ago',
    bestBeforeHours: 4,
    donorName: 'Spice Garden Bistro',
    donorType: 'Restaurant & Banquet',
    location: 'Indiranagar 100ft Road, Bangalore',
    contactNumber: '+91 98450 67890',
    description: 'Freshly prepared vegetarian meal surplus from afternoon lunch buffet. Sealed in commercial grade warm containers.',
    imagePreset: 'biryani',
    hygieneCheck1: true,
    hygieneCheck2: true,
    hygieneCheck3: true,
    goodSamaritanCheck: true
  });

  const [submittedDonation, setSubmittedDonation] = useState(null);

  const imagePresets = {
    biryani: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80',
    thali: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80',
    bakery: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
    produce: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&auto=format&fit=crop&q=80',
    rations: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80',
    dairy: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=80'
  };

  const handleDietaryToggle = (item) => {
    if (formData.dietary.includes(item)) {
      setFormData({ ...formData, dietary: formData.dietary.filter(d => d !== item) });
    } else {
      setFormData({ ...formData, dietary: [...formData.dietary, item] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDonation = {
      id: `DON-${Math.floor(100 + Math.random() * 900)}`,
      title: formData.title || 'Nutritious Catered Meal Surplus',
      donorName: formData.donorName || 'Community Food Donor',
      donorType: formData.donorType,
      donorVerified: true,
      category: formData.category,
      servings: Number(formData.servings) || 40,
      quantityKg: Number(formData.quantityKg) || 15,
      dietary: formData.dietary.length ? formData.dietary : ['Pure Veg'],
      temperature: formData.temperature,
      preparedTime: formData.preparedTime,
      bestBeforeHours: Number(formData.bestBeforeHours) || 4,
      location: formData.location || 'Central City Hub',
      distance: '1.2 km away',
      coordinates: { x: 45, y: 50 },
      image: imagePresets[formData.imagePreset] || imagePresets.thali,
      description: formData.description,
      status: 'Available',
      urgency: formData.bestBeforeHours <= 4 ? 'urgent' : 'normal',
      claimedBy: null,
      contactNumber: formData.contactNumber,
      safetyPassed: true
    };

    onAddDonation(newDonation);
    setSubmittedDonation(newDonation);
    setStep(4);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden animate-fadeIn my-8">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-['Outfit']">
                  Donate Surplus Food
                </h3>
                <p className="text-xs text-emerald-100">
                  Instant smart rescue match for orphanages & shelters in your area
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Header (Only for Steps 1-3) */}
          {step < 4 && (
            <div className="mt-6 flex items-center justify-between text-xs font-semibold">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-white' : 'text-emerald-300'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step >= 1 ? 'bg-white text-emerald-700 font-bold' : 'bg-emerald-800'
                }`}>1</span>
                <span>Food Details</span>
              </div>
              <div className="w-8 h-0.5 bg-emerald-400/40" />
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-white' : 'text-emerald-300'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step >= 2 ? 'bg-white text-emerald-700 font-bold' : 'bg-emerald-800'
                }`}>2</span>
                <span>Pickup Info</span>
              </div>
              <div className="w-8 h-0.5 bg-emerald-400/40" />
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-white' : 'text-emerald-300'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step >= 3 ? 'bg-white text-emerald-700 font-bold' : 'bg-emerald-800'
                }`}>3</span>
                <span>Hygiene & Safety</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6">
          
          {/* STEP 1: FOOD DETAILS */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Food Title / Dish Description *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 50 Packets of Vegetable Pulao & Dal Tadka"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Food Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  >
                    <option value="Cooked Meals">Cooked Meals (Hot / Ready to Eat)</option>
                    <option value="Bakery & Pastries">Bakery & Pastries (Breads, Rolls)</option>
                    <option value="Fresh Produce">Fresh Produce (Fruits & Vegetables)</option>
                    <option value="Packaged Dry Rations">Packaged Dry Rations (Rice, Dal)</option>
                    <option value="Dairy & Beverages">Dairy & Beverages (Milk, Paneer)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Temperature State
                  </label>
                  <select
                    value={formData.temperature}
                    onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  >
                    <option value="Hot Insulated Containers">Hot Insulated (&gt;60°C)</option>
                    <option value="Refrigerated (Chilled)">Refrigerated (&lt;4°C)</option>
                    <option value="Ambient (Room Temp)">Ambient / Dry Storage</option>
                  </select>
                </div>
              </div>

              {/* Quantity */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Servings (People Fed) *
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="2000"
                    value={formData.servings}
                    onChange={(e) => setFormData({ ...formData, servings: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Approx Weight (kg)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={formData.quantityKg}
                    onChange={(e) => setFormData({ ...formData, quantityKg: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Best Before (Hours) *
                  </label>
                  <select
                    value={formData.bestBeforeHours}
                    onChange={(e) => setFormData({ ...formData, bestBeforeHours: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  >
                    <option value={2}>2 Hours (Urgent)</option>
                    <option value={4}>4 Hours (Standard Cooked)</option>
                    <option value={8}>8 Hours</option>
                    <option value={24}>24 Hours (Bakery/Produce)</option>
                    <option value={72}>3+ Days (Packaged)</option>
                  </select>
                </div>
              </div>

              {/* Dietary Tags */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Dietary Information
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Pure Veg', 'Vegan', 'Halal', 'Gluten-Free', 'Contains Dairy', 'Nut-Free'].map((diet) => {
                    const active = formData.dietary.includes(diet);
                    return (
                      <button
                        key={diet}
                        type="button"
                        onClick={() => handleDietaryToggle(diet)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
                          active
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {active && '✓ '} {diet}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Photo Preset Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Visual Food Type
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {Object.entries(imagePresets).map(([key, url]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setFormData({ ...formData, imagePreset: key })}
                      className={`relative rounded-xl overflow-hidden h-14 border-2 transition ${
                        formData.imagePreset === key
                          ? 'border-emerald-600 ring-2 ring-emerald-500/30'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={url} alt={key} className="w-full h-full object-cover" />
                      <span className="absolute inset-0 bg-black/40 flex items-center justify-center text-[10px] text-white font-bold capitalize">
                        {key}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition"
                >
                  <span>Next: Pickup Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PICKUP INFO */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Donor / Restaurant / Host Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Spice Garden Restaurant"
                    value={formData.donorName}
                    onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Donor Entity Type
                  </label>
                  <select
                    value={formData.donorType}
                    onChange={(e) => setFormData({ ...formData, donorType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  >
                    <option value="Restaurant & Cafe">Restaurant / Cafe</option>
                    <option value="Banquet & Caterer">Wedding / Banquet Caterer</option>
                    <option value="Corporate Cafeteria">Corporate Canteen</option>
                    <option value="Supermarket / Grocery">Supermarket / Grocery</option>
                    <option value="Bakery">Bakery / Confectionery</option>
                    <option value="Individual / Household">Individual / Household</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Pickup Address & Landmark *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. #14, 100ft Road, Near Metro Pillar 42, Indiranagar"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Special Pickup Notes / Packaging condition
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Come to back gate / kitchen dispatch area. We have provided foil containers."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition"
                >
                  <span>Next: Safety Declaration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: HYGIENE & SAFETY CHECKLIST */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-900">
                    FSSAI & Good Samaritan Act Compliance
                  </h4>
                  <p className="text-xs text-emerald-700 mt-0.5 leading-relaxed">
                    Under Section 10A of the Good Samaritan Food Donation provisions, genuine donors donating surplus food in good faith bear zero legal liability. Please confirm basic hygiene:
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={formData.hygieneCheck1}
                    onChange={(e) => setFormData({ ...formData, hygieneCheck1: e.target.checked })}
                    className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                  <div className="text-xs">
                    <strong className="text-slate-800">Fresh & Untouched Surplus</strong>
                    <p className="text-slate-500">The food is untouched surplus, cooked within the past 4 hours in a clean, certified kitchen.</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={formData.hygieneCheck2}
                    onChange={(e) => setFormData({ ...formData, hygieneCheck2: e.target.checked })}
                    className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                  <div className="text-xs">
                    <strong className="text-slate-800">Sealed & Food-Grade Packaging</strong>
                    <p className="text-slate-500">The food is safely packed in clean, food-safe containers to avoid contamination during dispatch.</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={formData.hygieneCheck3}
                    onChange={(e) => setFormData({ ...formData, hygieneCheck3: e.target.checked })}
                    className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                  <div className="text-xs">
                    <strong className="text-slate-800">Safe Temperature Retention</strong>
                    <p className="text-slate-500">Maintained above 60°C (if hot) or chilled below 5°C to preserve bacteriological safety.</p>
                  </div>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!formData.hygieneCheck1 || !formData.hygieneCheck2}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-600/30 transition disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Publish Donation & Notify Shelters</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: SUCCESS CONFIRMATION */}
          {step === 4 && submittedDonation && (
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Donation Successfully Published!
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2 font-['Outfit']">
                  Thank You for Rescuing Food!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                  Your donation of <strong>{submittedDonation.servings} servings</strong> is now live. We have broadcasted an alert to 4 verified shelters and volunteer couriers within 5 km.
                </p>
              </div>

              {/* Digital Tax Exemption & Rescue Receipt Card */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 font-bold">
                  <span className="text-slate-800">Rescue ID: {submittedDonation.id}</span>
                  <span className="text-emerald-700">Status: Active Broadcaster</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Donor:</span>
                  <span className="font-semibold text-slate-800">{submittedDonation.donorName}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Meals Rescued:</span>
                  <span className="font-semibold text-emerald-700">{submittedDonation.servings} Servings</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>CO₂ Emission Prevented:</span>
                  <span className="font-semibold text-teal-700">~{(submittedDonation.servings * 2.5).toFixed(1)} kg CO₂</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>80G CSR Exemption:</span>
                  <span className="font-semibold text-blue-700">Eligible (Receipt #NL-{Math.floor(10000 + Math.random()*90000)})</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition"
                >
                  View on Live Feed
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

