import React from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  Utensils, 
  ShieldCheck, 
  Share2, 
  HeartHandshake, 
  Flame, 
  Thermometer, 
  CheckCircle,
  Building,
  Phone
} from 'lucide-react';

export default function DonationDetailModal({ isOpen, onClose, donation, onClaim }) {
  if (!isOpen || !donation) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden animate-fadeIn my-8">
        
        {/* Header Image */}
        <div className="relative h-64 w-full bg-slate-100">
          <img src={donation.image} alt={donation.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-black/20 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-600 text-white">
                {donation.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-md text-white">
                {donation.servings} Servings ({donation.quantityKg} kg)
              </span>
              {donation.urgency === 'urgent' && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase bg-rose-600 text-white animate-pulse">
                  Urgent: {donation.bestBeforeHours}h left
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold font-['Outfit'] drop-shadow-sm">
              {donation.title}
            </h2>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-5">
          
          {/* Donor Box */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-slate-900">{donation.donorName}</h4>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-xs text-slate-500">{donation.donorType} • Verified Donor</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              {donation.distance}
            </span>
          </div>

          {/* Description */}
          <div>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Food Description & Condition
            </h5>
            <p className="text-sm text-slate-700 leading-relaxed">
              {donation.description}
            </p>
          </div>

          {/* Key Attributes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Storage State</span>
              <span className="text-xs font-bold text-slate-800">{donation.temperature}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Prepared</span>
              <span className="text-xs font-bold text-slate-800">{donation.preparedTime}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Safe Window</span>
              <span className="text-xs font-bold text-emerald-700">{donation.bestBeforeHours} Hours Left</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Food Safety</span>
              <span className="text-xs font-bold text-emerald-700">100% Certified</span>
            </div>
          </div>

          {/* Dietary tags */}
          <div>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Dietary & Allergen Markers
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {donation.dietary.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Location details */}
          <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Pickup Address:</span>
            </div>
            <p className="pl-5 text-slate-700">{donation.location}</p>
          </div>

          {/* Footer Actions */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert("Share link copied to clipboard!");
              }}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs flex items-center gap-1.5 transition"
            >
              <Share2 className="w-4 h-4 text-slate-400" />
              <span>Share Alert</span>
            </button>

            {donation.status === 'Available' ? (
              <button
                onClick={() => {
                  onClose();
                  onClaim(donation);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Claim Food for Shelter</span>
              </button>
            ) : (
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-4 py-2 rounded-xl">
                Already Claimed
              </span>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

