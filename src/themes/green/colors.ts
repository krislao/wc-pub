import { createMuiTheme } from '@material-ui/core/styles';
import { Palette } from '@material-ui/core/styles/createMuiTheme';

const defaultTheme = createMuiTheme();
interface Colors {
  Palette: Palette;
}

const colors: Colors = {
  Palette: {
    ...defaultTheme.palette,
    primary: {
      ...defaultTheme.palette.primary,
      '50': '#EDEDFF',
      '400': '#f7f7fd', // mainly used for section backgrounds
      '500': '#8987FF',
      '600': '#5E5BD9',
      '700': '#4E519B',
      '800': '#3C3E6A',
    },
    accent: {
      '50': 'rgba(0,172,48,0.05)',
      '300': '#00D4A0',
      '500': '#00A97F',
      '600': '#00A755',
    },
    tpcSuccess: {
      '500': '#0B8A00',
    },
    tpcWarning: {
      '500': '#FF9800',
    },
    alert: {
      '400': '#FF6161',
      '500': '#FF2667',
    },
    error: {
      ...defaultTheme.palette.error,
      main: '#EB0000',
    },
    grey: {
      ...defaultTheme.palette.grey,
      '50': '#FAFAFA',
      '100': '#F5F5F5',
      '200': '#EEEEEE',
      '300': '#E0E0E0',
      '400': '#BDBDBD',
      '500': '#9E9E9E',
      '600': '#E5E5E5',
    },
    black: {
      '100': '#000000',
      '90': 'rgba(0,0,0,0.9)',
      '70': 'rgba(0,0,0,0.7)',
      '50': 'rgba(0,0,0,0.5)',
      '30': 'rgba(0,0,0,0.3)',
      '10': 'rgba(0,0,0,0.1)',
    },
    white: {
      '100': '#ffffff',
      '90': 'rgba(255,255,255,0.9)',
      '70': 'rgba(255,255,255,0.7)',
      '50': 'rgba(255,255,255,0.5)',
      '30': 'rgba(255,255,255,0.3)',
      '10': 'rgba(255,255,255,0.1)',
    },
  },
};

export default colors;
