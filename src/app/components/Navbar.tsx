import React from 'react';
import NavList from './NavList';

function Navbar() {
  return (
    <div className="flex justify-center gap-5 items-center h-16 bg-pink-800 text-white text-4xl md:text-5xl font-bold">
      <NavList href="/" title="Home" />
      <NavList href="/country" title="Country List" />
    </div>
  );
}

export default Navbar;

