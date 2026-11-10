# ProFund Liberty Group LLC — Website

Static website (plain HTML, CSS and a little JavaScript). No framework and no build step.

## Hosting on Cloudflare Pages (free)

1. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git** and pick this repository.
2. Framework preset: **None**. Build command: *(leave empty)*. Build output directory: `/`.
3. Deploy. Cloudflare serves `index.html` at the root and `404.html` for missing pages.

## Things to fill in before launch

All bracketed placeholders have been filled in. What's left:

- **Phone number:** there is none on the site yet. When you have one, add it to the footer
  (every page), the Home contact section, the Contact page, and the contact details on the legal pages.

### Contact forms (Web3Forms)

Both forms (`index.html` and `contact.html`) send to Web3Forms using the access key in
the hidden `access_key` field. Submissions are emailed to the address on that Web3Forms
account. The key is meant to be public, so it's fine for it to be in the page source.
To use a different key, replace it in both files.

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
