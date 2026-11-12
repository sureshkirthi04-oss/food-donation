import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Medal, 
  Building, 
  Bike, 
  Star, 
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import { LEADERBOARD_DONORS, VOLUNTEER_CHAMPIONS } from '../data/mockData';

export default function LeaderboardSection() {
  const [activeTab, setActiveTab] = useState('donors'); // donors or volunteers

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-black tracking-widest uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Community Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-['Outfit']">
              Food Rescue Champions & Donors
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Honoring the businesses and volunteer riders creating real change every single day.
            </p>
          </div>

          {/* Toggle */}
          <div className="bg-white p-1 rounded-2xl border border-slate-200 flex items-center text-xs font-bold shadow-xs">
            <button
              onClick={() => setActiveTab('donors')}
              className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 ${
                activeTab === 'donors'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>Top Donors</span>
            </button>
            <button
              onClick={() => setActiveTab('volunteers')}
              className={`px-4 py-2 rounded-xl transition flex items-center gap-1.5 ${
                activeTab === 'volunteers'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>Hero Couriers</span>
            </button>
          </div>
        </div>

        {/* Leaderboard Table / Cards */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          {activeTab === 'donors' ? (
            <div className="space-y-3">
              <div className="hidden sm:grid grid-cols-12 text-xs font-bold text-slate-400 uppercase tracking-wider px-4 pb-2 border-b border-slate-100">
                <span className="col-span-1">Rank</span>
                <span className="col-span-5">Donor / Organization</span>
                <span className="col-span-3">Impact Title</span>
                <span className="col-span-3 text-right">Meals Rescued</span>
              </div>

              {LEADERBOARD_DONORS.map((donor, idx) => (
                <div
                  key={donor.rank}
                  className={`flex flex-col sm:grid sm:grid-cols-12 items-start sm:items-center p-4 rounded-2xl border transition ${
                    idx === 0 
                      ? 'bg-amber-50/40 border-amber-200' 
                      : 'bg-slate-50/50 border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  <div className="sm:col-span-1 flex items-center gap-2 mb-2 sm:mb-0">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs ${
                      donor.rank === 1 ? 'bg-amber-400 text-slate-900 shadow-sm' :
                      donor.rank === 2 ? 'bg-slate-300 text-slate-900' :
                      donor.rank === 3 ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {donor.rank === 1 ? '🥇' : donor.rank === 2 ? '🥈' : donor.rank === 3 ? '🥉' : donor.rank}
                    </span>
                  </div>

                  <div className="sm:col-span-5 mb-1 sm:mb-0">
                    <p className="font-bold text-slate-900 text-sm">{donor.name}</p>
                    <p className="text-xs text-slate-400">{donor.city}</p>
                  </div>

                  <div className="sm:col-span-3 mb-2 sm:mb-0">
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                      ★ {donor.badge}
                    </span>
                  </div>

                  <div className="sm:col-span-3 sm:text-right w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end">
                    <span className="text-base font-black text-emerald-700 font-['Outfit']">
                      {donor.meals.toLocaleString()} Meals
                    </span>
                    <span className="text-[10px] text-slate-400">Certified Zero-Waste</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              <div className="hidden sm:grid grid-cols-12 text-xs font-bold text-slate-400 uppercase tracking-wider px-4 pb-2 border-b border-slate-100">
                <span className="col-span-1">Rank</span>
                <span className="col-span-5">Hero Courier</span>
                <span className="col-span-3">Badge Honor</span>
                <span className="col-span-3 text-right">Missions Completed</span>
              </div>

              {VOLUNTEER_CHAMPIONS.map((vol) => (
                <div
                  key={vol.rank}
                  className="flex flex-col sm:grid sm:grid-cols-12 items-start sm:items-center p-4 rounded-2xl border bg-slate-50/50 border-slate-100 hover:bg-slate-50 transition"
                >
                  <div className="sm:col-span-1 mb-2 sm:mb-0">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs ${
                      vol.rank === 1 ? 'bg-amber-400 text-slate-900' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {vol.rank}
                    </span>
                  </div>

                  <div className="sm:col-span-5 mb-1 sm:mb-0">
                    <p className="font-bold text-slate-900 text-sm">{vol.name}</p>
                    <p className="text-xs text-slate-400">{vol.hours} Active Volunteer Hours</p>
                  </div>

                  <div className="sm:col-span-3 mb-2 sm:mb-0">
                    <span className="text-[11px] font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                      🚴 {vol.badge}
                    </span>
                  </div>

                  <div className="sm:col-span-3 sm:text-right w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end">
                    <span className="text-base font-black text-blue-700 font-['Outfit']">
                      {vol.trips} Rescue Trips
                    </span>
                    <span className="text-[10px] text-slate-400">100% On-Time Delivery</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

