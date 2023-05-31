import plugin from 'tailwindcss/plugin';

export default plugin(({ addUtilities }) => {
	addUtilities({
		'.carbon-data-table-overflow-x': {
			'.bx--data-table_inner-container': {
				overflowX: 'auto',

				'.bx--data-table': {
					width: 'fit-content'
				}
			}
		}
	});
});
