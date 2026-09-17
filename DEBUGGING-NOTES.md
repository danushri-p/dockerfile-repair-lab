# Dockerfile Repair Notes

## Failures found

- **Base image:** `FROM node:notfound` referenced a tag that does not exist. Replaced it with `node:20-slim`, which satisfies the app's Node.js 18+ engine requirement.
- **WORKDIR and paths:** The Dockerfile copied files before setting `WORKDIR /wrong`. The app now uses `WORKDIR /app` before copying or running commands.
- **Dependencies and layer cache:** `npm install package-lock.json` attempted to install a filename as a package. The repaired file copies `package*.json` first and runs `npm install --omit=dev`, so source-only changes do not invalidate the dependency layer.
- **Build context:** `COPY missing-folder ./missing-folder` referenced a directory that is not in the repository. That instruction was removed. The `.dockerignore` no longer excludes `src`, because the application needs it at runtime.
- **Startup command:** `npm run production` referenced a script that does not exist. The app starts with `npm start`.

## Validation evidence

Build:

```text
docker build -t app:fixed .
... FINISHED
Successfully tagged app:fixed
```

Runtime smoke test:

```text
docker run -d --name app-fixed-smoke -p 18080:8080 app:fixed
GET http://localhost:18080/api/status
{"status":"ok","timestamp":"2026-09-17T06:39:50.908Z","environment":"development"}
Server is running on port 8080
docker rm -f app-fixed-smoke
```

The image builds cleanly and the container serves the API on port 8080.
