// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, addUtilities }) {
	// Add your custom styles here

	// heading 01 - 06
	matchUtilities(
		{
			'text-heading': (value) => {
				return {
					'font-size': `var(--cds-productive-heading-${value}-font-size, 2.625rem)`,
					'font-weight': `var(--cds-productive-heading-${value}-font-weight, 300)`,
					'line-height': `var(--cds-productive-heading-${value}-line-height, 1.199)`,
					'letter-spacing': `var(--cds-productive-heading-${value}-letter-spacing, 0)`
				};
			}
		},
		{
			values: ['01', '02', '03', '04', '05', '06', '07'].reduce(
				(acc, cur) => ((acc[cur] = cur), acc),
				{}
			),
			type: 'any'
		}
	);

	// make carbon date picker full width
	addUtilities({
		'.carbon-date-picker-full-width': {
			'@apply w-full': {},

			'.bx--date-picker': {
				'@apply w-full': {},

				'.bx--date-picker-container': {
					'@apply w-full': {},

					'.flatpickr-wrapper': {
						'@apply w-full': {}
					},

					'.bx--date-picker__input': {
						'@apply w-full': {}
					}
				}
			}
		}
	});
});
