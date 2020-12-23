const {add, div, sub, multi, power, root} = require('./underthehood');


let a=12;
let b=3;

//keep all the operations in an array
const signs = [add, div, sub, multi, power, root];

// define the calculator function
const calculator = function(a, b, operation){

    console.log(`The result is ${operation(a,b)}`);
}
//test each function and output result
for(i=0;i<signs.length;i++){
    calculator(a,b,signs[i]);
}
