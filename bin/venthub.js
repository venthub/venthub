#!/usr/bin/env node
'use strict';

const VentHub = require('../');

function getTimestamp() {
    let d = new Date();
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

function log(line) {
    console.log(`[${getTimestamp()}] ${line}`);
}

const PORT = (parseInt(process.argv[2]) || 3000);

const hub = new VentHub(PORT);
log(`Listening on port ${PORT}`);

hub
.on('connection', () => log('Connection created'))
.on('terminated', () => log('Connection terminated'))
.on('publish', action => log(`Publishing action of type ${action.type}`));