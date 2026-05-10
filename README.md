# Berkeley Rental Units App

A simple real estate app for listing three rental units and viewing unit details.

## Version 1 use cases

- List units
- View unit details

## Architecture

This app does **not** require a backend database. Unit records are stored in `lib/units.js`, which keeps the first version easy to host, version, and deploy.

The app uses Next.js App Router and can be deployed directly to Vercel from GitHub.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the default Next.js settings.
5. Click **Deploy**.

## Editing unit data

Update `lib/units.js` to add, remove, or edit unit records. Each unit needs a unique `id` because the detail page route uses `/units/[id]`.
