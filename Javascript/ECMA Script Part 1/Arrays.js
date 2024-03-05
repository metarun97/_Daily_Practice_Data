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

var prices = [200, 300, 400, 500, 600, 700, 800, 1000];

// const findPrices = prices.find((value) => value < 400);
// const findPrices1 = prices.findIndex((value) => value > 400);
// const findPrices2 = prices.filter((value) => value < 400);

// console.log( " find method => " + findPrices);
// console.log( " findIndex method=> " +findPrices1);
// console.log( " filter method => " +findPrices2);