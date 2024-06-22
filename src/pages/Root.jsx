import { Outlet } from 'react-router';

import logo from '../assets/images/logo.png';

export default function RootLayout() {
  return (
    <>
      <header>
        <div className="logo-wrapper">
          <img src={logo} alt="Cinema logo" />
          <h3>Cinema 100</h3>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
