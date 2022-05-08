import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';

import MintButton from 'components/Pixel/MintButton';

import { ReactComponent as Discord } from 'assets/icons/discord-light.svg';

const IMAGES = ['/images/1.png', '/images/2.png', '/images/4.png', '/images/3.png'];

interface IIntroduceItem {
  title: string;
  content: JSX.Element;
}

const IntroduceItem = ({ title, content }: IIntroduceItem) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 1, textAlign: { xs: 'center', md: 'left' } }}>
        {title}
      </Typography>
      {content}
    </Box>
  );
};

const INTRODUCES = [
  {
    title: 'New idea',
    content: (
      <Typography variant="caption">
        Do you fed up with NFT projects that had same concept at present ? Come with us, you can make decision on how
        your NFT would look like by drawing with pixel art.
      </Typography>
    ),
  },
  {
    title: 'Award',
    content: (
      <Typography variant="caption">
        There will be a competition with the prize up to
        <Box
          component="span"
          sx={{
            color: (theme) => theme.palette.primary.main,
          }}
        >
          &nbsp;10,000 USD&nbsp;
        </Box>
        call&nbsp;
        <Box
          component="span"
          sx={{
            color: (theme) => theme.palette.primary.main,
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          The Best Pixel
        </Box>
        . More over this NFT will use in our product in the future.
      </Typography>
    ),
  },
  {
    title: 'Early birds get the best deals!',
    content: (
      <Typography variant="caption">
        First
        <Box
          component="span"
          sx={{
            color: (theme) => theme.palette.primary.main,
          }}
        >
          &nbsp;2000 NFTs&nbsp;
        </Box>
        will get 50% discount for minting (only&nbsp;
        <Box
          component="span"
          sx={{
            color: (theme) => theme.palette.primary.main,
          }}
        >
          5 CELO
        </Box>
        ). Sounds interesting, join us then let's draw and mint your NFT now.
      </Typography>
    ),
  },
];

const FAQ = [
  {
    title: 'How To Mint?',
    content: 'How to mint',
    image: '/images/mint.png',
    position: 'right',
  },
  {
    title: 'The Best Pixel',
    content: 'How to mint',
    image: '/images/trophy.png',
    position: 'left',
  },
  {
    title: 'Why CELO?',
    content:
      'Celo. is extremely fast and cheap, with an average confirmation time of just 2 seconds and a gas cost of 0.0003 CELO for minting, buying and transferring in Bixel!',
    image: '/images/celo.png',
    position: 'right',
  },
];

const Home = () => {
  return (
    <Box
      display="flex"
      flex={1}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      paddingX={2}
      width="100%"
    >
      <Box display="flex" flex={1} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ width: { xs: 350, md: 450 }, margin: 'auto', '> div': { aspectRatio: '5/6' } }}>
          <Carousel indicators={false} interval={5500} duration={1000} animation="slide">
            {IMAGES.map((image) => (
              <Box key={image}>
                <img src={image} alt="" />
              </Box>
            ))}
          </Carousel>
        </Box>

        <Box sx={{ width: { xs: 350, md: 430 }, ml: { xs: 0, md: 2 }, mt: { xs: 3, md: 0 } }}>
          {INTRODUCES.map((item, index) => (
            <Box key={index} mb={3}>
              <IntroduceItem title={item.title} content={item.content} />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center', my: 12 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 3 }}>
          A breakthrough in NFT world!
        </Typography>

        <Typography variant="h4" sx={{ mb: 4 }}>
          0/5500
        </Typography>

        <MintButton />
      </Box>

      {FAQ.map((fqa) => (
        <Box
          mt={6}
          display="flex"
          justifyContent="space-around"
          width="100%"
          maxWidth={1200}
          flexDirection={{ xs: 'column', md: fqa.position == 'right' ? 'row' : 'row-reverse' }}
          alignItems={{ xs: 'center', md: 'initial' }}
        >
          <Box data-aos={`fade-${fqa.position}`} mb={2} sx={{ width: { xs: 350, md: 550 }, aspectRatio: '5/6' }}>
            <img src={fqa.image} />
          </Box>

          <Box maxWidth={550} flex={1}>
            <Typography variant="h3" sx={{ mb: 4 }} data-aos="fade-down">
              {fqa.title}
            </Typography>

            <Typography variant="h5" sx={{ mb: 4 }} data-aos={`fade-${fqa.position == 'right' ? 'left' : 'right'}`}>
              {fqa.content}
            </Typography>
          </Box>
        </Box>
      ))}

      <Box mt={8}>
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>
          Join the Community
        </Typography>

        <Box textAlign="center">
          <Box
            component="a"
            sx={{ textDecoration: 'none' }}
            href="https://twitter.com/NftBixel"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              startIcon={<TwitterIcon />}
              variant="contained"
              sx={{ backgroundColor: 'rgb(29, 155, 240)', mr: 2 }}
            >
              <span>Twitter</span>
            </Button>
          </Box>

          <Box
            component="a"
            sx={{ textDecoration: 'none' }}
            href="https://twitter.com/NftBixel"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              startIcon={<Discord width="1.5rem" height="1.5rem" />}
              variant="contained"
              sx={{ backgroundColor: '#434a61' }}
            >
              Discord
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
