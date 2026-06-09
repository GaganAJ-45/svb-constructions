# SVB Constructions Website

Production-ready marketing website for **Shree Veerabhadreshwara Constructions (SVB Constructions)**. The project is a React single-page site for services, portfolio, team, certifications, testimonials, and contact lead capture, with an optional FastAPI backend kept in the repository for future API use.

## Project Overview

- Frontend-first deployment target for GitHub -> Vercel
- Built as a single-page React application with section-based navigation
- Contact form currently submits directly to Formspree
- Backend is optional for current website operation and is not required for the Vercel frontend deployment

## Technology Stack

### Frontend
- React 19
- CRACO + Create React App
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form + Zod

### Backend
- FastAPI
- Motor / MongoDB
- Python 3.10+

### Integrations
- Formspree for contact form submission
- Google Maps Embed for office location
- WhatsApp deep links

## Repository Structure

```text
SVB-Constructions/
|-- backend/
|   |-- .env.example
|   |-- requirements.txt
|   `-- server.py
|-- frontend/
|   |-- .env.example
|   |-- public/
|   |   |-- index.html
|   |   |-- robots.txt
|   |   `-- sitemap.xml
|   |-- scripts/
|   |   `-- prepare-seo-assets.js
|   |-- src/
|   |   |-- components/
|   |   |-- data/
|   |   |-- App.css
|   |   |-- App.js
|   |   `-- index.css
|   |-- craco.config.js
|   |-- package-lock.json
|   `-- package.json
|-- memory/
|-- tests/
|-- test_reports/
|-- .gitignore
`-- README.md
```

## Local Development

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer
- Python 3.10 or newer, only if you want to run the backend

### Frontend Installation

```bash
cd frontend
npm install
```

### Frontend Development Server

```bash
cd frontend
npm start
```

Default local URL:

```bash
http://localhost:3000
```

### Backend Installation

The backend is optional for the current website.

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### Backend Development Server

```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

## Environment Variables

### Frontend

Create `frontend/.env` from `frontend/.env.example` when needed.

```env
REACT_APP_SITE_URL=https://svb-constructions.vercel.app/
ENABLE_HEALTH_CHECK=false
```

Notes:

- `REACT_APP_SITE_URL` is used during production build post-processing to stamp the correct canonical URL, sitemap URL, Open Graph URL, and robots sitemap URL.
- `ENABLE_HEALTH_CHECK` is optional and only used for the custom local health-check plugin.

### Backend

Create `backend/.env` from `backend/.env.example` if you plan to run the API.

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database
CORS_ORIGINS=*
```

## Build Commands

### Frontend Production Build

```bash
cd frontend
npm run build
```

Build output directory:

```text
frontend/build
```

### What the Build Does

- Compiles the React app with CRACO
- Emits static files into `frontend/build`
- Runs `scripts/prepare-seo-assets.js` after build
- Rewrites SEO files with `REACT_APP_SITE_URL` when that variable is provided

## Package and Build Verification

Current frontend deployment settings:

- Framework: **Create React App / React**
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `build`
- Root directory in Vercel: `frontend`

Current backend deployment status:

- Backend is **not required** for the live marketing website
- The existing backend only provides a simple `/api/status` demo endpoint with MongoDB storage

## GitHub Repository Preparation

This repository has been reviewed for deployment readiness with these outcomes:

- `.gitignore` covers Node, Python, local environment files, Vercel cache, and generated local logs
- `frontend/package.json` scripts are valid for local dev and production build
- `frontend/package-lock.json` is present for deterministic npm installs
- Node engine requirement is declared as `>=18`
- Build succeeds locally
- No frontend import failures were found during production build
- Public SEO assets now support deploy-time site URL stamping

## GitHub Setup Instructions

### Step 1: Create a GitHub Repository

1. Sign in to GitHub.
2. Create a new repository.
3. Do not add a README from GitHub if you are pushing this existing project.

### Step 2: Initialize Git Locally

If the repository is not already connected:

```bash
git init
git add .
git commit -m "Prepare project for production deployment"
```

### Step 3: Add GitHub Remote

```bash
git remote add origin https://github.com/GaganAJ-45/svb-constructions.git
```

### Step 4: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## GitHub to Vercel Integration Guide

### Step 1: Push code to GitHub repository

Push the full repository, including:

- `frontend/`
- `backend/`
- `README.md`
- `frontend/package-lock.json`

### Step 2: Connect GitHub repository to Vercel

1. Open [Vercel](https://vercel.com/).
2. Click **Add New Project**.
3. Import the GitHub repository.

### Step 3: Configure build settings

Use these settings:

- Framework Preset: `Create React App`
- Root Directory: `frontend`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `build`

Add this environment variable in Vercel before production deployment:

```env
REACT_APP_SITE_URL=https://svb-constructions.vercel.app/
```

Optional:

```env
ENABLE_HEALTH_CHECK=false
```

### Step 4: Deploy website

Click **Deploy** and wait for the build to complete.

### Step 5: Add custom domain

1. Open the Vercel project.
2. Go to **Settings -> Domains**.
3. Add your domain, for example `svbrconstructions.com`.
4. Add DNS records requested by Vercel at your domain registrar.

Typical DNS records:

```text
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 6: Redeploy after future GitHub commits

After the GitHub repository is connected, every push to the production branch can automatically trigger a new Vercel deployment.

Typical future workflow:

```bash
git add .
git commit -m "Update site content"
git push origin main
```

## Vercel Deployment Notes

- This project does not use React Router page routes; navigation is section-anchor based.
- Because of that, no SPA rewrite rule is required for deployment.
- Website-owned static assets are stored in `frontend/public/assets`.
- `robots.txt`, `sitemap.xml`, canonical URL, and Open Graph URL should always use `https://svb-constructions.vercel.app/` or the final custom production domain via `REACT_APP_SITE_URL`.

## Forms Review

### Forms Found

There is one production form:

- `frontend/src/components/Contact.jsx`

### How the Current Form Works

- Built with React Hook Form and Zod validation
- Submits directly to Formspree endpoint `https://formspree.io/f/mwvzzvde`
- Shows client-side success and error banners based on the submission response
- Does not use the backend server
- Does not store leads in your own database

### Form Verification Status

- The implementation is valid and production-appropriate for a simple brochure website
- Client-side validation is present
- The live external Formspree submission could not be fully tested from this environment without sending a real lead request
- No code issue was found that would block submission in a normal browser environment

### Does the Form Need Additional Infrastructure?

For the current site, **no additional infrastructure is required** if your goal is:

- Receive contact emails
- Avoid maintaining a backend
- Keep deployment simple on Vercel

### Production Recommendation for Forms

Best current production choice:

- **Keep Formspree**

Use Formspree when you want:

- Fast setup
- No server maintenance
- Reliable email delivery for a contact form

Consider **Resend + Vercel Functions** later if you want:

- Branded email sending from your own domain
- Better control over message formatting
- Spam handling logic
- Lead routing or CRM integration

Consider **database storage** later if you want:

- Lead dashboard
- Admin search/export
- CRM sync
- Follow-up workflows

You do **not** need Nodemailer or a custom backend for the current brochure-style website.

## Static Assets and Hosting Assets

Deployment-critical files currently preserved:

- `frontend/public/index.html`
- `frontend/public/robots.txt`
- `frontend/public/sitemap.xml`
- `frontend/package.json`
- `frontend/package-lock.json`
- `frontend/craco.config.js`
- `frontend/postcss.config.js`
- `frontend/tailwind.config.js`

Asset status:

- Local public SEO files exist and are linked correctly
- Frontend build assets are generated successfully
- Image content is largely remote-hosted via external URLs
- No broken local asset imports were detected during build

## Troubleshooting

### Build fails on Vercel

Check:

- Vercel project root directory is set to `frontend`
- Node version is 18+
- Install command is `npm install`
- Build command is `npm run build`

### Canonical URL, sitemap, or robots point to the wrong domain

Check:

- `REACT_APP_SITE_URL` is set in Vercel project environment variables
- The project has been redeployed after setting that variable

### Contact form does not send

Check:

- Formspree form ID is still correct in `frontend/src/components/Contact.jsx`
- Formspree project is active
- Formspree email forwarding or inbox settings are configured
- Browser network request to Formspree is not blocked by browser extensions

### Images do not load

Check:

- External image URLs are still available
- No CDN or hotlink restriction is blocking image delivery

### Google Map does not appear

Check:

- Browser is not blocking iframe embeds
- The Google Maps embed URL is still valid

## Deployment Checklist

Use this checklist before marking production ready:

- Build succeeds with `npm run build`
- Vercel root directory is set to `frontend`
- Correct production domain is set in `REACT_APP_SITE_URL`
- Responsive design is verified on mobile, tablet, desktop, and large screens
- SEO metadata is correct for the final domain
- Open Graph tags are correct for the final domain
- `robots.txt` is available in production
- `sitemap.xml` is available in production
- Contact form works in production
- Images load correctly in production
- Google Maps embed loads correctly
- Phone, email, WhatsApp, and Instagram links work
- Lighthouse/performance spot-check is acceptable
- Final domain is connected and SSL is active

## Deployment Commands

### Local build

```bash
cd frontend
npm install
npm run build
```

### Push latest changes

```bash
git add .
git commit -m "Deploy-ready updates"
git push origin main
```

## Final Readiness Summary

Current status after review:

- Frontend is ready for GitHub -> Vercel deployment
- Backend is optional and not required for the current website
- Build process is working
- Form setup is suitable for production brochure-site use
- SEO files are now prepared for `https://svb-constructions.vercel.app/`

Remaining deployment actions for the project owner:

1. Push the repository to GitHub.
2. Import it into Vercel with root directory `frontend`.
3. Set `REACT_APP_SITE_URL` to `https://svb-constructions.vercel.app/` or the final custom domain.
4. Deploy and verify the production contact form.
5. Connect the custom domain.

## License

This project is proprietary software developed for **Shree Veerabhadreshwara Constructions**. All rights reserved.
