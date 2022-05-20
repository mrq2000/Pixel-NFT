import { useCallback, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

import useGetMyNFT from 'hooks/useGetMyNFT';
import PixelImage from 'components/common/PixelImage';
import { Container } from '@mui/material';
import { HEIGHT, WIDTH } from 'helpers/pixel';
import SellButton from 'components/Pixel/SellButton';

const Profile = () => {
  const { data, fetchNextPage, hasNextPage, isFetching } = useGetMyNFT();
  const [isShowBorder, setIsShowBorder] = useState(true);

  const nftLength = useMemo(() => {
    return data ? data.pages.reduce((count, page) => count + page.length, 0) : 0;
  }, [data]);

  const handleScroll = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flex: 1 }}>
      {!data && <CircularProgress sx={{ mt: 5 }} size="3rem" color="inherit" />}
      {data && data.pages[0][0] == '' && (
        <Alert severity="info" sx={{ mt: 10 }}>
          <AlertTitle>You don't have any NFT! Let's mint some!</AlertTitle>
        </Alert>
      )}
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

          <InfiniteScroll
            dataLength={nftLength}
            next={handleScroll}
            hasMore={hasNextPage || false}
            loader={isFetching && <CircularProgress size="3rem" color="inherit" />}
            style={{ width: '100%' }}
          >
            <Grid container spacing={3} display="flex" sx={{ p: 2 }}>
              {data.pages.map((page, index) =>
                [...page].reverse().map((data) => {
                  const title = data.slice(HEIGHT * WIDTH + 1);
                  const code = data.slice(0, HEIGHT * WIDTH);
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

                              <SellButton />
                            </CardContent>
                          </Card>
                        </Grid>
                      )}
                    </>
                  );
                }),
              )}
            </Grid>
          </InfiniteScroll>
        </>
      )}
    </Container>
  );
};

export default Profile;
