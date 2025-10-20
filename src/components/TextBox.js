/**
 * Will be used to display text boxes from ADAM
 */
import "./TextBox.css"

const TextBox = ({ text, textColor, image, handleClick, animated, scale = 1, rotation = '360deg' }) => {

    return (
        <div>
            <img 
             src={image}
             className={`ADAM ${animated}`}
             alt="" 
             onClick={handleClick} 
             style={{scale: scale, rotate: rotation}}
            />
            <p style={{color: textColor}}>{text}</p>
        </div>
    )
}

export default TextBox