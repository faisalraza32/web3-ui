import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/material";
import { createMUITheme } from "../packages/components/src/styles/theme";
import { Locale } from "../packages/components/src/i18n/Locale";
//import theme from "./assets/images/theme";
import '@fontsource/roboto';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={createMUITheme()}>
      <CssBaseline key="css-baseline" />
      <Locale locale={'en'}>
        <Story />
      </Locale>
    </ThemeProvider>
  ),
];

export const parameters = {
  controls: { expanded: true },
  viewMode: 'docs',
};
