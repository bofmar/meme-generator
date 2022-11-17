import React, { useState } from "react";
import Form from './Form';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemes, setAllMemes] = useState([]);

  function getRandomNumber() {
    return Math.floor(Math.random() * allMemes.length);
  }

  function getRandomImage(e) {
    e.preventDefault();
    window.alert('Yay');
  }

  return (
    <main>
      <Form getRandomImage={getRandomImage} />
      <img src={meme.randomImage} className='meme--image' />
    </main>
  );
}
