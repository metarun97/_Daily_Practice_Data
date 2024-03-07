// Arrays in Javascript:-

/*
When we use var, we can stored only one value at a time.
when we feel like storing multiple values in one variable the instead of var, we will use an Array.
In Javascript, we have an Array class, and array rae the prototype of this class.

Note=> 
1. In array first element is called (lower index,lower boundry.)
2. In array last element is called (upper index,upper boundry.)
3. Index numbers starts with 0 to and so on & last element is that array.lenth -1.
*/


// Treverse of an Array:-

/*
Navigation through an array.
If we wnat to get the single data at a time and also if we want to change the data.
If we want to check the lenght of the data.
*/

// If you want to check length of data.

// var myFriends = ["Harsh", "Hardik", "Dipesh", "Vedant"];
// console.log(myFriends[1]);


// for length elements of an Array.

// console.log(myFriends.length);
// console.log(myFriends[myFriends.length - 1]);


// for loop to navigate full array elements.

// for (var i = 0; i < myFriends.length; i++) {
// console.log(myFriends[i]);
// }


// After ES6 we have for ..in  and for ..of loop

// var myFriends = ["Harsh", "Hardik", "Dipesh", "Vedant"];

// for(let elements in myFriends){
//     console.log(elements);
// }

// Note =>  for in gives the index value of array elements.

// for(let elements of myFriends){
//     console.log(elements);
// }

// Note =>  for in gives the element of array.


// Array.prototype.forEach()
// Calls a fnction for each on the array.


// var myFriends = ["Harsh", "Hardik", "Dipesh", "Vedant"];

// By Anonymous function:-

// myFriends.forEach(function (element, index, array) {
// console.log(element + " Index : " + index + " " + array);
// })

// By Fat arrow function:-

// myFriends.forEach((element,index,array) => {
// console.log(element + " Index : " + index + " " + array);
// })


// Searching and filter in n Array:-

/*
Array.prototype.indexOf()

Note => Return the first (least)  index of an element within the array equal to an element, or -1 none i found. It search the element from the 0th index number.  
*/

// var myFriends = ["Harsh", "Hardik", "Dipesh", "Vedant", "Vikash", "Manish"];

// console.log(myFriends.indexOf("Harsh"));
// console.log(myFriends.indexOf("harsh"));
// console.log(myFriends.indexOf("Harsh", 2));
// console.log(myFriends.indexOf("Vikash", 2));

// Note =>  It search in forward direction.


// Array.prototype.lastIndexOf()

// console.log(myFriends.lastIndexOf("Harsh"));
// console.log(myFriends.lastIndexOf("harsh"));
// console.log(myFriends.lastIndexOf("Harsh", 2));
// console.log(myFriends.lastIndexOf("Hardik", 2));

// Note =>  It search in backward direction.


// Array.prototype.includes()

// var myFriends = ["Harsh", "Hardik", "Dipesh", "Vedant", "Harsh", "Vikash", "Manish"];

// console.log(myFriends.includes("Harsh"));
// console.log(myFriends.includes("harsh"));
// console.log(myFriends.includes("Harsh",2));


// Filteration in Array:-

const prices = [200, 300, 400, 500, 600, 700, 800, 1000];

// const findPrices = prices.find((value) => value < 400);
// const findPrices3 = prices.find((value) => value > 1000);
// const findPrices1 = prices.findIndex((value) => value > 400);
// const findPrices2 = prices.filter((value) => value < 400);

// console.log( " find method => " + findPrices);
// console.log( " findIndex method=> " +findPrices1);
// console.log( " filter method => " +findPrices2);
// console.log( " filter method => " + findPricescls3);


//  Array.prototype.sort()

// const months = ["January","February","September","December","April"];

// let sortMonths = months.sort();
// console.log(sortMonths);


// CRUD operation in Array:-

// Array.prototype.push() ==> Add element in last of an array.

// The Push() methods adds one or more elements to the end of an array and returns the new length of the array.

// const animals = ['pigs','goats','sheep'];
// const pushAnimals = animals.push("chicken");
// console.log(pushAnimals);
// console.log(animals);
// const popAnimals = animals.pop();
// console.log(animals);


// Array.prototype.unshift() ==> Add element in start of an array.

/*
The unshift() methods adds one or more elements to the begening of an array and return the new length of an array.
 */

// const animals = ['pigs','goats','sheep'];
// const addAnimal = animals.unshift("Chicken");u
// console.log(addAnimal);
// console.log(animals);



// Array.prototype.shift()  ==> Removes element in start of an array.

// const animals = ['pigs','goats','sheep'];
// const removeAnimal = animals.shift();
// console.log(removeAnimal);    // shifted element.
// console.log(animals);         // array result after shift method.


// Array.prototype.pop()  ==> Removes element in last of an array.

// const animals = ['pigs','goats','sheep'];

// const popAnimals = animals.pop();
// console.log(popAnimals);       // popped element.
// console.log(animals);          // array result after pop method.


// Chellenge time:-

// Array.prototype.splice()

/*
1. Add Dec at the end of an aaray?
2. What is the return value of splice method?
3. Update march to March (update)?
4. Delete June from an array?
*/

const months = ["January", "march", "April", "June", "July"];

// sol 1:-

// const newMonth = months.splice(5, 0, "December")
// const newMonth1 = months.splice(months.length, 0, "December")
// console.log(months);

// sol 2:-

// console.log(newMonth);

// sol 3:-

// const indexOfMonth = months.indexOf("march")
// const updateMonth = months.splice(1, 1, "March");
// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth, 1, "March");
//     console.log(months);
// }else{
//     console.log('No such Data found.');
// }


// sol 4:-

// const indexOfMonth = months.indexOf("march")
// if (indexOfMonth != -1) {
//     const updateMonth = months.splice(indexOfMonth, 1);
//     console.log(months);
//     console.log(updateMonth);
// } else {
//     console.log('Not found.');
// }


// Map(),Reduce(), filter() Methods:-

// Array.prototype.map()

/*
Let newArray = arr.map(callback(currrentValue[,index[,array]]){
return element for new Array,after executing something
}[,thisArg])


Returns a new array containing the result(as a boolean value) of calling a function on every element in this array as a boolean value.
*/

// const array = [1, 4, 9, 16, 25];

// num > 9

// let newArr = array.map((currElement, index, arr) => {
//     return currElement > 9;
// });
// console.log(array);
// console.log(newArr);


// let newArr = array.map((currElement, index, arr) => {
//     return `Index no = ${index} and the value is = ${currElement} belong to ${arr}`;
// });
// console.log(array);
// console.log(newArr);

// Note => It return new array without mutation the original array.


// Chellenge time:-

/*
1. Find the square root of each element in an array?
2. Multiply each element by 2 and return only those elements which are greter than 10?
*/

// sol1:-

// let arr = [25, 36, 49, 64, 81];

// let sqRoot = arr.map((currElemnet)=>{
//     return Math.sqrt(currElemnet);
// })
// console.log(sqRoot);


// let arr = [2, 3, 4, 6, 8];

// let arrGet = arr.map((currElement) => {
//     return ((currElement * 2));
// }).filter((currElement) => {
//     return currElement > 10;
// })
// console.log(arrGet);

// OR

// let arrGet = arr.map((currElement) => ((currElement * 2))).filter((currElement) => currElement > 10).reduce((accumulator,currElement)=> accumulator += currElement);
// console.log(arrGet);

// Note=> It is called the chaining of the methods.


// reduce method:-

/*
flatten an array means to convert the 3rd od 2rd array intoa single dimentional array.
 */


// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resultion in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// let arr = [5, 6, 2];
// let sum = arr.reduce((accumulator,curElem)=>{
// return accumulator += curElem; 
// })
// console.log(sum);

// Already stored a value for accumulator

// let arr = [5, 6, 2];
// let sum = arr.reduce((accumulator,curElem)=>{
// return accumulator += curElem; 
// },7)
// console.log(sum);


// How to fatten an array 
// Converting 2nd and 3rd array into one dimentional array.

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8']
// ];

// let flatArr = arr.reduce((accum, currVal) => {
//     return accum.concat(currVal);
// })
// console.log(flatArr);