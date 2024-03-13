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

// const myBioData = 'I am tarun Upadhyay';

// let sData = myBioData.search("tarun");   // 5
// let sData1 = myBioData.search("Tarun");  // -1
// console.log(sData);
// console.log(sData1);


// Extracting String parts:-

// There are 3 methods for extracting a part of a String.

/*
1. slice(start,end)
2. substring(start,end)
3. substr(start,lenght)
*/


// The slice() method:-

/*
slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: the start position,and the end position(end not included).

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

Note => The original array will not be changed.

*/

// var str = "Apple, Banana, Kiwi";
// let res = str.slice(0, 4);
// let res1 = str.slice(7, -2);
// let res2 = str.slice(7);
// console.log(res);
// console.log(res1);
// console.log(res2);



// Challenge Time:-

// Display only 280characters of a string like the one used in Twitter..?
// one used in Twitter..?

/*
let myTweets = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sapiente impedit quia error magnam voluptas ducimus, a hic molestiae sed minus?Quasi nostrum sed facilis omnis quod veritatis nisi dolorem dolores reprehenderit laborum?Aliquid adipisci dolores vitae saepe commodi, eum odit eligendi quaerat dolorem inventore cupiditate explicabo blanditiis rerum facere ex exercitationem iure maxime harum beatae.Minima a iure omnis recusandae vitae doloremque accusantium odio explicabo quasi animi.Doloribus, nulla! Labore animi, consectetur voluptatibus adipisci quo cupiditate rerum?Culpa soluta commodi laboriosam velit quibusdam voluptas?Dolor commodi quis ipsam eaque id debitis molestiae aliquid minima natus delectus corrupti perferendis suscipit corporis eligendi vero illo eos quisquam maiores, illum velit, voluptas aspernatur, nobis porro ipsa.Porro, adipisci Impedit sit, porro eveniet distinctio perferendis accusantium labore minus, consequuntur ad commodi sint temporibus quos cupiditate sequi, rem facilis voluptatibus debitis deleniti quae molestias amet iusto iure! Eum tempora sunt cumque veritatis! Atque sint cum iste aut dolorum distinctio rerum at reprehenderit, asperiores, minus eveniet.Labore accusamus eligendi corrupti expedita sint laudantium id, ab voluptatem sunt atque iure esse molestias temporibus aperiam cum necessitatibus quod, natus quae ad.Earum odio non, delectus est, autem nisi quibusdam qui odit laudantium voluptatibus voluptatem et at asperiores dignissimos consequatur ipsam accusamus distinctio suscipit quod placeat magnam reprehenderit voluptatum! Mollitia, ratione atque corrupti obcaecati omnis corporis sequi quisquam optio accusantium maxime explicabo reprehenderit! Enim consectetur ea molestiae, incidunt, veniam minima distinctio eum repellat aut nihil nisi sed, quam hic sit dolorem debitis quasi voluptatem blanditiis.Deleniti, accusamus dolores incidunt veritatis assumenda deserunt magnam a temporibus, aperiam ex, quos unde repellat.Itaque quia molestias debitis ipsa iure.Aliquid iusto cum repellendus impedit beatae libero, autem optio odit iure officiis adipisci, laudantium labore quaerat nam pariatur quo modi illo consequuntur commodi, vel id voluptasVero aliquam consectetur saepe libero nulla consequatur blanditiis voluptas assumenda expedita voluptates incidunt sequi, nostrum asperiores facilis eaque.Perferendis dicta nesciunt voluptates blanditiis necessitatibus consequatur quasi enim, hic fugiat, itaque fuga molestiae ut magni odio dolorum rem quis corrupti.Quia sapiente dolor tenetur sit eos velit ad! Consequatur, accusantium exercitationem! Repellat obcaecati nemo facilis perferendis natus odit quasi reiciendis aut suscipit iure officia, ipsa facere ad?Necessitatibus alias eos excepturi commodi dolore cumque voluptate repellendus! Quisquam similique, incidunt accusantium suscipit dolore blanditiis error excepturi?Quae fugit placeat laboriosam, nulla et amet numquam quod ex sunt debitis accusantium qui rerum?Delectus aliquid nemo, nisi mollitia enim pariatur! Ducimus.";
*/

// let tweetRes = myTweets.slice(0, 280);
// console.log(tweetRes);
// console.log(tweetRes.length);


// The sunstring() method:-

// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes. 
// If we give negative value then the characters are counted from 0th position.


// var str = "Apple, Banana, Kiwi";
// let res = str.substring(0, 4);     // Appl
// let res1 = str.substring(7, -2);   // Apple, 
// let res2 = str.substring(8, -2);   // Apple, B
// console.log(res);
// console.log(res1);
// console.log(res2);


// The substr() method:-

// substr() is similar to slice().
// The difference is that the second perameter specifies the length of the extracted part.


// var str = "Apple, Banana, Kiwi";
// let res = str.substr(0, 4);   // Appl
// let res1= str.substr(7, -2);  // empty 
// let res2= str.substr(-4);     // Kiwi 
// console.log(res);
// console.log(res1);
// console.log(res2);


// Replacing Strng Content:-

// String.prototype.replace(searchFor,replaceWith)

// The replace() method replaces a specified value with another value in a string.

// Point to remember:-
/*
1. The replace() method does not change the the string it is called on. It returns a new string.
2. By default, the replace() method replaces only the first match. 
3. By default, the replace() method is case sensitive.
Writing Vinod (with upper-case) will not work.
*/


// let myBioData = "I am tarun Upadhyay tarun";

// let replaceData = myBioData.replace("tarun", "Tarun");
// let replaceData1 = myBioData.replace("Tarun", "TARUN");
// console.log(replaceData);
// console.log(replaceData1);


// Extracting String Characters:-

// There are 3 methods for extractiong string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// CharAt() method
// The charAt() method returns the character at a specified index (position) in a string.

// let str = 'Hello World';
// console.log(str.charAt(0));  // H


// The charCodeAt() method:-

// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code
// (an inetger between 0 and 65535).
// The Unucode Standard provived a unique number for every character, no matter the platform, device, application, or language. UTF-8 is a popular Unicode encoding which has 88-bit code units. 

// let str = 'Hello World';
// console.log(str.charCodeAt(0));  // for H unicode is => 72
// console.log(str.charCodeAt(2));  // for l unicode is => 108


// Challenge time:-

// Return the Unicode of the last character in a string.

// let str = "HELLO WORLD";
// let lastChar = str.length-1;
// console.log(str.charCodeAt(lastChar));


// Property Access
// ECMAScript 5(2009) allows property access [ ] on strings.

// var str = "HELLO WORLD";
// console.log(str[0]);   // H
// console.log(str[2]);   // L 


// Other useful methods:-

// let myName = "taRun upadHyay";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());


// The concat() Method
// concat() joins two or more strings

// let fName = "Tarun";
// let lName = "Upadhyay";
// console.log(fName.concat(lName));      // TarunUpadhyay
// console.log(fName.concat(" ",lName));  // Tarun Upadhyay


// String.trim() method:-
// The trim() method removes white space from both sides of a string.

// var str = "       Hello World        ";
// console.log(str.trim());


// Converting a String to an Array
// A string can be converted to an array with the split() method.

// var text = "a, b,c, d,e";

// console.log(text.split(","));
// console.log(text.split(" "));
// console.log(text.split("|"));

