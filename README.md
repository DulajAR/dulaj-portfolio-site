# Dulaj Ranasinghe — Personal Portfolio

The complete editable source for Dulaj’s navy-blue portfolio, including the portrait, contact links, current education, four project showcases, project filters, project notes, and a miniature Tap Rush browser demo.

## View the public website

https://dulaj-ranasinghe-portfolio.upbeatelf8.chatgpt.site/

The current website is already hosted and public. You can share that link; visitors do not need to sign in.

## Run it on your Windows computer

1. Extract the ZIP.
2. Open the `dulaj-portfolio` folder in VS Code.
3. Open `index.html` in a browser, or use VS Code’s Live Server extension for a local preview.

This site uses plain HTML, CSS, and JavaScript. No Node.js installation, `npm install`, build command, database, or backend setup is required. If Python is installed, you can also run the following from the folder and visit http://localhost:8000/:

```bash
python -m http.server 8000
```

## Where to edit

| File | What it contains |
| --- | --- |
| `index.html` | Page content, contact links, education, project cards, and portrait placement |
| `styles.css` | Navy theme, layout, responsive styles, and illustrations |
| `app.js` | Project notes, filtering, mobile menu, email copy, and tapping demo |
| `favicon.svg` | Browser-tab icon |
| `assets/dulaj-ranasinghe.png` | Original portrait |
| `.nojekyll` | Static-site marker for GitHub Pages |
| `HOSTING.md` | Instructions for hosting your own copy |

The CSS color variables are near the start of `styles.css`: `--navy`, `--accent`, `--paper`, `--ink`, and `--muted`. VS Code’s Format Document command can make compact HTML and CSS easier to read.

Project descriptions displayed in the project dialogs are stored in the `projects` object at the beginning of `app.js`.

## How the features work

- Email links open the visitor’s email application; there is no message database or contact form server.
- The WhatsApp link opens a conversation with +94 78 856 8282. The call link uses +94 74 071 4534.
- The small tapping demo saves a best score only in that browser’s local storage.
- Google Fonts load over the internet; the site uses fallback fonts if they cannot load.
- Project artwork is illustrative and is identified as such on the page.

This ZIP contains the website source and image assets. Hosting account settings, Git history, and platform credentials are excluded. The source snapshot corresponds to commit `c53fbb837fa50173c1557009b69f3e485a2606a1`.
