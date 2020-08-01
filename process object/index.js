//write the data
process.stdout.write('input: ')

//method on() is a listener and 'data' is the name of this listener
process.stdin.on('data', function(answer){
    //output. the data that is coming back has to be treated as string
    console.log(answer.toString());
});
//ends the application
process.exit();