# Master Mentor Marketing Site

Root marketing frontend for `https://mastermentor.academy/`.

This repository is intentionally separate from the existing portal repository. The portal remains at `https://mastermentor.academy/portal/` and must not be moved or overwritten by this marketing deploy.

## Folder structure

```txt
MasterMentor-Marketing/
  .github/workflows/deploy-marketing.yml
  public/
    .htaccess
    favicon.ico
    favicon-16x16.png
    favicon-32x32.png
    apple-touch-icon.png
    android-chrome-192x192.png
    android-chrome-512x512.png
    mnm-logo.png
    site.webmanifest
    robots.txt
    sitemap.xml
  scripts/
    check-portal-safety.mjs
  src/
    components/
      Icons.jsx
      MobileMenu.jsx
      SiteFooter.jsx
      SiteHeader.jsx
      Wireframes.jsx
    constants/
      navigation.js
    pages/
      ContactPage.jsx
      HomePage.jsx
      StoryPage.jsx
    styles/
      global.css
    App.jsx
    main.jsx
  index.html
  package.json
  vite.config.js
```

## Local run

```bash
npm install
npm run dev
```

Open the local URL that Vite prints, usually:

```txt
http://localhost:5173/
```

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in:

```txt
dist/
```

## Hostinger deployment model

Deploy this marketing repo to:

```txt
public_html/
```

The portal repo remains deployed separately to:

```txt
public_html/portal/
```

## Required GitHub repository secrets

Add these secrets to the marketing repository only:

```txt
FTP_SERVER
FTP_USERNAME
FTP_PASSWORD
```

Do not add private portal/backend secrets such as service role keys, R2 secret keys, OAuth client secrets, SMTP passwords, or database credentials to this marketing frontend repo.

## Portal safety rules included

The root `.htaccess` contains this rule before the SPA fallback:

```apache
RewriteRule ^portal(/.*)?$ - [L]
```

That prevents the marketing SPA from hijacking `/portal/*` routes.

The GitHub Actions FTP deploy also excludes the portal directory:

```yaml
exclude: |
  portal/**
  **/portal/**
```

This preserves `public_html/portal/` when deploying the marketing site to `public_html/`.

## Portal links

All links into the portal use absolute paths, for example:

```txt
https://mastermentor.academy/portal
```

Do not change those to relative links like `portal/login`.
