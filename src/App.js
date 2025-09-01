import './App.css';
import { useState, useEffect } from 'react';
import ADAM from './Images/ADAM.png';
import ADAM_smug from './Images/ADAM_smug.png'
import ADAM_confused from './Images/ADAM_confused.png'
import ADAM_angry from './Images/ADAM_angry.png'
import TextBox from './TextBox';

function App() {
  //Will store the information for each text box
  const textBoxxes = [
    {text: "Hello user! I am the Advanced Developmental Automated Machine. But you can call me ADAM. Click me to see something cool.", color: "black", image: ADAM, animated: false},
    {text: "See, pretty cool.", color: "green", image: ADAM_smug, animated: false},
    {text: "What? You don't seem very impressed.", color: "blue", image: ADAM_confused, animated: false},
    {text: "Alright then, how about this.", color: "red", image: ADAM_angry, animated: false},
    {text: "Now I bet your impressed.", color: "green", image: ADAM_smug, animated: false},
    {text: "Still nothing.", color: "blue", image: ADAM_confused, animated: false},
    {text: "Alright wise guy, prepare to have your socks blown off.", color: "red", image: ADAM_angry, animated: false},
    {text: "BEHOLD.", color: "green", image: ADAM_smug, animated: true}
  ]

  //Will be used to iterate between text boxes
  const [currentBox, setCurrentBox] = useState(0)
  //Will be used to change the color of the background
  const [bgColor, setBgColor] = useState('white')
  //Will be used to activate and deactivate the animation
  //const [animated, setAnimated] = useState(false)

  //Will run whenever there is a change made to the background color
  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])

  //Will change the text box upon clicking ADAM
  const handleClick = () => {
    if(currentBox === textBoxxes.length - 1){
      setBgColor('white')
      setCurrentBox(0)
    }
    else{
      if(currentBox === 3){
        setBgColor('black')
      }
      setCurrentBox(currentBox + 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <TextBox 
          text={textBoxxes[currentBox].text} 
          textColor={textBoxxes[currentBox].color} 
          image={textBoxxes[currentBox].image} 
          animated={textBoxxes[currentBox].animated} 
          handleClick={handleClick}
        />
      </header>
    </div>
  );
}

export default App;
