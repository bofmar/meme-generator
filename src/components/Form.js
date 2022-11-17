import React from "react";

export default function Form({ getRandomImage }) {
  return (
    <form>
      <div class='input--wrapper'>
        <input type='text' placeholder='Top text' className='top--text' />
        <input type='text' placeholder='Bottom text' className='bottom--text' />
      </div>
      <button class='purple--gradient new--image--button' onClick={getRandomImage}>Get a new image</button>
    </form>
  );
}
