import {
	Paper,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@material-ui/core';
import * as React from 'react';
import { IPlayer } from '../../../../shared/models/IPlayer';
import { StyledViewedStats } from './ViewedStatsStyles';

export interface ViewedStatsProps {
	stats: IPlayer | null;
}

export const ViewedStats: React.FC<ViewedStatsProps> = ({ stats }) => {
	console.log(stats);
	return (
		<StyledViewedStats>
			<Typography variant="h3">
				Here is how the players performed
			</Typography>
			{stats ? (
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>{stats.personaname}</TableCell>
								<TableCell align="right">
									<Typography variant="body2" align="center">
										K/D/A
									</Typography>
								</TableCell>
								<TableCell align="right">
									<Typography variant="body2" align="center">
										Level
									</Typography>
								</TableCell>
								<TableCell align="right">
									<Typography variant="body2" align="center">
										GPM
									</Typography>
								</TableCell>
								<TableCell align="right">
									<Typography variant="body2" align="center">
										XPM
									</Typography>
								</TableCell>
								<TableCell align="right">
									<Typography variant="body2" align="center">
										DMG
									</Typography>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>{stats.hero_id}</TableCell>
								<TableCell align="right">
									<Typography variant="body2" align="center">
										{stats.kills}/{stats.deaths}/
										{stats.assists}
									</Typography>
								</TableCell>
								<TableCell align="right">
									<Typography variant="body2" align="center">
										{stats.level}
									</Typography>
								</TableCell>
								<TableCell align="right">
									<Typography variant="body2" align="center">
										{stats.gold_per_min}
									</Typography>
								</TableCell>
								<TableCell align="right">
									<Typography variant="body2" align="center">
										{stats.xp_per_min}
									</Typography>
								</TableCell>
								<TableCell align="right">
									<Typography variant="body2" align="center">
										{stats.hero_damage}
									</Typography>
								</TableCell>
							</TableRow>
						</TableHead>
					</Table>
				</TableContainer>
			) : (
				<Typography variant="subtitle1" gutterBottom={true}>
					Click on individual players to view a comprehensive summary
					of their stats.
				</Typography>
			)}
		</StyledViewedStats>
	);
};
