import styled from 'styled-components';
import { theme } from '../../../../shared/variables/theme';

export const StyledViewedStats = styled.div`
	margin-bottom: ${theme.spacing(3)}px;
	& .MuiTableContainer-root {
		margin-top: ${theme.spacing(3)}px;

		& .MuiTableCell-root {
			&:first-of-type {
				width: 120px;
			}
		}
	}
`;
