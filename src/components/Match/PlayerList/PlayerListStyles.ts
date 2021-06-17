import styled from 'styled-components';
import { theme } from '../../../shared/variables/theme';
import { StyledPlayerStats } from './PlayerStats/PlayerStatsStyles';

const colGap = theme.spacing(2);
export const StyledPlayerList = styled.div`
	display: grid;
	grid-template-columns: 50% - ${colGap / 2}px 50% ${colGap / 2}px;
	grid-column-gap: ${colGap}px;
	grid-auto-flow: column;

	& > ${StyledPlayerStats} {
		grid-column: 1;

		&:nth-child(n + 6) {
			grid-column: 2;
		}
	}
`;
