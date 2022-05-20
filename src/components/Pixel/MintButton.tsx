import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router';

const MintButton = () => {
  const navigate = useNavigate();
  return (
    <LoadingButton
      variant="contained"
      size="large"
      sx={{ px: '4rem', py: '2rem', fontSize: '1.5rem' }}
      onClick={() => navigate('/mint')}
    >
      <div>Mint Now</div>
    </LoadingButton>
  );
};

export default MintButton;
