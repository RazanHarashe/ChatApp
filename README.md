# MERN Chat Application

This project is a simple chat application built with the MERN (MongoDB, Express, React, Node.js) stack and Socket.io for real-time communication.

## Features

- Real-time chat between users
- Displays chat messages from before a user joins
- Keeps chat messages scrolled to the bottom by default
- Displays a message when a user joins the chat
- Saves the user's name in local storage
- 
## Project Structure
### Server

- `server.js`: Sets up the Express server and Socket.io to handle real-time communication.

### Client

- `App.jsx`: Main component that manages the username state and conditionally renders the chat component.
- `Chat.jsx`: Handles the chat functionality, including sending and receiving messages.
- `App.css`: Contains the styles for the chat application.



