// Math Object in Javascript:-

// The javascript Math Object allows you to perform mathematical tasks on numbers.

// Math.PI property gives the value of PI in dacimal.

// console.log(Math.PI);        // 3.141592653589793

// Math.round() find the round of number of that number. 

// let n = 5.52455;
// let n1 = 5.32455;
// console.log(Math.round(n));         // 6
// console.log(Math.round(n1));        // 5

// Math.pow() find the power of numbers 1st perameter the digit and 2nd one is power of it. 

// let n2 = 6;
// console.log(Math.pow(n2, 2));       // 36
// console.log(Math.pow(5, 2));        // 25


// Math.sqrt() find the square root of numbers. 

// let n3 = 25;
// console.log(Math.sqrt(n3));            // 5
// console.log(Math.sqrt(49));            // 7
// console.log(Math.sqrt(68));            // 8.246211251235321

// Math.abs()
// Math.abs() returns the absolute (positive) value of x.

// console.log(Math.abs(-55));               // 55
// console.log(Math.abs(-55.5));             // 55.5
// console.log(Math.abs(-955));              // 955
// console.log(Math.abs(3-9));               // 6

// Math.ceil();
// Math.ceil(x) returns the value of x rounded up to its nearest integers.

// console.log(Math.ceil(4.4));                 // 5
// console.log(Math.ceil(4.6));                 // 5
// console.log(Math.ceil(99.1));                // 100

// Math.floor();
// Math.floor(x) returns the value of x rounded down to its nearest integers.

// console.log(Math.floor(4.5));
// console.log(Math.floor(6.8));
// console.log(Math.floor(99.8));

// Math.min()
// Math.min() can be used to find lowest value in a list of argument.

// console.log(Math.min(0, 150, 30, 20, -8, -200));      // -200

// Math.max()
// Math.max() can be used to find highest value in a list of argument.

// console.log(Math.max(0, 150, 30, 20, -8, -200));      // 150

// Math.random()
// Math.random() returns a random number 0 (inclusive), and 1 (exclusive).

// console.log(Math.random());                 // number between 0 to 1(not whole 1)
// console.log(Math.floor(Math.random()*10));  // number 0 to 9


// Math.trunc()
// Math.trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

// Practice Time

// If the argument is a positive number,Math.trunc() is equivalent to Math.floor(),otherwise Math.trunc() is equivalent to Math.ceil().

// console.log(Math.trunc(4.5));
// console.log(Math.floor(4.5));

// console.log(Math.trunc(4.5));
// console.log(Math.ceil(4.5));
