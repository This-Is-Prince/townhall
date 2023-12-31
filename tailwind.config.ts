// Copyright 2019-2025 @polka-labs/townhall authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
module.exports = {
	content: ['./packages/**/*.{js,ts,jsx,tsx}'],
	corePlugins: {
		preflight: false
	},
	important: true,
	plugins: [],
	theme: {
		extend: {
			colors: {
				app_background: 'var(--app_background)',
				blue_primary: 'var(--blue_primary)',
				dark_blue_primary: 'var(--dark_blue_primary)',
				green_primary: 'var(--green_primary)',
				grey_light: 'var(--grey_light)',
				grey_primary: 'var(--grey_primary)',
				grey_secondary: 'var(--grey_secondary)',
				grey_tertiary: 'var(--grey_tertiary)',
				light_grey_primary: 'var(--light_grey_primary)',
				purple_primary: 'var(--purple_primary)',
				red_primary: 'var(--red_primary)',
				yellow_primary: 'var(--yellow_primary)'
			},
			fontFamily: {
				poppins: ['var(--font-montserrat)']
			}
		}
	}
};
