# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## Environment

Define `VITE_CODESPACE_NAME` when running in GitHub Codespaces so the frontend can call the backend through the forwarded port URL.

For local development, create `.env.local` in this directory:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, API calls use:

```text
https://$VITE_CODESPACE_NAME-8000.app.github.dev/api/[component]/
```

When `VITE_CODESPACE_NAME` is not set, the app safely falls back to:

```text
http://localhost:8000/api/[component]/
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
```
