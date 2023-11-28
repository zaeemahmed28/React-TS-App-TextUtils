import React, {useState, ChangeEvent, Dispatch, SetStateAction} from 'react'

interface FormProps{
  heading: String,
  mode: string,
  alertFunction: (message: string, type: string) => void,
  alertVisibility: Dispatch<SetStateAction<boolean>>;
}

export default function htmlForm({heading, mode, alertFunction, alertVisibility}: FormProps) {
  const [text, setText] = useState("Enter text here...");

  const handleUpClick = () =>{
    //console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    alertVisibility(true);
    alertFunction(" Text converted to Upper case", "success")
  }

  const handleLoClick = () =>{
    //console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    alertVisibility(true);
    alertFunction(" Text converted to Lower case", "success")
  }

  const handleClearTextClick = () =>{
    setText('');
    alertVisibility(true);
    alertFunction(" Text Cleared!", "success")
  }

  const handleCopyClick = () =>{
    const copiedText = document.getElementById('exampleFormControlTextarea1') as HTMLInputElement;
    if (copiedText) {
      copiedText.addEventListener('select', () => {
        // Your code to handle the 'select' event
        console.log('Text selected!');
      });
      navigator.clipboard.writeText(copiedText.value);
      alertVisibility(true);
      alertFunction(" Text copied to clipboard!", "success")
    }
  }

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //console.log("On Change" + text);
    setText(event.target.value);
  }

  return (
    <>
      <div className='container' style={{color: mode==='light'?'black':'white'}}>
          <div className="mb-3">
            <h4>{heading}</h4>
            <textarea className="form-control" id="exampleFormControlTextarea1" 
            value={text} onChange={handleOnChange} style={{backgroundColor: mode==='light'?'white':'#5f5d5d',
             color: mode==='light'?'black':'white'}} rows={6}>

            </textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleClearTextClick}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>

      </div>
      <div className='container my-3' style={{color: mode==='light'?'black':'white'}}>
        <h5>Your Text Summary</h5>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h6>Preview</h6>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview"}</p>
      </div> 
    </>   
  )
}
