import "./Page.css"
import { useState } from 'react';
import ADAM from '../Images/ADAM.png';
import left_arrow from '../Images/left_arrow.png'
import TextBox from '../components/TextBox';
import Arrow from "../components/Arrow";

const Right = () => {

    const textBoxxes = [
        {text: "Welcome to the right dimension.", color: "black", image: ADAM, animated: ""}
    ]

    //Will be used to iterate between text boxes
    const [currentBox, setCurrentBox] = useState(0)

    //Will change the text box upon clicking ADAM
    const handleClick = () => {
        setCurrentBox(0)
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
        />
      </header>
      <Arrow image={left_arrow} side={"left"} page={"/"}/>
     </div>
    )
}

export default Right