const express = require('express');
const app = express();
const PORT = 3000;

const server = app.listen(PORT,() => {
    console.log("Server started on ", PORT);
});

const io = require('socket.io')(server);

io.on('connection', (socket)=>{
    console.log("Connected succefully", socket.id);
    socket.on('disconnect', () => {
        console.log("Disconnected", socket.id);
    });
    socket.on('message', (data)=>{
        console.log("Hey Data ", data);
        socket.broadcast.emit("message-receive", data);
    });

});