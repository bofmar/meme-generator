import React from "react";

export default function Meme() {
  return (
    <main>
      <form>
        <div class='input--wrapper'>
          <input type='text' placeholder='Top text' />
          <input type='text' placeholder='Bottom text' />
        </div>
        <button class='purple--gradient new-image-button'>Get a new image 🖼</button>
      </form>
    </main>
  );
}
