# NourishLink | Zero Hunger Community Food Rescue Platform

**NourishLink** is a modern, responsive, real-time community food rescue platform connecting surplus food donors (restaurants, caterers, banquet halls, corporate cafeterias, supermarkets, and individuals) with verified local shelters, orphanages, old age sanctuaries, and community kitchens in under 45 minutes.

---

## 🌟 Key Features

### 1. 🏢 Food Donors (Restaurants, Banquets, Corporate Canteens)
- **Multi-Step Food Donation Wizard**:
  - **Step 1: Food Details**: Category (Cooked Meals, Bakery, Fresh Produce, Packaged Rations, Dairy), servings count, weight in kg, storage temperature (Hot Insulated, Refrigerated, Ambient), best-before countdown timer, dietary tags (Pure Veg, Vegan, Halal, Gluten-Free).
  - **Step 2: Logistics & Location**: Pickup address, landmark, contact person, pickup time window, packaging condition.
  - **Step 3: Food Safety & Hygiene Pledge**: FSSAI & Good Samaritan Act checklist verifying fresh preparation, hygienic sealing, and temperature control.
  - **Step 4: Real-Time Confirmation**: Digital 80G Tax Exemption receipt summary, confetti celebration, and instant alert broadcast to nearby shelters.

### 2. 🤲 Verified NGOs & Shelters (Food Recipients)
- **Live Food Rescue Feed**: Real-time filterable grid of available surplus food with urgency countdowns (e.g. `< 4 hours`), distance, servings, and dietary tags.
- **1-Click Food Reservation & Digital Pickup Pass**: Instant claim workflow generating a digital QR pass with donor details and transport choice.
- **Shelter Demand Registry**: Transparent board where orphanages and shelters post urgent dinner requirements (e.g. "85 meals needed tonight for resident children") with live progress bars.

### 3. 🚴 Volunteer Hero Courier Network
- **Mission Dispatch Hub**: Open missions connecting donors to shelters (e.g. "Pickup 65 biryani packets from Royal Feast Banquets -> Deliver to Hope Shelter, 3.4 km").
- **Interactive Delivery Workflow**: Step-by-step dispatch status: `Heading to Donor` &rarr; `Food Inspected & Collected` &rarr; `Delivered to Shelter`.
- **Gamified Karma Points**: Earn volunteer points and badges (e.g. "Hot Meals Express", "Golden Wheel Hero").

### 4. 🗺️ Hyperlocal Radar Map
- Interactive city map simulation with dynamic pins for **Surplus Food Ready** (Emerald), **Shelter Hunger Needs** (Amber), and **Volunteer Couriers in Transit** (Blue).
- Layer toggles, node selection drawers, and 5 km radius radar.

### 5. 📊 Impact Calculator & Transparency
- **Food Rescue Estimator**: Interactive slider calculating people fed, CO₂ emissions prevented (kg), water conserved (liters), and 80G tax benefit (₹).
- **FSSAI & Good Samaritan Act Safety Guide**: Detailed temperature danger zone breakdown (`< 4°C` safe cold, `5°C-60°C` danger zone, `> 60°C` safe hot) and legal immunity protection.
- **Community Leaderboards**: Top donor restaurants and top volunteer couriers.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Running Locally
```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
http://localhost:5173
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS with custom fonts (`Outfit` & `Plus Jakarta Sans`)
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **State Management**: Reactive state with localStorage persistence

---

## 🇺🇳 Global Alignment
- **UN SDG 2**: Zero Hunger
- **UN SDG 12**: Responsible Consumption & Production
- **UN SDG 13**: Climate Action (Diverting food waste from methane-producing landfills)

