import React from "react";
import logo from '../images/troll-face.png';

export default function Header() {
  return (
    <header className='purple--gradient'>
      <img src={logo} alt='site logo' className='logo' />
      <h1 className='header--title'>Meme Generator</h1>
    </header>
  );
}
