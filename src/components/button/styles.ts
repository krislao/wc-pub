import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonSolid: {
      backgroundColor: theme.Palette.accent[500],
      transition: 'background-color 1s',
      fontWeight: 'bold',
      color: '#ffffff',
      width: 'auto',
      '&:hover:enabled': {
        backgroundColor: theme.Palette.accent[300],
      },
      '&:disabled': {
        backgroundColor: 'rgb(199, 199, 199)',
        color: 'rgb(139, 139, 139)',
      },
    },
    buttonSolidSm: {
      padding: '6px 16px',
      minWidth: '116px',
      borderRadius: '70px',
    },
    buttonSolidMd: {
      padding: '10px 16px',
      minWidth: '116px',
      borderRadius: '30px',
    },
    buttonSolidLg: {
      padding: '18px 24px',
      minWidth: '116px',
      borderRadius: '56px',
    },
    buttonOutlined: {
      backgroundColor: '#ffffff',
      fontWeight: 'bold',
      color: theme.Palette.accent[500],
      border: `1px solid ${theme.Palette.accent[500]}`,
      boxSizing: 'border-box',
      '&:hover:enabled': {
        backgroundColor: 'rgb(229, 246, 242)',
        color: theme.Palette.accent[500],
      },
      '&:disabled': {
        color: 'rgb(199, 199, 199)',
        backgroundColor: '#ffffff',
        border: '1px solid rgb(199, 199, 199)',
      },
    },
    buttonOutlinedSm: {
      padding: '6px 16px',
      borderRadius: '70px',
    },
    buttonOutlinedMd: {
      padding: '10px 16px',
      borderRadius: '30px',
    },
    buttonFlat: {
      backgroundColor: 'none',
      fontWeight: 'bold',
      '&:hover:enabled': {
        backgroundColor: theme.Palette.accent[100],
        borderRadius: '70px',
      },
      '&:disabled': {
        backgroundColor: 'transparent',
        color: 'rgb(199, 199, 199)',
      },
    },
    buttonFlatColored: {
      color: theme.Palette.accent[500],
    },
    buttonFlatDark: {
      color: theme.Palette.black[90],
    },
    buttonLink: {
      backgroundColor: 'none',
      fontWeight: 'bold',
      color: theme.Palette.accent[500],
      '&:hover:enabled': {
        backgroundColor: 'inherit',
      },
      '&:disabled': {
        backgroundColor: 'transparent',
        color: 'rgb(199, 199, 199)',
        borderBottomColor: 'red',
      },
    },
    spanLink: {
      borderBottom: '1px solid #00A97F',
    },
  }),
);

export default useStyles;
