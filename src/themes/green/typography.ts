import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { TypographyStyleOptions } from '@material-ui/core/styles/createTypography';

export function overrides(theme: Theme) {
  theme.overrides = {
    ...theme.overrides,
    MuiTypography: {
      h1: {
        fontSize: '5.2rem',
        lineHeight: '5.4rem',
        fontWeight: 600,
        [theme.breakpoints.down('xs')]: {
          fontSize: '3.6rem',
          lineHeight: '4rem',
        },
        color: theme.Palette.primary[800],
      },
      h2: {
        fontSize: '4rem',
        lineHeight: '4.4rem',
        fontWeight: 600,
        marginBottom: '1.2rem',
        [theme.breakpoints.down('xs')]: {
          fontSize: '3.2rem',
          lineHeight: '3.6rem',
        },
        color: theme.Palette.primary[800],
      },
      h3: {
        fontSize: '3rem',
        lineHeight: '3.4rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: '2.6rem',
        lineHeight: '3rem',
        fontWeight: 600,
      },
      h5: {
        fontSize: '2.2rem',
        lineHeight: '2.8rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1.8rem',
        lineHeight: '2.2rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1.4rem',
        lineHeight: '2rem',
      },
      body2: {
        fontSize: '1.6rem',
        lineHeight: '2.4rem',
      },
      caption: {
        fontSize: '1.2rem',
        lineHeight: '1.6rem',
      },
    },
  };
}

export const button: TypographyStyleOptions = {
  boxShadow: 'none',
  fontSize: '16px',
  fontStyle: 'normal',
  lineHeight: '16px',
  textTransform: 'none',
};
