# Dockerfile Repair Lab (LU 4.2)

Welcome to the Dockerfile Repair Lab!

## 📖 The Story
You have inherited a simple Node.js/Express web application from a developer who has recently departed the team. They attempted to containerize the application by writing a `Dockerfile` and a `.dockerignore` file, but left it in a completely broken state.

Your task is to step into the shoes of a DevOps Engineer, investigate the build failures, repair the configuration files, optimize the build process, and successfully run the application inside Docker.

## 🎯 Learning Objectives
By completing this lab, you will learn to:
- Investigate and interpret Docker build logs to diagnose failures.
- Resolve base image selection errors.
- Fix incorrect dependency installation steps.
- Configure working directories (`WORKDIR`) and structure the correct order of operations.
- Debug build context errors and manage file exclusions via `.dockerignore`.
- Set correct runtime startup commands (`CMD`).
- Optimize the Docker image using layer caching and lightweight base images.

## 🚀 Setup & Local Execution
Before working with Docker, verify that the application itself runs perfectly outside of a container:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the application:
   ```bash
   npm start
   ```
3. Visit [http://localhost:8080](http://localhost:8080) to verify it works.

## 🛠️ The Challenge
To build the Docker image, run:

```bash
docker build -t app:broken .
```

The build will fail immediately. You must inspect the logs, identify the issues, make edits to `Dockerfile` and `.dockerignore`, and rebuild.

### 💡 Debugging Hints
- **Read build logs carefully:** Docker output shows you exactly which step failed and why.
- **Solve sequentially:** Fix the first failing step before trying to debug later ones.
- **Pay attention to `.dockerignore`:** Sometimes files are missing because they were accidentally ignored.
- **Optimize layer caching:** Structure your copy and install layers to avoid reinstalling dependencies when only source code changes.
- **Check startup command:** A build might succeed, but the container could crash immediately at runtime due to a wrong `CMD`.
- **Use lightweight images:** Think about production-ready base images (like Alpine-based or slim versions) to keep image size small.

## 🎯 Expected Output
Once all issues are fixed, you should be able to run:

```bash
docker build -t app:fixed .
docker run -p 8080:8080 app:fixed
```

And visiting [http://localhost:8080](http://localhost:8080) should load the success screen indicating **Docker Repair Lab Running Successfully**.
