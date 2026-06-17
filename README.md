# Jerome M. Valkarreras — Spanish ELE Teacher

Bilingual landing page (English default) for Spanish as a Foreign Language classes.

## Stack

- Single static `index.html`
- Tailwind CSS + Font Awesome (CDN)
- Vanilla JS (language switcher, blog, contact form, WhatsApp prefill)

## Customize

Edit `CONFIG` in `index.html`:

```js
const CONFIG = {
  whatsappNumber: '346XXXXXXXX', // your number, country code, no +
  email: 'jeromedina1@gmail.com'
};
```

## Local preview

```bash
open index.html
# or
python3 -m http.server 8080
```

## Deploy (GitHub Pages + Grok)

This repo is ready for **GitHub Pages** via the workflow in `.github/workflows/deploy.yml`.

1. Push this folder to a GitHub repository.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. After the first push to `main`, the workflow publishes the site automatically.

Live URL format: `https://<username>.github.io/<repo>/`

## Language switcher

- Default: **English** (ENG active/red, ESP gray)
- Choice is saved in `localStorage`