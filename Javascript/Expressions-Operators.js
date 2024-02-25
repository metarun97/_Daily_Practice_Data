// Operators in JavaScript:-

// Example:-

// console.log(20 + 5);

/*
=> In above's example 20 and 5 both are Operands and + is a Operator.
=> Combination of operand and operator is called ab Expression.

=> Types of Operators:-

1. Assigenment Operators
2. Arithmatic Operators
3. Comparison Operators
4. Logical Operators
5. String Operators
6. Conditional (turnary) Operators
*/


// Assigenment Operators:-

/*
An assignment operator assigns a value to its left operand.
based on the value of its right operand the simple assignment operator is equal (=).
*/


var x = 5;
var y = 5;

// console.log("Is both x & y is equal or not: "+ x == y); ❌
// console.log(`Is both x & y is equal or not: ${x == y}`);


// Arithmatic Operators:-

/*
 An arithmatic operator takes numeric values 
 (Either literals or variables) as their operandsand
 return a single numerical value. 
*/


// console.log(3 + 3);
// console.log(10 - 5);
// console.log(20 / 5);
// console.log(5 * 6);
// console.log("Remainer operator " + 81 % 8);   // Modulous Op.
// console.log(5**3);                            // Exponential Op.


/*
Increment and Decrement Operators in JS:-

Operator: [x++ (postfix)] or [++x(prefix)]

If used postfix, with operator after operand (for example, x++),
the increment operator increments and returns the value before incrementing. 

If used prefix, with operator before operand (for example, ++x),
the increment operator increment and returns the value after incrementing. 
*/

// Postfix Examples:-

var num = 5;
let newNum = num++;
// console.log(num)
// console.log(newNum); 

// var num1 = 2;
// let newNum1 = num1--;
// console.log(num1);
// console.log(newNum1);


// Prefix Examples:-

// var num2 = 10;
// let newNum2 = ++num2;
// console.log(num2)
// console.log(newNum2); 

// var num3 = 8;
// let newNum3 = --num3;
// console.log(num3);
// console.log(newNum3);


// Comparison Operators:-

/*
A comparison operator compare it's operands and returns a logical values on wether the comparison true.
 */

// Examples:-

var a = 30;
var b = 10;
// console.log(a == b);
// console.log(a != b);
// console.log(a > b);
// console.log(a >= b);
// console.log(a < b);
// console.log(a <= b);


// Logical Operators:-

/*
Logical operators are typically used with Boolean (logical) values;
when they are, threy return a Boolean value.
*/

var dg1 = 5;
var dg2 = -2;


// logical AND (&&):-
/*
The logical AND (&&) operator (logical conjunction) for a set of operands is true and only if all of its operands are true.
*/

// Example:-
// console.log(dg1 > dg2 && dg2 > 0);

// logical OR (||):-

/*
The logical or (||) operator (logical conjunction) for a set of operands is true if only one  or more of its operands are true.
*/

// Example:-
// console.log(dg1 > dg2 || dg2 > 0);

// logical NOT (!):-

/*
The logical not (!) operator (logical complement, negation) takes truth to falsity and vice versa.
*/

// console.log(!(a > 0 || b < 0));

// console.log(!false);
// console.log(!true);


// String Operators:-

/*
The concatination operator (+) concatination two string values together, returning another string that is the union of the two operand strings.
*/

// console.log("Helllo World");
// console.log("Helllo" + " World");


// Chellenges for Interview:-

// 1. Output of 3**3...?

// console.log(3 ** 3);

// 2. Output of when we add a number with string...?

// console.log("Hello" + 6);

// 3. Swaping variable values by thir variable...?

var n1 = 5;
var n2 = 10;
var n3 = n2;  // So now, n3 = 10
n2 = n1;
n1 = n3;
// console.log(n1);
// console.log(n2);

// 4. Swaping variables values without third variable...?

var n4 = 10;
var n5 = 5;
n4 = n4 + n5;  // n4 = 15
n5 = n4 -n5;   // n5 = 10;
n4 = n4 - n5;  // n4 = 5;
// console.log(n4);
// console.log(n5);
 

// Interview question:-

// Difference between == or === ?

/*
In == it will checkig the value only but in === it will check the value as well as it's datatype also.
*/

var numOne = 5;
var numTwo = "5";
// console.log(numOne == numTwo);
// console.log(numOne === numTwo);


// Conditional turnary Operators:-

/*
The conditional (turnary) operator is the only Js Operatior only operator that takes three operands & It is the if else shorthand version.
*/

var age = 18;
// (age >= 18) ? "You vote" : "You can't vote";
// console.log((age >= 18) ? "You can vote" : "You can't vote");
