//using child processes to play with the terminal
const execute = require('child_process').exec;
//execute the command dir on console. takes a callback function
execute("dir", (err, stdout)=>{
    if (err) return err;
    console.log(stdout);
});