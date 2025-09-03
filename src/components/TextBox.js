/**
 * Will be used to display text boxes from ADAM
 */
import "./TextBox.css"

const TextBox = ({ text, textColor, image, handleClick, animated }) => {

    return (
        <div>
            <img src={image} className={`ADAM ${animated}`} alt="image" onClick={handleClick}/>
            <p style={{color: textColor}}>{text}</p>
        </div>
    )
}

export default TextBox