import { Palette as MuiPalette, PaletteColor } from '@material-ui/core/styles/createPalette';
import { Palette } from '@material-ui/core/styles/createPalette';
import { Color } from '@material-ui/core';

export interface Opacity {
  [90]: string;
  [70]: string;
  [50]: string;
  [30]: string;
  [10]: string;
}

export type LogoColors = 'white' | 'default';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Palette extends MuiPalette {
    primary: PaletteColor & Partial<Color>;
    accent: Partial<Color>;
    alert: Partial<Color>;
    grey: Color;
    black: Partial<Opacity> & Partial<Color>;
    white: Partial<Opacity> & Partial<Color>;
    tpcSuccess: Partial<Color>; // success[500] - material issues on fade
    tpcWarning: Partial<Color>; // warning[500] - material issues on fade
  }

  interface Theme {
    Palette: Palette;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    Palette?: Palette;
  }
}
