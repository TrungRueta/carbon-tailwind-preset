import plugin from 'tailwindcss/plugin';

export default plugin(({ addUtilities }) => {
	addUtilities({
		'.carbon-date-picker-w-full': {
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
