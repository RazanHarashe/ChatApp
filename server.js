const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
    },
});

let messages = [];

io.on("connection", (socket) => {
    console.log("User connected");

    // Send all previous messages to the newly connected user
    socket.emit("previousMessages", messages);

    socket.on("newMessage", (message) => {
        messages.push(message);
        io.emit("newMessageFromServer", message);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
