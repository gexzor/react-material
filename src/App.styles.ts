import styled from 'styled-components';
import { COLORS } from './shared/variables/colors';

export const Wrapper = styled.div`
	min-height: 100vh;
	background-color: ${COLORS.bgColor};
`;

export const ContentWrapper = styled.div`
	max-width: 600px;
	min-width: 500px;
	margin: 0 auto;
`;
