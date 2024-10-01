import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    };

    const handleDownloadClick = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'text.txt');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        console.log("i am copy")
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3 ">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleDownloadClick}>Download Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove space</button>

            </div>
            <div className="container my-3">
                <h1>Your test summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split('').length} minutes to read</p>
                <h2>Preview</h2>
                <p><span style={{ color: "blue" }}>{text}</span></p>
            </div>
        </>
    );
};

export default TextForm;
