// ----------------------------------------------------------------------

export default function Dialog(theme) {
  return {
    MuiDialogActions: {
      styleOverrides: {
        root: {
          paddingRight: theme.spacing(3),
          paddingLeft: theme.spacing(3),
        },
      },
    },
  };
}
