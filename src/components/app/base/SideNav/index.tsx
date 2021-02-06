import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

import { NavHeader } from './NavHeader';
import { NavLinks } from './NavLinks/index';
import { NavFooter } from './NavFooter';

export const NavContent: React.FC = () => {
  return (
    <div className="flex flex-col justify-around items-center h-screen 2xl:h-5/6">
      <NavHeader />
      <NavLinks />
      <NavFooter />
    </div>
  );
};

export const NavSmallScreen: React.FC = () => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className="fixed md:hidden left-0 z-20">
        <span className="">
          <Hamburger toggled={display} toggle={setDisplay} />
        </span>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out block md:hidden bg-gray-nav h-screen fixed z-10 max-w-0 opacity-0 ${
          display ? 'max-w-screen-2xl opacity-100' : ''
        }`}
      >
        {display && <NavContent />}
      </div>
    </>
  );
};

export const Navbar: React.FC = () => {
  return (
    <>
      <NavSmallScreen />
      <div className="min-w-72 hidden md:block md:w-72 bg-gray-nav h-screen fixed">
        <NavContent />
      </div>
    </>
  );
};

export default Navbar;
