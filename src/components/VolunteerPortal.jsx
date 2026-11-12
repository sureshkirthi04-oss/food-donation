import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Clock, 
  Award, 
  CheckCircle, 
  ShieldCheck, 
  Navigation, 
  Bike, 
  Flame, 
  Sparkles,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VolunteerPortal({ missions, onAcceptMission }) {
  const [activeMission, setActiveMission] = useState(null);
  const [missionStep, setMissionStep] = useState(0); // 0: not started, 1: heading to donor, 2: food collected, 3: delivered!
  const [volunteerKarma, setVolunteerKarma] = useState(640);

  const handleStartMission = (mission) => {
    setActiveMission(mission);
    setMissionStep(1);
  };

  const handleNextStep = () => {
    if (missionStep === 1) {
      setMissionStep(2); // Food collected
    } else if (missionStep === 2) {
      setMissionStep(3); // Delivered!
      setVolunteerKarma(prev => prev + (activeMission.rewardPoints || 200));
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  return (
    <section id="volunteer-section" className="py-16 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
              <span className="text-xs font-black tracking-widest uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Rescue Hero Dispatch Hub
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
              Volunteer Courier Missions
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Pick up food from banquets and cafes and drop it off at community shelters. Zero fees, maximum karma.
            </p>
          </div>

          {/* Volunteer Karma Badge */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-3 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Your Volunteer Karma</p>
              <p className="text-lg font-black text-slate-900">{volunteerKarma} Points • Silver Hero</p>
            </div>
          </div>
        </div>

        {/* Active In-Progress Mission Simulator Banner (if any) */}
        {activeMission && (
          <div className="mb-10 bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 animate-fadeIn relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-black tracking-wider uppercase text-emerald-400">
                  Active Rescue Mission in Progress: {activeMission.id}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400">
                Reward: +{activeMission.rewardPoints} Karma Pts
              </span>
            </div>

            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-4">
                <h3 className="text-xl font-bold font-['Outfit']">{activeMission.title}</h3>
                
                {/* Visual Step Tracker */}
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className={`p-3 rounded-xl border ${
                    missionStep >= 1 ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}>
                    <p className="font-bold">1. Heading to Donor</p>
                    <p className="text-[10px] opacity-80">{activeMission.from}</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${
                    missionStep >= 2 ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}>
                    <p className="font-bold">2. Food Picked Up</p>
                    <p className="text-[10px] opacity-80">Temp verified safe</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${
                    missionStep >= 3 ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}>
                    <p className="font-bold">3. Handed to Shelter</p>
                    <p className="text-[10px] opacity-80">{activeMission.to}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 text-center md:text-right">
                {missionStep === 1 && (
                  <button
                    onClick={handleNextStep}
                    className="w-full py-3 px-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg transition"
                  >
                    Confirm Food Picked Up &rarr;
                  </button>
                )}
                {missionStep === 2 && (
                  <button
                    onClick={handleNextStep}
                    className="w-full py-3 px-5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-lg transition"
                  >
                    Confirm Delivered to Shelter &rarr;
                  </button>
                )}
                {missionStep === 3 && (
                  <div className="space-y-2">
                    <div className="text-emerald-400 font-bold text-sm flex items-center justify-center gap-1.5">
                      <CheckCircle className="w-5 h-5" />
                      <span>Mission Completed!</span>
                    </div>
                    <button
                      onClick={() => setActiveMission(null)}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200"
                    >
                      Close & Take Another Mission
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Available Dispatch Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missions.map((mission) => {
            const isAssigned = mission.status === 'In-Transit';

            return (
              <div
                key={mission.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      {mission.badge}
                    </span>
                    <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      +{mission.rewardPoints} pts
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-base mb-3 leading-snug">
                    {mission.title}
                  </h4>

                  {/* Route Visual */}
                  <div className="space-y-2.5 text-xs text-slate-600 mb-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Pickup Point:</span>
                        <span className="font-semibold text-slate-800">{mission.from}</span>
                      </div>
                    </div>
                    <div className="border-l-2 border-dashed border-slate-300 ml-1 h-3" />
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-1 shrink-0" />
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Drop-off Destination:</span>
                        <span className="font-semibold text-slate-800">{mission.to}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payload & Distance Meta */}
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div className="p-2 rounded-xl bg-slate-50 text-slate-700">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Cargo</span>
                      <span className="font-bold truncate block">{mission.payload}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 text-slate-700">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Distance / ETA</span>
                      <span className="font-bold text-emerald-700">{mission.distance} ({mission.estimatedTime})</span>
                    </div>
                  </div>
                </div>

                {/* Accept Button */}
                <div className="pt-2">
                  {isAssigned ? (
                    <div className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-500 font-bold text-xs text-center">
                      Courier En Route (Assigned)
                    </div>
                  ) : (
                    <button
                      onClick={() => handleStartMission(mission)}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5"
                    >
                      <Bike className="w-4 h-4" />
                      <span>Accept Delivery Mission</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

