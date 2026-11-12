import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Send,
  CheckCircle2
} from 'lucide-react';

export default function Footer({ onOpenDonate, onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    onShowToast({
      type: 'success',
      title: 'Subscribed to Food Alerts!',
      message: `We will send surplus notifications to ${email}`
    });
    setEmail('');
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-lg">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white font-['Outfit']">
                Nourish<span className="text-emerald-500">Link</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              India's real-time community surplus food rescue network. Connecting banquet halls, restaurants, canteens, and households with verified local shelters and community kitchens in under 45 minutes.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-lg">
                🇺🇳 UN SDG 2: Zero Hunger
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/60 border border-teal-800/80 px-2.5 py-1 rounded-lg">
                🇺🇳 UN SDG 12: Zero Waste
              </span>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Platform
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li><a href="#available-food-section" className="hover:text-emerald-400 transition">Available Food Feed</a></li>
              <li><a href="#interactive-map-section" className="hover:text-emerald-400 transition">Live Radar Map</a></li>
              <li><a href="#ngo-requests-section" className="hover:text-emerald-400 transition">Shelter Food Needs</a></li>
              <li><a href="#volunteer-section" className="hover:text-emerald-400 transition">Volunteer Courier Hub</a></li>
              <li><a href="#safety-section" className="hover:text-emerald-400 transition">Safety & Hygiene Guide</a></li>
            </ul>
          </div>

          {/* Legal & Compliance (Col 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Legal & Trust
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li><span className="text-emerald-400 font-semibold">Good Samaritan Act</span></li>
              <li><span>FSSAI Hygiene Standards</span></li>
              <li><span>80G CSR Tax Receipts</span></li>
              <li><span>Privacy & Ethics Policy</span></li>
              <li><span>NGO Verification Process</span></li>
            </ul>
          </div>

          {/* Newsletter / Food Rescue Alerts (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Surplus Hunger Alerts
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe for local surplus alerts when bulk meals need immediate distribution.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md transition flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Join</span>
              </button>
            </form>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 text-xs">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-400">Emergency Food Distress Helpline</p>
                <p className="font-bold text-white">1800-NOURISH (1800-233-4455)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} NourishLink Initiative. Built with compassion to end urban hunger.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Good Faith Donation Protection Guaranteed</span>
            <span>•</span>
            <span>Zero Platform Fees</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

