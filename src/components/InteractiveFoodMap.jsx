import React, { useState } from 'react';
import { 
  MapPin, 
  Utensils, 
  HeartHandshake, 
  Truck, 
  Layers, 
  Navigation, 
  Compass, 
  Info,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function InteractiveFoodMap({ donations, onClaim, onSelectDonation }) {
  const [filterType, setFilterType] = useState('all'); // all, food, shelters, couriers
  const [selectedPin, setSelectedPin] = useState(null);

  // Map nodes
  const shelterNodes = [
    { id: 'SH-1', name: 'Hope Children Home', type: 'shelter', x: 28, y: 35, mealsNeeded: 85, location: 'Wilson Garden', urgency: 'High' },
    { id: 'SH-2', name: 'Karuna Old Age Sanctuary', type: 'shelter', x: 72, y: 25, mealsNeeded: 50, location: 'Banaswadi', urgency: 'Medium' },
    { id: 'SH-3', name: 'City Night Shelter', type: 'shelter', x: 48, y: 58, mealsNeeded: 140, location: 'Majestic Central', urgency: 'Critical' },
    { id: 'SH-4', name: 'Sparsha Child Learning', type: 'shelter', x: 80, y: 70, mealsNeeded: 110, location: 'Ejipura', urgency: 'Medium' }
  ];

  const courierNodes = [
    { id: 'CR-1', name: 'Arjun N. (Electric Scooter)', type: 'courier', x: 34, y: 40, payload: '65 Biryani Packets', eta: '12m away' },
    { id: 'CR-2', name: 'Pooja V. (Cargo Bike)', type: 'courier', x: 58, y: 50, payload: '45 Bread Loaves', eta: '18m away' }
  ];

  const foodPins = donations.map((d, index) => ({
    id: d.id,
    type: 'food',
    name: d.title,
    donor: d.donorName,
    servings: d.servings,
    x: d.coordinates ? d.coordinates.x : 30 + (index * 12) % 60,
    y: d.coordinates ? d.coordinates.y : 25 + (index * 14) % 60,
    urgency: d.urgency,
    raw: d
  }));

  const allPins = [
    ...(filterType === 'all' || filterType === 'food' ? foodPins : []),
    ...(filterType === 'all' || filterType === 'shelters' ? shelterNodes : []),
    ...(filterType === 'all' || filterType === 'couriers' ? courierNodes : [])
  ];

  return (
    <section id="interactive-map-section" className="py-16 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-black tracking-widest uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Geographic Rescue Dispatch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-['Outfit']">
              Live Hyperlocal Food Map
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Real-time map of surplus food pickup nodes, shelters awaiting meals, and active volunteer couriers.
            </p>
          </div>

          {/* Layer Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold overflow-x-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-xl transition ${
                filterType === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Activity
            </button>
            <button
              onClick={() => setFilterType('food')}
              className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                filterType === 'food' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Surplus Food ({foodPins.length})</span>
            </button>
            <button
              onClick={() => setFilterType('shelters')}
              className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                filterType === 'shelters' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Shelters Needing Food ({shelterNodes.length})</span>
            </button>
            <button
              onClick={() => setFilterType('couriers')}
              className={`px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                filterType === 'couriers' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Live Couriers ({courierNodes.length})</span>
            </button>
          </div>
        </div>

        {/* Map Container Canvas */}
        <div className="relative w-full h-[540px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-950">
          
          {/* Simulated Dark Mode City Map Grid & Roads SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Arterial Highway curves */}
            <path d="M 0 140 Q 250 180 500 280 T 1200 420" fill="none" stroke="#10b981" strokeWidth="2.5" opacity="0.3" />
            <path d="M 200 0 Q 380 260 620 480 T 900 600" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.25" />
            <path d="M 0 460 Q 400 320 800 240 T 1200 120" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.25" />
            {/* Transit Route Connector between Donor 1 and Shelter 1 */}
            <line x1="38%" y1="44%" x2="28%" y2="35%" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6,6" opacity="0.8">
              <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.2s" repeatCount="indefinite" />
            </line>
          </svg>

          {/* Waterway accent graphic */}
          <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full bg-teal-900/20 blur-3xl pointer-events-none" />

          {/* Compass and Radar Watermark */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-slate-300 text-xs font-semibold">
            <Compass className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '20s' }} />
            <span>Bangalore Metro Central Sector • Live Radar (5 km radius)</span>
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-4 bg-slate-900/85 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-800 text-[11px] text-white">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" />
              <span>Surplus Food Ready</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500 shadow-sm" />
              <span>Shelter Need</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-blue-500 shadow-sm" />
              <span>Volunteer Courier</span>
            </div>
          </div>

          {/* Map Interactive Pins */}
          {allPins.map((pin) => {
            const isFood = pin.type === 'food';
            const isShelter = pin.type === 'shelter';
            const isCourier = pin.type === 'courier';
            const isSelected = selectedPin && selectedPin.id === pin.id;

            return (
              <div
                key={pin.id}
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                onClick={() => setSelectedPin(pin)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
              >
                {/* Ping wave */}
                <span className={`absolute -inset-2 rounded-full opacity-70 animate-ping ${
                  isFood ? 'bg-emerald-500' : isShelter ? 'bg-amber-500' : 'bg-blue-500'
                }`} />

                {/* Pin Button */}
                <div className={`relative p-2 rounded-2xl shadow-xl flex items-center justify-center transition-transform group-hover:scale-125 ${
                  isSelected ? 'ring-4 ring-white scale-125' : ''
                } ${
                  isFood 
                    ? 'bg-emerald-500 text-white' 
                    : isShelter 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-blue-500 text-white'
                }`}>
                  {isFood && <Utensils className="w-4 h-4" />}
                  {isShelter && <HeartHandshake className="w-4 h-4" />}
                  {isCourier && <Truck className="w-4 h-4" />}
                </div>

                {/* Floating pill label on hover */}
                <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700 shadow-md">
                  {pin.name}
                </div>
              </div>
            );
          })}

          {/* Selected Pin Details Overlay Card */}
          {selectedPin && (
            <div className="absolute top-4 right-4 z-30 max-w-xs w-full bg-slate-900/95 backdrop-blur-xl rounded-3xl p-5 border border-slate-700 text-white shadow-2xl animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                  selectedPin.type === 'food' 
                    ? 'bg-emerald-500 text-slate-950 font-bold' 
                    : selectedPin.type === 'shelter'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-blue-500 text-white font-bold'
                }`}>
                  {selectedPin.type === 'food' ? 'Food Donation Node' : selectedPin.type === 'shelter' ? 'Shelter Need' : 'Courier in Transit'}
                </span>
                <button
                  onClick={() => setSelectedPin(null)}
                  className="text-slate-400 hover:text-white text-xs p-1"
                >
                  ✕
                </button>
              </div>

              <div className="py-3 space-y-2">
                <h4 className="text-base font-bold font-['Outfit']">
                  {selectedPin.name}
                </h4>

                {selectedPin.type === 'food' && (
                  <div className="text-xs space-y-1 text-slate-300">
                    <p className="text-emerald-400 font-semibold">{selectedPin.donor}</p>
                    <p>Servings: <strong>{selectedPin.servings} people</strong></p>
                    <p>Status: <span className="text-emerald-300">Available for immediate pickup</span></p>
                  </div>
                )}

                {selectedPin.type === 'shelter' && (
                  <div className="text-xs space-y-1 text-slate-300">
                    <p>Location: <strong>{selectedPin.location}</strong></p>
                    <p>Urgent Need: <strong className="text-amber-400">{selectedPin.mealsNeeded} Meals</strong></p>
                    <p>Urgency Level: <span className="text-rose-400 font-bold">{selectedPin.urgency}</span></p>
                  </div>
                )}

                {selectedPin.type === 'courier' && (
                  <div className="text-xs space-y-1 text-slate-300">
                    <p>Payload: <strong>{selectedPin.payload}</strong></p>
                    <p>Estimated Arrival: <span className="text-blue-400 font-bold">{selectedPin.eta}</span></p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="pt-2 border-t border-slate-800">
                {selectedPin.type === 'food' && selectedPin.raw && (
                  <button
                    onClick={() => {
                      onClaim(selectedPin.raw);
                    }}
                    className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <HeartHandshake className="w-4 h-4" />
                    <span>Claim This Food Now</span>
                  </button>
                )}
                {selectedPin.type === 'shelter' && (
                  <button
                    onClick={() => {
                      const el = document.getElementById('ngo-requests-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>View Shelter Needs &rarr;</span>
                  </button>
                )}
                {selectedPin.type === 'courier' && (
                  <div className="text-center text-[11px] text-slate-400 py-1">
                    Courier GPS Tracking is Active (Refreshed every 10s)
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

