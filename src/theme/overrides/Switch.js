// ----------------------------------------------------------------------

export default function Switch(theme, mode) {
  return {
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: mode === 'light' ? '#aab4be' : '#8796A5',
        },
      },
    },
  };
}
