import React, { useState, useEffect, useRef } from "react";
import Form from './Form';
import exportAsImage from '../utils/exportAsImage';

export default function Meme() {
  const exportRef = useRef();

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    (async function getMemes() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      setAllMemes(data.data.memes)
    })();

  }, []);

  function getRandomNumber() {
    return Math.floor(Math.random() * allMemes.length);
  }

  function getRandomImage(e) {
    e.preventDefault();
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: allMemes[getRandomNumber()].url
      }
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <main>
      <Form getRandomImage={getRandomImage} handleChange={handleChange} topText={meme.topText} bottomText={meme.bottomText} exportAsImage={exportAsImage} exportRef={exportRef} />
      <div className='meme' ref={exportRef}>
        <img src={meme.randomImage} className='meme--image' />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
