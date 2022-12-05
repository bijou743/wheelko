/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '320px',
			md: '728px',
			lg: '1160px',
		},
		container: {
			center: true,
			screens: {
				sm: '320px',
				md: '728px',
				lg: '1160px',
			},
		},
		extend: {
			colors: {
				purple: '#673989',
				green: '#88b33e',
				black: '#262624',
				pink: '#ff3367',
				blue: '#2c88e4',
				gray: {
					100: 'rgba(0, 0, 0, 0.03)',
					200: 'rgba(0, 0, 0, 0.05)',
					800: '#5a5a5a',
					900: '#c9c9c9',
				},
			},
		},
	},
	plugins: [],
};
