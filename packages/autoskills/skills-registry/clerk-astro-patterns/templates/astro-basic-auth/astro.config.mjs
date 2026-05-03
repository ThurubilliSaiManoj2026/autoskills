import { defineConfig } from "astro/config"
import node from "@astrojs/node"
import clerk from "@clerk/astro"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
	integrations: [clerk()],
	adapter: node({ mode: "standalone" }),
	output: "server",
});
