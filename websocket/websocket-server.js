const WebSocket = require('ws')
const webSocketServer = new WebSocket.Server({ port: 3003 });
const msgs = [];


webSocketServer.on('connection', webSocket => {
    webSocket.onmessage = messageEvent => {
        const message = messageEvent.data;
        msgs.push(message);
        webSocketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(message));
            }
        });
    };
    webSocket.send(JSON.stringify(msgs));
});

module.exports = webSocketServer;
