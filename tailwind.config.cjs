const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	mode: "jit",
  darkMode: 'media',
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
	plugins: [],
};

module.exports = config;
