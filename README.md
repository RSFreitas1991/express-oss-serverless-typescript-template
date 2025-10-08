# Express OSS Serverless TypeScript Template

This template demonstrates how to run an Express.js application inside an AWS Lambda function using the OSS Serverless Framework. It is a modern TypeScript setup, based on the original Lambda template, but adapted for Express usage under Lambda via `serverless-http`.

It is intended for OSS Serverless and not for other IaC frameworks.

Key features include TypeScript, ESLint, Prettier, and best practices for Express apps running in Lambda.

## Features

- ✅ **Express.js** - Use familiar Express routing and middleware
- ✅ **TypeScript** - Type-safe development with modern ES2020 features
- ✅ **ESLint & Prettier** - Code linting and formatting
- ✅ **VS Code Integration** - Pre-configured workspace settings
- ✅ **Build System** - Automated TypeScript compilation (SWC)
- ✅ **OSS Serverless Ready** - Deploy/remove scripts for OSS Serverless

## Quick Start

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd express-oss-serverless-typescript-template

# Install dependencies
npm install

# Install OSS Serverless CLI (required)
npm install -g osls
```

### Development

```bash
# Build the project (SWC)
npm run build

# Build in watch mode for development
npm run dev

# Type checking only
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Code formatting
npm run format
npm run format:check

# Run all checks (type-check + lint + format)
npm run check
```

## Project Structure

```
├── src/                    # Source code (Express app, routes, controllers)
│   ├── app.ts              # Express app and Lambda handler
│   ├── controllers/        # Route controllers
│   └── routes/             # Express routes
├── dist/                   # SWC output (mirrors src/)
├── serverless.yml          # Serverless Framework config
├── serverless/             # Serverless auxiliaries (variables, env, IAM, etc.)
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript config
├── eslint.config.mjs       # ESLint config
├── .prettierrc             # Prettier config
├── .swcrc                  # SWC config
├── .vscode/                # VS Code workspace settings
└── README.md               # This file
```

> Note: The `dist/` folder is hidden in VS Code by default. You can access it in the terminal or make it visible by updating `.vscode/settings.json`.

## Configuration

### Express & Lambda

- The Express app is defined in `src/app.ts` and exported as a Lambda handler using `serverless-http`.
- Routing and middleware are managed as in any Express app.

### TypeScript

- Target: ES2020 for Node.js Lambda runtime
- Module: CommonJS for Lambda compatibility

### ESLint & Prettier

- TypeScript-specific rules
- Prettier integration
- Node.js environment settings

### VS Code

- Format on save
- Auto-fix ESLint issues on save
- Organize imports on save

## Available Scripts

| Script                 | Description                            |
| ---------------------- | -------------------------------------- |
| `npm run build`        | Transpile TypeScript (SWC) to `dist/`  |
| `npm run build:watch`  | Transpile with SWC in watch mode       |
| `npm run dev`          | Alias for build:watch                  |
| `npm run clean`        | Remove build artifacts                 |
| `npm run type-check`   | Type check with `tsc --noEmit`         |
| `npm run lint`         | Run ESLint                             |
| `npm run lint:fix`     | Fix ESLint issues                      |
| `npm run format`       | Format code with Prettier              |
| `npm run format:check` | Check code formatting                  |
| `npm run check`        | Run all checks (type + lint + format)  |
| `npm run deploy:dev`   | Build and deploy with Serverless (dev) |
| `npm run remove:dev`   | Remove the deployed stack (dev)        |

## Deployment (OSS Serverless)

This template is built for OSS Serverless. Install the CLI and use the provided scripts:

- OSS Serverless repo: https://github.com/oss-serverless/serverless
- Install CLI: `npm install -g osls`

```bash
# Build and deploy to dev using the "personal" AWS profile
npm run deploy:dev

# Remove the deployed stack
npm run remove:dev
```

## Best Practices

1. **Type Safety**: Use proper TypeScript types
2. **Express Middleware**: Use Express middleware for parsing, logging, and error handling
3. **Environment Variables**: Use environment variables for configuration
4. **Logging**: Use structured logging with AWS CloudWatch
5. **Testing**: Add unit and integration tests
6. **Security**: Follow AWS Lambda and Express security best practices

## Contributing

1. Fork the repository
2. Create your feature branch
3. Run `npm run check` to ensure code quality
4. Commit your changes
5. Push to the branch
6. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
