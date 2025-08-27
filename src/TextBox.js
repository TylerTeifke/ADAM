/**
 * Will be used to display text boxes from ADAM
 */
import "./TextBox.css"

const TextBox = ({ text, textColor }) => {

    return (
        <div>
            <p style={{color: textColor}}>{text}</p>
        </div>
    )
}

export default TextBox