import React, { useState } from "react";

export default function TextForm(Props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const changeToUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
  return (
    <>
        <div className="mb-3">
            <h3>{Props.heading}</h3>
          <textarea
            className="form-control"
            id="textArea"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button type="submit" onClick = {changeToUpCase} className="btn btn-primary">
          ConvertToUpperCase
        </button>
    </>
  );
}
