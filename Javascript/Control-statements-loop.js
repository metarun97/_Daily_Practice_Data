// If Else:-

/*
The if statemen executes a statement if a specified condition is truthy.
If the condition is falsy, another statement can be executed,
*/

// Chellenge that tell year is a leap year or not:-

// var year = 2020;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log("This " + year + " is a leap year.");
//         }
//         else {
//             console.log("This " + year + " isn't a leap year.");
//         }
//         console.log("This " + year + " isn't a leap year.");
//     } else {
//         console.log("This " + year + " is a leap year.");
//     }
//     console.log("This " + year + " is a leap year.");
// } else {
//     console.log("This " + year + " isn't a leap year.");
// }


// The truty & falsy values in Javascript?

// We have 5 falsy values in Javascript
// 0, "", undefined,null,NaN,false** is false away
// If all of these 5 falsy values is in the condition then it will follow the else statement.

if (score = 100) {
    // console.log("OMG, We loss the match 😒.");
} else {
    // console.log("Yay, We won the match 😁.");
}


// Switch statement in JS:- 

/*
Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
*/

// Without break statement
// Find areas of shapes by if ,esle if, ese statement:-

// var shape = "square";
// var PI = 3.142, l = 5, b = 6, r = 7;

// if (shape == "circle") {
//     console.log("Area of circle " + PI * r ** 2);
// } else if (shape == "triangle") {
//     console.log("Area of triangle " + (l * b) / 2);
// } else if(shape == "rectangle") {
//     console.log("Area of rectangle " + (l * b));
// }else{
//     console.log("Please enter valid shape.");
// }


// Find areas of shapes by switch statement:-

// var area = "square";
// var PI = 3.142, l = 5, b = 6, r = 7;

// switch (area) {
//     case 'circle':
//         console.log("Area of Circle " + PI * r ** 2);
//         break;
//     case 'triange':
//         console.log("Area of Triangle " + (l * b) / 2);
//         break;
//     case 'rectangle':
//         console.log("Area of Rectangle " + (l * b));
//         break;
//     default:
//         console.log("Please enter valid shape for area.");
// }

// Break in Switch:-
/*
Terminates the loop,switch,pr label statement and transfer program control to the statement following the terminated statement.
*/


// While loop in JS:-

/*
The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.
*/

// var n = 0;
// while (n <= 10) {
//     console.log(n);
//     n++;
// }


// do While loop in JS:-

/*
It do while it will executes atleast once ruther then your condition is false.
 */

// var n = 20;
// do {

//     console.log(n);
//     n++;
// } while (n <= 10);


// for loop in JS:-

// for (var num = 0; num <= 10; num++) {
//     console.log(num);
// }


// Table chellenge by for loop:-

// for(var count = 1;count<=10;count++){
//     var tableDg = 9;
//     console.log(tableDg + " * " + count + " = " + tableDg * count);
// }


    





