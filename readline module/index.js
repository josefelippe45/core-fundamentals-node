//readline is a wrapper around process.stdin and process.stdout
const readline = require('readline');

const RL = readline.createInterface(process.stdin, process.stdout);
//method question will ask teh user. takes a call back function
RL.question('name: ', (name) => {
    //setPrompt set up the question
    RL.setPrompt(`${name}. age: `);
    //display the prompt
    RL.prompt();

    //listener
    RL.on('line', (age) => {
        if (age < 18) {
            console.log(`${name.trim()} you are not able to enter cause of your age ${age}`);
            RL.close();
        } else {
            console.log(`${name.trim()} you are able to enter`);
            RL.close();
        }
    });
});