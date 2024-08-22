import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: 'src/my-property-editor.element.ts',
			formats: ['es'],
		},
		outDir: '../Umbraco/App_Plugins/MyPackage/dist',
		emptyOutDir: true,
		rollupOptions: {
			external: [/^@umbraco/],
		},
	},
});
