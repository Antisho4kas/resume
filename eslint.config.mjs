import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier/flat";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores([
    ".cache/",
    ".next/",
    "coverage/",
    "next-env.d.ts",
    "playwright-report/",
    "test-results/",
  ]),
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    extends: [js.configs.recommended, tseslint.configs.recommended],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [
      next.configs["core-web-vitals"],
      reactHooks.configs.flat.recommended,
    ],
  },
  prettier,
);
