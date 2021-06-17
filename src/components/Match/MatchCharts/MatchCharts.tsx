import { Card, CardContent, Fade, Tab, Tabs } from '@material-ui/core';
import { TabContext } from '@material-ui/lab';
import React, { useState } from 'react';
import { ChartUnit } from '../../../shared/models/ChartUnit';
import { convertToChartData } from '../../../shared/models/GXPM';
import { IMatch } from '../../../shared/models/IMatch';
import { SectionWrapper } from '../../../shared/styles/GlobalStyles';
import { theme } from '../../../shared/variables/theme';
import AM4Chart from '../../Am4Chart';
import { StyledTabPanel } from '../MatchStyles';

type MatchChartsProps = {
	matchData: IMatch;
};

const MatchCharts: React.FC<MatchChartsProps> = ({ matchData }) => {
	const [tabValue, setTabValue] = useState('0');
	const handleTabChange = (
		event: React.ChangeEvent<{}>,
		newValue: string
	): void => {
		setTabValue(newValue);
	};

	return (
		<SectionWrapper>
			<Card>
				<CardContent>
					<TabContext value={tabValue.toString()}>
						<Tabs
							value={tabValue}
							indicatorColor="primary"
							onChange={handleTabChange}
							variant="fullWidth"
							centered
						>
							{matchData.radiant_gold_adv && (
								<Tab label="Gold" value="0" />
							)}
							{matchData.radiant_xp_adv && (
								<Tab label="XP" value="1" />
							)}
						</Tabs>

						{matchData.radiant_gold_adv && (
							<Fade
								in={tabValue === '0'}
								timeout={{
									enter: 500,
									exit: theme.transitions.duration.complex,
								}}
							>
								<StyledTabPanel
									value="0"
									children={
										<AM4Chart
											unit={ChartUnit.GOLD}
											chartData={convertToChartData(
												matchData.radiant_gold_adv
											)}
										/>
									}
								/>
							</Fade>
						)}

						{matchData.radiant_xp_adv && (
							<Fade
								in={tabValue === '1'}
								timeout={{
									enter: 500,
									exit: theme.transitions.duration.complex,
								}}
							>
								<StyledTabPanel
									value="1"
									children={
										<AM4Chart
											unit={ChartUnit.XP}
											chartData={convertToChartData(
												matchData.radiant_xp_adv
											)}
										/>
									}
								/>
							</Fade>
						)}
					</TabContext>
				</CardContent>
			</Card>
		</SectionWrapper>
	);
};

export default MatchCharts;
