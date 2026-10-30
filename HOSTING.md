# Host your own copy

## Current hosting

Your portfolio is already public at:

https://dulaj-ranasinghe-portfolio.upbeatelf8.chatgpt.site/

No further hosting setup is needed to share this version. Downloading or changing this ZIP does not automatically update that hosted site.

## GitHub Pages

1. Create a public GitHub repository, for example `dulaj-portfolio-site`.
2. Upload the contents of this folder. Place `index.html` directly at the repository root, alongside `styles.css`, `app.js`, `favicon.svg`, `.nojekyll`, and the `assets` folder. Upload the extracted files, rather than the ZIP itself.
3. Commit the files to `main`.
4. Open the repository’s **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.
6. Open the published URL displayed by GitHub. Publication can take a few minutes.
7. In `index.html`, update the `og:url` and `og:image` metadata to your new site URL and portrait URL, then commit again.

Official guide: https://docs.github.com/en/pages/quickstart

No build command is required for these static files. Later commits to your publishing branch update the GitHub Pages version.

## Other static hosts

Choose a static website deployment and upload the folder containing `index.html`. Serve that folder as the website root, with no build command. All CSS, JavaScript, icon, and portrait paths are relative, so retain their folder structure.

A custom domain can be configured through your chosen hosting provider after obtaining the domain. This export does not buy a domain or change the current website address.
