import { colors, createMuiTheme } from '@material-ui/core';
import { COLORS } from './colors';

declare module '@material-ui/core/styles/createPalette' {
	interface Palette {
		secondary2: Palette['primary'];
	}
	interface PaletteOptions {
		secondary2: PaletteOptions['primary'];
	}
	interface Palette {
		neutral: Palette['primary'];
	}
	interface PaletteOptions {
		neutral: PaletteOptions['primary'];
	}
	interface Palette {
		muted: Palette['primary'];
	}
	interface PaletteOptions {
		muted: PaletteOptions['primary'];
	}
}

export const theme = createMuiTheme({
	palette: {
		background: {
			default: COLORS.bgColor,
		},
		text: {
			// primary: 'blue',
		},
		type: 'dark',
		primary: {
			main: COLORS.primary.main,
			contrastText: COLORS.primary.contrastDefaultColor,
		},
		secondary: {
			main: COLORS.secondary.main,
			contrastText: COLORS.secondary.contrastDefaultColor,
		},
		secondary2: {
			main: COLORS.secondary2.main,
			contrastText: COLORS.secondary2.contrastDefaultColor,
		},
		success: {
			main: COLORS.success.main,
			contrastText: COLORS.success.contrastDefaultColor,
		},
		warning: {
			main: COLORS.warning.main,
			contrastText: COLORS.warning.contrastDefaultColor,
		},
		neutral: {
			main: COLORS.neutral.main,
			contrastText: COLORS.neutral.contrastDefaultColor,
		},
		muted: {
			main: colors.grey[500],
		},
	},
	typography: {
		fontFamily: ['Open Sans', 'sans-serif'].join(','),

		h1: {
			fontSize: '112px',
			lineHeight: '112px',
			fontWeight: 700,
			color: COLORS.neutral.main,
		},
		h2: {
			fontSize: '72px',
			lineHeight: '72px',
			fontWeight: 700,
			color: COLORS.neutral.main,
		},
		h3: {
			fontSize: '32px',
			lineHeight: '32px',
			fontWeight: 600,
			color: COLORS.neutral.main,
			marginTop: '32px',
		},
		h4: {
			fontSize: '28px',
			lineHeight: '32px',
			fontWeight: 500,
			color: COLORS.neutral.main,
		},
		subtitle2: {
			fontSize: '20px',
			lineHeight: '24px',
			fontWeight: 400,
			color: COLORS.gray,
		},
		subtitle1: {
			fontSize: '18px',
			lineHeight: '24px',
			fontWeight: 400,
			color: COLORS.gray,
		},
		caption: {
			fontStyle: 'italic',
			color: COLORS.gray,
		},
	},
	spacing: [0, 4, 8, 16, 32, 64],
	// Custom Material UI component styling
	overrides: {
		MuiCard: {
			root: {
				background: COLORS.cardBgColor,
			},
		},
		MuiPaper: {
			root: {
				background: COLORS.cardBgColor,
			},
		},
		MuiTableContainer: {
			root: {
				background: COLORS.cardBgColor,
			},
		},
	},
});

// $theme-typography: mat-typography-config($font-family: 'Open Sans, sans-serif',
//       $display-4: mat-typography-level(112px, 112px, 700),
//       $display-3: mat-typography-level(72px, 72px, 700),
//       $headline: mat-typography-level(32px, 32px, 600),
//       $title: mat-typography-level(28px, 32px, 500),
//       $subheading-2: mat-typography-level(20px, 24px, 400),
//       $subheading-1: mat-typography-level(18px, 24px, 400));

//   $card-typography: mat-typography-config($font-family: 'Open Sans, sans-serif',
//       $title: mat-typography-level(16px 20px, 400));
