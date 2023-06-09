import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    storyblok({
      accessToken: "ZtDlrGKLUwk67HP3ishA8gtt",
      components: {
        page: "storyblok/page",
      },
    }),
  ],
});
