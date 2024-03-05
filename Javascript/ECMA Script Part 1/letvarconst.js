// Modern Javascript :-

// ECMAScript 2015 is known as ES6:-

// Difference between LET vs CONST vs VAR

// var => Function Scope
// let and const => Block Scope

// By var keyword:-

// var myName = "Tarun Upadhyay";
// console.log(myName);
// myName = "Kapil Upadhyay";
// console.log(myName);

// By let keyword:-

// let myName = "Tarun Upadhyay";
// console.log(myName);
// myName = "Kapil Upadhyay";
// console.log(myName);

// By const keyword:-

// const myName = "Tarun Upadhyay";
// console.log(myName);
// myName = "Kapil Upadhyay";
// console.log(myName);


/*
We can't change the constant variable
*/

// For var keyword:-

// function bio(){
//     var myFirstName = "Tarun";
//     console.log(myFirstName);

//     if(true){
//         var myLastName = "Upadhyay";
// console.log('inner ' + myLastName);
// console.log('inner ' + myFirstName);
//     }
//     console.log('innerouter ' + myLastName);
// }
// bio();


// For let keyword(block scope):-

// function bio(){
//     let myFirstName = "Tarun";
//     console.log(myFirstName);

//     if(true){
//         let myLastName = "Upadhyay";
// console.log('inner ' + myLastName);
// console.log('inner ' + myFirstName);
//     }
//     console.log('innerouter ' + myLastName);
// }
// bio();

// For const keyword(block scope):-

// function bio(){
//     const myFirstName = "Tarun";
//     console.log(myFirstName);

//     if(true){

//         const myLastName = "Upadhyay";
// console.log('inner ' + myLastName);
// console.log('inner ' + myFirstName);
//     }
//     console.log('innerouter ' + myLastName);
// }
// bio();


// Tamplate literals:-

// Javascript literals (Template literals):-

// for(var num = 1;num<=10;num++){
//     var dgt = 8;
//     console.log(`${dgt} * ${num} = ${dgt * num}`);
// }


// Default  Parameters:-

/*
Default function parameters allow named parameters to be initialized with default values or undefined is passed.
*/

// function mult(a, b=5) {
//     return a * b;
// }
// console.log(mult(3));


// Fat arrow function:-

// var add = () => {
// Statement
// }

// var add = (a, b) => {
//     return a + b;
// }
// console.log(add(5, 6));

// No need to write return and nind it in curly brasces.

// var mul = (a, b) => a * b;
// console.log(mul(5, 6));