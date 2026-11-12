import React, { useState } from 'react';
import { 
  HeartHandshake, 
  MapPin, 
  Clock, 
  Phone, 
  ShieldCheck, 
  PlusCircle, 
  AlertCircle, 
  CheckCircle,
  Users,
  Flame,
  ArrowRight
} from 'lucide-react';

export default function NgoRequestBoard({ 
  requests, 
  onPledgeToRequest, 
  onAddNewRequest,
  activeRole 
}) {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [newReq, setNewReq] = useState({
    ngoName: 'Anbagam Shelter for Destitute',
    location: 'Shivajinagar, Bangalore',
    mealsNeeded: 60,
    category: 'Cooked Lunch / Dinner',
    dietaryPreference: 'Vegetarian wholesome meals',
    urgency: 'Needed Tonight by 8:00 PM',
    contactPerson: 'Kavitha R.',
    contactPhone: '+91 94480 88990',
    notes: 'Dinner required for 60 unhoused elderly residents.'
  });

  const handlePostRequest = (e) => {
    e.preventDefault();
    const created = {
      id: `REQ-${Math.floor(400 + Math.random() * 500)}`,
      ngoName: newReq.ngoName,
      ngoType: 'Community Shelter',
      location: newReq.location,
      mealsNeeded: Number(newReq.mealsNeeded) || 50,
      mealsFulfilled: 0,
      category: newReq.category,
      dietaryPreference: newReq.dietaryPreference,
      urgency: newReq.urgency,
      contactPerson: newReq.contactPerson,
      contactPhone: newReq.contactPhone,
      verified: true,
      notes: newReq.notes
    };
    onAddNewRequest(created);
    setShowRequestForm(false);
  };

  return (
    <section id="ngo-requests-section" className="py-16 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
              <span className="text-xs font-black tracking-widest uppercase text-amber-700">
                Verified Shelter Registry
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
              Urgent Hunger Relief Demands
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Direct meal requirements from verified orphanages, senior care homes, and transit shelters.
            </p>
          </div>

          <button
            onClick={() => setShowRequestForm(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/20 transition"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Post Shelter Meal Request</span>
          </button>
        </div>

        {/* Requests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {requests.map((req) => {
            const percent = Math.min(100, Math.round((req.mealsFulfilled / req.mealsNeeded) * 100));
            const isFullyFulfilled = req.mealsFulfilled >= req.mealsNeeded;

            return (
              <div
                key={req.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top line with Urgency */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold shrink-0">
                        <HeartHandshake className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-base text-slate-900">{req.ngoName}</h4>
                          {req.verified && <ShieldCheck className="w-4 h-4 text-emerald-600" title="Verified NGO" />}
                        </div>
                        <p className="text-xs text-slate-500">{req.ngoType} • {req.location}</p>
                      </div>
                    </div>

                    <span className={`text-[11px] font-black uppercase px-2.5 py-1 rounded-full shrink-0 ${
                      isFullyFulfilled 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {req.urgency}
                    </span>
                  </div>

                  {/* Note / Details */}
                  <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-4 leading-relaxed">
                    "{req.notes}"
                  </p>

                  {/* Requirements Attributes */}
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Target Meal Type</span>
                      <span className="font-semibold text-slate-800">{req.category}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Dietary Preference</span>
                      <span className="font-semibold text-slate-800">{req.dietaryPreference}</span>
                    </div>
                  </div>

                  {/* Fulfillment Progress Bar */}
                  <div className="space-y-1.5 mb-5">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-700">
                        {req.mealsFulfilled} of {req.mealsNeeded} Meals Fulfilled
                      </span>
                      <span className={`${isFullyFulfilled ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {percent}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isFullyFulfilled ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={`tel:${req.contactPhone}`}
                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>{req.contactPerson}</span>
                  </a>

                  {!isFullyFulfilled ? (
                    <button
                      onClick={() => onPledgeToRequest(req)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm transition"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Pledge Surplus Meals</span>
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Fulfilled for Today</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Posting New Shelter Request */}
        {showRequestForm && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 animate-fadeIn space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                  Post Shelter Food Requirement
                </h3>
                <button
                  onClick={() => setShowRequestForm(false)}
                  className="text-slate-400 hover:text-slate-600 p-1"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handlePostRequest} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReq.ngoName}
                    onChange={(e) => setNewReq({ ...newReq, ngoName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Location / Area *
                    </label>
                    <input
                      type="text"
                      required
                      value={newReq.location}
                      onChange={(e) => setNewReq({ ...newReq, location: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Meals Needed (Count) *
                    </label>
                    <input
                      type="number"
                      min="5"
                      required
                      value={newReq.mealsNeeded}
                      onChange={(e) => setNewReq({ ...newReq, mealsNeeded: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Details / Preferred Meals
                  </label>
                  <textarea
                    rows="2"
                    value={newReq.notes}
                    onChange={(e) => setNewReq({ ...newReq, notes: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      value={newReq.contactPerson}
                      onChange={(e) => setNewReq({ ...newReq, contactPerson: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={newReq.contactPhone}
                      onChange={(e) => setNewReq({ ...newReq, contactPhone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    />
                  </div>
                </div>

                <div className="pt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowRequestForm(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-md"
                  >
                    Publish Shelter Need
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

