import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ChartUnit } from '../shared/models/ChartUnit';
import { GXPM } from '../shared/models/GXPM';
import { COLORS } from '../shared/variables/colors';

type Am4ChartProps = {
	unit: ChartUnit.GOLD | ChartUnit.XP;
	chartData: GXPM[];
};

const ComponentWrapper = styled.div`
	height: 300px;
	margin: 16px 0;
`;

const AM4Chart: React.FC<Am4ChartProps> = ({ unit, chartData }) => {
	const chartElementRef = React.createRef<HTMLElement>();
	let chart: am4charts.XYChart;

	useEffect(() => {
		if (chartElementRef.current) {
			const newChart = am4core.create(
				chartElementRef.current,
				am4charts.XYChart
			);
			newChart.data = chartData;
			newChart.cursor = new am4charts.XYCursor();

			// X-axis
			const axisX = newChart.xAxes.push(new am4charts.CategoryAxis());
			axisX.dataFields.category = 'minute';
			// axisX.fillOpacity = 0.3;
			axisX.renderer.minGridDistance = 50;
			axisX.renderer.labels.template.fill = am4core.color(COLORS.gray);
			axisX.renderer.grid.template.opacity = 0;
			axisX.numberFormatter = new am4core.NumberFormatter();
			axisX.numberFormatter.numberFormat = '00.00';
			// axisX.tooltipText = '=HerwrHWHR';

			// Y-axis
			const axisY = newChart.yAxes.push(new am4charts.ValueAxis());
			// axisY.fillOpacity = 0.3;
			axisY.renderer.labels.template.fill = am4core.color(COLORS.gray);
			axisY.renderer.grid.template.stroke = am4core.color(COLORS.white);
			axisY.renderer.grid.template.opacity = 1;
			axisY.numberFormatter = new am4core.NumberFormatter();
			axisY.numberFormatter.numberFormat = '#.a';

			// Line graph
			const series = newChart.series.push(new am4charts.LineSeries());
			series.dataFields.categoryX = 'minute';
			series.dataFields.valueY = 'value';
			series.name = capitalizeFirstLetter(
				`${unit} advantage at minute marker`
			);
			series.strokeWidth = 2;
			// Adapt the tooltip text to whether the Radiant or Dire has advantage
			series.adapter.add('tooltipText', (text, target): string => {
				const data = target.tooltipDataItem.dataContext as GXPM;
				// If negative value, then return Dire advantage and else Radiant
				return data.value < 0
					? `Dire advantage at {categoryX} min: ${Math.abs(
							data.value
					  )} ${unit}.`
					: `Radiant advantage at {categoryX} min: {valueY} ${unit}.`;
			});
			series.stroke = am4core.color(COLORS.primary.main);

			// Graph data points
			// const bullet = series.bullets.push(new am4charts.CircleBullet());
			// bullet.circle.strokeWidth = 0;
			// bullet.circle.radius = 1;
			// bullet.height = 1;

			chart = newChart;
		}

		return () => {
			if (chart) chart.dispose();
		};
	}, [chartElementRef, chartData]);

	return (
		<ComponentWrapper
			ref={chartElementRef as React.RefObject<HTMLDivElement>}
		></ComponentWrapper>
	);
};

const capitalizeFirstLetter = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export default AM4Chart;
