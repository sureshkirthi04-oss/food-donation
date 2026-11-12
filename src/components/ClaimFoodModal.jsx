import React, { useState } from 'react';
import { 
  X, 
  HeartHandshake, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Phone, 
  QrCode, 
  Download,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ClaimFoodModal({ isOpen, onClose, donation, onConfirmClaim }) {
  if (!isOpen || !donation) return null;

  const [ngoName, setNgoName] = useState('Hope Children Home & Care');
  const [transportMode, setTransportMode] = useState('volunteer'); // 'volunteer' or 'self'
  const [beneficiaries, setBeneficiaries] = useState(donation.servings || 50);
  const [estimatedArrival, setEstimatedArrival] = useState('Within 35 minutes');
  const [claimConfirmed, setClaimConfirmed] = useState(false);
  const [pickupCode, setPickupCode] = useState('');

  const verifiedNgos = [
    'Hope Children Home & Care (Wilson Garden)',
    'Karuna Old Age Sanctuary (Banaswadi)',
    'City Night Homeless Shelter (Majestic)',
    'Sparsha Slum Child Education Initiative (Ejipura)',
    'Robin Hood Community Kitchen (Koramangala)'
  ];

  const handleClaim = (e) => {
    e.preventDefault();
    const code = `PASS-${Math.floor(1000 + Math.random() * 9000)}`;
    setPickupCode(code);
    setClaimConfirmed(true);
    onConfirmClaim(donation.id, ngoName, code);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden animate-fadeIn my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-['Outfit']">
                  Claim Surplus Food
                </h3>
                <p className="text-xs text-amber-100">
                  Instant reservation for verified shelters & food relief kitchens
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
        </div>

        <div className="p-6">
          {!claimConfirmed ? (
            <form onSubmit={handleClaim} className="space-y-4">
              {/* Selected Donation Summary */}
              <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-200/80 flex items-start gap-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-xs">
                  <img src={donation.image} alt={donation.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                    {donation.category} • {donation.servings} Servings
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 truncate mt-1">
                    {donation.title}
                  </h4>
                  <p className="text-xs text-slate-600 truncate">
                    📍 {donation.location} ({donation.distance})
                  </p>
                </div>
              </div>

              {/* Form inputs */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Recipient Organization *
                </label>
                <select
                  value={ngoName}
                  onChange={(e) => setNgoName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                >
                  {verifiedNgos.map((ngo) => (
                    <option key={ngo} value={ngo}>{ngo}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Target Beneficiaries
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={donation.servings * 2}
                    value={beneficiaries}
                    onChange={(e) => setBeneficiaries(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Estimated Pickup Time
                  </label>
                  <select
                    value={estimatedArrival}
                    onChange={(e) => setEstimatedArrival(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option value="Within 20 minutes">Within 20 mins (Immediate)</option>
                    <option value="Within 35 minutes">Within 35 mins</option>
                    <option value="Within 1 hour">Within 1 hour</option>
                    <option value="Before 7:00 PM">Before 7:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Transport Logistics Choice */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Transportation & Dispatch Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTransportMode('volunteer')}
                    className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between ${
                      transportMode === 'volunteer'
                        ? 'border-emerald-500 bg-emerald-50/80 text-emerald-900 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Truck className={`w-5 h-5 mb-1 ${transportMode === 'volunteer' ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <div>
                      <p className="text-xs font-bold">Dispatch Courier</p>
                      <p className="text-[10px] text-slate-500">Free volunteer delivery</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTransportMode('self')}
                    className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between ${
                      transportMode === 'self'
                        ? 'border-amber-500 bg-amber-50/80 text-amber-900 ring-2 ring-amber-500/20'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <MapPin className={`w-5 h-5 mb-1 ${transportMode === 'self' ? 'text-amber-600' : 'text-slate-400'}`} />
                    <div>
                      <p className="text-xs font-bold">Self Pickup</p>
                      <p className="text-[10px] text-slate-500">NGO collects directly</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Safety notice */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>By claiming, you agree to inspect food packaging upon pickup and distribute promptly within safe consumption windows.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl font-bold text-sm bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg shadow-amber-600/20 transition flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Reservation & Generate Pass</span>
                </button>
              </div>
            </form>
          ) : (
            /* Digital Pickup Pass Screen */
            <div className="text-center py-4 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Food Reserved Successfully!
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 font-['Outfit']">
                  Digital Pickup Pass Generated
                </h3>
                <p className="text-xs text-slate-600">
                  Show this pass to the donor when picking up.
                </p>
              </div>

              {/* Pass Card with QR mockup */}
              <div className="bg-slate-900 text-white rounded-3xl p-5 text-left max-w-sm mx-auto shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-extrabold tracking-widest text-emerald-400">NOURISHLINK PASS</span>
                  <span className="text-slate-400 font-mono">{pickupCode}</span>
                </div>

                <div className="py-3 flex items-center gap-4">
                  {/* Simulated QR Code SVG */}
                  <div className="w-20 h-20 bg-white rounded-xl p-2 shrink-0 flex items-center justify-center">
                    <QrCode className="w-full h-full text-slate-900" />
                  </div>
                  <div className="text-xs space-y-1">
                    <p className="font-bold text-white text-sm truncate">{donation.title}</p>
                    <p className="text-slate-400 text-[11px]">{donation.servings} Servings ({donation.quantityKg} kg)</p>
                    <p className="text-emerald-300 font-semibold text-[11px]">Donor: {donation.donorName}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] space-y-1 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Pickup Location:</span>
                    <span className="font-medium text-white truncate max-w-[170px]">{donation.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Donor Contact:</span>
                    <span className="font-medium text-emerald-400">{donation.contactNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Mode:</span>
                    <span className="font-medium text-white">
                      {transportMode === 'volunteer' ? 'Free Volunteer Courier' : 'Self Pickup'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition"
                >
                  Done & Return to Feed
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

