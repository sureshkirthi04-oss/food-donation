import React, { useState } from 'react';
import { 
  HeartHandshake, 
  PlusCircle, 
  PhoneCall, 
  UserCheck, 
  Menu, 
  X, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  TrendingUp,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function Navbar({ 
  activeRole, 
  setActiveRole, 
  onOpenDonate, 
  activeTab, 
  setActiveTab 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const roles = [
    { id: 'all', label: 'All Roles (Overview)', icon: Sparkles, color: 'text-emerald-600' },
    { id: 'donor', label: 'Food Donor (Restaurants/Caterers)', icon: PlusCircle, color: 'text-emerald-600' },
    { id: 'ngo', label: 'NGO / Shelter (Receive Food)', icon: HeartHandshake, color: 'text-amber-600' },
    { id: 'volunteer', label: 'Volunteer Courier (Logistics)', icon: Truck, color: 'text-blue-600' }
  ];

  const currentRole = roles.find(r => r.id === activeRole) || roles[0];

  const navLinks = [
    { id: 'feed', label: 'Available Food', icon: HeartHandshake },
    { id: 'map', label: 'Live Rescue Map', icon: MapPin },
    { id: 'requests', label: 'Shelter Needs', icon: ShieldCheck },
    { id: 'volunteer', label: 'Volunteer Hub', icon: Truck },
    { id: 'impact', label: 'Impact & Safety', icon: TrendingUp },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top emergency announcement bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-900 uppercase tracking-wider animate-pulse">
              Live Network
            </span>
            <span>Over <strong>1,420 kg</strong> of fresh surplus food rescued in the last 24 hours.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium">
            <a href="tel:18002334455" className="flex items-center gap-1.5 hover:text-amber-300 transition">
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>Emergency Hunger Helpline: <strong>1800-NOURISH</strong> (24x7)</span>
            </a>
            <span className="hidden md:inline text-emerald-300">•</span>
            <span className="hidden md:inline text-emerald-200">Good Samaritan Law Protected</span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('feed')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-300">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900 font-['Outfit']">
                  Nourish<span className="text-emerald-600">Link</span>
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <p className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase">
                Zero Food Waste • Zero Hunger
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Actions & Role Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Demo Role Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200/80 text-slate-700 rounded-lg border border-slate-200 transition"
                title="Switch demo persona to test different user journeys"
              >
                <currentRole.icon className={`w-3.5 h-3.5 ${currentRole.color}`} />
                <span className="max-w-[130px] truncate">{currentRole.label.split(' (')[0]}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50 animate-fadeIn"
                  onMouseLeave={() => setRoleDropdownOpen(false)}
                >
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Switch Active Persona
                    </p>
                    <p className="text-xs text-slate-500">
                      Explore the platform as a donor, shelter, or volunteer courier.
                    </p>
                  </div>
                  {roles.map((r) => {
                    const RoleIcon = r.icon;
                    return (
                      <button
                        key={r.id}
                        onClick={() => {
                          setActiveRole(r.id);
                          setRoleDropdownOpen(false);
                          if (r.id === 'volunteer') setActiveTab('volunteer');
                          if (r.id === 'ngo') setActiveTab('requests');
                        }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs rounded-lg text-left font-medium transition ${
                          activeRole === r.id
                            ? 'bg-emerald-50 text-emerald-800 font-semibold'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <RoleIcon className={`w-4 h-4 ${r.color}`} />
                        <span>{r.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Donate Food Primary CTA */}
            <button
              onClick={onOpenDonate}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <PlusCircle className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
              <span>Donate Food</span>
              <span className="hidden xl:inline text-emerald-200 text-xs font-normal">| Tax Free</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenDonate}
              className="p-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center gap-1 shadow-sm"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Donate</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4 text-emerald-600" />
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Demo Persona
            </p>
            <div className="grid grid-cols-2 gap-2">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setActiveRole(r.id);
                    setMobileMenuOpen(false);
                    if (r.id === 'volunteer') setActiveTab('volunteer');
                    if (r.id === 'ngo') setActiveTab('requests');
                  }}
                  className={`text-xs p-2 rounded-lg border text-left font-medium ${
                    activeRole === r.id
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  {r.label.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

