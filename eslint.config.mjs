// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  // Lint JS and JSX files
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    // Ignore build and dependency folders
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**"],
    rules: {
      // Recommended rules for JS projects
      "no-unused-vars": "warn",
      "no-console": "warn",
      "react/react-in-jsx-scope": "off", // Next.js doesn't require React import
      "react/prop-types": "off", // optional if not using prop-types
    },
  },
  // Optional: Lint JSON, MD, or other file types
  {
    files: ["**/*.json", "**/*.md"],
    languageOptions: {
      parser: "jsonc-eslint-parser",
    },
  },
];
