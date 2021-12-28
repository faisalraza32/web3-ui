import { defaultTo, pipe, mergeDeepRight } from 'ramda';
import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import { baseBlue, baseWhite } from './colors';
import MuiInputBaseOverride from './overrides/MuiInputBase.override';
import MuiButtonOverride from './overrides/MuiButton.override';

export const BASE_THEME_OPTIONS: ThemeOptions = {
  palette: {
    background: {
      default: '#e9edf5'
    },
    primary: {
      light: baseBlue[500],
      main: baseBlue[800],
      dark: baseBlue[900]
    },
    secondary: baseWhite,
    action: {
      active: '#52a2d2',
      disabled: 'rgba(0, 0, 0, 0.38)',
      disabledBackground: 'rgba(0, 0, 0, 0.10)',
      selected: baseBlue['50']
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: MuiInputBaseOverride
    },
    MuiButton: {
      styleOverrides: MuiButtonOverride
    }
  }
};

export const createMUITheme = pipe(
  defaultTo({}),
  // @ts-ignore
  mergeDeepRight(BASE_THEME_OPTIONS),
  createTheme
) as (options?: ThemeOptions) => Theme;
