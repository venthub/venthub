# VentHub
Redux PubSub Service over WebSockets

## Installation
### As a script (but you should really consider using [ventsh](https://github.com/venthub/venthub-cli) instead)
`npm i -g venthub`

### As a module
The same, just without the `-g` part.

## Usage
### As a script
Running `venthub [PORT=3000]` from any shell should get you up and running. There really isn't much to do past this point.

### As a module
```js

import VentHub from 'venthub';

const vent = new VentHub(process.end.PORT || 3000); // this jumpstarts the server, no explicit call needed

vent.on('connection', con => ...) // this will be called on every new connection
vent.on('terminated', con => ...) // this will be called on every connection closed
vent.on('publish', action => ...) // this will be called every time *a Vent* publishes an action
```