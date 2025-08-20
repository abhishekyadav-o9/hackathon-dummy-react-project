// File: src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('Alice');
    const [message, setMessage] = useState('Happy Birthday!');

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
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="card">
                    <h2>Hello, {name}!</h2>
                    <p>{message}</p>
                </div>
            </header>
        </div>
    );
}

export default App;