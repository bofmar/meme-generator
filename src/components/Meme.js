import React, { useState } from "react";

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
      <form>
        <div class='input--wrapper'>
          <input type='text' placeholder='Top text' className='top--text' />
          <input type='text' placeholder='Bottom text' className='bottom--text' />
        </div>
        <button class='purple--gradient new--image--button' onClick={getRandomImage}>Get a new image</button>
      </form>
      <img src={meme.randomImage} className='meme--image' />
    </main>
  );
}
