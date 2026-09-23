# Trae Neo Theme — Changelog

All notable changes to this theme are documented here.

## [1.1.8] · State, Vue, React & CSS Enhancements

- **React / JSX State Variables:** State destructuring values (e.g. `userData`, `isLoading`) now use the distinct Trae light blue (`#80bbff`) for better visual recognition of reactive state.
- **Vue & React Custom Components:** Custom component tags and custom elements (e.g. `<NavigationBar />`, Vue components in templates) are now consistently highlighted in light cyan-blue (`#80eaff`), aligning with Trae's native component style and separating them clearly from native HTML tags.
- **CSS / Styling Fine-Tuning:** Polished scopes for CSS properties, custom properties (CSS variables), units, and property values for better consistency across modern styling frameworks (Tailwind, CSS Modules, pure CSS).
- **Scope Hierarchy:** Refined scope specificity for `entity.name.tag.custom`, Vue component tags, and destructuring patterns to prevent color bleeding on regular variables.

---

## [1.1.6]

- Fixed JSX children text being incorrectly highlighted as JSX tags
- Improved JSX tag scope precision

## [1.1.5] · Patch Release — Advanced JS / TS & JSX Highlighting

### Added

- Full color support for JavaScript and TypeScript numeric literals (`1`, `1.2`, `0xFF`)
- Highlighting for boolean literals (`true`, `false`)
- Dedicated coloring for `null` and `NaN`
- Subtle, desaturated coloring for `undefined` and `Infinity`
- Improved readability for object literal keys in JS/TS configurations

### Improved

- Clearer distinction between values, variables, and keys in object-heavy code
- Better readability in configuration-driven codebases (GSAP, React hooks, Next.js, Tailwind)
- More consistent semantic color logic across language literals

---

## [1.1.0] · JSX & React Component Awareness

### Added

- Distinct highlighting for custom React / JSX component tags
- Visual separation between native HTML tags and React components
- Dedicated styling for JSX text content (rendered UI text)
- Explicit support for JSX expressions and embedded JavaScript logic
- Proper highlighting for JSX block comments

### Improved

- Clear separation between structure (HTML), abstraction (components), and logic (JavaScript)
- Better visual hierarchy in deeply nested JSX trees
- Improved readability for React and Next.js component-based architectures

---

## [1.0.1] · Minor Visual Refinements

### Improved

- Fine-tuned keyword and function colors
- Improved contrast for variables and parameters
- Better punctuation visibility in JavaScript and TypeScript
- General balance adjustments for long coding sessions

---

## [1.0.0] · Initial Release

🎉 First public release of **Trae Neo Theme**

### Features

- Custom dark palette inspired by the original Trae theme
- Cool, elegant, and focused development atmosphere
- Carefully balanced contrast for improved readability
- Optimized syntax highlighting for:
  - JavaScript
  - TypeScript
  - HTML
  - CSS

### Highlighting

- Clear differentiation between keywords, functions, variables, and constants
- Clean and minimal visual hierarchy designed for modern frontend development
