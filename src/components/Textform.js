import React, {useState} from 'react'



export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUpClick =()=>{
        let newText  = text.toLocaleUpperCase();
        setText(newText);
    }
    const handlelowerClick =()=>{
        let newText  = text.toLocaleLowerCase();
        setText(newText);
    }
    const handleClear =()=>{
        let newText  = "";
        setText(newText);
    }
    const handleSpacesClick =()=>{
        let newText  = text.replace(/\s+/g," ").trim();
        setText(newText);
    }
    const handlerpClick =()=>{
        let newText  = text.replace(/[@#$%^&*()?<>,.:;]/gm,'');
        setText(newText);
    }
    const handlecpyClick=()=>{
        let newText  = text;
        if (newText!=="") {
            navigator.clipboard.writeText(newText);
        alert("Copied the text: "+newText);
        }
        
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to upper Case</button>
        <button className="btn btn-primary m-2" onClick={handlelowerClick}>Convert to lower Case</button>
        <button className="btn btn-primary m-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary m-2" onClick={handleSpacesClick}>Remove Spaces</button>
        <button className="btn btn-primary m-2" onClick={handlerpClick}>Remove Punctuation</button>
        <button className="btn btn-primary m-2" onClick={handlecpyClick}>Copy To ClipBoard</button>
        </div>
        <div className="conatiner my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summory</h1>
            <p>{text.split(" ").length} Words and {text.length} Charactors</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter text to preview"}</p>
        </div>
        </>
    )
}
