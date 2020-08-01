//playing with module

//importing our function in lib.js
const object = require('./lib');
//adding properties to module.
module.exports.title = 'TITLE HERE';
//adding functions to module
module.exports.title2 = ()=>{
    console.log('TITLE HERE WITH FUNCTION');
}
//display the properties
console.log(module.exports);

//display the function
console.log(module.exports.title2());

//display imported data
console.log(object.fun(3, 8));