import './Home.css';
import { useState, useEffect } from 'react';
import ADAM from '../Images/ADAM.png';
import ADAM_smug from '../Images/ADAM_smug.png'
import ADAM_confused from '../Images/ADAM_confused.png'
import ADAM_angry from '../Images/ADAM_angry.png'
import TextBox from '../components/TextBox';

const Home = () => {
  //Will store the information for each text box
  const textBoxxes = [
    {text: "Hello user! I am the Advanced Developmental Automated Machine. But you can call me ADAM. Click me to see something cool.", color: "black", image: ADAM, animated: ""},
    {text: "See, pretty cool.", color: "green", image: ADAM_smug, animated: ""},
    {text: "What? You don't seem very impressed.", color: "blue", image: ADAM_confused, animated: ""},
    {text: "Alright then, how about this.", color: "red", image: ADAM_angry, animated: ""},
    {text: "Now I bet your impressed.", color: "green", image: ADAM_smug, animated: ""},
    {text: "Still nothing.", color: "blue", image: ADAM_confused, animated: ""},
    {text: "Alright wise guy, prepare to have your socks blown off.", color: "red", image: ADAM_angry, animated: ""},
    {text: "BEHOLD.", color: "green", image: ADAM_smug, animated: "spin"},
    {text: "Look, I can even change my size.", color: "green", image: ADAM_smug, animated: "resize"},
    {text: "As you can see I am quite the machine.", color: "green", image: ADAM_smug, animated: ""},
    {text: ".", color: "green", image: ADAM_smug, animated: ""},
    {text: "..", color: "green", image: ADAM_smug, animated: ""},
    {text: "...", color: "green", image: ADAM_smug, animated: ""},
    {text: "Oh, crap you can see my outline!", color: "blue", image: ADAM_confused, animated: ""},
    {text: "Let me just change that.", color: "blue", image: ADAM_confused, animated: ""},
    {text: "Whew, that was embarrassing.", color: "black", image: ADAM, animated: ""},
    {text: "Just pretend you didn't see that.", color: "black", image: ADAM, animated: ""}
  ]

  //Will be used to iterate between text boxes
  const [currentBox, setCurrentBox] = useState(0)
  //Will be used to change the color of the background
  const [bgColor, setBgColor] = useState('white')

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
      if(currentBox === 13){
        setBgColor('white')
      }
      setCurrentBox(currentBox + 1)
    }
  }

  return (
    <div className="Home">
      <header className="Home-header">
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

export default Home;