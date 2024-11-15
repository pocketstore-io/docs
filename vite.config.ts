import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import md from 'vite-plugin-md';

export default defineConfig({
	plugins: [sveltekit(),md()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
