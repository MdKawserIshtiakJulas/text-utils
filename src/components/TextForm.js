import React, { useState } from 'react';

export default function TextForm(props) {

    document.title = 'TextUtils | Home';

    const [text, setText] = useState('');

    const uppercase = () => {
        setText(text.toUpperCase());
    };

    const lowercase = () => {
        setText(text.toLowerCase());
    };

    const copyText = () => {

        navigator.clipboard.writeText(text);
        props.showAlert('Success', "Your text is copied to clipboard")

    };

    const clear = () => {
        setText('');
    };

    const textChanged = event => {
        setText(event.target.value);
    };

    const textAreaStyle = {

        height: '400px',
        backgroundColor: props.mode === 'dark' ? '#1d1d1d' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'

    }

    return (

        <>

            <div className="container my-3">

                <textarea className="form-control" placeholder="Write your text here......" id="text-area" style={textAreaStyle} value={text} onChange={textChanged} />

                <p className="text-end text-muted my-1">
                    {text.split(/\s+/).filter(word => word !== '').length} words, {text.length} characters
                </p>

                <button className="btn btn-outline-primary m-2" onClick={uppercase} disabled={text.length === 0}>Convert To Uppercase</ button>
                <button className="btn btn-outline-secondary m-2" onClick={lowercase} disabled={text.length === 0}>Convert To Lowercase</button>
                <button className="btn btn-outline-success m-2" onClick={copyText} disabled={text.length === 0}>Copy Text</button>
                <button className="btn btn-outline-danger m-2" onClick={clear} disabled={text.length === 0}>Clear Text</button>

            </div>

        </>
    )

}