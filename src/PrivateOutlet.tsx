import { Outlet } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import MainLayout from './components/layout/MainLayout';
import useWeb3Store from './stores/useWeb3Store';

const PrivateOutlet = () => {
  const { isConnected, loadWeb3Modal } = useWeb3Store();

  if (!isConnected) {
    return (
      <MainLayout>
        <Container maxWidth="md">
          <Alert severity="info" sx={{ mt: 10 }}>
            <AlertTitle>You are not connected!</AlertTitle>
            Please&nbsp;
            <Box
              component="span"
              sx={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => {
                loadWeb3Modal();
              }}
            >
              connect
            </Box>
            &nbsp;to your wallet to continue
          </Alert>
        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PrivateOutlet;
