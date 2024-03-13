// Data types in Javascript:-

/*
Note =>  There are six types of premetive datatypes in Javascript:-

1. String
2. Boolean
3. Number
4. Undefined
5. Bigint
6. Symbol
*/


var myName = "Tarun";
var myAge = 26;
var mySelf = true;
// console.log(myName);
// console.log(typeof(myName));
// console.log(myAge);
// console.log(typeof(myAge));
// console.log(mySelf);
// console.log(typeof(mySelf));



/* Interview task 1 */

// console.log(10 + "20");
// console.log(9 - "5");
// console.log("Java" + "Script");
// console.log(" " + " ");
// console.log(" " + 0);
// console.log("Tarun" - "Upadhyay");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);


// Difference between null & undefined:-

var useeless = null;
// console.log(useeless);
// console.log(typeof(useeless));

var explayer;
// console.log(explayer);
// console.log(typeof(explayer));

// Undefined alse a value:-

var name = undefined;
// console.log(typeof(name));


/* What is Nan..?

 => NaN is a property of a global object.
 => In other words, it is a variable in global scope.
 => The initial value of NaN is NOT-A-Number 
 */

 var myCityPin = 203001;
 var myCity = "Bulandshahr";
//  console.log(isNaN(myCityPin));
//  console.log(isNaN(myCity));

/*  Interview task 2:-*/

console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));