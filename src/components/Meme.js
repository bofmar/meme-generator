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

  function handleChange(e) {
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <main>
      <Form getRandomImage={getRandomImage} handleChange={handleChange} topText={meme.topText} bottomText={meme.bottomText} />
      <div className='meme'>
        <img src={meme.randomImage} className='meme--image' />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
