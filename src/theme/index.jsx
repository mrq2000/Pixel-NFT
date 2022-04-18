import PropTypes from 'prop-types';
import { useMemo } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//
import shape from './shape';
import getPalette from './palette';
import typography from './typography';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node,
};

export default function ThemeConfig({ mode, children }) {
  const themeOptions = useMemo(
    () => ({
      mode,
      palette: getPalette(mode),
      shape,
      typography,
      shadows,
      customShadows,
    }),
    [mode],
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme, mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
