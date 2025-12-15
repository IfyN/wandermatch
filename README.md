# WanderMatch - AI Travel Discovery App

Discover your perfect weekend getaway based on budget, mood, and preferences.

## 🌐 Live Demo

**[View Live Site](https://wandermatch-ai-travel-app.vercel.app/)**

## ✨ Features

- Filter trips by budget, type, and duration
- Multi-select mood filters (peaceful, active, cultural, scenic, relaxing)
- Responsive card-based layout
- Detailed trip pages with highlights and pricing
- Keyboard accessible with ARIA labels
- Mobile-friendly design
- 404 error handling

## 🏗️ Architecture

### Current (V1) - Frontend Only

### State Management

- **Combined state pattern** for related filters (budget, type, duration, moods)
- Props drilling for component communication
- Derived state for filtered results
- React Router for URL-based navigation

### Data Layer (V1)

- Mock data with 3 sample UK trips
- Client-side filtering logic
- Static trip information (images, highlights, pricing)

---

## 🚀 Roadmap

### ✅ Phase 1: Core Functionality (Complete)

- [x] Trip filtering system
- [x] Navigation with React Router
- [x] Detail pages
- [x] Responsive design
- [x] Accessibility features
- [x] Deployed to Vercel

### 📋 Phase 2: Real Data Integration (Planned)

- [ ] Google Places API integration
  - Real location data and photos
  - Live ratings and reviews
  - Distance calculations
- [ ] Expanded trip database
- [ ] Search by location

### 🤖 Phase 3: AI Features (Planned)

- [ ] Claude AI integration for itinerary generation
- [ ] Personalized recommendations based on preferences
- [ ] Day-by-day trip planning
- [ ] Natural language trip descriptions

### 💾 Phase 4: User Features (Planned)

- [ ] Favorites/wishlist (localStorage)
- [ ] User accounts and authentication
- [ ] Booking history
- [ ] Share trips functionality

---

## 🛠️ Tech Stack

**Frontend:**

- React 18 with Hooks (useState, useParams, useNavigate)
- React Router v6 for client-side routing
- Vite for build tooling
- Semantic HTML5
- CSS3 with custom properties

**Development:**

- Git for version control
- ESLint for code quality
- Vercel for deployment

**Planned:**

- Google Places API
- Anthropic Claude API
- Node.js backend (for API key security)
- PostgreSQL/MongoDB (for user data)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/wandermatch.git

# Navigate to project directory
cd wandermatch

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview  # Preview production build locally
```

---

## 🎯 Objectives

This project demonstrates:

- React component architecture and state management
- Client-side routing with React Router
- Controlled form components
- Array manipulation methods (`.map()`, `.filter()`, `.find()`, `.some()`)
- Accessible web development (WCAG compliant)
- Modern deployment workflows
- Split vs combined state decision-making

---

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions are welcome!

---

## 📝 License

MIT License - feel free to use this project for learning purposes.

---

**Built with ❤️ by Ifeoma N, as a learning project to refresh React mastery, modern web development and AI integration**

[Your Name] | [LinkedIn](https://www.linkedin.com/in/ifeoma-nwosu/) |
