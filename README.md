# V V Dhrishya — Portfolio

A personal portfolio site built from scratch with plain HTML, CSS, and JavaScript — no frameworks, no build step.

## Features

- Single-page layout: About, Skills, Projects, Experience, Certifications, Contact
- Light / dark mode toggle (remembers your choice, defaults to system preference)
- Scrolling role ticker in the hero section
- Tiny star cursor trail (auto-disabled on touch devices and reduced-motion settings)
- Fully responsive, with a mobile nav menu

## Tech Stack

- HTML5
- CSS3 (custom properties for theming)
- Vanilla JavaScript

## File Structure

```
portfolio/
├── index.html   # page content
├── style.css    # styling + light/dark themes
└── script.js    # nav toggle, theme toggle, cursor trail
```

## Running Locally

No build tools needed — just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Hosted for free on GitHub Pages. To deploy your own copy:

1. Push these files to a public GitHub repo
2. Go to **Settings → Pages**
3. Set source to the `main` branch, root folder
4. Your site goes live at `https://<username>.github.io/<repo>/`

## Author

**V V Dhrishya**
[LinkedIn](https://www.linkedin.com/in/v-v-dhrishya-ab5ba02a4/) · [GitHub](https://github.com/missthxrn)
