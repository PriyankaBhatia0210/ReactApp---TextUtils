import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleOnClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to UpperCase', 'Success')
    }

    const handleTextCaseClick = () => {
        let newText = text.toLowerCase().split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
            
        }
        setText(newText.join(" "))
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }

  return (
     <> 
    <div className='container'>
        <div class="my-2">
        <h3>{props.heading}</h3>
        <textarea class="form-control" value = {text} onChange = {handleOnChange} id="textArea" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleOnClick}>UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleTextCaseClick}>Text Case</button>
    </div>
    <div className="container">
        <h5> Your summary: </h5>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <p><h5>Preview</h5>{text}</p>
    </div>
    </>
  )
}