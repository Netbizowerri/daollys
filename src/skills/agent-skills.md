# Agent Skills Guidelines

## 1. Scope Discipline & Robust Execution
- **Strict User Intent**: Build exactly what the user requested. Treat the user's PRD as the absolute ceiling of the functional scope. Do not invent unrequested feature volume or add unnecessary mock databases, analytics layers, or telemetry displays.
- **Incremental Commit & Validation**: Ensure that any new code compiles and lint-checks successfully before proceeding. Avoid compounding syntax or import errors.
- **Completeness**: If a user request involves multiple sub-tasks (e.g., "implement feature A and feature B"), plan and execute ALL sub-tasks in sequence.

## 2. Code Architecture & Modularity
- **Modular File Boundaries**: Avoid consolidating all business logic or component layouts in a single file like `App.tsx`. Create separate directories for `components/`, `pages/`, `data/`, and `styles/`.
- **Early Type Declarations**: Declare TypeScript models and shared contracts early in a `src/types.ts` file to guide seamless interface and data flow development.
- **TypeScript Strictness**: Prefer explicit return types for critical components, handle potential undefined/null values with optional chaining, and avoid using `any` wherever possible.

## 3. UI and UX Craftsmanship
- **Interactive States**: Design interactive UI elements (such as buttons, inputs, cards) with robust visual feedback on hover, focus, active, and disabled states.
- **Layout Animations**: Use framer-motion (`motion` from `motion/react`) for route entries, modal mountings, and card reveals to make the web app feel like a premium, organic product.
- **Form Validation**: Build client-side validation for all input fields (including email pattern, phone length, empty inputs) with readable error microcopy.
