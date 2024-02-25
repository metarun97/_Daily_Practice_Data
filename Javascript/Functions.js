// Functions in JS:-

// A Javascript function is a block of code desigened to perform a particular task. 


// Function Definition:-

/*
Before we use a function, we need to defined it.

A function definition (also called a function declared, or function statement)
consists of the function keyword, followed by:

The name of the function.
A list of parameters to function, enclosed in parentheses and seperated by commas,
The Javascript statements that define  the function, enclosed in curly brackets, {...}
*/

// function sum(){
// var a = 10, b = 20;
// var total = a + b;
// console.log(total);
// }
// sum();


// Calling Function:-

/*
Defining a function does not execute it.
A Jaascript function is executed when "something" invokes it (calls it).
*/


// Function Perameter vs Function Arguments:-

/*
Function parameters are the names listed in the function's definition,
Function arguments are the real values passed to the function. 
*/

function sum(a, b) {
    console.log(a + b);
}
// sum(4, 6);
// sum(40, 20);
// sum(40, 600);


// Interview Question:-

// Why functions...?

/*
You can reuse code: Define the code once,and use it many times.
You can use the same code many times with different arguments,
to produce different results.

OR

A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again.

DRY => Do Not Reepeat Yourself.
*/


// Function Expressions:-

/*
It's simply means create a function and put it into the variable funExp.
*/
 
// function sum(a, b) {
//     console.log(a + b);
// }
// var res = sum(8, 6);
// res;


// Return keywords:-

/*
When Javascript reaches a return statement,
the function will stop execution.
Function often compute a return value.
The return value is "return" back to the "caller".
*/


// function sum(a, b) {
//    return total = a + b;
// }
// var res = sum(8, 6);
// console.log(" The sum of two no is " + res + "." );


// Anonymous Function:-

/*
A function expression is similar to and has the same syntax
as a function declaration One can define "named"
function expressions (where the same of the expression might
be used in the call stack for example)
or "anonymous" function expressions.
*/

var sum = function(a,b){
return total = a + b;
}
var twoNumSum = sum(5,15);
console.log('The sum of twp numbers is : ' + twoNumSum + ".");