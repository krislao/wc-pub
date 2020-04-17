import { createMuiTheme } from '@material-ui/core/styles';
import breakpoints from './breakpoints';
import Palette from './colors';
import { overrides, button } from './typography';
import './fonts.scss';

const theme = createMuiTheme({
  ...breakpoints,
  ...Palette,
  typography: {
    fontFamily: '"Nunito Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    button,
  },
  props: {
    MuiGrid: {
      spacing: 2, // we set default grid spacing to 18px
    },
    MuiContainer: {
      maxWidth: 'xl',
    },
  },
});

overrides(theme);

export default theme;
