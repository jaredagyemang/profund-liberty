# ProFund Liberty Group LLC — Website

Static website (plain HTML, CSS and a little JavaScript). No framework and no build step.

## Hosting on Cloudflare Pages (free)

1. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git** and pick this repository.
2. Framework preset: **None**. Build command: *(leave empty)*. Build output directory: `/`.
3. Deploy. Cloudflare serves `index.html` at the root and `404.html` for missing pages.

## Things to fill in before launch

Search all files for `[` to find every placeholder. On the pages they are shown with a
dashed gold box (the `ph` class) so they're easy to spot; remove the
`<span class="ph">…</span>` wrapper when you put in the real text.

| Placeholder | Where |
|---|---|
| `[PHONE]` | Footer (every page), Home, Contact, legal pages |
| `[EMAIL]` | Footer (every page), Home, Contact, legal pages |
| `[MAILING ADDRESS]` | Footer (every page), Contact, legal pages |
| `[STATE OF FORMATION]` | Footer (every page), About, FAQ, Terms of Use |
| `[BUSINESS HOURS]` | Contact |
| `[TEAM MEMBER NAME 1–3]`, `[TITLE]`, `[SHORT BIO]` | About |
| `[STATE 1–6]`, `[COUNTY LIST]` | States & Counties We Serve |
| `[DATE]` | "Last updated" on Privacy, Terms, Disclaimer |

### Contact forms (Web3Forms)

1. Get a free access key at https://web3forms.com (enter the email that should receive leads).
2. In `index.html` and `contact.html`, replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key
   (look for the `WEB3FORMS ACCESS KEY` comment).

Until the key is added, the forms show a "not connected yet" message instead of sending.

### Legal pages

`privacy.html`, `terms.html` and `disclaimer.html` contain basic template text only.
Have an attorney review them, and check your state's rules for surplus funds recovery
companies (fee caps, required disclosures, licensing) before launch.

## Files

- `*.html` — one file per page (header and footer are repeated in each page)
- `css/styles.css` — all styles; brand colors are at the top (`--navy`, `--gold`, `--cream`)
- `js/main.js` — mobile menu, form sending, footer year
- `assets/` — web-optimized logo files made from `logo.png`, favicon, social share image
- `logo.png` — original logo
