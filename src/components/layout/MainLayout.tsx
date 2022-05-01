import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';

import Footer from './Footer';
import Header from './Header';
import SidebarMobile from './SidebarMobile';

const MainLayout = ({ children }: any) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile) {
      setOpenSideBar(false);
    }
  }, [isMobile]);

  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header handleOpenSideBar={handleOpenSideBar} />
      <SidebarMobile openSideBar={openSideBar} handleCloseSideBar={handleCloseSideBar} />

      <Box component="main" flexGrow={1} pb={12}>
        <Toolbar />
        {children}
      </Box>

      <Box display="flex" flex={1} />

      <Footer />
    </Box>
  );
};

export default MainLayout;
