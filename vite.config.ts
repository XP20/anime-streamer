import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// TODO: Fix vite config for android dev
const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM!);
const host = "0.0.0.0" || process.env.TAURI_DEV_HOST;

export default defineConfig({
	plugins: [sveltekit()],

	// Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
	// 1. prevent vite from obscuring rust errors
	clearScreen: false,
	// 2. tauri expects a fixed port, fail if that port is not available
	server: {
		port: 5173,
		strictPort: true,
		host: (mobile) ? (host || "0.0.0.0") : false,
		hmr: mobile ? {
			protocol: "ws",
			host: host,
			port: 5174,
		} : undefined,
		watch: {
		// 3. tell vite to ignore watching `src-tauri`
		ignored: ["**/src-tauri/**"],
		},
	},
});
