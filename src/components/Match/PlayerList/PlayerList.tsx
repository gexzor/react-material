import React, { useState } from 'react';
import { IPlayer } from '../../../shared/models/IPlayer';
import { SectionWrapper } from '../../../shared/styles/GlobalStyles';
import { StyledPlayerList } from './PlayerListStyles';
import PlayerStats from './PlayerStats/PlayerStats';
import { ViewedStats } from './ViewedStats/ViewedStats';

type PlayerListProps = {
	players: IPlayer[];
};

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
	const [viewedStats, setViewedStats] = useState<IPlayer>();
	const viewStats = (clickedPlayer: IPlayer): void => {
		setViewedStats(clickedPlayer);
	};

	console.log(players[0]);

	return (
		<SectionWrapper>
			<ViewedStats stats={viewedStats as IPlayer} />
			<StyledPlayerList>
				{players.map((player, index: number) => {
					return (
						<PlayerStats
							key={index}
							player={player}
							viewStats={viewStats}
						/>
					);
				})}
			</StyledPlayerList>
		</SectionWrapper>
	);
};

export default PlayerList;
