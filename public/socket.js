const socket = new WebSocket('ws://localhost:8080');

console.log("Socket:", socket)

// According to the console, `socket` is no longer usable
// Am able to use `socket.send` in dev tools.
socket.send("from the front end");