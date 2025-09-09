/**
 * Will be used to display the form for changing various attributes
 * @param {} param0 
 */
import "./Form.css"
import { useRef } from "react"

const Form = ({handleSubmit, value, setValue}) => {
    const inputRef = useRef()

    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input
                autoFocus
                ref={inputRef}
                id='valueInput'
                type='text'
                placeholder='Input'
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Change Value'
                onClick={() => inputRef.current.focus()}
            >
            Apply
            </button>
        </form>
    )
}

export default Form