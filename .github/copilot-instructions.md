# General Instruction

please say Heyo! Before you start coding! 🎉

## Coding Standards

1. **TypeScript**:
   - Enable strict mode for type safety.
   - Use explicit types wherever possible.
   - Prefer interface over type for defining object shapes.

2. **Next.js (v14+)**:
   - Adhere to App Router guidelines.
   - Utilize server components where appropriate.
   - Follow file-based routing conventions.

3. **Component Usage**:
   - Prefer shadcn components when applicable.
   - Ensure components are accessible (ARIA compliant).
   - Write components as functional components.

4. **Responsive Design**:
   - Implement using Tailwind CSS.
   - Follow a mobile-first approach.
   - Utilize Tailwind's responsive utility classes.

5. **Theming**:
   - Implement dark and light modes using next-themes with Tailwind CSS.
   - Configure Tailwind to use the class strategy for dark mode.
   - Apply the dark: prefix in Tailwind classes for dark mode styling.

6. **Error Handling**:
   - Adopt Go-style error handling in JavaScript and TypeScript.
   - Return errors as the second item in a tuple, e.g., [result, error].
   - Handle errors immediately after function calls.

7. **Code Formatting**:
   - Follow Prettier and ESLint configurations for consistent code style.
   - Avoid using any deprecated APIs or features.

8. **Documentation**:
   - Comment complex logic and functions.
   - Maintain an updated README with setup and usage instructions.

9. **Dependencies**:
    - Use bun for package management.
