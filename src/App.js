import './App.css';
import { useState } from 'react';
import ADAM from './ADAM.png';
import TextBox from './TextBox';

function App() {
  //Will store the information for each text box
  const textBoxxes = [
    {text: "Hello user! I am the Advanced Developmental Automated Machine. But you can call me ADAM. Click me to see something cool.", color: "black"},
    {text: "See, pretty cool.", color: "red"},
    {text: "What? You don't seem very impressed.", color: "blue"}
  ]

  //Will be used to iterate between text boxes
  const [currentBox, setCurrentBox] = useState(0)

  //Will change the text box upon clicking ADAM
  const handleClick = () => {
    if(currentBox === textBoxxes.length - 1){
      setCurrentBox(0)
    }
    else{
      setCurrentBox(currentBox + 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={ADAM} className="App-logo" alt="logo" onClick={handleClick}/>
        <TextBox text={textBoxxes[currentBox].text} textColor={textBoxxes[currentBox].color}/>
      </header>
    </div>
  );
}

export default App;
