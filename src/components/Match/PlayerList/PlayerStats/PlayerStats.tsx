import {
	Paper,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { IPlayer } from '../../../../shared/models/IPlayer';
import { StyledPlayerStats } from './PlayerStatsStyles';

type PlayerStatsProps = {
	player: IPlayer;
	key: number;
	viewStats: (clickedPlayer: IPlayer) => void;
};
const PlayerStats: React.FC<PlayerStatsProps> = ({ player, viewStats }) => {
	return (
		<StyledPlayerStats>
			<TableContainer component={Paper} onClick={() => viewStats(player)}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>{player.personaname}</TableCell>
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
						</TableRow>

						<TableRow>
							<TableCell>{player.hero_id}</TableCell>
							<TableCell align="right">
								<Typography variant="body2" align="center">
									{player.kills}/{player.deaths}/
									{player.assists}
								</Typography>
							</TableCell>
							<TableCell align="right">
								<Typography variant="body2" align="center">
									{player.level}
								</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
				</Table>
			</TableContainer>
		</StyledPlayerStats>
	);
};

export default PlayerStats;
