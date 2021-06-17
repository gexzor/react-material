export interface GXPM {
	minute: number;
	value: number;
}

export function convertToChartData(values: number[]): GXPM[] {
	return [
		...values.map(
			(value: number, index): GXPM => {
				return { minute: index, value };
			}
		),
	];
}
