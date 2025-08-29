/**
 * Will be used to display text boxes from ADAM
 */
import "./TextBox.css"

const TextBox = ({ text, textColor, image, handleClick }) => {

    return (
        <div>
            <img src={image} className="App-logo" alt="logo" onClick={handleClick}/>
            <p style={{color: textColor}}>{text}</p>
        </div>
    )
}

export default TextBox