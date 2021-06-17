import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../shared/variables/theme';

const HeroHeader: React.FC = () => {
	const ComponentWrapper = styled.div`
		margin-bottom: ${theme.spacing(5)}px;
	`;

	return (
		<ComponentWrapper>
			<Typography variant="h1" gutterBottom={false}>
				DARK
			</Typography>
			<Typography variant="h2">
				MATERIAL
				<br />
				DESIGN
			</Typography>
		</ComponentWrapper>
	);
};

export default HeroHeader;
