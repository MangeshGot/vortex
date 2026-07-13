# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Docker & AWS ECR Deployment

To build the Docker image and push it to AWS ECR (Elastic Container Registry), follow these steps:

### 1. Authenticate to AWS ECR
Before pushing, authenticate your Docker client to the ECR registry:
```bash
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
```

### 2. Build the Docker Image
Build the Docker image locally:
```bash
docker build -t vortex:latest .
```

### 3. Tag the Image
Tag the image to point to your ECR registry:
```bash
docker tag vortex:latest <aws_account_id>.dkr.ecr.<region>.amazonaws.com/vortex
```

### 4. Push the Image
Push the newly tagged image to AWS ECR:
```bash
docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/vortex
```

---

## Git & CI/CD Workflow

This project follows a structured Git workflow combined with automated CI/CD pipelines via GitHub Actions.

### 1. Git Development Workflow
To contribute or make changes to the repository, please use the following workflow:

1. **Ensure your local repository is up-to-date** with the main branch:
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Create a new feature or bugfix branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/your-bugfix-name
   ```
3. **Make and commit your changes** with descriptive commit messages.
4. **Push your branch** to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request (PR)** on GitHub targeting the `main` branch to trigger the CI tests.

---

### 2. GitHub Actions CI/CD Workflow
The project's build and release cycle is managed automatically by the [docker-image.yml](file:///home/mangesh/Documents/vortex/.github/workflows/docker-image.yml) workflow.

#### Pipeline Triggers
* **Pull Requests targeting `main`**: Triggers verification builds to ensure changes do not break the Docker build.
* **Pushes/Merges to `main`**: Automatically builds, tags, and pushes the production-ready image.

#### Pipeline Steps
1. **Checkout Code**: Fetches the code from the repository.
2. **Version Extraction**: Reads the package version from [package.json](file:///home/mangesh/Documents/vortex/package.json).
3. **Docker Hub Authentication**: Logs into Docker Hub using configured GitHub secrets (`DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`).
4. **Build & Push**: Builds the image using [Dockerfile](file:///home/mangesh/Documents/vortex/Dockerfile) and pushes it to Docker Hub with:
   - The version tag: `${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.DOCKER_IMAGE_NAME }}:<version>`
   - The `latest` tag: `${{ secrets.DOCKERHUB_USERNAME }}/${{ secrets.DOCKER_IMAGE_NAME }}:latest`

