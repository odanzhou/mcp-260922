import babelParser from "@babel/eslint-parser";
import { createRequire } from "node:module";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import onlyWarn from "eslint-plugin-only-warn";

// Resolve the preset to an absolute path from this package (where it's declared
// as a dependency). The parser runs Babel in a worker thread and structured-clones
// the options, so presets must be strings, and a bare name would be resolved
// relative to each linted package, which fails under pnpm's strict linking.
const require = createRequire(import.meta.url);
const presetTypescriptPath = require.resolve("@babel/preset-typescript");

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [presetTypescriptPath],
        },
      },
    },
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
];
