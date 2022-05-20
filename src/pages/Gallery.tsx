import { useState } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import useGetNFTs from 'hooks/useGetNFTs';
import PixelImage from 'components/common/PixelImage';
import { Container } from '@mui/material';
import { HEIGHT, WIDTH } from 'helpers/pixel';

const Gallery = () => {
  const { data, isLoading } = useGetNFTs(0, 10);
  const [isShowBorder, setIsShowBorder] = useState(true);

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Alert severity="info" sx={{ mb: 4, maxWidth: '70%' }}>
        <AlertTitle>We are working hard for big update! Remember our prize 10,000USD for 'The Best Pixel'.</AlertTitle>
      </Alert>
      {isLoading && <CircularProgress sx={{ mt: 5 }} size="3rem" color="inherit" />}
      {data && (
        <>
          <Box>
            <FormControlLabel
              control={
                <Switch checked={isShowBorder} onChange={() => setIsShowBorder(!isShowBorder)} color="primary" />
              }
              label="Show border"
            />
          </Box>

          <Grid container spacing={3} display="flex" sx={{ p: 2 }}>
            {[...data]?.reverse().map((nftData, index) => {
              const title = nftData.slice(HEIGHT * WIDTH + 1);
              const code = nftData.slice(0, HEIGHT * WIDTH);
              return (
                <>
                  {code !== '' && (
                    <Grid item xs={12} md={4} key={index} display="flex" justifyContent="center">
                      <Card
                        sx={{
                          height: 'fit-content',
                          width: 325,
                          cursor: 'pointer',
                          transition: 'transform .5s',
                          '&:hover': {
                            boxShadow: (theme) => theme.shadows[10],
                            transform: 'scale(1.01)',
                          },
                        }}
                      >
                        <PixelImage widthContainer={325} showBorder={isShowBorder} code={code} />

                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }}>
                            {title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  )}
                </>
              );
            })}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Gallery;
