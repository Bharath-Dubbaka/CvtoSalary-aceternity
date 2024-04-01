// components/Navbar.js

import React from 'react';
import Link from 'next/link';

export function Navbar () {
  return   (
      <nav className="navbar">
  <div className="container">
    <Link href="/">
      <span className="logo">Your Logo</span>
    </Link>
    <ul className="nav-links">
      <li>
        <Link href="/">
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <span>About</span>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <span>Contact</span>
        </Link>
      </li>
    </ul>
  </div>
</nav>
)};

