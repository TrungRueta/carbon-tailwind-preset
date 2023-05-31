import plugin from 'tailwindcss/plugin';

export default plugin(({ matchUtilities }) => {
	matchUtilities(
		{
			'productive-heading': (value) => {
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
});
