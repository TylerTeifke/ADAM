/**
 * Will be used to render the arrows that will lead to other pages
 */
//import "./Arrow.css"
import { useNavigate } from 'react-router-dom';

const Arrow = ({ image, side, page }) => {
    //Will be used to navigate to other pages
    let navigate = useNavigate();

    //Will navigate to the specified page upon the arrow being clicked
    const handleClick = () => {
        navigate(page)
    }

    return(
        <img src={image} style={{float: side}} alt="" onClick={handleClick}/>
    )
}

export default Arrow