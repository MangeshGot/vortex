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
