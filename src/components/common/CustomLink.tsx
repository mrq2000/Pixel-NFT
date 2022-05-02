import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import MuiLink from '@mui/material/Link';
import { Theme } from '@mui/material';

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const LinkStyle = {
    color: (theme: Theme) => (match ? theme.palette.primary.main : theme.palette.text.primary),
    fontWeight: '600',
    fontSize: '1rem',
    '&:hover': {
      opacity: '0.48',
    },
    mr: 3,
    ml: 1,
  };

  return (
    <Link to={to} {...props}>
      <MuiLink sx={LinkStyle}>{children}</MuiLink>
    </Link>
  );
};

export default CustomLink;
