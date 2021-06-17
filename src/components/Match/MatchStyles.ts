import { CardHeader } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import styled from 'styled-components';
import { COLORS } from '../../shared/variables/colors';
import { theme } from '../../shared/variables/theme';

export const StyledSectionHeader = styled.div`
	margin-bottom: ${theme.spacing(3)}px;
`;

export const StyledCardHeader = styled(CardHeader)`
	text-align: center;
	text-transform: uppercase;
`;

export const StyledRadiantScore = styled.div`
	background-color: ${COLORS.primary.main};
	margin-right: ${theme.spacing(1)}px;
`;

export const StyledDireScore = styled.div`
	background-color: ${COLORS.secondary2.main};
	margin-left: ${theme.spacing(1)}px;
`;

export const StyledMatchScores = styled.div`
	display: flex;
	flex-direction: row;

	${StyledRadiantScore},
	${StyledDireScore} {
		display: flex;
		justify-content: center;
		align-content: center;
		padding: ${theme.spacing(5)}px;
		flex-direction: column;
		flex-grow: 1;
		text-align: center;
	}
`;

export const StyledTabPanel = styled(TabPanel)`
	&.MuiTabPanel-root {
		padding: 0;
	}
`;
