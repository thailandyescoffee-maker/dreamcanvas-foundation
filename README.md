# Dream Canvas Foundation — Website

Production build. Design approved and locked across all pages.

## Pages

| File | Route | Status |
|---|---|---|
| `index.html` | `/` | Locked |
| `about.html` | `/about` | Locked |
| `support.html` | `/support` | Locked |
| `contact.html` | `/contact` | Locked |
| `donate.html` | `/donate` | Locked |

All internal navigation uses clean, root-relative paths (e.g. `/about`, not `/about.html`).
Confirm your hosting environment serves `about.html` at the `/about` route (GitHub Pages
and most static hosts do this automatically for files named this way; verify after
deploy).

## Structure

```
├── index.html, about.html, support.html, contact.html, donate.html
├── css/styles.css          — single shared stylesheet
├── js/main.js               — mobile nav toggle + header-height measurement
├── fonts/                   — self-hosted Lora (variable, regular + italic)
├── images/                  — production photography + logo + favicons
├── robots.txt, sitemap.xml, site.webmanifest
```

Work Sans (body font) is loaded from Google Fonts via CDN; Lora (headings) is
self-hosted in `/fonts`.

## Outstanding items requiring action before/after deploy

- **Contact form and Donate/Belong page form**: built with full client-side validation
  and success/error states, but not yet connected to a real submission endpoint. Both
  currently point to a placeholder and will show an honest "not yet connected" message
  rather than falsely claiming success. Wire up a form backend (e.g. Formspree) and
  update the `action` attribute in both forms to activate.
- **Bank transfer details** (Donate page): confirm the `hello@dreamcanvas.asia` address
  used throughout is actually active before launch.
- Confirm the domain in `sitemap.xml`, `robots.txt`, and the canonical/OG tags in each
  page's `<head>` (currently `https://www.dreamcanvas.asia`) matches the final production
  domain.

## Design system

Locked and should not be modified without explicit approval:
- Typography: Lora (serif, headings) + Work Sans (sans, body)
- Colors: ivory/sage palette, defined as CSS custom properties in `css/styles.css`
- Image system: canonical large-feature image size (461×553 desktop / 248×298 mobile)
  used across hero sections on Home, About, Support, and Contact
- Card system: rounded-card style (`--radius-card`) for informational cards; separate
  capsule style (`--radius`, 999px) specifically for Support's "Ways to Support" cards —
  this is an intentional, approved distinction, not an inconsistency
- About's timeline (2012/2026) section uses its own card-width image treatment,
  deliberately distinct from the hero image system elsewhere — approved as a
  content-appropriate exception, not to be unified with the hero pattern

Any new page should use Home as the primary visual reference and follow this same
system.
