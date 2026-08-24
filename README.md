# TransferLens - Academic Intelligence Platform

A high-fidelity EdTech prototype designed to measure and visualize the **Transfer Gap**—the discrepancy between a student's academic mastery of a concept and their ability to apply that knowledge in novel, unfamiliar contexts.

## 🎯 Product Vision

**Tagline:** "Knowing the answer isn't the same as knowing how to use it."

TransferLens implements a unique assessment methodology that bridges the gap between:
1. **Familiar Performance:** Solving problems in a known format
2. **Near Transfer:** Applying the concept to a slightly different framing
3. **Far Transfer:** Recognizing the underlying concept in a completely different domain
4. **Reasoning Analysis:** Evaluating *why* a student chose a specific method

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.jsx          # Main layout wrapper
│   ├── Sidebar.jsx         # Navigation sidebar
│   └── Header.jsx          # Top navigation bar
├── pages/
│   ├── StudentDashboard.jsx      # Student home with transfer metrics
│   ├── TeacherDashboard.jsx      # Teacher class matrix view
│   ├── TransferAnalysis.jsx      # Detailed transfer breakdown
│   ├── TeacherAnalytics.jsx      # Teacher analytics dashboard
│   ├── ConceptExplorer.jsx       # Knowledge graph visualization
│   └── assessment/
│       ├── AssessmentIntro.jsx           # Assessment introduction
│       ├── AssessmentFamiliar.jsx       # Stage 1: Familiar context
│       ├── AssessmentNearTransfer.jsx   # Stage 2: Near transfer
│       ├── AssessmentFarTransfer.jsx    # Stage 3: Far transfer
│       └── AssessmentReasoning.jsx      # Stage 4: Reasoning capture
├── App.jsx                 # Main routing configuration
├── main.jsx                # Application entry point
└── index.css               # Global styles and Tailwind imports
```

## 🎨 Design System

The interface follows the **"Academic Precision"** design system:

- **Colors:** Deep Navy (#1e293b) & Indigo accents with light neutrals
- **Typography:** Public Sans (headings) & Inter (body text)
- **Canvas Scale:** Optimized for 1920x1080 (16:9) desktop layouts
- **Visual Style:** Minimal, professional, data-driven, and sophisticated

## 📊 Core Features

### Progressive Bridge Assessment
A four-stage assessment flow that gradually moves from familiar to abstracted scenarios:
- **Stage 1: Familiar** - Baseline check on core concept
- **Stage 2: Near Transfer** - Same concept, different wording
- **Stage 3: Far Transfer** - New domain application
- **Stage 4: Reasoning Capture** - Open-ended explanation of logic

### Student Transfer Profile
Visualizes the decay of performance as contexts become more complex, making the "Transfer Gap" a primary metric.

### Teacher Diagnostic Matrix
A 2D scatter plot (Mastery vs. Transfer) that categorizes students into four quadrants:
- **High Mastery / High Transfer:** Strong Learners
- **Low Mastery / Low Transfer:** Needs Fundamental Support
- **Low Mastery / High Transfer:** Intuitive Learners
- **High Mastery / Low Transfer:** **Potential Hidden Transfer Gap** (Primary diagnostic target)

## 🛠️ Technology Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Material Symbols Outlined
- **Fonts:** Google Fonts (Public Sans, Inter, JetBrains Mono)

## 📈 Roadmap

### Phase 1 (MVP) ✅
- Single subject (Mathematics)
- Core assessment flow
- Teacher dashboard v1
- Student dashboard with transfer metrics

### Phase 2 (Planned)
- School pilot integration
- Science curriculum integration
- Longitudinal tracking
- Chart.js visualizations for learning profiles

### Phase 3 (Future)
- Predictive analytics
- Automated remediation plans
- AI-powered reasoning analysis
- Knowledge graph concept explorer

## 🎯 Target Audience

- **Students (Secondary/High School):** Understand learning patterns and move beyond rote memorization
- **Teachers:** Gain diagnostic insights into class-wide transfer barriers
- **Hackathon Judges:** High-fidelity prototype demonstrating innovative assessment methodology

## 📝 License

This is a prototype project for educational purposes.

---

**Built with ❤️ for the TransferLens EdTech Initiative**
