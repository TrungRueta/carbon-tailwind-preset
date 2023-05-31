import datatablePlugin from './plugins/datatable.plugin.cjs';
import formPlugin from './plugins/form.plugin.cjs';
import textPlugin from './plugins/text.plugin.cjs';

/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		// compability with carbon, not extend but overwrite
		screens: {
			// small is < 672px
			sm: '672px',
			// half of medium 672 - 850px
			smd: '850px',
			// medium 672 - 1056px
			md: '1056px',
			// large 1056 - 1312px
			lg: '1312px',
			// X-Large: 1312 - 1584px
			xl: '1584px',
			// Max: greater than 1584px
			max: '1584px'
		},
		// https://carbondesignsystem.com/guidelines/spacing/overview/
		spacing: {
			px: '1px',
			0: '0',
			1: '0.125rem' /* 2px */,
			2: '0.25rem' /* 4px */,
			3: '0.5rem' /* 8px */,
			4: '0.75rem' /* 12px */,
			5: '1rem' /* 16px */,
			6: '1.5rem' /* 24px */,
			7: '2rem' /* 32px */,
			8: '2.5rem' /* 40px */,
			9: '3rem' /* 48px */,
			10: '4rem', // 64px
			11: '5rem', // 80px
			12: '6rem', // 96px
			13: '10rem' // 160px
		},
		// https://carbondesignsystem.com/guidelines/typography/overview/
		fontFamily: {
			sans: ['IBM Plex Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
			serif: ['IBM Plex Serif', 'Georgia', 'Times', 'serif'],
			mono: [
				'IBM Plex Mono',
				'Menlo',
				'DejaVu Sans Mono',
				'Bitstream Vera Sans Mono',
				'Courier',
				'monospace'
			]
		},
		// https://carbondesignsystem.com/guidelines/typography/overview/#scale
		fontSize: {
			xs: '0.75rem' /* 12px */,
			sm: '0.875rem' /* 14px */,
			base: '1rem' /* 16px */,
			lg: '1.125rem' /* 18px */,
			xl: '1.25rem' /* 20px */,
			'2xl': '1.5rem' /* 24px */,
			'3xl': '1.75rem', // 28px
			'4xl': '2rem', // 32px
			'5xl': '2.25rem', // 36px
			'6xl': '2.625rem', // 40px
			'7xl': '3rem', // 48px
			'8xl': '3.375rem', // 54px
			'9xl': '3.75rem', // 60px
			'10xl': '4.25rem', // 68px
			'11xl': '4.75rem', // 76px
			'12xl': '5.25rem', // 84px
			'13xl': '5.75rem' // 92px
		},
		// https://carbondesignsystem.com/guidelines/typography/overview/#weights
		fontWeight: {
			light: 300,
			regular: 400,
			semiBold: 600
		},
		extend: {
			// extend css vars into tailwind
			colors: {
				interactive: {
					'01': 'var(--cds-interactive-01)',
					'02': 'var(--cds-interactive-02)',
					'03': 'var(--cds-interactive-03)',
					'04': 'var(--cds-interactive-04)'
				},
				ui: {
					'01': 'var(--cds-ui-01)',
					'02': 'var(--cds-ui-02)',
					'03': 'var(--cds-ui-03)',
					'04': 'var(--cds-ui-04)',
					'05': 'var(--cds-ui-05)',
					background: 'var(--cds-ui-background)'
				},
				text: {
					'01': 'var(--cds-text-01)',
					'02': 'var(--cds-text-02)',
					'03': 'var(--cds-text-03)',
					'04': 'var(--cds-text-04)',
					'05': 'var(--cds-text-05)',
					error: 'var(--cds-text-error)'
				},
				overlay: {
					'01': 'var(--cds-overlay-01)'
				},
				support: {
					'01': 'var(--cds-support-01)',
					'02': 'var(--cds-support-02)',
					'03': 'var(--cds-support-03)',
					'04': 'var(--cds-support-04)'
				},
				'inverse-support': {
					'01': 'var(--cds-inverse-support-01)',
					'02': 'var(--cds-inverse-support-02)',
					'03': 'var(--cds-inverse-support-03)',
					'04': 'var(--cds-inverse-support-04)'
				}
			}
		}
	},
	plugins: [formPlugin, textPlugin, datatablePlugin]
};
