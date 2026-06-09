# Production URL Audit Report

Audit date: 2026-06-09

Production URL: `https://svb-constructions.vercel.app/`

## Files That Contained Preview Or Placeholder URLs

- `frontend/public/index.html`
- `frontend/public/robots.txt`
- `frontend/public/sitemap.xml`
- `frontend/src/components/About.jsx`
- `frontend/src/components/Footer.jsx`
- `frontend/src/components/Hero.jsx`
- `frontend/src/components/Navbar.jsx`
- `frontend/src/components/Services.jsx`
- `frontend/src/components/Team.jsx`
- `frontend/src/data/projects.js`
- `README.md`

## Files Modified

- `README.md`
- `frontend/public/index.html`
- `frontend/public/robots.txt`
- `frontend/public/sitemap.xml`
- `frontend/scripts/prepare-seo-assets.js`
- `frontend/src/components/About.jsx`
- `frontend/src/components/Footer.jsx`
- `frontend/src/components/Hero.jsx`
- `frontend/src/components/Navbar.jsx`
- `frontend/src/components/Services.jsx`
- `frontend/src/components/Team.jsx`
- `frontend/src/data/projects.js`
- `frontend/public/assets/about-us-photo.jpg`
- `frontend/public/assets/company-logo.jpeg`
- `frontend/public/assets/hero-1.jpg`
- `frontend/public/assets/hero-2.jpg`
- `frontend/public/assets/hero-3.jpeg`
- `frontend/public/assets/project-contemporary-residence.jpeg`
- `frontend/public/assets/project-elevated-modern-design.jpeg`
- `frontend/public/assets/project-luxury-villa.jpeg`
- `frontend/public/assets/project-modern-family-home.jpeg`
- `frontend/public/assets/project-traditional-modern-home.jpeg`
- `frontend/public/assets/service-3d-elevation.png`
- `frontend/public/assets/service-construction-management.png`
- `frontend/public/assets/service-estimation-costing.png`
- `frontend/public/assets/service-expert-consulting.png`
- `frontend/public/assets/service-interior-design.png`
- `frontend/public/assets/service-planning-design.png`
- `frontend/public/assets/team-panchappa.jpeg`
- `frontend/public/assets/team-sachin.jpeg`
- `frontend/public/assets/team-sanjay.jpeg`

## URL Replacements

- `__SITE_URL__` in canonical, Open Graph, LocalBusiness, Organization, robots, and sitemap files now resolves to `https://svb-constructions.vercel.app/`.
- Placeholder `https://your-domain.com` examples in `README.md` now use `https://svb-constructions.vercel.app/`.
- Placeholder GitHub remote `github.com/your-username/svb-constructions.git` now uses `github.com/GaganAJ-45/svb-constructions.git`.
- Hero image from `customer-assets[.]emergentagent[.]com/.../2n1egh9y_Hero_img1.jpg` is now `/assets/hero-1.jpg`; metadata uses `https://svb-constructions.vercel.app/assets/hero-1.jpg`.
- Hero image from `customer-assets[.]emergentagent[.]com/.../onqxnj66_Hero_img2.jpg` is now `/assets/hero-2.jpg`.
- Hero image from `customer-assets[.]emergentagent[.]com/.../ye8vzajl_Hero_img3.jpeg` is now `/assets/hero-3.jpeg`.
- Logo image from `customer-assets[.]emergentagent[.]com/.../awy71t67_company_logo1.jpeg` is now `/assets/company-logo.jpeg`; structured data uses `https://svb-constructions.vercel.app/assets/company-logo.jpeg`.
- About image from `customer-assets[.]emergentagent[.]com/.../g3fj5mey_about%20us%20photo.jpg` is now `/assets/about-us-photo.jpg`.
- Project images from `customer-assets[.]emergentagent[.]com/...` are now stored under `/assets/project-*.jpeg`.
- Team images from `customer-assets[.]emergentagent[.]com/...` are now stored under `/assets/team-*.jpeg`.
- Service images from `static.prod-images[.]emergentagent[.]com/...` are now stored under `/assets/service-*.png`.

## Forms And External Links

- Contact form action remains Formspree: `https://formspree.io/f/mwvzzvde`.
- Google Maps links remain Google Maps URLs.
- WhatsApp, telephone, email, Instagram, Google Fonts, and Unsplash references remain valid external service links.
- No form action, success URL, redirect URL, navigation link, footer link, or contact link references a preview domain.

## Manual Review Notes

- `README.md` still documents local development with `http://localhost:3000`; this is local-only documentation and is not production-facing website code.
- `README.md` still includes a backend `.env` example with `mongodb://localhost:27017`; this is local-only documentation and is not required for the current frontend Vercel deployment.
- `frontend/package.json` and `frontend/package-lock.json` still reference `assets.emergent.sh` for `@emergentbase/visual-edits`. This is an npm package tarball dependency, not an Emergent preview/staging website URL. It does not appear in runtime website links.

## Final Result

No Emergent preview URLs remain in the production codebase.
