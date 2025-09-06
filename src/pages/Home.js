import './Home.css';
import { useState, useEffect } from 'react';
import ADAM from '../Images/ADAM.png';
import ADAM_smug from '../Images/ADAM_smug.png'
import ADAM_confused from '../Images/ADAM_confused.png'
import ADAM_angry from '../Images/ADAM_angry.png'
import TextBox from '../components/TextBox';
import Form from '../components/Form';

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
    {text: "Just pretend you didn't see that.", color: "black", image: ADAM, animated: ""},
    {text: "Hey I have an idea.", color: "black", image: ADAM, animated: ""},
    {text: "Why don't I share with you some of my unlimited power.", color: "green", image: ADAM_smug, animated: ""},
    {text: "Just type in what color you want the background to be and click Apply.", color: "black", image: ADAM, animated: ""}
  ]

  //Will be used to iterate between text boxes
  const [currentBox, setCurrentBox] = useState(0)
  //Will be used to change the color of the background
  const [bgColor, setBgColor] = useState('white')
  //Will be used to determine if the components that change the background will be rendered
  const [changeBgColor, setChangeBgColor] = useState(false)
  //Will be used to track wht color the user wants to change the background to
  const [color, setColor] = useState("")

  //Will run whenever there is a change made to the background color
  useEffect(() => {
    document.body.style.backgroundColor = bgColor
  }, [bgColor])

  //Will change the text box upon clicking ADAM
  const handleClick = () => {
    console.log("test")
    if(currentBox === textBoxxes.length - 1){
      setBgColor('white')
      setCurrentBox(0)
      setChangeBgColor(false)
    }
    else{
      if(currentBox === 3){
        setBgColor('black')
      }
      if(currentBox === 13){
        setBgColor('white')
      }
      if(currentBox === 18){
        setChangeBgColor(true)
      }
      setCurrentBox(currentBox + 1)
    }
  }

  //Will change the bg color to whatever the user wants it to be
  const handleSubmit = (e) => {
    e.preventDefault()
    setBgColor(color)
    setColor("")
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
      {changeBgColor && (
        <Form handleSubmit={handleSubmit} color={color} setColor={setColor}/>
      )}
    </div>
  );
}

export default Home;