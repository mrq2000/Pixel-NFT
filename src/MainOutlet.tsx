import { Outlet } from 'react-router-dom';
import MainLayout from 'components/layout/MainLayout';

const MainOutlet = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default MainOutlet;
