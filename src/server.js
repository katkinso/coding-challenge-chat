const app = require("./app");
const http = require("http");
const port = "3000";
app.set("port", port);
const server = http.createServer(app);
const io = require('socket.io')(server); 


io.on('connection', (socket) => {
  socket.on('new_message', (data) => {
    io.sockets.emit('new_message', { message: data.message, username: data.username} );
  });
});

server.listen(port);

server.on("listening", () => {
  console.log(`server is listening for requests on port ${server.address().port}`);
});

