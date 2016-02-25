'use strict';

const EventEmitter = require('events');
const WebSocketServer = require('ws').Server;

class VentHub extends EventEmitter {
    constructor(port) {
        super();
        this.server = new WebSocketServer({port});
        this.server.on('connection', this.onConnection.bind(this))
    }

    onConnection(con) {
        this.emit('connection', con);
        con.on('message', message => {
            let action = JSON.parse(message);
            this.emit('publish', action);
            this.publish(action);
        });
        con.on('close', () => this.emit('terminated', con));
    }

    publish(action) {
        this.server.clients.forEach(client => client.send(JSON.stringify(action)));
    }
}


module.exports = VentHub;