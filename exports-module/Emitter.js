const events = require('events');

let emitter = new events.EventEmitter();

//exporting the instance

module.exports = emitter;