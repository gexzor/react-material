import { colors } from '@material-ui/core';
import {
	gexBlue,
	gexGray,
	gexGreen,
	gexPurple,
	gexRed,
	gexTeal,
} from './palettes';

export const COLORS = {
	white: 'white',
	black: 'black',
	bgColor: '#19181d',
	cardBgColor: '#25252f',
	gray: colors.grey[600],
	primary: {
		main: gexPurple[500],
		contrastDefaultColor: gexPurple.contrastDefaultColor,
	},
	secondary: {
		main: gexTeal[500],
		contrastDefaultColor: gexPurple.contrastDefaultColor,
	},
	accent: {
		main: gexTeal[500],
		contrastDefaultColor: gexPurple.contrastDefaultColor,
	},
	secondary2: {
		main: gexBlue[500],
		contrastDefaultColor: gexPurple.contrastDefaultColor,
	},
	accent2: {
		main: gexBlue[500],
		contrastDefaultColor: gexPurple.contrastDefaultColor,
	},
	success: {
		main: gexGreen[500],
		contrastDefaultColor: gexPurple.contrastDefaultColor,
	},
	warning: {
		main: gexRed[500],
		contrastDefaultColor: gexPurple.contrastDefaultColor,
	},
	warn: {
		main: gexRed[500],
		contrastDefaultColor: gexPurple.contrastDefaultColor,
	},
	neutral: {
		main: gexGray[500],
		contrastDefaultColor: gexPurple.contrastDefaultColor,
	},
};
