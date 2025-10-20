import "./Page.css"
import { useState } from 'react';
import ADAM from '../Images/ADAM.png';
import ADAM_confused from '../Images/ADAM_confused.png'
import left_arrow from '../Images/left_arrow.png'
import TextBox from '../components/TextBox';
import Arrow from "../components/Arrow";
import Form from "../components/Form";

const Right = () => {

    const textBoxxes = [
        {text: "Welcome to the right dimension.", color: "black", image: ADAM, animated: ""},
        {text: "Here you can rotate me in any direction.", color: "black", image: ADAM, animated: ""},
        {text: "Just input a number between 0 and 360.", color: "black", image: ADAM, animated: ""},
        {text: "Yeah, like that.", color: "black", image: ADAM, animated: ""},
        {text: "Wait! Stop! I think I'm getting dizzy!", color: "blue", image: ADAM_confused, animated: ""},
        {text: "Uh, sorry I can't do that.", color: "blue", image: ADAM_confused, animated: ""}
    ]

    //Will be used to iterate between text boxes
    const [currentBox, setCurrentBox] = useState(0)
    //Will handle whether the form allowing the rotating of ADAM is rendered or not
    const [changeRotation, setChangeRotation] = useState(false)
    //Will be used to set the rotation of ADAM
    const [adamRotation, setAdamRotation] = useState(0)
    const [rotationDegree, setRotationDegree] = useState("0deg")

    //Will change the text box upon clicking ADAM
    const handleClick = () => {
      if(currentBox < 2){
        if(currentBox === 1){
          setChangeRotation(true)
        }
        setCurrentBox(currentBox + 1)
      }
    }

    //Will change the rotation of ADAM, as long as the number is between 0 and 360
    const handleSubmit = (e) => {
      e.preventDefault()
      if(adamRotation >= 0 && adamRotation <= 360){
        if(adamRotation < 90 || adamRotation > 270){
          setCurrentBox(3)
        }
        else{
          setCurrentBox(4)
        }

        //Will change the rotation degree to a string so that it can be used
        //in the text box component
        setRotationDegree(adamRotation.toString() + "deg")
      }
      else{
        setCurrentBox(textBoxxes.length - 1)
      }
    }

    return(
     <div className="Home">
      <header className="header">
        <TextBox 
          text={textBoxxes[currentBox].text} 
          textColor={textBoxxes[currentBox].color} 
          image={textBoxxes[currentBox].image} 
          animated={textBoxxes[currentBox].animated} 
          handleClick={handleClick}
          rotation={rotationDegree}
        />
      </header>
      {changeRotation && (
        <Form handleSubmit={handleSubmit} value={adamRotation} setValue={setAdamRotation}/>
      )}
      <Arrow image={left_arrow} side={"left"} page={"/"}/>
     </div>
    )
}

export default Right