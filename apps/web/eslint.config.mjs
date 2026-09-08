import config from "../../eslint.config.mjs";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  ...config,
  {
    plugins: { "@next/next": nextPlugin },
    rules: nextPlugin.configs.recommended.rules,
  },
  {
    files: ["next-env.d.ts"],
    rules: { "@typescript-eslint/triple-slash-reference": "off" },
  },
];
