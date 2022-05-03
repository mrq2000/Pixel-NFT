import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CustomLink from 'components/common/CustomLink';

const NotFoundPage = () => {
  return (
    <Container maxWidth="md">
      <Alert severity="error" sx={{ mt: 10 }}>
        <AlertTitle>Page Not Found!</AlertTitle>
        Please make sure url was right! Click{' '}
        <CustomLink to="/" muiSxProps={{ margin: 0 }}>
          here
        </CustomLink>{' '}
        to goback Home page
      </Alert>
    </Container>
  );
};

export default NotFoundPage;
