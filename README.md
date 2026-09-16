# TRANG's Lab website

**Transformative Research in Artificial Intelligence & Generalization**
Faculty of Computer Science and Engineering, Ho Chi Minh City University of Technology (HCMUT)

Static site (plain HTML/CSS/JS, no build step). Open `index.html` directly, or serve it:

```sh
python3 -m http.server 8000
```

## Pages

| File | Contents |
|---|---|
| `index.html` | Hero banner, About Us, research areas, Openings, News |
| `people.html` | PI, Research Fellows, Research Students, Associated Members, UG/Master, Former Members |
| `publications.html` | Papers grouped by year + Preprints, with BibTeX toggle & copy |
| `teaching.html` | Course list |
| `contact.html` | Address, phone, email, OpenStreetMap embed |

Navbar and footer are **duplicated verbatim in all five files** — edit one, apply the same change to the rest.

## Branding

HCMUT blue palette, defined by literal hex values in `css/templatemo_style.css`:

| Role | Hex |
|---|---|
| Primary (navbar, footer headings) | `#00549F` |
| Accent / links | `#0066B3` |
| Dark hover / deep panels | `#003E78`, `#002B54` |
| Light tints | `#E6F0F9`, `#F2F7FC` |

Logos in `asset/images/logo/`: `-light.svg` variants sit on the blue navbar, the plain ones on the white footer.

## Placeholders to replace

- **Logos** — `hcmut.svg` / `hcmut-light.svg` are a generated `BK` placeholder, **not** the official HCMUT mark. Swap in the real logo.
- **Hero banners** — `asset/images/homepage/banner{1..4}.svg` are blue gradients; replace with lab or campus photos (referenced from `#header_1..4` in the CSS).
- **People** — every card uses `asset/images/people/avatar.svg` with `[PI Name]` / `Student Name N` placeholders.
- **Publications** — 9 example entries across 2026 / 2025 / 2024 / Preprints. Copy an entry's markup to add more; each needs a unique `id` shared by the `<td>`, `togglebib()`, and the BibTeX `<code>`/`<span>` ids.
- **Teaching** — 3 example courses.
- **Contact** — phone `+84 28 3865-1670` and `info@trang-lab.org` are placeholders.
- **Footer socials** — Google Scholar / GitHub / X all point at `#`.

## JavaScript

| File | Purpose |
|---|---|
| `js/headers.js` | Hero banner rotation (5 s) |
| `js/slideshow.js` | Highlight carousel (3 s) |
| `js/hidebib.js` | BibTeX show/hide |
| `js/copy.js` | Copy BibTeX to clipboard |
| `js/mobile.js` | Collapse navbar on scroll (<768 px) |
| `js/forbid.js` | Blocks right-click / F12 / view-source shortcuts — delete this if you don't want it |

The News "SHOW MORE / SHOW LESS" control is pure CSS (a hidden checkbox), no JS.

## Notes

- `_reference/` holds the original VAiL pages, kept **only** as a markup reference. It contains real people's names, photos and publications — it is gitignored and must never be deployed.
- Third-party CSS/JS loads from CDNs; Bootstrap 3.2 CSS is paired with Bootstrap 4.5 JS (inherited from the original template).
