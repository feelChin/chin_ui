import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	build: {
		outDir: "build",
		lib: {
			entry: path.resolve(__dirname, "src/index.js"),
			formats: ["es"],
			fileName: () => {
				return "index.js";
			},
		},
		rollupOptions: {
			output: {
				assetFileNames: () => {
					return "index.css";
				},
			},
		},
	},
});
