import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import lottie from "astro-integration-lottie";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [lottie(), tailwind(), mdx()],
});
