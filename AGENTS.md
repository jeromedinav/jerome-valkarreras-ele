# Jerome ELE — reglas del proyecto

Sitio web personal de Jerome M. Valkarreras (profesor de Español ELE). Landing bilingüe EN/ES estática, desplegada en Netlify.

## Rutas y URLs

| Qué | Dónde |
|-----|-------|
| Repo local | `/Users/portatil-jmv/jerome-valkarreras-ele` |
| GitHub | https://github.com/jeromedinav/jerome-valkarreras-ele |
| Rama principal | `main` |
| Producción (Netlify) | https://jerome-valkarreras-ele.netlify.app |
| Mirror GitHub Pages | https://jeromedinav.github.io/jerome-valkarreras-ele/ |

## Cómo arrancar (terminal del Mac)

El usuario solo escribe:

```bash
grok
```

En `~/.zshrc` hay un wrapper que hace automáticamente:
- `--cwd /Users/portatil-jmv/jerome-valkarreras-ele`
- `--resume` (última sesión de este proyecto)
- Carga este `AGENTS.md` al arrancar

No pedirle al usuario que haga `cd`, `/resume` ni que recuerde rutas.

Ejecutar tú mismo los comandos (deploy, git, etc.); no limitarse a decirle al usuario qué ejecutar.

## Deploy a producción

```bash
cd /Users/portatil-jmv/jerome-valkarreras-ele
bash scripts/deploy-netlify.sh "mensaje del deploy"
```

- Netlify CLI en: `/Users/portatil-jmv/.local/node-v22.16.0-darwin-arm64/bin`
- Si falla auth: `netlify login`
- Config: `netlify.toml` (publish = raíz del proyecto, sin build)
- Tras push a `main`, desplegar con el script anterior (no asumir auto-deploy si no está confirmado)

## Stack y archivos clave

- **Un solo HTML:** `index.html` (~todo el sitio: estilos, JS, i18n, blog, test de nivel)
- **Test de nivel:** `js/level-test-data.js` (75 ejercicios, 3 bloques MCER × 25)
- **Imágenes:** `images/` (hero, retratos, about) y `images/blog/` (post-1.jpg … post-6.jpg)
- **Scripts:** `scripts/deploy-netlify.sh`, `scripts/publish.sh`
- Tailwind + Font Awesome vía CDN
- `CONFIG` en `index.html`: `whatsappNumber`, `email`

## Qué incluye el sitio (mantener)

- Hero con foto de clase + retrato animado
- Secciones: About, Services, Methodology, Testimonials, Pricing, Contact
- Blog: 6 posts (grid + artículos completos)
- **Test de nivel integrado** (nav “Test”): 3 bloques A1–A2, B1–B2, C1–C2, tipos H5P-style (fill, drag, order, multi, listen, reading, match, mc, tf)
- Selector de idioma EN/ES (default EN, `localStorage`)
- Vistas: `showHome()`, `showBlog()`, `showTest()` — ocultar/mostrar secciones `#blog` y `#test-nivel` enteras, no solo el div interior

## Qué NO reintroducir (rechazado por el usuario)

- Teacher pack / pack docente ELE
- Gumroad, tienda, descargas ZIP de materiales
- Manuales Genially, `_redirects` 404, nav “Resources”
- Cualquier contenido del reset a `db50aec` que se eliminó a propósito

Si el usuario pide “volver atrás”, confirmar qué commit o qué feature — no restaurar el pack sin pedido explícito.

## Tipografía y diseño (decisiones recientes)

- **Texto negro absoluto (`#000`)** en fondos claros: about, servicios, blog, test, precios, etc.
- **Hero:** texto **blanco** sobre la foto — NUNCA aplicar negro al `.hero` ni a `#home-content .hero h1`
- **Test:** en botones rojos al hover, todo el texto (incl. `.level-test-block-meta`) debe pasar a **blanco**
- Blog: imágenes **locales** en `images/blog/` — no usar picsum.photos
- Iconos/checks rojos en listas están bien; el cuerpo de texto va en negro con peso 600–700

## Git

```bash
git status
git add …
git commit -m "mensaje"
git push origin main
```

Commit de referencia del test completo: `db50aec` (“Expand level test to 75 exercises…”).

## Preview local

```bash
open index.html
# o
python3 -m http.server 8080
```

## Contacto / config pendiente

- Sustituir `CONFIG.whatsappNumber: '346XXXXXXXX'` por el número real internacional (sin +).

## Idioma con el usuario

Jerome escribe en español (a veces con tono directo). Responder en español, ejecutar cambios sin delegar comandos al usuario, y desplegar cuando toque.