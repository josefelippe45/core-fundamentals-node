const events = require('events');
//let determine a different scope.
//this is a constructor
let emitter = new events.EventEmitter();
//newEvent is the custom event
emitter.on('newEvent', (message) => {
    //what the event will fire
    console.log(`Message: ${message}`);
});
//emit the event. the second argument will be a message, the argument of the method
emitter.emit('newEvent', 'Custom Event');