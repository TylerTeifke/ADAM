/**
 * Will be used to display the form for changing the background color
 * @param {} param0 
 */
import "./Form.css"
import { useRef } from "react"

const Form = ({handleSubmit, color, setColor}) => {
    const inputRef = useRef()

    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input
                autoFocus
                ref={inputRef}
                id='changeColor'
                type='text'
                placeholder='Color'
                required
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Change Color'
                onClick={() => inputRef.current.focus()}
            >
            Apply
            </button>
        </form>
    )
}

export default Form