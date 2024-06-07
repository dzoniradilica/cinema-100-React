import { Outlet } from 'react-router';

import logo from '../../public/images/logo.png';

export default function RootLayout() {
  return (
    <header>
      <img src={logo} alt="Cinema logo" />
    </header>
  );
}
