# OpenTMS Documentation

End-user documentation for the OpenTMS Transport Management System, built with [Docusaurus](https://docusaurus.io/) and hosted on Firebase Hosting at **documentation.opentms.nl**.

## Local development

Requires Node.js **20 or higher**.

```bash
npm install
npm start
```

This opens the site at http://localhost:3000 with hot reload.

## Build

```bash
npm run build
```

Output goes to `./build`. This is what gets deployed.

## Deployment

Pushes to `main` are auto-deployed to Firebase Hosting via the GitHub Actions workflow in `.github/workflows/deploy.yml`. Pull requests build a preview channel.

### One-time setup (done once per project)

1. Create a Firebase project named `opentms-docs` in the GCP / Firebase console.
2. Generate a service account JSON key with **Firebase Hosting Admin** role.
3. Add the JSON as a GitHub repository secret named `FIREBASE_SERVICE_ACCOUNT`.
4. Add the custom domain `documentation.opentms.nl` in Firebase Hosting → Domains, and create the CNAME record it shows you.

## Content structure

```
docs/
├── intro.md                    — Landing page
├── app-navigation/             — How to move around the app
└── planboard/                  — Planboard module
```

Sidebars are defined in `sidebars.ts`. Branding tokens live in `src/css/custom.css`.

## Screenshots

Screenshots live next to the `.md` file that uses them, in an `img/` subfolder. Naming convention: `NN-short-description.png` (e.g. `01-login-screen.png`). Always include alt text and a caption.
