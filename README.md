# Pusho Ke Pohe — Recreation (original code)
Reference: https://pusho.fun/ — dark temple digital granthalaya, Hindi, 9-book shelf, Puniverse lore, genesis film, free reading.

## Run locally
```
python3 -m http.server 8000
# open http://localhost:8000/index.html
```
No build step. Static HTML/CSS/JS + Google Fonts CDN only.

## Deploy
Copy all `*.html`, `styles.css`, `app.js` to any static host (Netlify/Vercel/GitHub Pages/ Nginx).

## What was matched
- Floating pill nav, hero (🪔 + gold emboss title + Visit Library), bookshelf vault (5 live + 4 soon), Puniverse teaser, music toggle, genesis section, additional gallery with tap-to-zoom dialog, CTA, full footer + sitemap/about/contact/faq/legal/404.
- Reader: click spine → modal, prev/next + Arrow keys + Esc, page-save `pusho_volume_page_idx`, audio pref `pusho_reader_audio_state`, intro gate `pusho_intro_viewed`.
- All verses/art original placeholders — no copied images/video/text from reference.
