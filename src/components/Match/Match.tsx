import {
	Box,
	Card,
	CardContent,
	LinearProgress,
	Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { RouteComponentProps } from 'react-router-dom';
import { IMatch } from '../../shared/models/IMatch';
import { MatchService } from '../../shared/services/MatchService';
import { SectionWrapper } from '../../shared/styles/GlobalStyles';
import MatchCharts from './MatchCharts/MatchCharts';
import {
	StyledCardHeader,
	StyledDireScore,
	StyledMatchScores,
	StyledRadiantScore,
	StyledSectionHeader,
} from './MatchStyles';
import PlayerList from './PlayerList/PlayerList';

type Props = {};

interface RouteParams {
	id: string;
}

const Match: React.FC<Props & RouteComponentProps<RouteParams>> = (props) => {
	const [matchData, updateMatchData] = useState<IMatch>();
	const matchId = props.match.params.id;
	const matchService = new MatchService();

	useEffect(() => {
		matchService.getMatchData(matchId).then((response) => {
			updateMatchData(response);
		});
	}, []);

	return matchData ? (
		<SectionWrapper>
			<StyledSectionHeader>
				<Typography variant="h3">Match overview</Typography>
				<Typography variant="subtitle1">
					An overview of the match scoreline, the team gold and xp
					advantage over time, as well as individual player stats.
				</Typography>
			</StyledSectionHeader>

			<Card color="primary">
				<Box textAlign="right" m={2} mt={1.5}>
					<Typography variant="caption">Match {matchId}</Typography>
				</Box>
				<StyledCardHeader
					title={
						matchData.radiant_win === true
							? 'Radiant victory'
							: 'Dire victory'
					}
					subheader={
						<Moment format="m:ss">
							{matchData.duration * 1000}
						</Moment>
					}
				/>

				<CardContent>
					<StyledMatchScores>
						<StyledRadiantScore className="radiant-score">
							<Typography
								color="textPrimary"
								variant="h2"
								gutterBottom={false}
							>
								{matchData.radiant_score}
							</Typography>
							<span>Radiant</span>
						</StyledRadiantScore>
						<StyledDireScore className="dire-score">
							<Typography
								color="textPrimary"
								variant="h2"
								gutterBottom={false}
							>
								{matchData.dire_score}
							</Typography>
							<span>Dire</span>
						</StyledDireScore>
					</StyledMatchScores>
				</CardContent>
			</Card>

			<MatchCharts matchData={matchData} />

			<PlayerList players={matchData.players} />
		</SectionWrapper>
	) : (
		<div className="loading-match">
			<Typography color="textPrimary" variant="h3" gutterBottom={true}>
				Loading match {matchId}...
			</Typography>
			<LinearProgress color="primary" />
		</div>
	);
};

export default Match;
