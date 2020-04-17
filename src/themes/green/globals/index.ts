import { withStyles } from '@material-ui/core/styles';
import theme from '../index';
import globalInput from './input';

const GlobalCSS = withStyles({
  '@global': {
    body: {
      backgroundColor: theme.Palette.white[100],
    },
    '.MuiGrid-spacing-xs-2': {
      [theme.breakpoints.up('xl')]: {
        width: 'calc(100% + 20px)',
        margin: '-10px',
      },
    },
    '.MuiGrid-spacing-xs-2 > .MuiGrid-item': {
      [theme.breakpoints.up('xl')]: {
        padding: '10px',
      },
    },
    '.MuiGrid-spacing-xs-10 > .MuiGrid-item': {
      [theme.breakpoints.up('xl')]: {
        padding: '48px',
      },
    },
    '.MuiContainer-root:not(.MuiContainer-disableGutters)': {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    '.MuiToolbar-regular': {
      [theme.breakpoints.up('sm')]: {
        minHeight: 68,
      },
    },
    '.MuiButton-contained, .MuiButton-contained:hover, .MuiButton-contained:focus': {
      boxShadow: 'none',
    },
    ...globalInput,
  },
})(() => null);

export default GlobalCSS;
