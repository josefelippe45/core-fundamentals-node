//import the instance
const emitter = require('./Emitter')

emitter.on('emailEvent', (message) => {
    console.log(`Email: ${message}`);
});

emitter.emit('emailEvent', 'Send email to user after registration');