import "./Page.css"
import { useState } from 'react';
import ADAM from '../Images/ADAM.png';
import right_arrow from '../Images/right_arrow.png'
import TextBox from '../components/TextBox';
import Arrow from "../components/Arrow";

const Left = () => {

    const textBoxxes = [
        {text: "Welcome to the left page.", color: "black", image: ADAM, animated: ""}
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
      <Arrow image={right_arrow} side={"right"} page={"/"}/>
     </div>
    )
}

export default Left