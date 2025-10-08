# Lambda OSS Serverless TypeScript Template

Built for the OSS Serverless Framework. This template is plug-and-play with OSS Serverless and not intended for other IaC frameworks.

A comprehensive TypeScript template for AWS Lambda functions with ESLint, Prettier, and best practices configured out of the box.

## Features

- ✅ **TypeScript** - Type-safe development with modern ES2020 features
- ✅ **ESLint** - Code linting with TypeScript-specific rules
- ✅ **Prettier** - Consistent code formatting
- ✅ **VS Code Integration** - Pre-configured workspace settings
- ✅ **Build System** - Automated TypeScript compilation
- ✅ **Development Scripts** - Common development tasks automated
- ✅ **OSS Serverless Ready** - Pre-wired deploy/remove scripts using OSS Serverless

## Quick Start

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd lambda-oss-serverless-typescript-template

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
├── src/                    # Source code
│   └── index.ts           # Main Lambda handler
├── dist/                  # SWC output (mirrors src/, e.g., dist/src/index.js)
│   └── src/
│       └── index.js
├── .vscode/               # VS Code workspace settings
│   └── settings.json      # Editor configuration
├── eslint.config.mjs      # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .prettierignore        # Prettier ignore patterns
├── tsconfig.json          # TypeScript configuration
├── .swcrc                 # SWC configuration
├── serverless/            # Serverless auxiliaries (variables, env, IAM, etc.)
│   └── custom/
│       └── variables.yml  # Custom variables used by serverless.yml
├── serverless.yml         # Serverless Framework configuration
└── package.json           # Project dependencies and scripts
```

> Note: The `dist/` folder is hidden in VS Code by default in this template. This is configured in `.vscode/settings.json` under `files.exclude` and `search.exclude`. You can still access it in the terminal or make it visible by removing the corresponding exclude rules.

## Configuration

### TypeScript

The `tsconfig.json` is configured for AWS Lambda development with:

- **Target**: ES2020 for modern Node.js runtime
- **Module**: CommonJS for Lambda compatibility

### ESLint

- TypeScript-specific rules
- Prettier integration
- Node.js environment settings
- Recommended rule sets

### Prettier

Prettier is configured with:

- Single quotes
- Semicolons
- 2-space indentation
- 80 character line width
- Trailing commas (ES5)

### VS Code

Workspace settings include:

- Format on save
- Auto-fix ESLint issues on save
- Organize imports on save
- File exclusions for build artifacts

## Available Scripts

| Script                 | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `npm run build`        | Transpile with SWC to `dist/`                   |
| `npm run build:watch`  | Transpile with SWC in watch mode                |
| `npm run dev`          | Alias for build:watch                           |
| `npm run clean`        | Remove build artifacts                          |
| `npm run type-check`   | Type check with `tsc --noEmit`                  |
| `npm run lint`         | Run ESLint                                      |
| `npm run lint:fix`     | Fix ESLint issues                               |
| `npm run format`       | Format code with Prettier                       |
| `npm run format:check` | Check code formatting                           |
| `npm run check`        | Run all checks (type + lint + format)           |
| `npm run deploy:dev`   | Build with SWC and deploy with Serverless (dev) |
| `npm run remove:dev`   | Remove the deployed stack (dev)                 |

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

1. **Type Safety**: Use proper TypeScript types instead of `any`
2. **Error Handling**: Implement proper error handling in your Lambda functions
3. **Environment Variables**: Use environment variables for configuration
4. **Logging**: Use structured logging with AWS CloudWatch
5. **Testing**: Add unit and integration tests
6. **Security**: Follow AWS Lambda security best practices

## Contributing

1. Fork the repository
2. Create your feature branch
3. Run `npm run check` to ensure code quality
4. Commit your changes
5. Push to the branch
6. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
