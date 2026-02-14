This folder is intended for GitHub Pages publishing at `your-username.github.io/meltys-artifact-lens`.

How to publish a static export of the webapp here:

1. From the repository root run:

```bash
cd src/webapp
npm install
npm run export:pages
```

2. The script will build the Next.js app, run `next export` to produce a static `out` directory, and then copy the exported files into the `meltys-artifact-lens` folder at the repo root.

3. Commit and push `meltys-artifact-lens` to your `your-username.github.io` repository root; GitHub Pages will serve that folder at `https://your-username.github.io/meltys-artifact-lens`.

Notes:
- The Next.js `app` router may not be fully compatible with `next export`. If `next export` fails or the produced site lacks dynamic features, consider building a small static wrapper or hosting the Next.js app on a platform that supports Node (Vercel, Render, etc.).
- The `export:pages` script is a convenience utility and assumes a POSIX shell (macOS/Linux). Adjust commands for Windows as needed.
