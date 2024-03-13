import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			width: {
				defaultLayout: '128rem',
			},
			colors: {
				default: "#242424",
				key: "#5A93A4",
				gray: "#AEAEAE",
				white: "#FCFCFC",
				lineGray: "#D3D3D3"
			},
			fontSize: {
				defaultText: [
					"1.6rem",
					{
						fontWeight: "DemiLight",
						lineHeight: "2",
					}
				],
				sectionEnTitle: [
					"1.8rem",
					{
						fontWeight: "Regular",
						fontFamily: "urbanist",
						lineHeight: "1.4",
					}
				],

			},
			fontFamily: {
				"sans": ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
				"mincho": '"BIZ UDPMincho"',
				"urbanist": '"Urbanist"',
			},
		},
	},
	plugins: [],
}
