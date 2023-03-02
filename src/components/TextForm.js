import React, { useState } from "react";

export default function TextForm(Props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) =>{
        setText(event.target.value);
    };
    const changeToUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    };
    const changeToLoCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    };
  return (
    <>
        <div className="mb-3">
            <h2 className={`text-${Props.mode==='light'?'dark':'light'}`}>{Props.heading}</h2>
          <textarea
            className="form-control"
            id="textArea"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button onClick = {changeToUpCase} className="btn btn-primary mx-3">
          ConvertToUpperCase
        </button>
        <button  onClick = {changeToLoCase} className="btn btn-primary">
          ConvertToLowerCase
        </button>
        <div className="container my-3">
            <h2 className={`text-${Props.mode==='light'?'dark':'light'}`}>Your Text Summary</h2>
            <p className={`text-${Props.mode==='light'?'dark':'light'}`}>Words: {text.length?text.split(' ').length:text.split(' ').length-1} Characters: {text.length}</p>
            <h2 className={`text-${Props.mode==='light'?'dark':'light'}`}>Preview</h2>
            <p className="my-2">{text}</p>
        </div>
    </>
  );
}
