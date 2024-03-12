// STRINGS IN JAVASCRIPT:-

/*
1. Escape character
2. finding a string in a string
3. Searching for a String in a string
4. Extracting String parts 
5. Replacing string parts
6. Extracting string characters
7. Other useful methods
*/


// How to find the lenght of a string
// Strings.prototype.length
// Reflects the lenght of the string

// length property of string:-

// let name = "Tarun";
// console.log(name.length);


// Escape Character:-

// let anySentance = "We are the so-called \"Vikings\" from the north.";
//  console.log(anySentance);

// If you don't want to mess,simply use the alternate quotes.

// let anySentance = 'We are the so-called "Vikings" from the north.';
//  console.log(anySentance);


// Finding string in a string:-

/*
String.prototype.indexOf(searchValue [, fromIndex])
he indexOf() method returns the index of (thr position of) the first
occurence of a searchValue, or -1 if not found.
Note => It check forward direction.
*/

// const myBioData = 'I am Tarun Upadhyay';

// console.log(myBioData.indexOf("Tarun"));  // 5
// console.log(myBioData.indexOf("tarun"));  // -1
// console.log(myBioData.indexOf("a", 7));   // 13


/*
String.prototype.lastIndexOf(searchValue [, fromIndex])
he lastIndexOf() method returns the index of (thr position of) the first
occurence of a searchValue, or -1 if not found.
Note => It check backward direction.
*/

// const myBioData = 'I am Tarun Upadhyay';

// console.log(myBioData.lastIndexOf("Tarun"));  // 5
// console.log(myBioData.lastIndexOf("tarun"));  // -1
// console.log(myBioData.lastIndexOf("a", 4));   // 2


// Searching for a String in a String:-

/*
String.prototype.search(regex)
The search() method searches a string for a specified
value and returns the position of the match

Note =>  This method cannot takes a second start position argument.
*/

const myBioData = 'I am tarun Upadhyay'; 

// let sData = myBioData.search("tarun");   // 5
// let sData1 = myBioData.search("Tarun");  // -1
// console.log(sData);
// console.log(sData1);


