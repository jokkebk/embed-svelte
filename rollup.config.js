import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'embed.js',
	output: {
		format: 'iife',
		file: 'dist.js',
    sourcemap: false,
	},
	plugins: [
		svelte({ emitCss: false, }),
		resolve({ browser: true, dedupe: ['svelte'] }),
	],
}