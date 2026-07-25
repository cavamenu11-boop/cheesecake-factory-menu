# Cheesecake Factory Menus

Independent, unofficial guide to The Cheesecake Factory menu — prices, calories, hours, allergens, and more. Not affiliated with or endorsed by The Cheesecake Factory, Inc.

Live at: **cheesecakefactorymenus.us**

---

## Deploying to GitHub Pages

This is a static site (HTML/CSS/vanilla JS only) — no build step, no dependencies, no server-side code.

### 1. Push this repo to GitHub

```bash
git init
git add .
git commit -m "Initial site launch"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select branch `main`, folder `/ (root)`
3. Save

### 3. Connect your custom domain

1. In **Settings → Pages → Custom domain**, enter `cheesecakefactorymenus.us`
2. At your domain registrar / DNS provider, add:
   - **A records** for the apex domain (`cheesecakefactorymenus.us`) pointing to GitHub Pages' IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME record** for `www` pointing to `<your-username>.github.io`
3. Wait for DNS to propagate (can take up to 24–48 hours), then check "Enforce HTTPS" in the Pages settings once available

### 4. Before going fully live — checklist

- [ ] Upload real images to `/images/` using the exact filenames listed in `IMAGE-FILENAMES.md` (currently placeholders — pages will show broken image icons until these are added)
- [ ] Replace the placeholder favicon in `/favicon/` with real branding once you have a logo
- [ ] Set up a real inbox for the Contact page (currently a form UI with no backend — connect it to Formspree, Google Forms, or similar, or add a real mailto: address)
- [ ] Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools
- [ ] Verify domain ownership in Google Search Console
- [ ] Build remaining dedicated pages (Pasta, Desserts, Sandwiches & Burgers, Kids' Menu, SkinnyLicious, Flatbread Pizzas, Chicken, Seafood, Steaks, Promo Codes) — these are currently linked in navigation but not yet built

## Folder Structure

```
/
├── index.html                 Homepage
├── css/style.css              Shared stylesheet
├── js/script.js                Shared JavaScript (nav, accordion, back-to-top)
├── images/                     All site images (see IMAGE-FILENAMES.md)
├── favicon/                    Favicon + web manifest
├── downloads/                  Downloadable PDF guides
├── robots.txt
├── sitemap.xml
└── [page-name]/index.html     One folder per page (clean URLs, no .html extensions)
```

## Tech

- Semantic HTML5, CSS3 (custom properties, no framework), vanilla JavaScript
- Schema.org JSON-LD (WebPage, BreadcrumbList, FAQPage) on every content page
- Fully responsive, mobile-first
- No cookies, tracking, or third-party scripts currently included
