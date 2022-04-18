// ----------------------------------------------------------------------

export default function Card(theme, mode) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: mode == 'light' ? theme.customShadows.z16 : theme.customShadows.z1,
          borderRadius: theme.shape.borderRadiusSm,
          position: 'relative',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2),
          '&:last-child': {
            paddingBottom: theme.spacing(2),
          },
        },
      },
    },
  };
}
