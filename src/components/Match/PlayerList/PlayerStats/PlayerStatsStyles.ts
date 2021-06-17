import styled from 'styled-components';
import { theme } from '../../../../shared/variables/theme';

export const StyledPlayerStats = styled.div`
	margin: ${theme.spacing(1)}px 0;

	& .MuiTableRow-root {
		& .MuiTableCell-root {
			&:first-of-type {
				width: 120px;
			}
		}
	}
`;
