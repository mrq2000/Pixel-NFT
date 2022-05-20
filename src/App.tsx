/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

import ThemeConfig from './theme';

import Home from 'pages/Home';
import Mint from 'pages/Mint';
import Marketplace from 'pages/Marketplace';
import Gallery from 'pages/Gallery';
import Profile from 'pages/Profile';

import PageNotFound from 'pages/404';

import MainOutlet from './MainOutlet';
import { SnackbarConfigurator } from './helpers/notify';
import InitialWeb3Modal from 'components/web3modal/InitialWeb3Modal';

import './App.css';
import PrivateOutlet from 'PrivateOutlet';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      keepPreviousData: false,
    },
  },
});

const ROUTER = (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<PrivateOutlet />}>
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="" element={<MainOutlet />}>
        <Route index element={<Home />} />
        <Route path="mint" element={<Mint />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {
        // @ts-ignore
        <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}>
          <SnackbarConfigurator />

          <ThemeConfig mode={'dark'}>{ROUTER}</ThemeConfig>

          <InitialWeb3Modal />
        </SnackbarProvider>
      }
    </QueryClientProvider>
  );
};

export default App;
