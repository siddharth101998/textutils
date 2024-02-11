import React, { useState } from 'react'



export default function Textform(props) {
    const [text, setText] = useState('');
    const [duplicate, setduplicate] = useState([]);
    const [showtable, setshowtable] = useState(false);
    const handleUpClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to Lowercase", "success");
    }

    const handleclClick = () => {
        let newtext = '';
        setText(newtext);
        setduplicate([]);
        setshowtable(false);
        props.showalert("Text Cleared", "success");
    }
    const handlecopy = () => {
        var text = document.getElementById("Mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to Clipboard", "success");
    }
    const handleextraspaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Removed Extraspace", "success");
    }

    const handleduplicateClick = () => {
        const words = text.split(" ");

        const wordfreq = {};
        // iterate through words array and store the values which are reapeating in the wordfreq array with their respective occurences
        words.forEach(word => {
            wordfreq[word] = (wordfreq[word] || 0) + 1;// if wordfreq[word] is already present then that freq + 1 otherwise 0 + 1

        });
        // object.entries converts object into key value pair into an array element with key as 1st element and freq as 2nd
        //filter check the for the values where freq > 1  then maps them as word and occurences and stores in duplicatearray
        const duplicatearray = Object.entries(wordfreq).filter(([word, freq]) => freq > 1).map(([word, freq]) => ({ word, occurences: freq }));
        const total_length = words.length;
        const duplicatesfrequency = duplicatearray.map(item => ({
            ...item,
            frequency: ((item.occurences / total_length) * 100).toFixed(2) + '%'
        }));
        setduplicate(duplicatesfrequency);
        setshowtable(true);
    }
    const handleOnchange = (event) => {
        // console.log("onchnage");
        setText(event.target.value);

    }
    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading} </h1>
                <div className="mb-3"  >
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="Mybox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : (props.mode === 'red' ? 'pink' : 'white') }} />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleduplicateClick}>Duplicate words</button>
                <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleextraspaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleclClick}>Clear Text</button>

            </div>
            {/* <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="Mybox" rows="8" />
            </div> */}
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2 >Your Text Summary</h2>
                <p>{text.trim() === '' ? 0 : text.split(" ").length} words, {text.length} charcaters</p>
                <p>{text.trim() === '' ? 0 : 0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Text To Preview"}</p>
            </div>
            {showtable &&

                <div className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h2>Duplicates Table</h2>
                    <table className="table" >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Word</th>
                                <th scope="col">Occurences</th>
                                <th scope="col">Frequency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {duplicate.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.word}</td>
                                    <td>{item.occurences}</td>
                                    <td>{item.frequency}</td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            }

        </>
    )
}
