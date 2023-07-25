/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				canvas: 'rgb(34, 35, 36)',
				sidebar: 'rgb(43,44,45)',
				'sidebar-label': 'rbg(102, 103, 104)',
				'sidebar-child': 'rgb(107, 108, 109)',
				'sidebar-active': 'rgb(66,66,67)',
			},
		},
	},
	plugins: [],
}
