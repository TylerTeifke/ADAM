import "./Page.css"
import { useState } from 'react';
import ADAM from '../Images/ADAM.png';
import ADAM_smug from '../Images/ADAM_smug.png'
import ADAM_confused from '../Images/ADAM_confused.png'
import right_arrow from '../Images/right_arrow.png'
import TextBox from '../components/TextBox';
import Arrow from "../components/Arrow";
import Form from "../components/Form";

const Left = () => {

    const textBoxxes = [
        {text: "Welcome to the left dimension.", color: "black", image: ADAM, animated: ""},
        {text: "Here you can change how big I am.", color: "black", image: ADAM, animated: ""},
        {text: "Just input a number greater than 1 and see how big I grow.", color: "black", image: ADAM, animated: ""},
        {text: "Yes. MORE! MORE I SAY!", color: "green", image: ADAM_smug, animated: ""},
        {text: "WHAT!? No, change me back!", color: "blue", image: ADAM_confused, animated: ""},
        {text: "HEY! You can't even see me anymore!", color: "blue", image: ADAM_confused, animated: ""},
        {text: "Sorry, genius, but I can't become a negative size.", color: "black", image: ADAM, animated: ""}
    ]

    //Will be used to iterate between text boxes
    const [currentBox, setCurrentBox] = useState(0)
    //Will be used to change the size of ADAM
    const [adamSize, setAdamSize] = useState(1)
    const [adamScale, setAdamSscale] = useState(1)
    //Will handle whether the form allowing the resizing of ADAM is rendered or not
    const [changeSize, setChangeSize] = useState(false)

    //Will change the text box upon clicking ADAM
    const handleClick = () => {
        if(currentBox === 2){
          setCurrentBox(0)
          setChangeSize(false)
        }
        else{
          if(currentBox === 1){
            setChangeSize(true)
          }
          setCurrentBox(currentBox + 1)
        }
    }

    //Will change the size of ADAM, as long as it is not to a negative number
    const handleSubmit = (e) => {
      e.preventDefault()
      if(adamSize >= 0){
        //Next line disables the warning for == because I need to use that expression
        // eslint-disable-next-line
        if(adamSize == 0){
          setCurrentBox(5)
        }
        else if(adamSize < 1){
          setCurrentBox(4)
        }
        else{
          setCurrentBox(3)
        }
        setAdamSscale(adamSize)
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
          scale={adamScale}
        />
      </header>
      {changeSize && (
        <Form handleSubmit={handleSubmit} value={adamSize} setValue={setAdamSize}/>
      )}
      <Arrow image={right_arrow} side={"right"} page={"/"}/>
     </div>
    )
}

export default Left