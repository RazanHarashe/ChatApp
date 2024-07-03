import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server IP if needed

const Chat = () => {
    useEffect(() => {
        socket.on('welcome', (message) => {
            console.log(message);
        });

        return () => {
            socket.off('welcome');
        };
    }, []);

    return (
        <div>
            <h1>Chat Component</h1>
        </div>
    );
};

export default Chat;
