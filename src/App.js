import './App.css';
import { SketchPicker } from 'react-color'
import { useState, useEffect } from 'react'

function App() {

  const [formText, setFormText] = useState('');
  const [text, setText] = useState("")
  const [background, setBackground] = useState("");
  const [url, setUrl] = useState('https://assets.imgix.net/examples/butterfly.jpg?')

  useEffect(() => {
    setUrl(`https://assets.imgix.net/examples/butterfly.jpg?${text}${background}&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50`)
  }, [url, text, background])
  const texthandler = (e) => {
    setFormText(e.target.value)
    const myEncodedText = (e.target.value).split(' ').join('%20');
    setText(`txt=${myEncodedText}`)
  }

  const handleChangeComplete = (color) => {
    setBackground(`&blend=${color.hex.slice(1)}`)
  }


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
          <h2>Enter your text here:</h2>
          <input type="text" onChange={texthandler} value={formText} />
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
