import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import LiveDonationsFeed from './components/LiveDonationsFeed';
import InteractiveFoodMap from './components/InteractiveFoodMap';
import NgoRequestBoard from './components/NgoRequestBoard';
import VolunteerPortal from './components/VolunteerPortal';
import ImpactCalculator from './components/ImpactCalculator';
import FoodSafetyGuide from './components/FoodSafetyGuide';
import LeaderboardSection from './components/LeaderboardSection';
import TestimonialsStories from './components/TestimonialsStories';
import Footer from './components/Footer';
import DonateWizardModal from './components/DonateWizardModal';
import ClaimFoodModal from './components/ClaimFoodModal';
import DonationDetailModal from './components/DonationDetailModal';
import Toast from './components/Toast';

import { 
  INITIAL_DONATIONS, 
  NGO_REQUESTS, 
  VOLUNTEER_MISSIONS, 
  IMPACT_METRICS 
} from './data/mockData';

export default function App() {
  // Persistent or initial state
  const [donations, setDonations] = useState(() => {
    try {
      const saved = localStorage.getItem('nourish_donations_v1');
      return saved ? JSON.parse(saved) : INITIAL_DONATIONS;
    } catch (e) {
      return INITIAL_DONATIONS;
    }
  });

  const [ngoRequests, setNgoRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('nourish_requests_v1');
      return saved ? JSON.parse(saved) : NGO_REQUESTS;
    } catch (e) {
      return NGO_REQUESTS;
    }
  });

  const [volunteerMissions, setVolunteerMissions] = useState(VOLUNTEER_MISSIONS);
  const [metrics, setMetrics] = useState(IMPACT_METRICS);

  // App Navigation & Role Mode State
  const [activeRole, setActiveRole] = useState('all'); // 'all', 'donor', 'ngo', 'volunteer'
  const [activeTab, setActiveTab] = useState('feed'); // 'feed', 'map', 'requests', 'volunteer', 'impact'

  // Modals
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [claimingDonation, setClaimingDonation] = useState(null);
  const [inspectingDonation, setInspectingDonation] = useState(null);

  // Toast Notification
  const [toast, setToast] = useState(null);

  const showToast = (toastObj) => {
    setToast(toastObj);
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  // Sync state to local storage
  useEffect(() => {
    try {
      localStorage.setItem('nourish_donations_v1', JSON.stringify(donations));
    } catch (e) {}
  }, [donations]);

  useEffect(() => {
    try {
      localStorage.setItem('nourish_requests_v1', JSON.stringify(ngoRequests));
    } catch (e) {}
  }, [ngoRequests]);

  // Handlers
  const handleAddDonation = (newDonation) => {
    setDonations([newDonation, ...donations]);
    setMetrics(prev => ({
      ...prev,
      totalMealsRescued: prev.totalMealsRescued + newDonation.servings,
      co2PreventedKg: prev.co2PreventedKg + Math.round(newDonation.servings * 2.5),
      activeDonors: prev.activeDonors + 1
    }));
    showToast({
      type: 'success',
      title: 'Food Donation Listed!',
      message: `${newDonation.servings} meals broadcasted to nearby shelters & couriers.`
    });
  };

  const handleConfirmClaim = (donationId, ngoName, code) => {
    setDonations(prev => prev.map(item => {
      if (item.id === donationId) {
        return {
          ...item,
          status: 'Claimed',
          claimedBy: ngoName
        };
      }
      return item;
    }));

    showToast({
      type: 'success',
      title: 'Food Reservation Confirmed!',
      message: `Pickup pass ${code} generated for ${ngoName}.`
    });
  };

  const handleAddNewRequest = (newReq) => {
    setNgoRequests([newReq, ...ngoRequests]);
    showToast({
      type: 'success',
      title: 'Shelter Meal Request Published',
      message: `Local food donors notified of requirement for ${newReq.mealsNeeded} meals.`
    });
  };

  const handlePledgeToRequest = (req) => {
    setIsDonateModalOpen(true);
    showToast({
      type: 'info',
      title: `Pledging to ${req.ngoName}`,
      message: `Fill out surplus details to fulfill their request for ${req.mealsNeeded} meals.`
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navigation Header with Live Role Switcher */}
      <Navbar
        activeRole={activeRole}
        setActiveRole={setActiveRole}
        onOpenDonate={() => setIsDonateModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDonate={() => setIsDonateModalOpen(true)}
          onExploreFood={() => {
            setActiveTab('feed');
            const el = document.getElementById('available-food-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreShelters={() => {
            setActiveTab('requests');
            const el = document.getElementById('ngo-requests-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenVolunteer={() => {
            setActiveTab('volunteer');
            const el = document.getElementById('volunteer-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Global Impact Summary Bar */}
        <ImpactMetrics metrics={metrics} />

        {/* Dynamic Section Visibility based on Tab or complete flow */}
        {(activeTab === 'feed' || activeTab === 'all') && (
          <LiveDonationsFeed
            donations={donations}
            onClaim={(d) => setClaimingDonation(d)}
            onSelectDonation={(d) => setInspectingDonation(d)}
            onOpenDonate={() => setIsDonateModalOpen(true)}
            activeRole={activeRole}
          />
        )}

        {(activeTab === 'map' || activeTab === 'all' || activeTab === 'feed') && (
          <InteractiveFoodMap
            donations={donations}
            onClaim={(d) => setClaimingDonation(d)}
            onSelectDonation={(d) => setInspectingDonation(d)}
          />
        )}

        {(activeTab === 'requests' || activeTab === 'all' || activeRole === 'ngo') && (
          <NgoRequestBoard
            requests={ngoRequests}
            onPledgeToRequest={handlePledgeToRequest}
            onAddNewRequest={handleAddNewRequest}
            activeRole={activeRole}
          />
        )}

        {(activeTab === 'volunteer' || activeTab === 'all' || activeRole === 'volunteer') && (
          <VolunteerPortal
            missions={volunteerMissions}
            onAcceptMission={(m) => {
              showToast({
                type: 'info',
                title: 'Mission Accepted',
                message: `Proceed to ${m.from} for pickup.`
              });
            }}
          />
        )}

        {/* Interactive Food Waste to Impact Calculator */}
        <ImpactCalculator onOpenDonate={() => setIsDonateModalOpen(true)} />

        {/* Food Safety & Good Samaritan Law Guidelines */}
        <FoodSafetyGuide />

        {/* Leaderboards */}
        <LeaderboardSection />

        {/* Testimonials */}
        <TestimonialsStories />
      </main>

      {/* Footer */}
      <Footer
        onOpenDonate={() => setIsDonateModalOpen(true)}
        onShowToast={showToast}
      />

      {/* Modals */}
      <DonateWizardModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        onAddDonation={handleAddDonation}
      />

      <ClaimFoodModal
        isOpen={!!claimingDonation}
        onClose={() => setClaimingDonation(null)}
        donation={claimingDonation}
        onConfirmClaim={handleConfirmClaim}
      />

      <DonationDetailModal
        isOpen={!!inspectingDonation}
        onClose={() => setInspectingDonation(null)}
        donation={inspectingDonation}
        onClaim={(d) => {
          setInspectingDonation(null);
          setClaimingDonation(d);
        }}
      />

      {/* Floating Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}

