import React, { useState } from 'react';
import Chat from './components/Chat';
import './App.css'

function App() {
    const [username, setUsername] = useState("");
    const [isChatting, setIsChatting] = useState(false);

    const handleStartChatting = () => {
        setIsChatting(true);
    };

    return (
        <div className="App">
            {!isChatting ? (
                <div>
                    <h1>MERN Chat</h1>
                    <h3>Get Started right now!</h3>
                    <p>I want to start chatting with the name...</p>
                    <input
                        type="text"
                        placeholder="My name..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={handleStartChatting}>Start Chatting</button>
                </div>
            ) : (
                <Chat username={username} />
            )}
        </div>
    );
}

export default App;
