import './Page.css';
import { useState, useEffect } from 'react';
import ADAM from '../Images/ADAM.png';
import ADAM_smug from '../Images/ADAM_smug.png'
import ADAM_confused from '../Images/ADAM_confused.png'
import ADAM_angry from '../Images/ADAM_angry.png'
import right_arrow from '../Images/right_arrow.png'
import left_arrow from '../Images/left_arrow.png'
import TextBox from '../components/TextBox';
import Form from '../components/Form';
import Arrow from '../components/Arrow';

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
    {text: "Just type in what color you want the background to be and click Apply.", color: "black", image: ADAM, animated: ""},
    {text: "Oh, you're probably wondering about those two arrows.", color: "black", image: ADAM, animated: ""},
    {text: "Those go to my alternate selves in the left and right dimensions.", color: "black", image: ADAM, animated: ""},
    {text: "Click on either and see what they can do.", color: "black", image: ADAM, animated: ""},
    {text: "Oh! I just had another great idea.", color: "green", image: ADAM_smug, animated: ""},
    {text: "Why don't you do what I do and display text to the screen.", color: "green", image: ADAM_smug, animated: ""},
    {text: "Just type what you want to see and it will be displayed.", color: "black", image: ADAM, animated: ""}
  ]

  //Will be used to iterate between text boxes
  //The default value is either 0 or whatever is stored in session
  const [currentBox, setCurrentBox] = useState(() => {
    return parseInt(sessionStorage.getItem('current_text_box') || '0')
  })
  //Will be used to change the color of the background
  const [bgColor, setBgColor] = useState(() => {
    return sessionStorage.getItem('bgColor') || 'white'
  })
  //Will be used to determine if the components that change the background will be rendered
  const [changeBgColor, setChangeBgColor] = useState(() => {
    return sessionStorage.getItem('change_form') === 'true'
  })
  //Will be used to determine if the components that displays the user's text will be rendered
  const [displayText, setDisplayText] = useState(() => {
    return sessionStorage.getItem('display_text') === 'true'
  })
  //Will be used to track what color the user wants to change the background to
  const [color, setColor] = useState("")
  //Will be used to track the text the user wants displayed
  const [text, setText] = useState("")
  //Will be what actually displays the text on screen
  const [screenText, setScreenText] = useState("Test")


  //Will run whenever there is a change made to the background color
  useEffect(() => {
    document.body.style.backgroundColor = bgColor
    sessionStorage.setItem("bgColor", bgColor)
  }, [bgColor])

  //Will save the current text box to session storage every time it is changed
  useEffect(() => {
    sessionStorage.setItem("current_text_box", currentBox)
  }, [currentBox])

  //Will save whether the form to change the bg color is visible or not
  useEffect(() => {
    sessionStorage.setItem("change_form", changeBgColor)
  }, [changeBgColor])

  //Will save whether the form to enter text is visible or not
  useEffect(() => {
    sessionStorage.setItem("display_text", displayText)
  }, [displayText])

  //Will set the current text box to whatever is saved in session storage every time the page
  //is reloaded
  useEffect(() => {
    setCurrentBox(JSON.parse(sessionStorage.getItem("current_text_box")))
    setBgColor(sessionStorage.getItem("bgColor"))
    setChangeBgColor(JSON.parse(sessionStorage.getItem("change_form")))
    setDisplayText(JSON.parse(sessionStorage.getItem("display_text")))
  }, [])

  //Will change the text box upon clicking ADAM
  const handleClick = () => {
    if(currentBox === textBoxxes.length - 1){
      setBgColor('white')
      setCurrentBox(0)
      setDisplayText(false)
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
      if(currentBox === 24){
        setChangeBgColor(false)
        setDisplayText(true)
      }
      setCurrentBox(currentBox + 1)
    }
  }

  //Will change the bg color to whatever the user wants it to be
  const handleBgSubmit = (e) => {
    e.preventDefault()
    setBgColor(color)
    setColor("")
  }

  const handleTextSubmit = (e) => {
    e.preventDefault()
    setScreenText(text)
    setText("")
  }

  return (
    <div className="Home">
      <header className="header">
        <TextBox 
          text={textBoxxes[currentBox].text} 
          textColor={textBoxxes[currentBox].color} 
          image={textBoxxes[currentBox].image} 
          animated={textBoxxes[currentBox].animated} 
          handleClick={handleClick}
        />
        {displayText && (
          <p>{screenText}</p>
        )}
      </header>
      {changeBgColor && (
        <Form handleSubmit={handleBgSubmit} value={color} setValue={setColor}/>
      )}
      {displayText && (
        <Form handleSubmit={handleTextSubmit} value={text} setValue={setText}/>
      )}
      <Arrow image={right_arrow} side={"right"} page={"/Right"}/>
      <Arrow image={left_arrow} side={"left"} page={"/Left"}/>
    </div>
  );
}

export default Home;