import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				default: "#242424",
				key: "#5A93A4",
				gray: "#AEAEAE",
				white: "#FCFCFC"
			},
			fontSize: {
				defaultText: [
					"1.6rem",
					{
						fontWeight: "DemiLight",
						lineHeight: "2",
					}
				],

			},
			fontFamily: {
				"sans": ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
				"mincho": '"BIZ UDPMincho"'
				,
			},
		},
	},
	plugins: [],
}
