const app = require('express')()
const http = require('http').createServer(app)


app.get('/', (req, res) => {
  console.log("CONNECTED CLICKED ");
    res.send("Node Server is running. Yay!!")
})

//Socket Logic
const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
  console.log("CONNECTED TO SERVER");
    userSocket.on("send_message", (data) => {
      console.log("CONNECTED RECEIVE MSG....");
        userSocket.broadcast.emit("receive_message", data)
    })
})

//http.listen(process.env.PORT)
const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

