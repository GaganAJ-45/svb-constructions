# PRD — Shree Veerabhadreshwara Constructions — Premium Landing Page

## Project Overview
**Client:** Shree Veerabhadreshwara Constructions (SVB Constructions)  
**Type:** Single-page Premium Luxury Landing Page  
**Domain:** https://svb-constructions.preview.emergentagent.com  
**Last Updated:** February 2026

---

## Architecture

**Stack:**
- Frontend: React 18+, Tailwind CSS 3, Framer Motion 11
- Icons: Lucide React
- Form: React Hook Form + Zod + Formspree (ID: mwvzzvde)
- Fonts: Sora (headings), Inter (body) — Google Fonts

**Brand Colors:**
- Navy: #001F3F
- Gold: #C8A96B
- Light: #F8FAFC
- Text: #0F172A / #94A3B8
- Border: #E2E8F0

---

## Sections Implemented (Date: Feb 2026)

| Section | Component | Status |
|---------|-----------|--------|
| Navbar | Navbar.jsx | ✅ Sticky, transparent→glass on scroll, mobile hamburger |
| Hero | Hero.jsx | ✅ Ken Burns slider (2 images, 5s auto-change), CTAs |
| Stats Strip | StatsStrip.jsx | ✅ 3 animated counters (10+ years, 50+ projects, 99%) |
| Services | Services.jsx | ✅ 6 cards, hover gold border + lift effect |
| About Us | About.jsx | ✅ Image + content, mission/vision, trust badges |
| Why Choose Us | WhyChooseUs.jsx | ✅ 4 glassmorphism cards on navy, animated counters |
| Team | Team.jsx | ✅ 3 cards, grayscale→color on hover, social links |
| Certifications | Certifications.jsx | ✅ 6 certification cards in grid |
| Portfolio | Portfolio.jsx | ✅ Filter tabs + 6 projects + lightbox modal |
| Process Timeline | ProcessTimeline.jsx | ✅ 6-step, horizontal (desktop) + vertical (mobile) |
| Testimonials | Testimonials.jsx | ✅ Auto-rotating carousel (5s), 3 testimonials |
| Contact | Contact.jsx | ✅ Formspree form + Google Maps embed |
| Footer | Footer.jsx | ✅ 4-column, links, WhatsApp CTA |
| Floating Buttons | FloatingButtons.jsx | ✅ WhatsApp + back-to-top |

---

## User Personas

1. **Residential Client** — Homeowner in Bengaluru looking to build a premium villa/house
2. **Commercial Client** — Business owner needing office/retail construction
3. **Industrial Client** — Factory/warehouse construction seeker

---

## Core Requirements (Static)

- Brand color palette: Navy #001F3F, Gold #C8A96B
- Premium luxury feel — no generic contractor look
- Framer Motion animations: fade-up reveals, stagger cards, Ken Burns hero
- Formspree contact form (ID: mwvzzvde) → svbrconstructions@gmail.com
- WhatsApp link: https://wa.me/919035911632
- Contact: +91 9035911632 (Sachin G S), +91 63616 38075 (Sanjay K S)
- Email: svbrconstructions@gmail.com
- Address: Gandhi Rd, Nyamati, Karnataka 577223

---

## What's Been Implemented

### Feb 2026 — Full MVP + Updates
- All 14 sections built and styled
- **Hero images updated** to client's own photos (Hero_img1 & Hero_img2)
- Hero image slider with Ken Burns effect
- Portfolio with 6 projects + filter tabs (All/Residential/Commercial/Industrial/Interiors)
- Portfolio lightbox modal with project details
- Contact form with Formspree integration (mwvzzvde) + validation
- Google Maps embed for Nyamati, Karnataka
- Auto-rotating testimonials carousel
- Animated counters in Stats + Why Choose Us sections
- Team profiles: Sachin G S, Sanjay K S, Ravi Kumar M
- Certifications: 6 industry badges
- Process Timeline: 6-step (horizontal desktop, vertical mobile)
- **WhatsApp pre-filled message** on all WA links (floating button, footer, team cards)
- Floating WhatsApp button + back-to-top
- Scroll progress bar at top of page
- SEO meta tags, page title: "Shree Veerabhadreshwara Constructions | Premium Civil Engineering"
- Responsive design: desktop/tablet/mobile

---

## Prioritized Backlog

### P0 — Client must do (to personalize)
- [ ] Upload actual project photos to replace stock images in Portfolio
- [ ] Upload team member professional headshots
- [ ] Add company logo SVG/PNG to replace Building2 icon
- [ ] Add real certification logos/images

### P1 — Enhancements
- [ ] Add FAQ section (common questions about construction costs/timelines)
- [ ] Add blog/news section for SEO
- [ ] Add video background option for hero
- [ ] WhatsApp pre-filled message when clicking contact button
- [ ] Add loading skeleton states for images
- [ ] Google Analytics integration (when user provides GA4 ID)

### P2 — Future
- [ ] CMS integration for portfolio/blog (Contentful/Sanity)
- [ ] Multi-language support (Kannada)
- [ ] Online quote calculator
- [ ] Client portal for project tracking

---

## Portfolio Image Structure (For Client)
Upload images to `/public/projects/[project-name]/main.jpg`
Update `/app/frontend/src/components/Portfolio.jsx` — the `projects` array.

Each project object:
```js
{
  id: 1,
  name: "Project Name",
  category: "residential|commercial|industrial|interiors",
  image: "/projects/[folder]/main.jpg",
  description: "...",
  year: 2024,
  location: "Bengaluru"
}
```
