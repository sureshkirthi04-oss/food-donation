export const INITIAL_DONATIONS = [
  {
    id: "DON-101",
    title: "Freshly Cooked Veg Biryani & Salan",
    donorName: "Royal Feast Banquet Hall",
    donorType: "Banquet / Event Caterer",
    donorVerified: true,
    category: "Cooked Meals",
    servings: 65,
    quantityKg: 28,
    dietary: ["Pure Veg", "Gluten-Free", "Halal"],
    temperature: "Hot Insulated Containers",
    preparedTime: "2 hours ago (12:30 PM)",
    bestBeforeHours: 3,
    location: "Koramangala 5th Block, Bangalore",
    distance: "1.8 km away",
    coordinates: { x: 38, y: 44 },
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    description: "Surplus premium basmati veg biryani with fresh raita and mirchi ka salan from a luncheon conference. Packed in food-grade foil containers, sealed and warm.",
    status: "Available",
    urgency: "urgent", // urgent, moderate, normal
    claimedBy: null,
    contactNumber: "+91 98450 12345",
    safetyPassed: true
  },
  {
    id: "DON-102",
    title: "Artisanal Sourdough & Multigrain Breads",
    donorName: "Crust & Crumb Bakery",
    donorType: "Bakery & Cafe",
    donorVerified: true,
    category: "Bakery & Pastries",
    servings: 45,
    quantityKg: 18,
    dietary: ["Pure Veg", "Vegan"],
    temperature: "Room Temp (Dry)",
    preparedTime: "Today at 7:00 AM",
    bestBeforeHours: 18,
    location: "Indiranagar 100ft Road, Bangalore",
    distance: "3.2 km away",
    coordinates: { x: 62, y: 32 },
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80",
    description: "End-of-day surplus fresh loaves, dinner rolls, and multigrain baguettes baked this morning. Sealed in bakery paper bags.",
    status: "Available",
    urgency: "normal",
    claimedBy: null,
    contactNumber: "+91 99001 88776",
    safetyPassed: true
  },
  {
    id: "DON-103",
    title: "Organic Farm Fresh Apples & Pears",
    donorName: "Nature's Basket Supermarket",
    donorType: "Grocery Chain",
    donorVerified: true,
    category: "Fresh Produce",
    servings: 90,
    quantityKg: 40,
    dietary: ["Pure Veg", "Vegan", "Raw"],
    temperature: "Chilled (10°C)",
    preparedTime: "Harvested yesterday",
    bestBeforeHours: 48,
    location: "HSR Layout Sector 4, Bangalore",
    distance: "4.5 km away",
    coordinates: { x: 50, y: 68 },
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&auto=format&fit=crop&q=80",
    description: "Crates of crisp Himachal apples and European pears with minor cosmetic blemishes, 100% ripe, sweet, and nutritious.",
    status: "Available",
    urgency: "normal",
    claimedBy: null,
    contactNumber: "+91 98860 55443",
    safetyPassed: true
  },
  {
    id: "DON-104",
    title: "North Indian Thali Meal Boxes (Paneer, Dal, Rotis)",
    donorName: "Tech Mahindra Corporate Cafeteria",
    donorType: "Corporate Canteen",
    donorVerified: true,
    category: "Cooked Meals",
    servings: 120,
    quantityKg: 52,
    dietary: ["Pure Veg"],
    temperature: "Insulated Warm Boxes",
    preparedTime: "1 hour ago (1:30 PM)",
    bestBeforeHours: 4,
    location: "Electronic City Phase 1, Bangalore",
    distance: "6.1 km away",
    coordinates: { x: 74, y: 78 },
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=80",
    description: "Complete nutritious balanced lunch: Shahi paneer, tadka yellow dal, jeera rice, and 4 phulkas per boxed meal. Untouched cafeteria surplus.",
    status: "Available",
    urgency: "urgent",
    claimedBy: null,
    contactNumber: "+91 97400 99881",
    safetyPassed: true
  },
  {
    id: "DON-105",
    title: "High-Protein Lentils & Basmati Rice Rations",
    donorName: "Anand Nilayam Community Trust",
    donorType: "Religious / Charitable Donor",
    donorVerified: true,
    category: "Packaged Dry Rations",
    servings: 150,
    quantityKg: 75,
    dietary: ["Pure Veg", "Vegan"],
    temperature: "Ambient (Dry Storage)",
    preparedTime: "Factory Sealed",
    bestBeforeHours: 120,
    location: "Malleshwaram 8th Cross, Bangalore",
    distance: "5.3 km away",
    coordinates: { x: 26, y: 22 },
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80",
    description: "Unopened 5kg and 10kg sealed gunny bags of Toor Dal, Moong Dal, and A-grade Rice ideal for community kitchen cooking.",
    status: "Available",
    urgency: "normal",
    claimedBy: null,
    contactNumber: "+91 94480 33221",
    safetyPassed: true
  },
  {
    id: "DON-106",
    title: "Pasteurized Milk Packets & Fresh Paneer",
    donorName: "Nandini Milk Dairy Outlet",
    donorType: "Dairy Producer",
    donorVerified: true,
    category: "Dairy & Beverages",
    servings: 80,
    quantityKg: 35,
    dietary: ["Pure Veg"],
    temperature: "Refrigerated (4°C)",
    preparedTime: "This morning at 5:00 AM",
    bestBeforeHours: 12,
    location: "Jayanagar 4th Block, Bangalore",
    distance: "2.7 km away",
    coordinates: { x: 34, y: 60 },
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=80",
    description: "Chilled unopened 500ml homogenized milk pouches and 200g malai paneer packs, continuously refrigerated.",
    status: "Available",
    urgency: "moderate",
    claimedBy: null,
    contactNumber: "+91 98455 77665",
    safetyPassed: true
  }
];

export const NGO_REQUESTS = [
  {
    id: "REQ-301",
    ngoName: "Hope Shelter for Children",
    ngoType: "Orphanage & Children Home",
    location: "Wilson Garden, Bangalore",
    mealsNeeded: 85,
    mealsFulfilled: 45,
    category: "Cooked Meals / Dinner",
    dietaryPreference: "Vegetarian nutritious meals",
    urgency: "Critical (Needed by 7:30 PM Tonight)",
    contactPerson: "Sister Angela / Ramesh K.",
    contactPhone: "+91 98440 11223",
    verified: true,
    notes: "Evening meal for 85 resident school children. Dal, roti, veggies or pulao would be wonderful."
  },
  {
    id: "REQ-302",
    ngoName: "Karuna Old Age Home",
    ngoType: "Senior Citizen Care Sanctuary",
    location: "Banaswadi, Bangalore",
    mealsNeeded: 50,
    mealsFulfilled: 50,
    category: "Soft Cooked Food / Dairy",
    dietaryPreference: "Mild spice, diabetic friendly",
    urgency: "Fulfilled for Today",
    contactPerson: "Dr. Sudha Murthy",
    contactPhone: "+91 98451 99001",
    verified: true,
    notes: "Requires soft khichdi, curd, or idlis for 50 elder residents."
  },
  {
    id: "REQ-303",
    ngoName: "City Night Shelter & Homeless Relief",
    ngoType: "Transitional Urban Shelter",
    location: "Majestic City Railway Station area",
    mealsNeeded: 140,
    mealsFulfilled: 30,
    category: "Packaged Warm Meal Boxes",
    dietaryPreference: "Any wholesome hot food",
    urgency: "High Urgency",
    contactPerson: "Devendra Rao",
    contactPhone: "+91 99800 44556",
    verified: true,
    notes: "Distributes nightly food packages to daily wage migrants and unhoused families around Majestic."
  },
  {
    id: "REQ-304",
    ngoName: "Sparsha Community Learning Center",
    ngoType: "Slum Child Education Initiative",
    location: "Ejipura Slum Cluster",
    mealsNeeded: 110,
    mealsFulfilled: 0,
    category: "Afternoon Nutrition / Fruits & Snacks",
    dietaryPreference: "Fresh fruit, biscuits, boiled eggs, or nuts",
    urgency: "Tomorrow 3:00 PM",
    contactPerson: "Farida Begum",
    contactPhone: "+91 94801 66778",
    verified: true,
    notes: "Healthy evening snack supplement for 110 underprivileged students attending evening remedial school."
  }
];

export const VOLUNTEER_MISSIONS = [
  {
    id: "MIS-801",
    title: "Urgent Lunch Rescue: Banquet Surplus",
    from: "Royal Feast Banquet Hall (Koramangala)",
    to: "Hope Shelter for Children (Wilson Garden)",
    distance: "3.4 km",
    estimatedTime: "18 mins",
    payload: "65 Hot Biryani Packets (28 kg)",
    urgency: "Immediate Dispatch Needed",
    status: "Open", // Open, In-Transit, Completed
    rewardPoints: 250,
    badge: "Hot Meals Express"
  },
  {
    id: "MIS-802",
    title: "Evening Bakery Pickup & Drop",
    from: "Crust & Crumb Bakery (Indiranagar)",
    to: "City Night Shelter (Majestic)",
    distance: "6.8 km",
    estimatedTime: "25 mins",
    payload: "45 Artisanal Loaves & Pastries (18 kg)",
    urgency: "Pickup before 8:00 PM",
    status: "Open",
    rewardPoints: 180,
    badge: "Bread Runner"
  },
  {
    id: "MIS-803",
    title: "Corporate Cafeteria Surplus Transfer",
    from: "Tech Mahindra (Electronic City)",
    to: "Karuna Sanctuary (BTM Layout)",
    distance: "5.1 km",
    estimatedTime: "22 mins",
    payload: "120 Balanced Meal Boxes (52 kg)",
    urgency: "Assigned to Ravi Kumar (Volunteer #88)",
    status: "In-Transit",
    rewardPoints: 320,
    badge: "Heavy Lifter"
  }
];

export const IMPACT_METRICS = {
  totalMealsRescued: 148920,
  co2PreventedKg: 372300,
  waterSavedLiters: 984000,
  activeDonors: 1420,
  verifiedNGOs: 368,
  activeVolunteers: 2150,
  landfillDivertedTons: 112.5
};

export const LEADERBOARD_DONORS = [
  { rank: 1, name: "Grand Sheraton Hotel & Banquets", meals: 18450, badge: "Legendary Sustainer", city: "Bangalore" },
  { rank: 2, name: "Google Bangalore Cafeteria", meals: 14200, badge: "Zero-Waste Corporate", city: "Bangalore" },
  { rank: 3, name: "Adyar Ananda Bhavan (A2B)", meals: 11800, badge: "Community Champion", city: "Chennai & BLR" },
  { rank: 4, name: "FreshMenu Central Kitchen", meals: 9650, badge: "Speed Rescue Star", city: "Bangalore" },
  { rank: 5, name: "BigBasket Distribution Center", meals: 8900, badge: "Produce Guardian", city: "Hosur" }
];

export const VOLUNTEER_CHAMPIONS = [
  { rank: 1, name: "Arjun Natarajan", trips: 142, hours: 210, badge: "Golden Wheel Hero" },
  { rank: 2, name: "Pooja Varma", trips: 118, hours: 175, badge: "Swift Courier" },
  { rank: 3, name: "David Fernandes", trips: 96, hours: 140, badge: "Night Owl Savior" }
];

export const FOOD_SAFETY_GUIDELINES = [
  {
    icon: "ShieldCheck",
    title: "Good Samaritan Act Protection",
    desc: "Donors donating food in good faith are legally protected under civil and criminal liability laws across jurisdictions."
  },
  {
    icon: "ThermometerSnowflake",
    title: "Strict Cold & Hot Chain",
    desc: "Cooked hot food must be maintained above 60°C or cooled rapidly and stored under 4°C within 2 hours of prep."
  },
  {
    icon: "PackageCheck",
    title: "Hygienic Packaging",
    desc: "All surplus food must be sealed in clean food-grade containers, labeled with preparation timestamp and allergens."
  },
  {
    icon: "Clock",
    title: "The 4-Hour Rule",
    desc: "Cooked ambient food must be claimed and consumed within 4 hours to ensure absolute safety for shelter residents."
  }
];

export const IMPACT_STORIES = [
  {
    quote: "Last Diwali, our wedding catering had 180 untouched meals. In under 25 minutes, NourishLink matched us with St. Jude Orphanage. Seeing the kids enjoy fresh warm biryani brought tears to our eyes.",
    author: "Vikram & Ananya Sethi",
    role: "Individual Donors, Bangalore",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
  },
  {
    quote: "As an orphanage director, food expenses are our heaviest daily worry. NourishLink has provided consistent, high-protein fresh meals for our 85 kids week after week. It is a godsend.",
    author: "Sister Angela D'Souza",
    role: "Director, Hope Children's Home",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
  },
  {
    quote: "I do 2 food rescue bike runs every evening after my tech job. Using this platform is frictionless — GPS route, donor verification, and shelter sign-off right on my mobile.",
    author: "Arjun Natarajan",
    role: "Lead Volunteer Courier (140+ Deliveries)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
  }
];

