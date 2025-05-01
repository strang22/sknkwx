# SKNKWX

A modern web application built with Next.js, TypeScript, and TailwindCSS.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Development

### Prerequisites

- Node.js 18.17 or later
- npm 9.0 or later

### Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run type-check` - Check TypeScript types

### Project Structure

```
sknkwx/
├── src/
│   ├── app/           # App router pages
│   ├── components/    # Reusable components
│   ├── lib/          # Utility functions
│   └── types/        # TypeScript types
├── public/           # Static files
└── tests/           # Test files
```

### Development Workflow

1. Create a new branch from `main`
2. Make changes and commit following conventional commits
3. Push changes and create a PR
4. Ensure all checks pass
5. Request review and merge

## Deployment

This project is deployed on Vercel. The deployment pipeline is:

- Push to `main` triggers production deployment
- All PRs get preview deployments
- Environment variables are managed in Vercel dashboard

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

Private - All rights reserved

## Description

A new project repository.

## Setup

1. Clone the repository:

```bash
git clone https://github.com/strang22/sknkwx.git
cd sknkwx
```

## Project Structure

(To be updated as the project evolves)

## License

MIT
