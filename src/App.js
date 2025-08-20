import React, { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('Alice');
    const [message, setMessage] = useState('Happy Birthday!');

    // This function is supposed to handle the message input, but it has a bug!
    const handleMessageChange = (e) => {
        // BUG: This line incorrectly resets the name whenever the message changes.
        setName('Guest');
        setMessage(e.target.value);
    };

    const handleReset = () => {
        setName('Alice');
        setMessage('Happy Birthday!');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Greeting Card Generator</h1>
                <div className="input-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Message:</label>
                    <input
                        type="text"
                        value={message}
                        onChange={handleMessageChange} // Changed to the new buggy function
                    />
                </div>
                <button onClick={handleReset}>Reset Card</button>
                <div className="card">
                    <h2>Hello, {name}!</h2>
                    <p>{message}</p>
                </div>
            </header>
        </div>
    );
}

export default App;