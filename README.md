# SVB Constructions Website

A modern, responsive civil construction company website developed for **Shree Veerabhadreshwara Constructions (SVB Constructions)**, showcasing company services, project portfolio, leadership team, certifications, and contact information.

---

## Overview

The SVB Constructions website is a premium single-page application built to represent a professional civil engineering firm. It features cinematic hero animations, bilingual (Kannada/English) content, an interactive project portfolio, leadership profiles, and a fully integrated contact form — all designed to build trust and generate leads.

**Live Site:** https://svb-constructions.preview.emergentagent.com

---

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19.0.0 | UI framework |
| Tailwind CSS | 3.4.17 | Utility-first styling |
| Framer Motion | 11.18.0 | Animations & transitions |
| Lucide React | 0.516.0 | Icon library |
| React Hook Form | 7.56.2 | Form state management |
| Zod | 3.24.4 | Form validation schema |
| Embla Carousel | 8.6.0 | Testimonials carousel |

### UI Components
| Library | Purpose |
|---|---|
| Shadcn UI (Radix UI) | Accessible component primitives |
| Sonner | Toast notifications |
| Tailwind CSS Animate | CSS animation utilities |

### Fonts (Google Fonts)
- **Sora** — Headings (weights: 400, 600, 700)
- **Inter** — Body text (weights: 300, 400, 500, 600)
- **Noto Sans Kannada** — Kannada bilingual text (weights: 400, 600)

### Backend
| Technology | Version | Purpose |
|---|---|---|
| FastAPI | Latest | REST API backend |
| MongoDB | Local | Database (via PyMongo) |
| Python | 3.10+ | Backend runtime |

### Build & Dev Tools
| Tool | Purpose |
|---|---|
| CRACO | Create React App config override |
| Webpack | Module bundler (via CRA) |
| PostCSS | CSS processing |
| ESLint | Code linting |

### Integrations
- **Formspree** (`mwvzzvde`) — Contact form submissions
- **Google Maps Embed** — Office location display
- **WhatsApp Deep Link** — Pre-filled inquiry messages

---

## Installation

### Prerequisites
- Node.js 18+
- Yarn package manager
- Python 3.10+ (for backend)

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Start development server (runs on port 3000)
yarn start
```

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start backend server (runs on port 8001)
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Environment Variables

**Frontend** (`frontend/.env`):
```
REACT_APP_BACKEND_URL=https://svb-constructions.preview.emergentagent.com
WDS_SOCKET_PORT=443
```

**Backend** (`backend/.env`):
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database
CORS_ORIGINS=*
```

---

## Build

```bash
# Production build
cd frontend
yarn build

# Preview production build locally
npx serve -s build
```

Output is generated in `frontend/build/`.

---

## Project Structure

```
svb-constructions/
├── frontend/
│   ├── public/
│   │   └── index.html              # HTML entry point
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Sticky navbar (glassmorphism → solid on scroll)
│   │   │   ├── Hero.jsx            # Cinematic hero with 3-image crossfade slider
│   │   │   ├── StatsStrip.jsx      # Animated stats counter strip
│   │   │   ├── Services.jsx        # 6 service cards with AI-generated images
│   │   │   ├── About.jsx           # About section with photo + mission/vision
│   │   │   ├── WhyChooseUs.jsx     # 4 glassmorphism cards on dark navy
│   │   │   ├── Team.jsx            # Leadership team with premium card design
│   │   │   ├── Certifications.jsx  # Certification/accreditation badges
│   │   │   ├── Portfolio.jsx       # Masonry project grid + modal + filters
│   │   │   ├── ProcessTimeline.jsx # 6-step construction process timeline
│   │   │   ├── Testimonials.jsx    # Auto-rotating testimonials carousel
│   │   │   ├── Contact.jsx         # Formspree form + Google Maps embed
│   │   │   ├── Footer.jsx          # 4-column footer with WhatsApp CTA
│   │   │   ├── FloatingButtons.jsx # Floating WhatsApp + back-to-top buttons
│   │   │   └── ui/                 # Shadcn UI components (button, input, etc.)
│   │   ├── data/
│   │   │   └── projects.js         # Project portfolio data (easy to update)
│   │   ├── App.js                  # Root component — assembles all sections
│   │   ├── App.css                 # Global animation keyframes
│   │   └── index.css               # Tailwind base + Google Fonts import
│   ├── package.json
│   ├── tailwind.config.js          # Brand colors + Sora/Inter font config
│   └── .env                        # Frontend environment variables
│
├── backend/
│   ├── server.py                   # FastAPI application
│   ├── requirements.txt            # Python dependencies
│   └── .env                        # Backend environment variables
│
├── memory/
│   └── PRD.md                      # Product Requirements Document
│
└── README.md                       # This file
```

---

## Key Features

| Feature | Details |
|---|---|
| **Hero Slider** | 3-image crossfade slideshow with Ken Burns effect, 5s auto-rotate |
| **Bilingual Text** | Alternating Kannada/English fade animation (5s each) |
| **Project Portfolio** | Masonry grid, 5 filter tabs, hover overlay, lightbox modal, Load More |
| **Leadership Team** | 3 executive profiles with experience badges, real photos, social links |
| **Contact Form** | Formspree integration, Zod validation, success/error states |
| **Google Maps** | Pinned to exact location: 4HXF+QR8, Gandhi Rd, Nyamati |
| **WhatsApp CTA** | Pre-filled message deep links on all WhatsApp buttons |
| **Animations** | Framer Motion — scroll reveals, stagger, counter animation, modals |
| **Responsive** | Mobile-first, tested at 320px–1920px |

---

## Adding New Portfolio Projects

Open `frontend/src/data/projects.js` and add a new object:

```js
{
  id: 7,                          // Unique ID
  name: "Project Name",
  category: "residential",        // residential | commercial | industrial | interiors
  image: "https://your-image-url.jpg",
  location: "Nyamathi, Karnataka",
  year: "2025",
  type: "Residential Villa",
  description: "2-3 line project description...",
  status: "Completed",
  featured: true,                 // true = large card | false = small card
}
```

---

## Deployment

### Option 1 — Vercel (Recommended for Frontend)

```bash
# 1. Push code to GitHub
git init && git add . && git commit -m "Initial commit"
git remote add origin https://github.com/your-username/svb-constructions.git
git push -u origin main

# 2. Connect GitHub repo to Vercel
# Visit: https://vercel.com/new
# → Import Repository → Select your repo
# → Framework: Create React App
# → Root Directory: frontend
# → Deploy
```

**Build Settings for Vercel:**
```
Build Command:    yarn build
Output Directory: build
Install Command:  yarn install
```

### Option 2 — Netlify

```bash
# Build locally
cd frontend && yarn build

# Drag & drop the 'build' folder at netlify.com/drop
# OR connect GitHub repo at app.netlify.com
```

### Custom Domain Connection

1. Purchase domain (e.g., `svbrconstructions.com`)
2. In Vercel dashboard → Domains → Add `svbrconstructions.com`
3. Update DNS records at your registrar:
   ```
   Type: A     Name: @    Value: 76.76.21.21
   Type: CNAME Name: www  Value: cname.vercel-dns.com
   ```
4. SSL certificate is provisioned automatically

### Environment Variables for Production

Set these in Vercel/Netlify dashboard:
```
REACT_APP_BACKEND_URL = https://your-production-domain.com
```

---

## Brand & Design System

### Color Palette
| Name | Hex | Usage |
|---|---|---|
| Brand Navy | `#001F3F` | Primary dark, backgrounds |
| Brand Gold | `#C8A96B` | Accents, CTAs, highlights |
| Soft Background | `#F8FAFC` | Section backgrounds |
| Text Primary | `#0F172A` | Body text |
| Text Secondary | `#94A3B8` | Subtitles, labels |
| Border | `#E2E8F0` | Card borders, dividers |

### Typography
- **Headings:** Sora (Google Fonts) — Bold, Semibold
- **Body:** Inter (Google Fonts) — Regular, Medium
- **Kannada:** Noto Sans Kannada — Regular, Semibold

---

## Business Information

| Field | Value |
|---|---|
| **Company** | Shree Veerabhadreshwara Constructions |
| **Brand Name** | SVB Constructions |
| **Industry** | Civil Engineering & Construction |
| **Location** | 4HXF+QR8, Gandhi Rd, Nyamati, Karnataka 577223 |
| **Phone 1** | +91 9035911632 (Sachin G S — Founder) |
| **Phone 2** | +91 63616 38075 (Sanjay G S — Managing Director) |
| **Email** | svbrconstructions@gmail.com |
| **Instagram** | [@svbrconstructions](https://www.instagram.com/svbrconstructions) |
| **WhatsApp** | [Chat](https://wa.me/919035911632) |
| **Founded** | 2025 |
| **Serving Since** | 2009 |

---

## License

This project is proprietary software developed exclusively for  
**Shree Veerabhadreshwara Constructions**.  
All rights reserved © 2025.
