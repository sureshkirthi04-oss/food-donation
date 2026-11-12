import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Clock, 
  MapPin, 
  Utensils, 
  ShieldCheck, 
  Flame, 
  Share2, 
  CheckCircle2, 
  AlertTriangle,
  HeartHandshake,
  Sparkles,
  ChevronRight,
  Eye
} from 'lucide-react';

export default function LiveDonationsFeed({ 
  donations, 
  onClaim, 
  onSelectDonation, 
  onOpenDonate,
  activeRole 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDiet, setSelectedDiet] = useState('All');
  const [urgencyOnly, setUrgencyOnly] = useState(false);
  const [sortBy, setSortBy] = useState('urgent'); // urgent, distance, servings

  const categories = [
    'All',
    'Cooked Meals',
    'Bakery & Pastries',
    'Fresh Produce',
    'Packaged Dry Rations',
    'Dairy & Beverages'
  ];

  const dietaryFilters = ['All', 'Pure Veg', 'Vegan', 'Halal', 'Gluten-Free'];

  // Filter and sort donations
  const filteredDonations = useMemo(() => {
    return donations.filter(item => {
      // Search matches
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.donorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category matches
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;

      // Dietary matches
      const matchesDiet = selectedDiet === 'All' || (item.dietary && item.dietary.includes(selectedDiet));

      // Urgency filter
      const matchesUrgency = !urgencyOnly || item.urgency === 'urgent';

      return matchesSearch && matchesCat && matchesDiet && matchesUrgency;
    }).sort((a, b) => {
      if (sortBy === 'urgent') {
        return a.bestBeforeHours - b.bestBeforeHours;
      } else if (sortBy === 'servings') {
        return b.servings - a.servings;
      } else {
        return parseFloat(a.distance) - parseFloat(b.distance);
      }
    });
  }, [donations, searchQuery, selectedCategory, selectedDiet, urgencyOnly, sortBy]);

  return (
    <section id="available-food-section" className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-black tracking-widest uppercase text-emerald-700">
                Live Surplus Rescue Feed
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit']">
              Available Fresh Food for Pickup
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Verified food donations available immediately for orphanages, shelters, and relief kitchens.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenDonate}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition"
            >
              <Utensils className="w-4 h-4" />
              <span>List New Surplus Food</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 mb-8 space-y-4">
          
          {/* Search + Quick Toggles */}
          <div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
            {/* Search Box */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search food, restaurants, dishes, area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Sort & Urgency Filter */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-between lg:justify-end">
              <button
                onClick={() => setUrgencyOnly(!urgencyOnly)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                  urgencyOnly
                    ? 'bg-rose-50 border-rose-300 text-rose-700'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Flame className={`w-3.5 h-3.5 ${urgencyOnly ? 'text-rose-600' : 'text-slate-400'}`} />
                <span>Urgent First (&lt;4 hrs)</span>
              </button>

              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                <span className="hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option value="urgent">Expiring Soonest</option>
                  <option value="distance">Closest to Me</option>
                  <option value="servings">Most Servings (Largest)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none text-xs">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px] shrink-0">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dietary Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px] shrink-0">
              Dietary:
            </span>
            {dietaryFilters.map((diet) => (
              <button
                key={diet}
                onClick={() => setSelectedDiet(diet)}
                className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition ${
                  selectedDiet === diet
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {diet}
              </button>
            ))}
          </div>

        </div>

        {/* Results Count & Feedback */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
          <span>
            Showing <strong>{filteredDonations.length}</strong> available food packages
          </span>
          {activeRole === 'ngo' && (
            <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
              NGO Mode Active: One-click food reservation enabled
            </span>
          )}
        </div>

        {/* Cards Grid */}
        {filteredDonations.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <Utensils className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No Food Matches Current Filter</h3>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Try resetting your filters or search keywords, or list surplus food yourself to help.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedDiet('All');
                setUrgencyOnly(false);
              }}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDonations.map((item) => {
              const isClaimed = item.status === 'Claimed';

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group ${
                    isClaimed 
                      ? 'border-slate-200 opacity-75' 
                      : 'border-slate-200/80 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Image Header with Urgency & Servings Badges */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/30" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/95 text-slate-900 shadow-md">
                          {item.category}
                        </span>

                        {isClaimed ? (
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-slate-800 text-white">
                            Claimed
                          </span>
                        ) : item.urgency === 'urgent' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-600 text-white shadow-md animate-pulse">
                            <Flame className="w-3 h-3" />
                            <span>{item.bestBeforeHours}h Remaining</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold text-xs bg-emerald-700/90 text-white shadow-md backdrop-blur-xs">
                            <Clock className="w-3 h-3" />
                            <span>{item.bestBeforeHours}h window</span>
                          </span>
                        )}
                      </div>

                      {/* Bottom Image Overlay: Servings Banner */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-lg bg-emerald-600/90 backdrop-blur-md text-xs font-black">
                            {item.servings} Servings
                          </span>
                          <span className="text-xs font-semibold drop-shadow">
                            ≈ {item.quantityKg} kg
                          </span>
                        </div>
                        <span className="text-xs text-white/90 drop-shadow flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.distance}
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 space-y-3">
                      {/* Donor Information */}
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900 hover:text-emerald-700 transition">
                            {item.donorName}
                          </span>
                          {item.donorVerified && (
                            <ShieldCheck className="w-4 h-4 text-emerald-600" title="Verified Safe Donor" />
                          )}
                        </div>
                        <span className="text-slate-400 text-[11px]">{item.donorType}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-1 group-hover:text-emerald-700 transition">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Dietary Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.dietary.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700">
                          {item.temperature}
                        </span>
                      </div>

                      {/* Pickup Location Info */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="truncate max-w-[200px]" title={item.location}>
                          📍 {item.location}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400">
                          Prep: {item.preparedTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="p-5 pt-0">
                    {isClaimed ? (
                      <div className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold text-center flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Reserved by {item.claimedBy || 'Verified Shelter'}</span>
                      </div>
                    ) : (
                      <div className="grid grid-cols-12 gap-2">
                        <button
                          onClick={() => onSelectDonation(item)}
                          className="col-span-4 py-2.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition flex items-center justify-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5 text-slate-400" />
                          <span>Details</span>
                        </button>
                        
                        <button
                          onClick={() => onClaim(item)}
                          className="col-span-8 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 hover:shadow-lg transition flex items-center justify-center gap-1.5"
                        >
                          <HeartHandshake className="w-4 h-4" />
                          <span>Claim for Shelter</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

