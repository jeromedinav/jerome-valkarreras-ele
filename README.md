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

## Deploy (Netlify — production)

**Live site:** https://jerome-valkarreras-ele.netlify.app

```bash
./scripts/deploy-netlify.sh
```

Requires one-time login: `netlify login`

Config: `netlify.toml` (publish directory = project root)

## GitHub mirror

Repo: https://github.com/jeromedinav/jerome-valkarreras-ele

GitHub Pages mirror: https://jeromedinav.github.io/jerome-valkarreras-ele/

## Language switcher

- Default: **English** (ENG active/red, ESP gray)
- Choice is saved in `localStorage`