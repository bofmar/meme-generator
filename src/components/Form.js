import React from "react";

export default function Form({ getRandomImage, handleChange, topText, bottomText, exportAsImage, exportRef }) {
  async function downloadImage(event) {
    event.preventDefault();
    await exportAsImage(exportRef.current, 'meme');
  }
  return (
    <form>
      <div className='input--wrapper'>
        <input type='text' placeholder='Top text' className='top--text' value={topText} name='topText' onChange={handleChange} />
        <input type='text' placeholder='Bottom text' className='bottom--text' value={bottomText} name='bottomText' onChange={handleChange} />
      </div>
      <button className='purple--gradient new--image--button' onClick={getRandomImage}>Get a new image</button>
      <button className='purple--gradient new--image--button' onClick={downloadImage}>Download your meme</button>
    </form>
  );
}
