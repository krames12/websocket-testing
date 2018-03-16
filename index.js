const express = require('express');
const WebSocket = require('ws');
const nunjucks = require('nunjucks');
const app = express();

// app.set('view engine', 'html');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.html');
})

const socketServer = new WebSocket.Server({ port: 8080 });

socketServer.on('connection', (ws) => {
    console.log('connection has been received');

    ws.on('message', (message) => {
        console.log('Received: ', message);
    });
    ws.send('something');
});

// socket.addEventListener('message', (event) => {
//     console.log("Message from server", event.data);
// });

app.listen(4000, () => {
    console.log("listening on port 4000");
});