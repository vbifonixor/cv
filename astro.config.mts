import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import path from "node:path";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  compressHTML: true,
  env: {
    schema: {
      LOCATION: envField.string({
        context: "server",
        access: "secret",
        optional: true,
        default: "Lisbon, Portugal",
      }),
      PHONE_NUMBER: envField.string({
        context: "server",
        access: "secret",
        optional: true,
        startsWith: "+",
      }),
      EMAIL: envField.string({
        default: "vbifonixo@gmail.com",
        context: "server",
        access: "secret",
      }),
      LINKED_IN: envField.string({
        default: "vbifonix",
        context: "server",
        access: "secret",
      }),
      GITHUB: envField.string({
        default: "vbifonixor",
        context: "server",
        access: "secret",
      }),
      TELEGRAM: envField.string({
        default: "vbifonix",
        context: "server",
        access: "secret",
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname!, "src"),
      },
    },
  },
});
