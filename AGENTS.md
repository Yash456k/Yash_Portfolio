# AGENTS.md - Agentic Coding Guidelines

This file provides guidelines for agents working in this repository.

## Project Overview

- **Type**: React + TypeScript + Vite portfolio website
- **Styling**: Tailwind CSS with custom fonts (Jersey 10, VT323)
- **Key Libraries**: React Router, Framer Motion, Radix UI Icons, Lucide React, SWAPY
- **Deployment**: Vercel

---

## Build / Lint / Test Commands

```bash
# Development
npm run dev          # Start Vite dev server at http://localhost:5173

# Build
npm run build        # Run TypeScript compiler + Vite build (outputs to dist/)
npm run preview     # Preview production build locally

# Linting
npm run lint         # Run ESLint on entire codebase
```

**Running a single test**: This project does not have a test framework configured. Do not add tests.

**Type checking**: TypeScript strict mode is enabled (`tsconfig.app.json`). The build command runs `tsc -b` before building.

---

## Code Style Guidelines

### TypeScript

- Use **strict TypeScript** - no `any`, always type explicitly
- Use `React.FC` for functional component typing
- Define interfaces for all props using PascalCase (e.g., `ProjectCardProps`)
- Use `strict: true` in tsconfig - all compiler checks enabled

### Imports

```tsx
// External libraries - first, alphabetical order within group
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { MailPlus, GitFork } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

// Components - relative paths
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectCard from "./components/projects/ProjectCard";

// Types/interfaces - can be in same file or separate
interface Project {
  id: string;
  title: string;
}
```

### Component Structure

- File naming: **PascalCase** (e.g., `HeroSection.tsx`, `ProjectCard.tsx`)
- Component naming: **PascalCase** (e.g., `const HeroSection: React.FC`)
- Props interfaces: `ComponentNameProps` pattern
- Default export the component

### React Patterns

- Use **functional components** only (no class components)
- Use **explicit return types** with `React.FC` when helpful
- Destructure props in component signature
- Use `aria-label` for accessibility on icon-only buttons
- Use `rel="noopener noreferrer"` when using `target="_blank"`

### Tailwind CSS

- Use Tailwind utility classes for all styling
- Prefer inline styles for dynamic values (e.g., `style={{ color: colorSet.primary }}`)
- Use semantic class names for custom styles in `tailwind.config.js` if needed

### Error Handling

- Always handle potential null values explicitly (e.g., `document.getElementById('root')!`)
- Use optional chaining when accessing nested properties
- Add error boundaries where appropriate for user-facing errors

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HeroSection`, `ProjectCard` |
| Props interfaces | PascalCase + Props suffix | `SocialButtonProps` |
| Variables | camelCase | `heroSection`, `projectList` |
| Constants | camelCase or UPPER_SNAKE | `colorSet`, `MAX_COUNT` |
| File names | PascalCase | `HeroSection.tsx`, `types.ts` |

### Animation

- Use **Framer Motion** (`motion` from "framer-motion") for animations
- Follow existing patterns for hover effects and transitions

### State Management

- Use React hooks (`useState`, `useEffect`, `useRef`) for local state
- Use `react-intersection-observer` for scroll-based visibility

### Git / Version Control

- Make small, focused commits
- Write descriptive commit messages
- Do NOT commit secrets, `.env` files, or credentials

---

## File Structure

```
src/
├── components/
│   ├── HeroSection/
│   │   ├── HeroSection.tsx
│   │   └── TypeWriter.tsx
│   ├── Navbar.tsx
│   ├── projects/
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ProjectDetails.tsx
│   ├── skillsection/
│   │   └── skillsection.tsx
│   ├── TerminalSection/
│   │   ├── TerminalPage.tsx
│   │   └── commandHandler.ts
│   ├── endSection/
│   │   └── EndSection.tsx
│   └── Alert.tsx
├── pages/
│   ├── AllProjects.tsx
│   └── About.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## Common Tasks

### Adding a new page
1. Create component in `src/pages/`
2. Add route in `App.tsx` using React Router
3. Add navigation link in `Navbar.tsx`

### Adding a new component
1. Create in appropriate `src/components/` subdirectory
2. Use PascalCase for file and component name
3. Define props interface if component accepts props
4. Export as default

### Adding dependencies
```bash
npm install <package-name>
```
After adding, verify the build still works with `npm run build`.

---

## Testing Changes

After any code change:
1. Run `npm run lint` to check for issues
2. Run `npm run build` to verify TypeScript compiles and build succeeds
3. Test manually with `npm run dev` if needed

---

## Notes for Agents

- This is a personal portfolio website - maintain the existing aesthetic
- Do not add analytics or tracking beyond what's already configured
- Keep the terminal/command-section feature intact
- The site uses custom fonts - ensure they're loaded properly when adding new pages
- Maintain responsive design (mobile-first approach)
