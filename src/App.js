import './App.css';
import { SketchPicker } from 'react-color'
import { useState } from 'react'

function App() {

  const [text, setText] = useState('');
  const defaultImageUrl = 'https://assets.imgix.net/examples/butterfly.jpg?';
  const [background, setBackground] = useState("#fff");


  const texthandler = (e) => {
    const myEncodedText = (e.target.value).split(' ').join('%20');
    setText(myEncodedText);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleChangeComplete = (color) => {
    setBackground(color.hex.slice(1))
  }

  const url = `${defaultImageUrl}txt=${text}&blend=${background}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`;

  return (

    <div className="App">
      {/* header */}
      <div className='header'>
        <h1>Hi, check this out! Edit your image in a second ! </h1>
      </div>

      {/* photo */}
      <div className='photo-container'>
        <img src={url} alt='butterfly' />
      </div>

      {/* user input */}
      <div className='user-input'>
        <div className='text-form'>
          <form onSubmit={handleSubmit}>
            <label>
              <h2>Enter your text here:</h2>
              <input type="text" name='textContent' onChange={texthandler} />

            </label>
          </form>
        </div>
        <div className='color-picker'>
          <h2>
            Pick your color below:
          </h2>
          <SketchPicker color={background}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      </div>



    </div>
  );
}

export default App;
