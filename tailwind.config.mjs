/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily : {
				inder : 'var(--inder)',
				inter : "var(--inter)",
				judson : "var(--judson)"
			}
		},
	},
	plugins: [],
}
