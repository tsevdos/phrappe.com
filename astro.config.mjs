import { defineConfig } from "astro/config";
import lottie from "astro-integration-lottie";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://phrappe.com",
  compressHTML: true,
  integrations: [lottie(), mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
