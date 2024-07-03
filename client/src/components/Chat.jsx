import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../App.css';

const socket = io('http://localhost:3001'); 
const Chat = ({ username }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        socket.on('previousMessages', (msgs) => {
            setMessages(msgs);
        });

        socket.on('newMessageFromServer', (msg) => {
            setMessages((prevMessages) => [msg, ...prevMessages]);
        });

        return () => {
            socket.off('previousMessages');
            socket.off('newMessageFromServer');
        };
    }, []);

    const handleSendMessage = () => {
        const message = { username, text: newMessage };
        socket.emit('newMessage', message);
        setNewMessage("");
    };

    return (
        <div>
            <h1>Chat Component</h1>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.username}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chat;
