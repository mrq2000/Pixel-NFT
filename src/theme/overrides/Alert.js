// ----------------------------------------------------------------------

export default function Alert(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      },
    },
  };
}
