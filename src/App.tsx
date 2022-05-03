/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';
import ThemeConfig from './theme';

import Home from 'pages/Home';
import Mint from 'pages/Mint';
import PageNotFound from 'pages/404';

import MainOutlet from './MainOutlet';
import { SnackbarConfigurator } from './helpers/notify';
import InitialWeb3Modal from 'components/web3modal/InitialWeb3Modal';

import './App.css';

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
    <Suspense fallback={null}>
      <Routes>
        <Route path="" element={<MainOutlet />}>
          <Route index element={<Home />} />
          <Route path="mint" element={<Mint />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

const App = () => {
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
